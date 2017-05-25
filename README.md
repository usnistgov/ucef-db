# cpswt-db 

Covers the design of the database and interface format
between all of the subsystems of CPSWT

In this repository is the design of the database entries for the
federates, their versions, projects, organizations, users, builds,
experiments, interactions, parameters, coas, executions and docker
images. These database entries provide the storage and query formats
used by the modeling subsystem (WebGME), build subsystem, experiemnt
configuration and management subsystem, execution subsystem, and
vulcan project management and collaboration subsystem.

The database will be surrounded by a interface which restricts access
to the repository and proivdes convenience methods for creating and
sharing data within and between projects. The interface's methods are
also defined in this repository.

## Unresolved Questions

1. How will data (not attributes) be passed around between the
   subsystems and the database? Esp. for larger data like filesystems
   (folders/files) and binary executables? Will the database support
   things like WebGME's blob client? This will be important because we
   have (currently) the WebGME/Modeling subsystem creating the
   artifacts (e.g. code for a federate) and then requesting that those
   artifacts be placed into a repository (by the repository subsystem)
   and built (by the build subsystem). Perhaps the code generation
   should be tied as a plug-in to the filesystem / repository
   subsystem which is actually responsible for managing the files and
   their versioning? Do the generators require extra data which is
   currently not in the database?  What is a good architecture for
   managing these subsystems in a way that keeps them loosely coupled
   but provides this kind of capacity?

1. How do we properly link databases together when objects are being
   shared across projects? Where is the actual data residing and how
   can we keep synchronization and copy issues to a minimum? Do we
   need one single centralized database? If so, we would need to have
   very fine-grained filters to ensure that the subsystems don't get
   other projects' data. Conversely, how many subsystem instances will
   we have?  Do we need to separate out and have instances of all the
   subsystems for each of the projects/users/organizations?
   
1. How do we manage authentication between many different shared
   repositories? Esp. since users need access to this authentication
   scheme so that they can clone and push to these repositories to
   make their changes.

1. How reliant are we / should we be on WebGME plugins right now for
   managing many of the aspects of code generation / building?
   Currently these steps happen through pre-programmed plug-ins inside
   WebGME context (or are triggered by these plug-ins).

## Database Design

The design of the database can be found in
[example](./src/example.js), which has been copied below for
ease of reading / reference.

The main entities that exist in the database are:
  * Projects
  * Users
  * Organizations
  * Federates
  * Interactions
  * Parameters
  * COAs
  * Builds
  * Experiments
  * Executions
  * Docker Images
  
Every object in the database is referenced by a unique ID (GUID). This
GUID is the primary method by which an object is indexed for look up
and storage. No subsystem but the databased and its interface are allowed
to create GUIDs.

For the relevant entities, the versions of the entity are tracked and
stored as separate objects.  Other objects which are compatible with
only specific versions of those entities can specify their references
using version matching of the form `^2.X.X`, to specify a range within
the major version `2`, or can reference a specific version. Note that
not all entities within the database require versioning or multiple
versions. The versions of an object are all stored under the same
GUID, to maintain consistency; the versions differ only in their
actual data and the verion numbers.

```javascript
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
		{
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
	"repositories": [
		// Location of repositories and their credentials for the code
		{
			"name": "",
			"GUID": "",
			"users": [],
			"location": "",
			"federate": "",
		},
	]
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
```

## Database Interface

The interface wraps the database for interfacing with the subsystems. No
other processes are allowed to write directly to the database, all
their information must go through the interface for conversion and
sanitization. The interface is responsible with generation of the
GUIDs/UUIDs used to identify objects throughout all projects. The
subsystems request creation of new objects, transfer of objects, or
retrieval of objects based on GUIDs.

The interface will provide the requested object data in a consistent
manner, formatted as JSON. The subsystems which receive these data can
select the relevant keys and data they require from the object
collection data. Finally, this JSON specification and database
interface allow the subsystems to be relatively independent of each
other, and not be strongly coupled to the other subsystems; i.e. two
subsystems which must pass data between each other or trigger each
other are not tightly coupled and do not need to specify and implement
their own interfacing logic; instead they communicate with the
database and request that the database trigger them when relevant data
has been updated. Using this interaction paradigm, the subsystems can
be swapped out transparently to the rest of the system if for instance
the build or execution subsystems were needing to be replaced.

Functions:
  * Object data retrieval
  * Object data creation
  * Object data update
  * Object data removal
  * Register for notification with filters
  * Remove notification registration
  * External entity (subsystem) notification upon data event filters

Generated Events:
  * A new object of a specific type has been created
  * An existing object of a specific type has been updated
  * An existing object of a specific type has been removed

## Project Management Subsystem

This subsystem is responsible for creating the CPSWT projects, users,
and organizations. Additionally, it is responsible for the sharing of
resources between these projects, users, and organizations.

Functions:
  * User/Organization creation
  * User/Organization authentication
  * User/Organization removal
  * User/Organization authorization (w.r.t. Vulcan Projects)
  * Vulcan Project creation
  * Vulcan Project deletion
  * Project object/data sharing

Triggering Events:
  * User/Organization creation
  * User/Organization update
  * User/Organization removal
  * Project creation
  * Proejct update
  * Project removal

## Modeling Subsystem

The modeling subsystem provides the user interface for creating
federates, interactions, coas, federations, and experiments within a
vulcan CPSWT project. The modeling subsystem interfaces with the
project management subsystem and the database interface to
ensure that each of the newly created model objects gets properly
represented as a new (or new version of an) object in the
database. Additionally, the modeling subsystem must provide an
interface for selecting which shared resources should be included in
the users' project. These shared resources are provided by a call into
the project management subsystem.

Functions:
  * Graphical display of project objects/data
  * Creation of new project objects/data
  
Triggering Events:
  * Federate/Interaction/COA/Experiment creation
  * Federate/Interaction/COA/Experiment update
  * Federate/Interaction/COA/Experiment removal
  
## Repository Subystem

The repository subsystem is responsible for creating and managing the
code and repositories associated with relevant objects in the database
(e.g. federates). For example, when the modeling subsystem requests to
the database interface to create a new Federate (and its associated
data), the repsoitory subsystem will be notified (since there was a
federate creation/modification/removal event) and will retrieve the
data about the newly created federate. If needed, the repository
subsystem will verify any required data within the federate (ensure
its existence) before creating the repository. When the repository has
been created, the repository subsystem will push the information about
the newly created repository to the database and link it to the
federate.

Functions:
  * Configure storage location for new repositories
  * Configure authentication for new repositories
  * Create new repository
  * Update/Commit/Push to new repository
  * Pull changes from repository
  * Remove repository
  
Triggering Events:
  * Federate creation
  * Federate update
  * Federate removal

## Build Subsystem

The build subsystem provides the creation, management, logging, and
interfacing for any of the build jobs currently running for the CPSWT
projects in its vulcan project. The build system monitors for selct
changes (e.g. new code committed to project code repository) in the
database (though interface) and when these change events
happen it schedules the build jobs related to the change. While the
build is running it stores and updates the status in the database
finalizing it with the final status of the bulid and the location of
the build artifacts (if any).

Functions:
  * Register a new repository for building
  * Unregister a repository
  * Start a build job
  * Report build job status
  * Clean up a build job
  * Halt a build job
  
Triggering Events:
  * Repository Created
  * Repository Committed
  * Repository Removed

## Experiment Configuration Subsystem

The experiment subsystem provides the user front-end for configuring
which experiments to run, what their configuraiont parameters are, and
viewing the status of the currently scheduled/running/finished
experimetns is. Additionally, the experiment configuration subsystem
is (possibly) responsible for providing some measure of control over
the experiments to the users (e.g. stop, pause, reset, restore, save).

Functions:
  * Create experiment configuration
  * Update experiemnt configuration
  * Remove experiment configuration
  * Stage experiment configuration for execution
  * Retrieve status of federate build
  * Retrieve status of experiment execution
  * Communicate with Federation Manager (start/pause/checkpoint/resume/stop)
  
Triggering Events:
  * Build job started
  * Build job updated
  * Build job completed
  * Build job stopped
  * Build job removed
  * Federate/COA/Experiment created
  * Federate/COA/Experiment updated
  * Federate/COA/Experiment removed
  * Execution created
  * Execution updated
  * Execution removed

## Execution Subsystem

The execution subsystem takes in the experiment configurations that
have been pushed into the database and queues them up for execution on
the execution platform. The execution subsystem is responsible for
ensuring the resource requirements of the experiments can be met, and
delays their execution until such a time that the requirements can be
met. When an experiment is finished, it is the execution subsystem's
job to take the relevant output data (logs, etc.) store them in a
versioned repository, and then update the database with the status of
the executions.

Functions:
  * Validate execution resource requirements
  * Schedule / Queue execution
  * Monitor execution
  * Tear down execution
  * Retrieve execution data (logs, etc.)
  
Triggering Events:
  * Execution created
  * Execution removed

