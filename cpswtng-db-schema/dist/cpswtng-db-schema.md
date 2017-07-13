## <a name="resource-build">Build</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when build was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of build | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of build | `"example"` |
| **updated_at** | *date-time* | when build was updated | `"2015-01-01T12:00:00Z"` |

### Build Create

Create a new build.

```
POST /builds
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//builds \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Build Delete

Delete an existing build.

```
DELETE /builds/{build_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//builds/$BUILD_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Build Info

Info for existing build.

```
GET /builds/{build_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//builds/$BUILD_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Build List

List existing builds.

```
GET /builds
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//builds
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Build Update

Update an existing build.

```
PATCH /builds/{build_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//builds/$BUILD_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-coa">Coa</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when coa was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of coa | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of coa | `"example"` |
| **updated_at** | *date-time* | when coa was updated | `"2015-01-01T12:00:00Z"` |

### Coa Create

Create a new coa.

```
POST /coas
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//coas \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Coa Delete

Delete an existing coa.

```
DELETE /coas/{coa_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//coas/$COA_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Coa Info

Info for existing coa.

```
GET /coas/{coa_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//coas/$COA_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Coa List

List existing coas.

```
GET /coas
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//coas
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Coa Update

Update an existing coa.

```
PATCH /coas/{coa_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//coas/$COA_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-execution">Execution</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when execution was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of execution | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of execution | `"example"` |
| **updated_at** | *date-time* | when execution was updated | `"2015-01-01T12:00:00Z"` |

### Execution Create

Create a new execution.

```
POST /executions
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//executions \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Execution Delete

Delete an existing execution.

```
DELETE /executions/{execution_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//executions/$EXECUTION_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Execution Info

Info for existing execution.

```
GET /executions/{execution_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//executions/$EXECUTION_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Execution List

List existing executions.

```
GET /executions
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//executions
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Execution Update

Update an existing execution.

```
PATCH /executions/{execution_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//executions/$EXECUTION_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-experiment">Experiment</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when experiment was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of experiment | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of experiment | `"example"` |
| **updated_at** | *date-time* | when experiment was updated | `"2015-01-01T12:00:00Z"` |

### Experiment Create

Create a new experiment.

```
POST /experiments
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//experiments \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Experiment Delete

Delete an existing experiment.

```
DELETE /experiments/{experiment_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//experiments/$EXPERIMENT_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Experiment Info

Info for existing experiment.

```
GET /experiments/{experiment_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//experiments/$EXPERIMENT_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Experiment List

List existing experiments.

```
GET /experiments
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//experiments
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Experiment Update

Update an existing experiment.

```
PATCH /experiments/{experiment_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//experiments/$EXPERIMENT_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-federate">Federate</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when federate was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of federate | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of federate | `"example"` |
| **updated_at** | *date-time* | when federate was updated | `"2015-01-01T12:00:00Z"` |

### Federate Create

Create a new federate.

```
POST /federates
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//federates \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Federate Delete

Delete an existing federate.

```
DELETE /federates/{federate_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//federates/$FEDERATE_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Federate Info

Info for existing federate.

```
GET /federates/{federate_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//federates/$FEDERATE_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Federate List

List existing federates.

```
GET /federates
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//federates
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Federate Update

Update an existing federate.

```
PATCH /federates/{federate_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//federates/$FEDERATE_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-interaction">Interaction</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when interaction was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of interaction | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of interaction | `"example"` |
| **updated_at** | *date-time* | when interaction was updated | `"2015-01-01T12:00:00Z"` |

### Interaction Create

Create a new interaction.

```
POST /interactions
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//interactions \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Interaction Delete

Delete an existing interaction.

```
DELETE /interactions/{interaction_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//interactions/$INTERACTION_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Interaction Info

Info for existing interaction.

```
GET /interactions/{interaction_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//interactions/$INTERACTION_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Interaction List

List existing interactions.

```
GET /interactions
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//interactions
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Interaction Update

Update an existing interaction.

```
PATCH /interactions/{interaction_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//interactions/$INTERACTION_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-organization">Organization</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when organization was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of organization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of organization | `"example"` |
| **updated_at** | *date-time* | when organization was updated | `"2015-01-01T12:00:00Z"` |

### Organization Create

Create a new organization.

```
POST /organizations
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//organizations \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Organization Delete

Delete an existing organization.

```
DELETE /organizations/{organization_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//organizations/$ORGANIZATION_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Organization Info

Info for existing organization.

```
GET /organizations/{organization_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//organizations/$ORGANIZATION_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Organization List

List existing organizations.

```
GET /organizations
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//organizations
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Organization Update

Update an existing organization.

```
PATCH /organizations/{organization_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//organizations/$ORGANIZATION_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-project">Project</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when project was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of project | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of project | `"example"` |
| **updated_at** | *date-time* | when project was updated | `"2015-01-01T12:00:00Z"` |

### Project Create

Create a new project.

```
POST /projects
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//projects \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Project Delete

Delete an existing project.

```
DELETE /projects/{project_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//projects/$PROJECT_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Project Info

Info for existing project.

```
GET /projects/{project_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//projects/$PROJECT_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### Project List

List existing projects.

```
GET /projects
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//projects
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### Project Update

Update an existing project.

```
PATCH /projects/{project_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//projects/$PROJECT_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


## <a name="resource-user">User</a>

Stability: `prototype`

FIXME

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when user was created | `"2015-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of user | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of user | `"example"` |
| **updated_at** | *date-time* | when user was updated | `"2015-01-01T12:00:00Z"` |

### User Create

Create a new user.

```
POST /users
```


#### Curl Example

```bash
$ curl -n -X POST https://api.cpswt-ng.isis.vanderbilt.edu//users \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### User Delete

Delete an existing user.

```
DELETE /users/{user_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.cpswt-ng.isis.vanderbilt.edu//users/$USER_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### User Info

Info for existing user.

```
GET /users/{user_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//users/$USER_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```

### User List

List existing users.

```
GET /users
```


#### Curl Example

```bash
$ curl -n https://api.cpswt-ng.isis.vanderbilt.edu//users
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2015-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2015-01-01T12:00:00Z"
  }
]
```

### User Update

Update an existing user.

```
PATCH /users/{user_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.cpswt-ng.isis.vanderbilt.edu//users/$USER_ID_OR_NAME \
  -d '{
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2015-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2015-01-01T12:00:00Z"
}
```


