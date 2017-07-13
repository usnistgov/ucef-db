[
    "__OBJECTS__": {
	// this is where the actual objects would be stored, the
	// subsequent lists at the top level would only contain GUID
	// references.  This is the main object storage used by code
	// accessing object members.  object members which point to
	// other objects point using the GUID and VERSION, which they
	// can look up in this dictionary.  The other lists that exist
	// below are merely for querying the currently available
	// objects (by GUID) of a certain type
	"<GUID>": {
	    "VERSION": {
		"ACTUAL OBJECT HERE"
		// for clarity, the object structures are shown below
		// in their respective lists instead of here
	    },
	},
    },
    // These top level lists below show the structure, but again would
    // only contain GUID/VERSION references
    "projects": [
	// which projects are currently part of this deployment?
	// incomplete
	{
	    "name": ""
	    "GUID": "",
	    "roots": [
		// these are the root federates visible for the
		// current project, they are provided to the user for
		// selecting experiments, configuring, or navigating
		// the project.
		{
		    "GUID": "",
		    "VERSION": ""
		},
	    ],
	},
    ],
    "Users": [
	// Which users are currently part of this deployment?
	// incomplete
	{
	    "GUID": "",
	    "name": "",
	    "organizations": [
		{
		    "name": "",
		    "roles": [
		    ],
		    "privileges": [
		    ],
		    "authentication": [
		    ],
		},
	    ],
	},
    ],
    "organizations": [
	// which organizations are currently part of this deployment?
	// incomplete
	{
	    "name": "",
	    "GUID": "",
	    "projects": [
	    ],
	},
    ],
    "Federates": [
	{
	    // Federates are structured differently than in previous
	    // C2WT; There is no such thing as a *Federation* anymore,
	    // since we want to support heirarchical federations and
	    // federations as federates, we have removed federations
	    // as first class concepts and restructured federates to
	    // be a tree structure which can be arbitrarily deep
	    // (i.e. federates can be nested arbitrarily within other
	    // federates.

	    // To support this type of collection, we must still be
	    // able to quickly figure out which federates are
	    // deployable, what it means to deploy them, and how to
	    // properly separate federates

	    // To do this, we have added new attributes to federates
	    // which describe how to deploy it (and whether or not it
	    // is deployable) and we provide a list to what are the
	    // roots of various federate trees (which would have
	    // previously been called federations).  Note that there
	    // may be sub-federations which are not directly
	    // deployable, it is up to us to decide if we want this to
	    // be the case or if all sub-federations are deployable
	    // and therefore should exist in the top-level list
	    "name": "Community1DemandController",
	    "documentation": "",
	    "Docker Image": "",
	    "repository url": "http://github.com/finger563/gridlabd-federates",
	    "type": {
		// this is a classic style federate completely
		// contained in the current heirarchy
		"directly deployable",
		// This federate exists as a proxy for one or more
		// federates
		"deploy by proxy",
		// children may be deployable
		"not directly deployable"
	    },
	    "federates": [
		// reference objects to federates specifying which
		// version of which federate exists as a child to the
		// current federate.
		{
		    "GUID": "",
		    "VERSIONS": "^2.0.0"
		}
	    ],
	    "interactions": [
		// reference objects to interactions specifying which
		// version of which interaction this federate uses and
		// whether it is an input or output
		{
		    "guid": "",
		    "version": "",
		    "direction": "",
		},
	    ],
	    "parameters": [
		{
		    // giving parameters GUIDS is probably not a good
		    // idea; they might have to be entirely local
		    "guid": "",
		    "version": "",
		    "direction": "",
		},
	    ],
	    "coas": [
		// Because federates are heirarchical, all federates
		// may have coas associated with them now; but we can
		// further restrict this in the UI if we choose
		{
		    "GUID": "",
		    "VERSIONS": "^2.0.0"
		}
	    ],
	    "configuration": {
		// need type info here for the configuration data
		"step size": "",
		"files": [
		    "Community1DemandController.config"
		]
	    },
	    "last build": {
		// Reference to a build information object for this
		// federate.  Not all federates can be built.
		{
		    "GUID": "",
		}
	    },
	    "experiments": [
		// Reference to experiments to which this federate
		// belongs
		{
		    "GUID": "",
		    "VERSIONS": "^2.0.0"
		}
	    ],
	},
    ],
    "coas": [
	// Structure of a COA
	{
	    "name": "",
	    "GUID": "",
	    "objects": [
		{
		    "name": "",
		    "parameters": [
		    ],
		},
	    ],
	    "parameters": [
	    ],
	},
    ],
    "Experiments": [
	// Structure of an experiment
	{
	    "name": "TESDemo2016Exp1",
	    "GUID": "",
	    "parameters": [
	    ],
	    "coas": [
	    ],
	    "federates": [
	    ],
	    "executions": [
		// Reference to execution objects for any scheduled or
		// running instance of this experiment
	    ],
	},
    ],
    "Interactions": [
	// structure of an interaction
	{
	    "name": "",
	    "GUID": "",
	    "parameters": [
	    ],
	},
    ],
    "Parameters": [
	// structure of a parameter
	{
	    "name": "",
	    "GUID": "",
	    "type": "",
	    "editable": false,
	    "default value": "",
	},
    ],
    "builds": [
	// Build information created by the build system and checked
	// by the execution engine
	{
	    "GUID": "",
	    "time": "",
	    "user": "",
	    "project": "",
	    "configuration": {
		"federate": "",
	    },
	    "status": {
	    },
	    "results": {
	    }
	},
    ],
    "executions": [
	// What are the currently running or scheduled executions?
	{
	    "name": "",
	    "GUID": "",
	    "time": "",
	    "user": "",
	    "experiment": "",
	    "configuration": [
	    ],
	    "status": {
	    },
	    "results": [
	    ],
	},
    ],
    "Docker Images": [
	// Contains the info for the docker images needed for this
	// project.  Federates may share docker image information?
	{
	    "GUID": "",
	    "name": "",
	    "repository url": "",
	    "tag": "",
	},
    ],
]
