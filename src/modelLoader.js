// this model loader provides a base implementation to transform
// webgme objects into pure json objects where the root node becomes
// the 'model', where it and each of its sub objects have the form:
/*
{
    'name': '',
    'path': '', // path of the webgme node for loading later
    'type': '', // name of the base class of this object
    'parentPath': '', // path of the webgme node of the parent
    'childPaths': [], // paths of the webgme nodes of the children
    'attributes': {}, // dictionary of attr.name -> attr.value
    'pointers': {}, // dictionary of pointer.name -> pointer.path
    'sets': {}, // dictionary of set.name -> array of paths

    // additionally, all objects are transformed such that the
    // attr.name, pointer.name, and set.name become keys into the
    // object whose value is the value/object

    // finally, all children are added in separate lists organized by
    // their base / meta type, where the key to the list is
    // "<base-type>_list"
}

Finally, the top level object contains a dictionary which maps path ->
object, for use in easily getting an object given only it's webgme
path, e.g. using the parentPath of an object to get the actual parent
object.

The two functions which produce this data strucuture are 'loadModel' and
'resolvePointers' (which is called internally by loadModel).

'processModel' is called within 'loadModel' to provide any
transformations from this representation to whatever representation
works best for the developer (e.g. the DB interface for CPSWT)

An example of processModel can be found here:
https://github.com/rosmod/webgme-rosmod/blob/master/src/common/modelLoader.js#L130
*/

define(['q'], function(Q) {
    'use strict';
    return {
	// DO NOT MODIFY THIS FUNCTION (AT LEAST NOT MUCH)

	// For this use, the model node that is the root of the tree
	// to be loaded should be of type 'RootFolder' in the CPSWT
	// Meta

	//   core: webGME core object (used in plugins)
	//   modelNode: webGME node which is the root of the tree to
	//              be loaded
	loadModel: function(core, modelNode) {
	    var self = this;
	    self.core = core;  // so that other functions can use core if they want
	    var modelObjects = [];   // used to store the objects for handling pointers

	    var nodeName = core.getAttribute(modelNode, 'name'),
	    nodePath = core.getPath(modelNode),
	    nodeType = core.getAttribute(core.getBaseType(modelNode), 'name'),
	    parentPath = core.getPath(core.getParent(modelNode)),
	    attributes = core.getAttributeNames(modelNode),
	    childPaths = core.getChildrenPaths(modelNode),
	    pointers = core.getPointerNames(modelNode),
	    sets = core.getSetNames(modelNode);

	    self.model = {
		name: nodeName,
		path: nodePath,
		type: nodeType,
		parentPath: parentPath,
		childPaths: childPaths,
		attributes: {},
		pointers: {},
		sets: {},
		pathDict: {}  // for storing a path->obj dict for all objects in model
	    };
	    attributes.map(function(attribute) {
		var val = core.getAttribute(modelNode, attribute);
		self.model.attributes[attribute] = val;
		self.model[attribute] = val;
	    });
	    pointers.map(function(pointer) {
		self.model.pointers[pointer] = core.getPointerPath(modelNode, pointer);
	    });
	    sets.map(function(set) {
		self.model.sets[set] = core.getMemberPaths(modelNode, set);
	    });
	    modelObjects.push(self.model);
	    return core.loadSubTree(modelNode)
		.then(function(nodes) {
		    nodes.map(function(node) {
			nodeName = core.getAttribute(node, 'name');
			nodePath = core.getPath(node);
			nodeType = core.getAttribute(core.getBaseType(node), 'name');
			parentPath = core.getPath(core.getParent(node));
			attributes = core.getAttributeNames(node);
			childPaths = core.getChildrenPaths(node);
			pointers = core.getPointerNames(node);
			sets = core.getSetNames(node);
			var nodeObj = {
			    name: nodeName,
			    path: nodePath,
			    type: nodeType,
			    parentPath: parentPath,
			    childPaths: childPaths,
			    attributes: {},
			    pointers: {},
			    sets: {}
			};
			attributes.map(function(attribute) {
			    var val = core.getAttribute(node, attribute);
			    nodeObj.attributes[attribute] = val;
			    nodeObj[attribute] = val;
			});
			pointers.map(function(pointer) {
			    nodeObj.pointers[pointer] = core.getPointerPath(node, pointer);
			});
			sets.map(function(set) {
			    nodeObj.sets[set] = core.getMemberPaths(node, set);
			});
			modelObjects.push(nodeObj);
			self.model.pathDict[nodeObj.path] = nodeObj;
		    });
		    self.resolvePointers(modelObjects);
		    self.processModel(self.model);
		    return self.model;
		});
	},
	// probably also don't want to modify this function
	resolvePointers: function(modelObjects) {
	    modelObjects.map(function(obj) {
		// Can't follow parent path: would lead to circular data structure (not stringifiable)
		// follow children paths, these will always have been loaded
		obj.childPaths.map(function(childPath) {
		    var dst = modelObjects.filter(function (c) { 
			return c.path == childPath; 
		    })[0];
		    if (dst) {
			var key = dst.type + '_list';
			if (!obj[key]) {
			    obj[key] = [];
			}
			obj[key].push(dst);
		    }
		});
		// follow pointer paths, these may not always be loaded!
		for (var pointer in obj.pointers) {
		    var path = obj.pointers[pointer];
		    var dst = modelObjects.filter(function (c) { 
			return c.path == path;
		    })[0];
		    if (dst)
			obj[pointer] = dst;
		    else if (pointer != 'base' && path != null) 
			throw new String(obj.name + ' has pointer ' +pointer+ ' to object not in the tree!');
		    /* for CPSWT we are probably OK with null pointers
		    else if (path == null) 
			throw new String(obj.name + ' has null pointer ' + pointer);
		    */
		}
		// follow set paths, these may not always be loaded!
		for (var set in obj.sets) {
		    var paths = obj.sets[set];
		    var dsts = [];
		    paths.map(function(path) {
			var dst = modelObjects.filter(function (c) {
			    return c.path == path;
			})[0];
			if (dst)
			    dsts.push(dst);
			else if (path != null)
			    throw new String(obj.name + ' has set '+set+' containing pointer to object not in tree!');
			else
			    throw new String(obj.name + ' has set '+set+' containing null pointer!'); // shouldn't be possible!
		    });
		    obj[set] = dsts;
		}
	    });
	},
	// ALL THE FUNCTIONS ABOVE HERE SHOULD NOT BE MODIFIED (AT
	// LEAST NOT MUCH)
	// ---------------------------------------------------------
	// ALL THE FUNCTIONS BELOW HERE MUST BE MODIFIED / COMPLETED
	processModel: function(model) {
	    // THIS FUNCTION HANDLES CREATION OF SOME CONVENIENCE MEMBERS
	    // FOR SELECT OBJECTS IN THE MODEL

	    // Need to create:
	    //  - GUIDs for all objects (for now)
	    //    - will be handled by DB intf
	    //  - Versions for relevant objects (for now)
	    //    - will be handled by DB intf
	    //  - __OBJECTS__ list
	    //    - will be handled by DB intf
	    //  - <type> lists of GUID references
	    //    - will be handled by DB intf

	    //  - dummy users and organizations?
	    //    - will be handled by other subsystems
	    //  - dummmy docker images and repositories?
	    //    - will be handled by other subsystems

	    // Need to convert:
	    //  - federations to heirarchical federates
	    //    - actually has to be done
	    //  - all objects to __OBJECTS__ notation from example.js
	    //    - actually has to be done
	    //  - poitners to GUID references
	    //    - will have to see exactly how this works, where we
	    //      really get GUIDs from

	    // for testing, need the structure that would be in the database
	    initDB(model);

	    buildFederateTree(model);
	    extractParameters(model);
	    extractInteractions(model);
	    extractCOAs(model);
	    extractExperiments(model);
	    extractConfigurations(model);

	    // for testing since we will need these other objects
	    buildDummyObjects(model);

	    // now that we've transformed the model, get rid of the
	    // original data
	    model = model._DB;
	},

	initDB: function(model) {
	    model._DB = [
		"__OBJECTS__": {},
		"projects": [],
		"Users": [],
		"organizations": [],
		"Federates": [],
		"coas": [],
		"Experiments": [],
		"Interactions": [],
		"Parameters": [],
		"repositories": [],
		"builds": [],
		"executions": [],
		"Docker Images": []
	    ]
	},

	buildFederateTree: function(model) {
	    var self = this;
	    // to iterate through the model we need to know exactly
	    // what the META is
	    
	    // iterate through all the FOM Sheets in the root node
	    model.FOMSheet_list.map(function(FOMSheetInfo) {
		// Need to go through all children of the FOMSheet
		// which are federates, should refactor a little so
		// that there is just a single Federate_list which
		// contains all types of federates.  will require some
		// further processing.
		fedList = []
		fedList = fedList.concat(FOMSheetInfo.Federate_list);
		fedList = fedList.concat(FOMSheetInfo.CPNFederate_list);
		fedList = fedList.concat(FOMSheetInfo.OmnetFederate_list);
		fedList = fedList.concat(FOMSheetInfo.MapperFederate_list);
		fedList = fedList.concat(FOMSheetInfo.JavaFederate_list);
		fedList = fedList.concat(FOMSheetInfo.CppFederate_list);
		fedList = fedList.concat(FOMSheetInfo.GridlabDFederate_list);
		fedList.map(function(fedInfo) {
		    newObj = transformFederate(fedInfo);
		    newObj.GUID = generateGUID;
		    newObj.version = generateVersion();
		});
	    });
	},

	transformFederate: function(obj) {
	    // converts from the generic representation we have here
	    // to the specific representation given in example.js
	},

	extractParameters: function(model) {
	},

	extractInteractions: function(model) {
	},

	extractCOAs: function(model) {
	},

	extractExperiments: function(model) {
	},

	extractConfigurations: function(model) {
	},

	buildDummyObjects: function(model) {
	},

	generateGUID: function() {
	    return 0; // replace
	},

	generateVersion: function(object) {
	    return object.version + '.1';
	},
    }
});
