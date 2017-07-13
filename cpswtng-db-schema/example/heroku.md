## <a name="resource-account">Account</a>

Stability: `production`

An account represents an individual signed up to use the Heroku platform.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **allow_tracking** | *boolean* | whether to allow third party web activity tracking<br/> **default:** `true` | `true` |
| **beta** | *boolean* | whether allowed to utilize beta Heroku features | `false` |
| **created_at** | *date-time* | when account was created | `"2012-01-01T12:00:00Z"` |
| **[default_organization](#resource-organization)** | *nullable object* | organization selected by default | `null` |
| **[default_organization:id](#resource-organization)** | *uuid* | unique identifier of organization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[default_organization:name](#resource-organization)** | *string* | unique name of organization | `"example"` |
| **delinquent_at** | *nullable date-time* | when account became delinquent | `"2012-01-01T12:00:00Z"` |
| **email** | *email* | unique email address of account | `"username@example.com"` |
| **id** | *uuid* | unique identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **last_login** | *nullable date-time* | when account last authorized with Heroku | `"2012-01-01T12:00:00Z"` |
| **name** | *nullable string* | full name of the account owner | `"Tina Edmonds"` |
| **sms_number** | *nullable string* | SMS number of account | `"+1 ***-***-1234"` |
| **suspended_at** | *nullable date-time* | when account was suspended | `"2012-01-01T12:00:00Z"` |
| **two_factor_authentication** | *boolean* | whether two-factor auth is enabled on the account | `false` |
| **updated_at** | *date-time* | when account was updated | `"2012-01-01T12:00:00Z"` |
| **verified** | *boolean* | whether account has been verified with billing information | `false` |

### Account Info

Info for account.

```
GET /account
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Update

Update account.

```
PATCH /account
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **allow_tracking** | *boolean* | whether to allow third party web activity tracking<br/> **default:** `true` | `true` |
| **beta** | *boolean* | whether allowed to utilize beta Heroku features | `false` |
| **name** | *nullable string* | full name of the account owner | `"Tina Edmonds"` |
| **password** | *string* | current password on the account | `"currentpassword"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/account \
  -d '{
  "allow_tracking": true,
  "beta": false,
  "name": "Tina Edmonds",
  "password": "currentpassword"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Change Email

Change Email for account.

```
PATCH /account
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **email** | *email* | unique email address of account | `"username@example.com"` |
| **password** | *string* | current password on the account | `"currentpassword"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/account \
  -d '{
  "email": "username@example.com",
  "password": "currentpassword"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Change Password

Change Password for account.

```
PATCH /account
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **new_password** | *string* | the new password for the account when changing the password | `"newpassword"` |
| **password** | *string* | current password on the account | `"currentpassword"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/account \
  -d '{
  "new_password": "newpassword",
  "password": "currentpassword"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Delete

Delete account. Note that this action cannot be undone.

```
DELETE /account
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/account \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Info

Info for account.

```
GET /users/{account_email_or_id_or_self}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Update

Update account.

```
PATCH /users/{account_email_or_id_or_self}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **allow_tracking** | *boolean* | whether to allow third party web activity tracking<br/> **default:** `true` | `true` |
| **beta** | *boolean* | whether allowed to utilize beta Heroku features | `false` |
| **name** | *nullable string* | full name of the account owner | `"Tina Edmonds"` |
| **password** | *string* | current password on the account | `"currentpassword"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF \
  -d '{
  "allow_tracking": true,
  "beta": false,
  "name": "Tina Edmonds",
  "password": "currentpassword"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Change Email

Change Email for account.

```
PATCH /users/{account_email_or_id_or_self}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **email** | *email* | unique email address of account | `"username@example.com"` |
| **password** | *string* | current password on the account | `"currentpassword"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF \
  -d '{
  "email": "username@example.com",
  "password": "currentpassword"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Change Password

Change Password for account.

```
PATCH /users/{account_email_or_id_or_self}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **new_password** | *string* | the new password for the account when changing the password | `"newpassword"` |
| **password** | *string* | current password on the account | `"currentpassword"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF \
  -d '{
  "new_password": "newpassword",
  "password": "currentpassword"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```

### Account Delete

Delete account. Note that this action cannot be undone.

```
DELETE /users/{account_email_or_id_or_self}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "allow_tracking": true,
  "beta": false,
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "last_login": "2012-01-01T12:00:00Z",
  "name": "Tina Edmonds",
  "sms_number": "+1 ***-***-1234",
  "suspended_at": "2012-01-01T12:00:00Z",
  "delinquent_at": "2012-01-01T12:00:00Z",
  "two_factor_authentication": false,
  "updated_at": "2012-01-01T12:00:00Z",
  "verified": false,
  "default_organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  }
}
```


## <a name="resource-account-feature">Account Feature</a>

Stability: `production`

An account feature represents a Heroku labs capability that can be enabled or disabled for an account on Heroku.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when account feature was created | `"2012-01-01T12:00:00Z"` |
| **description** | *string* | description of account feature | `"Causes account to example."` |
| **doc_url** | *string* | documentation URL of account feature | `"http://devcenter.heroku.com/articles/example"` |
| **enabled** | *boolean* | whether or not account feature has been enabled | `true` |
| **id** | *uuid* | unique identifier of account feature | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of account feature | `"name"` |
| **state** | *string* | state of account feature | `"public"` |
| **updated_at** | *date-time* | when account feature was updated | `"2012-01-01T12:00:00Z"` |

### Account Feature Info

Info for an existing account feature.

```
GET /account/features/{account_feature_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/features/$ACCOUNT_FEATURE_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "description": "Causes account to example.",
  "doc_url": "http://devcenter.heroku.com/articles/example",
  "enabled": true,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "name",
  "state": "public",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Account Feature List

List existing account features.

```
GET /account/features
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/features
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2012-01-01T12:00:00Z",
    "description": "Causes account to example.",
    "doc_url": "http://devcenter.heroku.com/articles/example",
    "enabled": true,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "name",
    "state": "public",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### Account Feature Update

Update an existing account feature.

```
PATCH /account/features/{account_feature_id_or_name}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **enabled** | *boolean* | whether or not account feature has been enabled | `true` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/account/features/$ACCOUNT_FEATURE_ID_OR_NAME \
  -d '{
  "enabled": true
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "description": "Causes account to example.",
  "doc_url": "http://devcenter.heroku.com/articles/example",
  "enabled": true,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "name",
  "state": "public",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-addon">Add-on</a>

Stability: `production`

Add-ons represent add-ons that have been provisioned and attached to one or more apps.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[actions:action](#resource-addon-action)** | *string* | identifier of the action to take that is sent via SSO | `"example"` |
| **[actions:id](#resource-addon-action)** | *uuid* | a unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[actions:label](#resource-addon-action)** | *string* | the display text shown in Dashboard | `"Example"` |
| **[actions:requires_owner](#resource-addon-action)** | *boolean* | if the action requires the user to own the app | `true` |
| **[actions:url](#resource-addon-action)** | *string* | absolute URL to use instead of an action | `"http://example.com?resource_id=:resource_id"` |
| **[addon_service:id](#resource-addon-service)** | *uuid* | unique identifier of this addon-service | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon_service:name](#resource-addon-service)** | *string* | unique name of this addon-service | `"heroku-postgresql"` |
| **[app:id](#resource-app)** | *uuid* | unique identifier of app | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | unique name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **config_vars** | *array* | config vars exposed to the owning app by this add-on | `["FOO","BAZ"]` |
| **created_at** | *date-time* | when add-on was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of add-on | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | globally unique name of the add-on<br/> **pattern:** `^[a-zA-Z][A-Za-z0-9_-]+$` | `"acme-inc-primary-database"` |
| **[plan:id](#resource-plan)** | *uuid* | unique identifier of this plan | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[plan:name](#resource-plan)** | *string* | unique name of this plan | `"heroku-postgresql:dev"` |
| **provider_id** | *string* | id of this add-on with its provider | `"abcd1234"` |
| **updated_at** | *date-time* | when add-on was updated | `"2012-01-01T12:00:00Z"` |
| **web_url** | *nullable uri* | URL for logging into web interface of add-on (e.g. a dashboard) | `"https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"` |

### Add-on Create

Create a new add-on.

```
POST /apps/{app_id_or_name}/addons
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **plan** | *string* | unique identifier or name of this plan | `"01234567-89ab-cdef-0123-456789abcdef"` or `"heroku-postgresql:dev"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/addons \
  -d '{
  "attachment": {
    "name": "DATABASE_FOLLOWER"
  },
  "config": {
    "db-version": "1.2.3"
  },
  "plan": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "actions": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "label": "Example",
    "action": "example",
    "url": "http://example.com?resource_id=:resource_id",
    "requires_owner": true
  },
  "addon_service": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql"
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "config_vars": [
    "FOO",
    "BAZ"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "acme-inc-primary-database",
  "plan": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql:dev"
  },
  "provider_id": "abcd1234",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```

### Add-on Delete

Delete an existing add-on.

```
DELETE /apps/{app_id_or_name}/addons/{addon_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME/addons/$ADDON_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "actions": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "label": "Example",
    "action": "example",
    "url": "http://example.com?resource_id=:resource_id",
    "requires_owner": true
  },
  "addon_service": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql"
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "config_vars": [
    "FOO",
    "BAZ"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "acme-inc-primary-database",
  "plan": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql:dev"
  },
  "provider_id": "abcd1234",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```

### Add-on Info

Info for an existing add-on.

```
GET /apps/{app_id_or_name}/addons/{addon_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/addons/$ADDON_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "actions": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "label": "Example",
    "action": "example",
    "url": "http://example.com?resource_id=:resource_id",
    "requires_owner": true
  },
  "addon_service": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql"
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "config_vars": [
    "FOO",
    "BAZ"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "acme-inc-primary-database",
  "plan": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql:dev"
  },
  "provider_id": "abcd1234",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```

### Add-on List

List all existing add-ons.

```
GET /addons
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addons
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "actions": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "label": "Example",
      "action": "example",
      "url": "http://example.com?resource_id=:resource_id",
      "requires_owner": true
    },
    "addon_service": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql"
    },
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "config_vars": [
      "FOO",
      "BAZ"
    ],
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "acme-inc-primary-database",
    "plan": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql:dev"
    },
    "provider_id": "abcd1234",
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
  }
]
```

### Add-on Info

Info for an existing add-on.

```
GET /addons/{addon_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addons/$ADDON_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "actions": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "label": "Example",
    "action": "example",
    "url": "http://example.com?resource_id=:resource_id",
    "requires_owner": true
  },
  "addon_service": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql"
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "config_vars": [
    "FOO",
    "BAZ"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "acme-inc-primary-database",
  "plan": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql:dev"
  },
  "provider_id": "abcd1234",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```

### Add-on List by App

List existing add-ons for an app.

```
GET /apps/{app_id_or_name}/addons
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/addons
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "actions": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "label": "Example",
      "action": "example",
      "url": "http://example.com?resource_id=:resource_id",
      "requires_owner": true
    },
    "addon_service": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql"
    },
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "config_vars": [
      "FOO",
      "BAZ"
    ],
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "acme-inc-primary-database",
    "plan": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql:dev"
    },
    "provider_id": "abcd1234",
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
  }
]
```

### Add-on Update

Change add-on plan. Some add-ons may not support changing plans. In that case, an error will be returned.

```
PATCH /apps/{app_id_or_name}/addons/{addon_id_or_name}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **plan** | *string* | unique identifier or name of this plan | `"01234567-89ab-cdef-0123-456789abcdef"` or `"heroku-postgresql:dev"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME/addons/$ADDON_ID_OR_NAME \
  -d '{
  "plan": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "actions": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "label": "Example",
    "action": "example",
    "url": "http://example.com?resource_id=:resource_id",
    "requires_owner": true
  },
  "addon_service": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql"
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "config_vars": [
    "FOO",
    "BAZ"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "acme-inc-primary-database",
  "plan": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql:dev"
  },
  "provider_id": "abcd1234",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```


## <a name="resource-addon-action">Add-on Action</a>

Stability: `development`

Add-on Actions are Provider functionality for specific add-on installations

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **action** | *string* | identifier of the action to take that is sent via SSO | `"example"` |
| **id** | *uuid* | a unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **label** | *string* | the display text shown in Dashboard | `"Example"` |
| **requires_owner** | *boolean* | if the action requires the user to own the app | `true` |
| **url** | *string* | absolute URL to use instead of an action | `"http://example.com?resource_id=:resource_id"` |


## <a name="resource-addon-attachment">Add-on Attachment</a>

Stability: `prototype`

An add-on attachment represents a connection between an app and an add-on that it has been given access to.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[addon:app:id](#resource-app)** | *uuid* | unique identifier of app | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon:app:name](#resource-app)** | *string* | unique name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **[addon:id](#resource-addon)** | *uuid* | unique identifier of add-on | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon:name](#resource-addon)** | *string* | globally unique name of the add-on<br/> **pattern:** `^[a-zA-Z][A-Za-z0-9_-]+$` | `"acme-inc-primary-database"` |
| **[addon:plan:id](#resource-plan)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon:plan:name](#resource-plan)** | *string* | name of this plan | `"heroku-postgresql:dev"` |
| **[app:id](#resource-app)** | *uuid* | unique identifier of app | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | unique name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **created_at** | *date-time* | when add-on attachment was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this add-on attachment | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name for this add-on attachment to this app | `"DATABASE"` |
| **updated_at** | *date-time* | when add-on attachment was updated | `"2012-01-01T12:00:00Z"` |
| **web_url** | *nullable uri* | URL for logging into web interface of add-on in attached app context | `"https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"` |

### Add-on Attachment Create

Create a new add-on attachment.

```
POST /addon-attachments
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **addon** | *string* | unique identifier or globally name of the add-on | `"01234567-89ab-cdef-0123-456789abcdef"` or `"acme-inc-primary-database"` |
| **app** | *string* | unique identifier or name of app | `"01234567-89ab-cdef-0123-456789abcdef"` or `"example"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **force** | *boolean* | whether or not to allow existing attachment with same name to be replaced | `false` |
| **name** | *string* | unique name for this add-on attachment to this app | `"DATABASE"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/addon-attachments \
  -d '{
  "addon": "01234567-89ab-cdef-0123-456789abcdef",
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "force": false,
  "name": "DATABASE"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "addon": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "acme-inc-primary-database",
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "plan": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql:dev"
    }
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "DATABASE",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```

### Add-on Attachment Delete

Delete an existing add-on attachment.

```
DELETE /addon-attachments/{addon_attachment_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/addon-attachments/$ADDON_ATTACHMENT_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "addon": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "acme-inc-primary-database",
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "plan": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql:dev"
    }
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "DATABASE",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```

### Add-on Attachment Info

Info for existing add-on attachment.

```
GET /addon-attachments/{addon_attachment_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-attachments/$ADDON_ATTACHMENT_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "addon": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "acme-inc-primary-database",
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "plan": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql:dev"
    }
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "DATABASE",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```

### Add-on Attachment List

List existing add-on attachments.

```
GET /addon-attachments
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-attachments
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "addon": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "acme-inc-primary-database",
      "app": {
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "name": "example"
      },
      "plan": {
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "name": "heroku-postgresql:dev"
      }
    },
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "DATABASE",
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
  }
]
```

### Add-on Attachment List by Add-on

List existing add-on attachments for an add-on.

```
GET /addons/{addon_id_or_name}/addon-attachments
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addons/$ADDON_ID_OR_NAME/addon-attachments
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "addon": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "acme-inc-primary-database",
      "app": {
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "name": "example"
      },
      "plan": {
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "name": "heroku-postgresql:dev"
      }
    },
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "DATABASE",
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
  }
]
```

### Add-on Attachment List by App

List existing add-on attachments for an app.

```
GET /apps/{app_id_or_name}/addon-attachments
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/addon-attachments
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "addon": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "acme-inc-primary-database",
      "app": {
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "name": "example"
      },
      "plan": {
        "id": "01234567-89ab-cdef-0123-456789abcdef",
        "name": "heroku-postgresql:dev"
      }
    },
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "DATABASE",
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
  }
]
```

### Add-on Attachment Info by App

Info for existing add-on attachment for an app.

```
GET /apps/{app_id_or_name}/addon-attachments/{addon_attachment_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/addon-attachments/$ADDON_ATTACHMENT_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "addon": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "acme-inc-primary-database",
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "plan": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql:dev"
    }
  },
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "DATABASE",
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
}
```


## <a name="resource-addon-config">Add-on Config</a>

Stability: `development`

Configuration of an Add-on

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | unique name of the config | `"FOO"` |
| **value** | *nullable string* | value of the config | `"bar"` |

### Add-on Config List

Get an add-on's config

```
GET /addons/{addon_id_or_name}/config
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addons/$ADDON_ID_OR_NAME/config
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "name": "FOO",
    "value": "bar"
  }
]
```

### Add-on Config Update

Update an add-on's config.

```
PATCH /addons/{addon_id_or_name}/config
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **config** | *array* |  | `[{"name":"FOO","value":"bar"}]` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/addons/$ADDON_ID_OR_NAME/config \
  -d '{
  "config": [
    {
      "name": "FOO",
      "value": "bar"
    }
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "name": "FOO",
    "value": "bar"
  }
]
```


## <a name="resource-addon-region-capability">Add-on Region Capability</a>

Stability: `production`

Add-on region capabilities represent the relationship between an Add-on Service and a specific Region. Only Beta and GA add-ons are returned by these endpoints.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[addon_service:cli_plugin_name](#resource-addon-service)** | *nullable string* | npm package name of the add-on service's Heroku CLI plugin | `"heroku-papertrail"` |
| **[addon_service:created_at](#resource-addon-service)** | *date-time* | when addon-service was created | `"2012-01-01T12:00:00Z"` |
| **[addon_service:human_name](#resource-addon-service)** | *string* | human-readable name of the addon service provider | `"Heroku Postgres"` |
| **[addon_service:id](#resource-addon-service)** | *uuid* | unique identifier of this addon-service | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon_service:name](#resource-addon-service)** | *string* | unique name of this addon-service | `"heroku-postgresql"` |
| **[addon_service:state](#resource-addon-service)** | *string* | release status for add-on service<br/> **one of:**`"alpha"` or `"beta"` or `"ga"` or `"shutdown"` | `"ga"` |
| **[addon_service:supports_multiple_installations](#resource-addon-service)** | *boolean* | whether or not apps can have access to more than one instance of this add-on at the same time | `false` |
| **[addon_service:supports_sharing](#resource-addon-service)** | *boolean* | whether or not apps can have access to add-ons billed to a different app | `false` |
| **[addon_service:updated_at](#resource-addon-service)** | *date-time* | when addon-service was updated | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this addon-region-capability | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[region:country](#resource-region)** | *string* | country where the region exists | `"United States"` |
| **[region:created_at](#resource-region)** | *date-time* | when region was created | `"2012-01-01T12:00:00Z"` |
| **[region:description](#resource-region)** | *string* | description of region | `"United States"` |
| **[region:id](#resource-region)** | *uuid* | unique identifier of region | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[region:locale](#resource-region)** | *string* | area in the country where the region exists | `"Virginia"` |
| **[region:name](#resource-region)** | *string* | unique name of region | `"us"` |
| **[region:private_capable](#resource-region)** | *boolean* | whether or not region is available for creating a Private Space | `false` |
| **region:provider:name** | *string* | name of provider | `"amazon-web-services"` |
| **region:provider:region** | *string* | region name used by provider | `"us-east-1"` |
| **[region:updated_at](#resource-region)** | *date-time* | when region was updated | `"2012-01-01T12:00:00Z"` |
| **supports_private_networking** | *boolean* | whether the add-on can be installed to a Space | `true` |

### Add-on Region Capability List

List all existing add-on region capabilities.

```
GET /addon-region-capabilities
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-region-capabilities
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "supports_private_networking": true,
    "addon_service": {
      "cli_plugin_name": "heroku-papertrail",
      "created_at": "2012-01-01T12:00:00Z",
      "human_name": "Heroku Postgres",
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql",
      "state": "ga",
      "supports_multiple_installations": false,
      "supports_sharing": false,
      "updated_at": "2012-01-01T12:00:00Z"
    },
    "region": {
      "country": "United States",
      "created_at": "2012-01-01T12:00:00Z",
      "description": "United States",
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "locale": "Virginia",
      "name": "us",
      "private_capable": false,
      "provider": {
        "name": "amazon-web-services",
        "region": "us-east-1"
      },
      "updated_at": "2012-01-01T12:00:00Z"
    }
  }
]
```

### Add-on Region Capability List by Add-on Service

List existing add-on region capabilities for an addon-service

```
GET /addon-services/{addon_service_id_or_name}/region-capabilities
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-services/$ADDON_SERVICE_ID_OR_NAME/region-capabilities
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "supports_private_networking": true,
    "addon_service": {
      "cli_plugin_name": "heroku-papertrail",
      "created_at": "2012-01-01T12:00:00Z",
      "human_name": "Heroku Postgres",
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql",
      "state": "ga",
      "supports_multiple_installations": false,
      "supports_sharing": false,
      "updated_at": "2012-01-01T12:00:00Z"
    },
    "region": {
      "country": "United States",
      "created_at": "2012-01-01T12:00:00Z",
      "description": "United States",
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "locale": "Virginia",
      "name": "us",
      "private_capable": false,
      "provider": {
        "name": "amazon-web-services",
        "region": "us-east-1"
      },
      "updated_at": "2012-01-01T12:00:00Z"
    }
  }
]
```

### Add-on Region Capability List

List existing add-on region capabilities for a region.

```
GET /regions/{region_id_or_name}/addon-region-capabilities
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/regions/$REGION_ID_OR_NAME/addon-region-capabilities
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "supports_private_networking": true,
    "addon_service": {
      "cli_plugin_name": "heroku-papertrail",
      "created_at": "2012-01-01T12:00:00Z",
      "human_name": "Heroku Postgres",
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql",
      "state": "ga",
      "supports_multiple_installations": false,
      "supports_sharing": false,
      "updated_at": "2012-01-01T12:00:00Z"
    },
    "region": {
      "country": "United States",
      "created_at": "2012-01-01T12:00:00Z",
      "description": "United States",
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "locale": "Virginia",
      "name": "us",
      "private_capable": false,
      "provider": {
        "name": "amazon-web-services",
        "region": "us-east-1"
      },
      "updated_at": "2012-01-01T12:00:00Z"
    }
  }
]
```


## <a name="resource-addon-service">Add-on Service</a>

Stability: `production`

Add-on services represent add-ons that may be provisioned for apps. Endpoints under add-on services can be accessed without authentication.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **cli_plugin_name** | *nullable string* | npm package name of the add-on service's Heroku CLI plugin | `"heroku-papertrail"` |
| **created_at** | *date-time* | when addon-service was created | `"2012-01-01T12:00:00Z"` |
| **human_name** | *string* | human-readable name of the addon service provider | `"Heroku Postgres"` |
| **id** | *uuid* | unique identifier of this addon-service | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of this addon-service | `"heroku-postgresql"` |
| **state** | *string* | release status for add-on service<br/> **one of:**`"alpha"` or `"beta"` or `"ga"` or `"shutdown"` | `"ga"` |
| **supports_multiple_installations** | *boolean* | whether or not apps can have access to more than one instance of this add-on at the same time | `false` |
| **supports_sharing** | *boolean* | whether or not apps can have access to add-ons billed to a different app | `false` |
| **updated_at** | *date-time* | when addon-service was updated | `"2012-01-01T12:00:00Z"` |

### Add-on Service Info

Info for existing addon-service.

```
GET /addon-services/{addon_service_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-services/$ADDON_SERVICE_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "cli_plugin_name": "heroku-papertrail",
  "created_at": "2012-01-01T12:00:00Z",
  "human_name": "Heroku Postgres",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "heroku-postgresql",
  "state": "ga",
  "supports_multiple_installations": false,
  "supports_sharing": false,
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Add-on Service List

List existing addon-services.

```
GET /addon-services
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-services
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "cli_plugin_name": "heroku-papertrail",
    "created_at": "2012-01-01T12:00:00Z",
    "human_name": "Heroku Postgres",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql",
    "state": "ga",
    "supports_multiple_installations": false,
    "supports_sharing": false,
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-app">App</a>

Stability: `production`

An app represents the program that you would like to deploy and run on Heroku.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **archived_at** | *nullable date-time* | when app was archived | `"2012-01-01T12:00:00Z"` |
| **[build_stack:id](#resource-stack)** | *uuid* | unique identifier of stack | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[build_stack:name](#resource-stack)** | *string* | unique name of stack | `"cedar-14"` |
| **buildpack_provided_description** | *nullable string* | description from buildpack of app | `"Ruby/Rack"` |
| **created_at** | *date-time* | when app was created | `"2012-01-01T12:00:00Z"` |
| **git_url** | *string* | git repo URL of app<br/> **pattern:** `^https://git\.heroku\.com/[a-z][a-z0-9-]{2,29}\.git$` | `"https://git.heroku.com/example.git"` |
| **id** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **maintenance** | *boolean* | maintenance status of app | `false` |
| **name** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **[organization](#resource-organization)** | *nullable object* | identity of organization | `null` |
| **[organization:id](#resource-organization)** | *uuid* | unique identifier of organization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[organization:name](#resource-organization)** | *string* | unique name of organization | `"example"` |
| **[owner:email](#resource-account)** | *email* | unique email address of account | `"username@example.com"` |
| **[owner:id](#resource-account)** | *uuid* | unique identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[region:id](#resource-region)** | *uuid* | unique identifier of region | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[region:name](#resource-region)** | *string* | unique name of region | `"us"` |
| **released_at** | *nullable date-time* | when app was released | `"2012-01-01T12:00:00Z"` |
| **repo_size** | *nullable integer* | git repo size in bytes of app | `0` |
| **slug_size** | *nullable integer* | slug size in bytes of app | `0` |
| **[space](#resource-space)** | *nullable object* | identity of space | `null` |
| **[space:id](#resource-space)** | *uuid* | unique identifier of space | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[space:name](#resource-space)** | *string* | unique name of space<br/> **pattern:** `^[a-z0-9](?:[a-z0-9]&#124;-(?!-))+[a-z0-9]$` | `"nasa"` |
| **[stack:id](#resource-stack)** | *uuid* | unique identifier of stack | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[stack:name](#resource-stack)** | *string* | unique name of stack | `"cedar-14"` |
| **updated_at** | *date-time* | when app was updated | `"2012-01-01T12:00:00Z"` |
| **web_url** | *uri* | web URL of app<br/> **pattern:** `^https?://[a-z][a-z0-9-]{3,30}\.herokuapp\.com/$` | `"https://example.herokuapp.com/"` |

### App Create

Create a new app.

```
POST /apps
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **region** | *string* | unique identifier or name of region | `"01234567-89ab-cdef-0123-456789abcdef"` or `"us"` |
| **stack** | *string* | unique name or identifier of stack | `"cedar-14"` or `"01234567-89ab-cdef-0123-456789abcdef"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps \
  -d '{
  "name": "example",
  "region": "01234567-89ab-cdef-0123-456789abcdef",
  "stack": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "build_stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "maintenance": false,
  "name": "example",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```

### App Delete

Delete an existing app.

```
DELETE /apps/{app_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "build_stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "maintenance": false,
  "name": "example",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```

### App Info

Info for existing app.

```
GET /apps/{app_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "build_stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "maintenance": false,
  "name": "example",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```

### App List

List existing apps.

```
GET /apps
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "archived_at": "2012-01-01T12:00:00Z",
    "buildpack_provided_description": "Ruby/Rack",
    "build_stack": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "cedar-14"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "git_url": "https://git.heroku.com/example.git",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "maintenance": false,
    "name": "example",
    "owner": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "organization": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "region": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "us"
    },
    "released_at": "2012-01-01T12:00:00Z",
    "repo_size": 0,
    "slug_size": 0,
    "space": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "nasa"
    },
    "stack": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "cedar-14"
    },
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://example.herokuapp.com/"
  }
]
```

### App List Owned and Collaborated

List owned and collaborated apps (excludes organization apps).

```
GET /users/{account_email_or_id_or_self}/apps
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF/apps
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "archived_at": "2012-01-01T12:00:00Z",
    "buildpack_provided_description": "Ruby/Rack",
    "build_stack": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "cedar-14"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "git_url": "https://git.heroku.com/example.git",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "maintenance": false,
    "name": "example",
    "owner": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "organization": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "region": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "us"
    },
    "released_at": "2012-01-01T12:00:00Z",
    "repo_size": 0,
    "slug_size": 0,
    "space": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "nasa"
    },
    "stack": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "cedar-14"
    },
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://example.herokuapp.com/"
  }
]
```

### App Update

Update an existing app.

```
PATCH /apps/{app_id_or_name}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **build_stack** | *string* | unique name or identifier of stack | `"cedar-14"` or `"01234567-89ab-cdef-0123-456789abcdef"` |
| **maintenance** | *boolean* | maintenance status of app | `false` |
| **name** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME \
  -d '{
  "build_stack": "01234567-89ab-cdef-0123-456789abcdef",
  "maintenance": false,
  "name": "example"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "build_stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "maintenance": false,
  "name": "example",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "organization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```


## <a name="resource-app-feature">App Feature</a>

Stability: `production`

An app feature represents a Heroku labs capability that can be enabled or disabled for an app on Heroku.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when app feature was created | `"2012-01-01T12:00:00Z"` |
| **description** | *string* | description of app feature | `"Causes app to example."` |
| **doc_url** | *string* | documentation URL of app feature | `"http://devcenter.heroku.com/articles/example"` |
| **enabled** | *boolean* | whether or not app feature has been enabled | `true` |
| **id** | *uuid* | unique identifier of app feature | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of app feature | `"name"` |
| **state** | *string* | state of app feature | `"public"` |
| **updated_at** | *date-time* | when app feature was updated | `"2012-01-01T12:00:00Z"` |

### App Feature Info

Info for an existing app feature.

```
GET /apps/{app_id_or_name}/features/{app_feature_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/features/$APP_FEATURE_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "description": "Causes app to example.",
  "doc_url": "http://devcenter.heroku.com/articles/example",
  "enabled": true,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "name",
  "state": "public",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Feature List

List existing app features.

```
GET /apps/{app_id_or_name}/features
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/features
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2012-01-01T12:00:00Z",
    "description": "Causes app to example.",
    "doc_url": "http://devcenter.heroku.com/articles/example",
    "enabled": true,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "name",
    "state": "public",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### App Feature Update

Update an existing app feature.

```
PATCH /apps/{app_id_or_name}/features/{app_feature_id_or_name}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **enabled** | *boolean* | whether or not app feature has been enabled | `true` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME/features/$APP_FEATURE_ID_OR_NAME \
  -d '{
  "enabled": true
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "description": "Causes app to example.",
  "doc_url": "http://devcenter.heroku.com/articles/example",
  "enabled": true,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "name",
  "state": "public",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-app-setup">App Setup</a>

Stability: `production`

An app setup represents an app on Heroku that is setup using an environment, addons, and scripts described in an app.json manifest file.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **[build](#resource-build)** | *nullable object* | identity and status of build | `null` |
| **[build:id](#resource-build)** | *uuid* | unique identifier of build | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[build:output_stream_url](#resource-build)** | *string* | Build process output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`). | `"https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef"` |
| **[build:status](#resource-build)** | *string* | status of build<br/> **one of:**`"failed"` or `"pending"` or `"succeeded"` | `"succeeded"` |
| **created_at** | *date-time* | when app setup was created | `"2012-01-01T12:00:00Z"` |
| **failure_message** | *nullable string* | reason that app setup has failed | `"invalid app.json"` |
| **id** | *uuid* | unique identifier of app setup | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **manifest_errors** | *array* | errors associated with invalid app.json manifest file | `["config var FOO is required"]` |
| **postdeploy** | *nullable object* | result of postdeploy script | `null` |
| **postdeploy:exit_code** | *integer* | The exit code of the postdeploy script | `1` |
| **postdeploy:output** | *string* | output of the postdeploy script | `"assets precompiled"` |
| **resolved_success_url** | *nullable string* | fully qualified success url | `"https://example.herokuapp.com/welcome"` |
| **status** | *string* | the overall status of app setup<br/> **one of:**`"failed"` or `"pending"` or `"succeeded"` | `"failed"` |
| **updated_at** | *date-time* | when app setup was updated | `"2012-01-01T12:00:00Z"` |

### App Setup Create

Create a new app setup from a gzipped tar archive containing an app.json manifest file.

```
POST /app-setups
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **source_blob:checksum** | *nullable string* | an optional checksum of the gzipped tarball for verifying its integrity | `"SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"` |
| **source_blob:url** | *string* | URL of gzipped tarball of source code containing app.json manifest file | `"https://example.com/source.tgz?token=xyz"` |
| **source_blob:version** | *nullable string* | Version of the gzipped tarball. | `"v1.3.0"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **app:locked** | *boolean* | are other organization members forbidden from joining this app. | `false` |
| **app:name** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **app:organization** | *string* | unique name of organization | `"example"` |
| **app:personal** | *boolean* | force creation of the app in the user account even if a default org is set. | `false` |
| **app:region** | *string* | name of region | `"us"` |
| **app:stack** | *string* | unique name | `"cedar-14"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/app-setups \
  -d '{
  "app": {
    "locked": false,
    "name": "example",
    "organization": "example",
    "personal": false,
    "region": "us",
    "stack": "cedar-14"
  },
  "source_blob": {
    "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "url": "https://example.com/source.tgz?token=xyz",
    "version": "v1.3.0"
  },
  "overrides": {
    "env": {
      "FOO": "bar",
      "BAZ": "qux"
    }
  }
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z",
  "status": "failed",
  "failure_message": "invalid app.json",
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "build": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "status": "succeeded",
    "output_stream_url": "https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef"
  },
  "manifest_errors": [
    "config var FOO is required"
  ],
  "postdeploy": {
    "output": "assets precompiled",
    "exit_code": 1
  },
  "resolved_success_url": "https://example.herokuapp.com/welcome"
}
```

### App Setup Info

Get the status of an app setup.

```
GET /app-setups/{app_setup_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/app-setups/$APP_SETUP_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "updated_at": "2012-01-01T12:00:00Z",
  "status": "failed",
  "failure_message": "invalid app.json",
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example"
  },
  "build": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "status": "succeeded",
    "output_stream_url": "https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef"
  },
  "manifest_errors": [
    "config var FOO is required"
  ],
  "postdeploy": {
    "output": "assets precompiled",
    "exit_code": 1
  },
  "resolved_success_url": "https://example.herokuapp.com/welcome"
}
```


## <a name="resource-app-transfer">App Transfer</a>

Stability: `production`

An app transfer represents a two party interaction for transferring ownership of an app.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **created_at** | *date-time* | when app transfer was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of app transfer | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[owner:email](#resource-account)** | *email* | unique email address of account | `"username@example.com"` |
| **[owner:id](#resource-account)** | *uuid* | unique identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[recipient:email](#resource-account)** | *email* | unique email address of account | `"username@example.com"` |
| **[recipient:id](#resource-account)** | *uuid* | unique identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **state** | *string* | the current state of an app transfer<br/> **one of:**`"pending"` or `"accepted"` or `"declined"` | `"pending"` |
| **updated_at** | *date-time* | when app transfer was updated | `"2012-01-01T12:00:00Z"` |

### App Transfer Create

Create a new app transfer.

```
POST /account/app-transfers
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **app** | *string* | unique identifier or name of app | `"01234567-89ab-cdef-0123-456789abcdef"` or `"example"` |
| **recipient** | *string* | unique email address, identifier of an account or Implicit reference to currently authorized user | `"username@example.com"` or `"01234567-89ab-cdef-0123-456789abcdef"` or `"~"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **silent** | *boolean* | whether to suppress email notification when transferring apps | `false` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/account/app-transfers \
  -d '{
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "recipient": "01234567-89ab-cdef-0123-456789abcdef",
  "silent": false
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "recipient": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "state": "pending",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Transfer Delete

Delete an existing app transfer

```
DELETE /account/app-transfers/{app_transfer_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/account/app-transfers/$APP_TRANSFER_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "recipient": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "state": "pending",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Transfer Info

Info for existing app transfer.

```
GET /account/app-transfers/{app_transfer_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/app-transfers/$APP_TRANSFER_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "recipient": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "state": "pending",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### App Transfer List

List existing apps transfers.

```
GET /account/app-transfers
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/app-transfers
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "owner": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "recipient": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "state": "pending",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### App Transfer Update

Update an existing app transfer.

```
PATCH /account/app-transfers/{app_transfer_id_or_name}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **state** | *string* | the current state of an app transfer<br/> **one of:**`"pending"` or `"accepted"` or `"declined"` | `"pending"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/account/app-transfers/$APP_TRANSFER_ID_OR_NAME \
  -d '{
  "state": "pending"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "recipient": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "state": "pending",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-build">Build</a>

Stability: `production`

A build represents the process of transforming a code tarball into a slug

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[buildpacks](#resource-buildpack-installation)** | *nullable array* | buildpacks executed for this build, in order | `null` |
| **[buildpacks/url](#resource-buildpack-installation)** | *string* | location of the buildpack for the app. Either a url (unofficial buildpacks) or an internal urn (heroku official buildpacks). | `"https://github.com/heroku/heroku-buildpack-ruby"` |
| **created_at** | *date-time* | when build was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of build | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **output_stream_url** | *string* | Build process output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`). | `"https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef"` |
| **[release](#resource-release)** | *nullable object* | release resulting from the build | `{"id":"01234567-89ab-cdef-0123-456789abcdef"}` |
| **[release:id](#resource-release)** | *uuid* | unique identifier of release | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[slug](#resource-slug)** | *nullable object* | slug created by this build | `null` |
| **[slug:id](#resource-slug)** | *uuid* | unique identifier of slug | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **source_blob:checksum** | *nullable string* | an optional checksum of the gzipped tarball for verifying its integrity | `"SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"` |
| **source_blob:url** | *string* | URL where gzipped tar archive of source code for build was downloaded. | `"https://example.com/source.tgz?token=xyz"` |
| **source_blob:version** | *nullable string* | Version of the gzipped tarball. | `"v1.3.0"` |
| **status** | *string* | status of build<br/> **one of:**`"failed"` or `"pending"` or `"succeeded"` | `"succeeded"` |
| **updated_at** | *date-time* | when build was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Build Create

Create a new build.

```
POST /apps/{app_id_or_name}/builds
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **source_blob:checksum** | *nullable string* | an optional checksum of the gzipped tarball for verifying its integrity | `"SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"` |
| **source_blob:url** | *string* | URL where gzipped tar archive of source code for build was downloaded. | `"https://example.com/source.tgz?token=xyz"` |
| **source_blob:version** | *nullable string* | Version of the gzipped tarball. | `"v1.3.0"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/builds \
  -d '{
  "source_blob": {
    "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "url": "https://example.com/source.tgz?token=xyz",
    "version": "v1.3.0"
  }
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "buildpacks": [
    {
      "url": "https://github.com/heroku/heroku-buildpack-ruby"
    }
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "output_stream_url": "https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef",
  "source_blob": {
    "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "url": "https://example.com/source.tgz?token=xyz",
    "version": "v1.3.0"
  },
  "release": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "slug": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "status": "succeeded",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com"
  }
}
```

### Build Info

Info for existing build.

```
GET /apps/{app_id_or_name}/builds/{build_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/builds/$BUILD_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "buildpacks": [
    {
      "url": "https://github.com/heroku/heroku-buildpack-ruby"
    }
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "output_stream_url": "https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef",
  "source_blob": {
    "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "url": "https://example.com/source.tgz?token=xyz",
    "version": "v1.3.0"
  },
  "release": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "slug": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "status": "succeeded",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com"
  }
}
```

### Build List

List existing build.

```
GET /apps/{app_id_or_name}/builds
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/builds
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "buildpacks": [
      {
        "url": "https://github.com/heroku/heroku-buildpack-ruby"
      }
    ],
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "output_stream_url": "https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef",
    "source_blob": {
      "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "url": "https://example.com/source.tgz?token=xyz",
      "version": "v1.3.0"
    },
    "release": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "slug": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "status": "succeeded",
    "updated_at": "2012-01-01T12:00:00Z",
    "user": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "email": "username@example.com"
    }
  }
]
```


## <a name="resource-build-result">Build Result</a>

Stability: `deprecation`

A build result contains the output from a build.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[build:id](#resource-build)** | *uuid* | unique identifier of build | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[build:output_stream_url](#resource-build)** | *string* | Build process output will be available from this URL as a stream. The stream is available as either `text/plain` or `text/event-stream`. Clients should be prepared to handle disconnects and can resume the stream by sending a `Range` header (for `text/plain`) or a `Last-Event-Id` header (for `text/event-stream`). | `"https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef"` |
| **[build:status](#resource-build)** | *string* | status of build<br/> **one of:**`"failed"` or `"pending"` or `"succeeded"` | `"succeeded"` |
| **exit_code** | *number* | status from the build | `0` |
| **lines** | *array* | A list of all the lines of a build's output. This has been replaced by the `output_stream_url` attribute on the build resource. | `[{"line":"-----> Ruby app detected\n","stream":"STDOUT"}]` |

### Build Result Info

Info for existing result.

```
GET /apps/{app_id_or_name}/builds/{build_id}/result
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/builds/$BUILD_ID/result
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "build": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "status": "succeeded",
    "output_stream_url": "https://build-output.heroku.com/streams/01234567-89ab-cdef-0123-456789abcdef"
  },
  "exit_code": 0,
  "lines": [
    {
      "line": "-----> Ruby app detected\n",
      "stream": "STDOUT"
    }
  ]
}
```


## <a name="resource-buildpack-installation">Buildpack Installations</a>

Stability: `production`

A buildpack installation represents a buildpack that will be run against an app.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **buildpack:name** | *string* | either the shorthand name (heroku official buildpacks) or url (unofficial buildpacks) of the buildpack for the app | `"heroku/ruby"` |
| **buildpack:url** | *string* | location of the buildpack for the app. Either a url (unofficial buildpacks) or an internal urn (heroku official buildpacks). | `"https://github.com/heroku/heroku-buildpack-ruby"` |
| **ordinal** | *integer* | determines the order in which the buildpacks will execute | `0` |

### Buildpack Installations Update

Update an app's buildpack installations.

```
PUT /apps/{app_id_or_name}/buildpack-installations
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **updates** | *array* | The buildpack attribute can accept a name, a url, or a urn. | `[{"buildpack":"https://github.com/heroku/heroku-buildpack-ruby"}]` |



#### Curl Example

```bash
$ curl -n -X PUT https://api.heroku.com/apps/$APP_ID_OR_NAME/buildpack-installations \
  -d '{
  "updates": [
    {
      "buildpack": "https://github.com/heroku/heroku-buildpack-ruby"
    }
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "ordinal": 0,
    "buildpack": {
      "url": "https://github.com/heroku/heroku-buildpack-ruby",
      "name": "heroku/ruby"
    }
  }
]
```

### Buildpack Installations List

List an app's existing buildpack installations.

```
GET /apps/{app_id_or_name}/buildpack-installations
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/buildpack-installations
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "ordinal": 0,
    "buildpack": {
      "url": "https://github.com/heroku/heroku-buildpack-ruby",
      "name": "heroku/ruby"
    }
  }
]
```


## <a name="resource-collaborator">Collaborator</a>

Stability: `production`

A collaborator represents an account that has been given access to an app on Heroku.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **created_at** | *date-time* | when collaborator was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of collaborator | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **updated_at** | *date-time* | when collaborator was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Collaborator Create

Create a new collaborator.

```
POST /apps/{app_id_or_name}/collaborators
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **user** | *string* | unique email address, identifier of an account or Implicit reference to currently authorized user | `"username@example.com"` or `"01234567-89ab-cdef-0123-456789abcdef"` or `"~"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **silent** | *boolean* | whether to suppress email invitation when creating collaborator | `false` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/collaborators \
  -d '{
  "silent": false,
  "user": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Collaborator Delete

Delete an existing collaborator.

```
DELETE /apps/{app_id_or_name}/collaborators/{collaborator_email_or_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME/collaborators/$COLLABORATOR_EMAIL_OR_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Collaborator Info

Info for existing collaborator.

```
GET /apps/{app_id_or_name}/collaborators/{collaborator_email_or_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/collaborators/$COLLABORATOR_EMAIL_OR_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Collaborator List

List existing collaborators.

```
GET /apps/{app_id_or_name}/collaborators
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/collaborators
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "updated_at": "2012-01-01T12:00:00Z",
    "user": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    }
  }
]
```


## <a name="resource-config-var">Config Vars</a>

Stability: `production`

Config Vars allow you to manage the configuration information provided to an app on Heroku.

### Config Vars Info

Get config-vars for app.

```
GET /apps/{app_id_or_name}/config-vars
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/config-vars
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "FOO": "bar",
  "BAZ": "qux"
}
```

### Config Vars Update

Update config-vars for app. You can update existing config-vars by setting them again, and remove by setting it to `null`.

```
PATCH /apps/{app_id_or_name}/config-vars
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME/config-vars \
  -d '{
  "FOO": "bar",
  "BAZ": "qux"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "FOO": "bar",
  "BAZ": "qux"
}
```


## <a name="resource-credit">Credit</a>

Stability: `development`

A credit represents value that will be used up before further charges are assigned to an account.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **amount** | *number* | total value of credit in cents | `10000` |
| **balance** | *number* | remaining value of credit in cents | `5000` |
| **created_at** | *date-time* | when credit was created | `"2012-01-01T12:00:00Z"` |
| **expires_at** | *date-time* | when credit will expire | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of credit | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **title** | *string* | a name for credit | `"gift card"` |
| **updated_at** | *date-time* | when credit was updated | `"2012-01-01T12:00:00Z"` |

### Credit Create

Create a new credit.

```
POST /account/credits
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **code1** | *string* | first code from a discount card | `"012abc"` |
| **code2** | *string* | second code from a discount card | `"012abc"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/account/credits \
  -d '{
  "code1": "012abc",
  "code2": "012abc"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "amount": 10000,
  "balance": 5000,
  "created_at": "2012-01-01T12:00:00Z",
  "expires_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "title": "gift card",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Credit Info

Info for existing credit.

```
GET /account/credits/{credit_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/credits/$CREDIT_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "amount": 10000,
  "balance": 5000,
  "created_at": "2012-01-01T12:00:00Z",
  "expires_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "title": "gift card",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Credit List

List existing credits.

```
GET /account/credits
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/credits
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "amount": 10000,
    "balance": 5000,
    "created_at": "2012-01-01T12:00:00Z",
    "expires_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "title": "gift card",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-domain">Domain</a>

Stability: `production`

Domains define what web routes should be routed to an app on Heroku.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **cname** | *nullable string* | canonical name record, the address to point a domain at | `"example.herokudns.com"` |
| **created_at** | *date-time* | when domain was created | `"2012-01-01T12:00:00Z"` |
| **hostname** | *uri* | full hostname | `"subdomain.example.com"` |
| **id** | *uuid* | unique identifier of this domain | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **kind** | *string* | type of domain name<br/> **one of:**`"heroku"` or `"custom"` | `"custom"` |
| **status** | *string* | status of this record's cname | `"pending"` |
| **updated_at** | *date-time* | when domain was updated | `"2012-01-01T12:00:00Z"` |

### Domain Create

Create a new domain.

```
POST /apps/{app_id_or_name}/domains
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **hostname** | *uri* | full hostname | `"subdomain.example.com"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/domains \
  -d '{
  "hostname": "subdomain.example.com"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "cname": "example.herokudns.com",
  "created_at": "2012-01-01T12:00:00Z",
  "hostname": "subdomain.example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "kind": "custom",
  "updated_at": "2012-01-01T12:00:00Z",
  "status": "pending"
}
```

### Domain Delete

Delete an existing domain

```
DELETE /apps/{app_id_or_name}/domains/{domain_id_or_hostname}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME/domains/$DOMAIN_ID_OR_HOSTNAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "cname": "example.herokudns.com",
  "created_at": "2012-01-01T12:00:00Z",
  "hostname": "subdomain.example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "kind": "custom",
  "updated_at": "2012-01-01T12:00:00Z",
  "status": "pending"
}
```

### Domain Info

Info for existing domain.

```
GET /apps/{app_id_or_name}/domains/{domain_id_or_hostname}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/domains/$DOMAIN_ID_OR_HOSTNAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "cname": "example.herokudns.com",
  "created_at": "2012-01-01T12:00:00Z",
  "hostname": "subdomain.example.com",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "kind": "custom",
  "updated_at": "2012-01-01T12:00:00Z",
  "status": "pending"
}
```

### Domain List

List existing domains.

```
GET /apps/{app_id_or_name}/domains
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/domains
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "cname": "example.herokudns.com",
    "created_at": "2012-01-01T12:00:00Z",
    "hostname": "subdomain.example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "kind": "custom",
    "updated_at": "2012-01-01T12:00:00Z",
    "status": "pending"
  }
]
```


## <a name="resource-dyno">Dyno</a>

Stability: `production`

Dynos encapsulate running processes of an app on Heroku. Detailed information about dyno sizes can be found at: [https://devcenter.heroku.com/articles/dyno-types](https://devcenter.heroku.com/articles/dyno-types).

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **attach_url** | *nullable string* | a URL to stream output from for attached processes or null for non-attached processes | `"rendezvous://rendezvous.runtime.heroku.com:5000/{rendezvous-id}"` |
| **command** | *string* | command used to start this process | `"bash"` |
| **created_at** | *date-time* | when dyno was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this dyno | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | the name of this process on this dyno | `"run.1"` |
| **[release:id](#resource-release)** | *uuid* | unique identifier of release | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[release:version](#resource-release)** | *integer* | unique version assigned to the release | `11` |
| **size** | *string* | dyno size (default: "standard-1X") | `"standard-1X"` |
| **state** | *string* | current status of process (either: crashed, down, idle, starting, or up) | `"up"` |
| **type** | *string* | type of process | `"run"` |
| **updated_at** | *date-time* | when process last changed state | `"2012-01-01T12:00:00Z"` |

### Dyno Create

Create a new dyno.

```
POST /apps/{app_id_or_name}/dynos
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **command** | *string* | command used to start this process | `"bash"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **attach** | *boolean* | whether to stream output or not | `true` |
| **env** | *object* | custom environment to add to the dyno config vars | `{"COLUMNS":"80","LINES":"24"}` |
| **force_no_tty** | *nullable boolean* | force an attached one-off dyno to not run in a tty | `null` |
| **size** | *string* | dyno size (default: "standard-1X") | `"standard-1X"` |
| **time_to_live** | *integer* | seconds until dyno expires, after which it will soon be killed | `1800` |
| **type** | *string* | type of process | `"run"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/dynos \
  -d '{
  "attach": true,
  "command": "bash",
  "env": {
    "COLUMNS": "80",
    "LINES": "24"
  },
  "force_no_tty": null,
  "size": "standard-1X",
  "type": "run",
  "time_to_live": 1800
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "attach_url": "rendezvous://rendezvous.runtime.heroku.com:5000/{rendezvous-id}",
  "command": "bash",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "run.1",
  "release": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "version": 11
  },
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "size": "standard-1X",
  "state": "up",
  "type": "run",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Dyno Restart

Restart dyno.

```
DELETE /apps/{app_id_or_name}/dynos/{dyno_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME/dynos/$DYNO_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 202 Accepted
```


### Dyno Restart all

Restart all dynos

```
DELETE /apps/{app_id_or_name}/dynos
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME/dynos \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 202 Accepted
```


### Dyno Info

Info for existing dyno.

```
GET /apps/{app_id_or_name}/dynos/{dyno_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/dynos/$DYNO_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "attach_url": "rendezvous://rendezvous.runtime.heroku.com:5000/{rendezvous-id}",
  "command": "bash",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "run.1",
  "release": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "version": 11
  },
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "size": "standard-1X",
  "state": "up",
  "type": "run",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Dyno List

List existing dynos.

```
GET /apps/{app_id_or_name}/dynos
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/dynos
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "attach_url": "rendezvous://rendezvous.runtime.heroku.com:5000/{rendezvous-id}",
    "command": "bash",
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "run.1",
    "release": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "version": 11
    },
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "size": "standard-1X",
    "state": "up",
    "type": "run",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-event">Event</a>

Stability: `development`

An event represents an action performed on another API resource.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **action** | *string* | the operation performed on the resource<br/> **one of:**`"create"` or `"destroy"` or `"update"` | `"create"` |
| **[actor:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[actor:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **created_at** | *date-time* | when the event was created | `"2012-01-01T12:00:00Z"` |
| **data** | *string* | An account represents an individual signed up to use the Heroku platform., Add-ons represent add-ons that have been provisioned and attached to one or more apps., An add-on attachment represents a connection between an app and an add-on that it has been given access to., An app represents the program that you would like to deploy and run on Heroku., An app setup represents an app on Heroku that is setup using an environment, addons, and scripts described in an app.json manifest file., An app transfer represents a two party interaction for transferring ownership of an app., A build represents the process of transforming a code tarball into a slug, A collaborator represents an account that has been given access to an app on Heroku., Domains define what web routes should be routed to an app on Heroku., Dynos encapsulate running processes of an app on Heroku. Detailed information about dyno sizes can be found at: [https://devcenter.heroku.com/articles/dyno-types](https://devcenter.heroku.com/articles/dyno-types)., A failed event represents a failure of an action performed on another API resource., The formation of processes that should be maintained for an app. Update the formation to scale processes or change dyno sizes. Available process type names and commands are defined by the `process_types` attribute for the [slug](#slug) currently released on an app., Organizations allow you to manage access to a shared group of applications across your development team., A release represents a combination of code, config vars and add-ons for an app on Heroku. or A space is an isolated, highly available, secure app execution environments, running in the modern VPC substrate. |  |
| **id** | *uuid* | unique identifier of an event | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **previous_data** | *object* | data fields that were changed during update with previous values |  |
| **published_at** | *nullable date-time* | when the event was published | `"2012-01-01T12:00:00Z"` |
| **resource** | *string* | the type of resource affected<br/> **one of:**`"addon"` or `"addon-attachment"` or `"app"` or `"app-setup"` or `"app-transfer"` or `"build"` or `"collaborator"` or `"domain"` or `"dyno"` or `"failed-event"` or `"formation"` or `"organization"` or `"release"` or `"space"` or `"user"` | `"app"` |
| **sequence** | *nullable string* | a numeric string representing the event's sequence<br/> **pattern:** `^[0-9]{1,128}$` | `"1234567890"` |
| **updated_at** | *date-time* | when the event was updated (same as created) | `"2012-01-01T12:00:00Z"` |
| **version** | *string* | the event's API version string | `"application/vnd.heroku+json; version=3"` |


## <a name="resource-failed-event">Failed Event</a>

Stability: `development`

A failed event represents a failure of an action performed on another API resource.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **action** | *string* | The attempted operation performed on the resource.<br/> **one of:**`"create"` or `"destroy"` or `"update"` or `"unknown"` | `"create"` |
| **code** | *nullable integer* | An HTTP status code. | `404` |
| **error_id** | *nullable string* | ID of error raised. | `"rate_limit"` |
| **message** | *string* | A detailed error message. | `"Your account reached the API rate limit\nPlease wait a few minutes before making new requests"` |
| **method** | *string* | The HTTP method type of the failed action.<br/> **one of:**`"DELETE"` or `"GET"` or `"HEAD"` or `"OPTIONS"` or `"PATCH"` or `"POST"` or `"PUT"` | `"POST"` |
| **path** | *string* | The path of the attempted operation. | `"/apps/my-app"` |
| **resource** | *nullable object* | The related resource of the failed action. | `null` |
| **resource:id** | *uuid* | Unique identifier of a resource. | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[resource:name](#resource-event)** | *string* | the type of resource affected<br/> **one of:**`"addon"` or `"addon-attachment"` or `"app"` or `"app-setup"` or `"app-transfer"` or `"build"` or `"collaborator"` or `"domain"` or `"dyno"` or `"failed-event"` or `"formation"` or `"organization"` or `"release"` or `"space"` or `"user"` | `"app"` |


## <a name="resource-filter-apps">Filters</a>

Stability: `development`

Filters are special endpoints to allow for API consumers to specify a subset of resources to consume in order to reduce the number of requests that are performed.  Each filter endpoint endpoint is responsible for determining its supported request format.  The endpoints are over POST in order to handle large request bodies without hitting request uri query length limitations, but the requests themselves are idempotent and will not have side effects.

### Filters Apps

Request an apps list filtered by app id.

```
POST /filters/apps
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/filters/apps \
  -d '{
  "in": {
    "id": [
      "01234567-89ab-cdef-0123-456789abcdef"
    ]
  }
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "archived_at": "2012-01-01T12:00:00Z",
    "buildpack_provided_description": "Ruby/Rack",
    "created_at": "2012-01-01T12:00:00Z",
    "git_url": "https://git.heroku.com/example.git",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "joined": false,
    "locked": false,
    "maintenance": false,
    "name": "example",
    "organization": {
      "name": "example"
    },
    "owner": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "region": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "us"
    },
    "released_at": "2012-01-01T12:00:00Z",
    "repo_size": 0,
    "slug_size": 0,
    "space": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "nasa"
    },
    "stack": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "cedar-14"
    },
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://example.herokuapp.com/"
  }
]
```


## <a name="resource-formation">Formation</a>

Stability: `production`

The formation of processes that should be maintained for an app. Update the formation to scale processes or change dyno sizes. Available process type names and commands are defined by the `process_types` attribute for the [slug](#slug) currently released on an app.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **command** | *string* | command to use to launch this process | `"bundle exec rails server -p $PORT"` |
| **created_at** | *date-time* | when process type was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this process type | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **quantity** | *integer* | number of processes to maintain | `1` |
| **size** | *string* | dyno size (default: "standard-1X") | `"standard-1X"` |
| **type** | *string* | type of process to maintain | `"web"` |
| **updated_at** | *date-time* | when dyno type was updated | `"2012-01-01T12:00:00Z"` |

### Formation Info

Info for a process type

```
GET /apps/{app_id_or_name}/formation/{formation_id_or_type}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/formation/$FORMATION_ID_OR_TYPE
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "command": "bundle exec rails server -p $PORT",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "quantity": 1,
  "size": "standard-1X",
  "type": "web",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Formation List

List process type formation

```
GET /apps/{app_id_or_name}/formation
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/formation
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "command": "bundle exec rails server -p $PORT",
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "quantity": 1,
    "size": "standard-1X",
    "type": "web",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### Formation Batch update

Batch update process types

```
PATCH /apps/{app_id_or_name}/formation
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **updates** | *array* | Array with formation updates. Each element must have "type", the id or name of the process type to be updated, and can optionally update its "quantity" or "size". | `[{"quantity":1,"size":"standard-1X","type":"web"}]` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME/formation \
  -d '{
  "updates": [
    {
      "quantity": 1,
      "size": "standard-1X",
      "type": "web"
    }
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "command": "bundle exec rails server -p $PORT",
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "quantity": 1,
    "size": "standard-1X",
    "type": "web",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### Formation Update

Update process type

```
PATCH /apps/{app_id_or_name}/formation/{formation_id_or_type}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **quantity** | *integer* | number of processes to maintain | `1` |
| **size** | *string* | dyno size (default: "standard-1X") | `"standard-1X"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME/formation/$FORMATION_ID_OR_TYPE \
  -d '{
  "quantity": 1,
  "size": "standard-1X"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "command": "bundle exec rails server -p $PORT",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "quantity": 1,
  "size": "standard-1X",
  "type": "web",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-inbound-ruleset">Inbound Ruleset</a>

Stability: `prototype`

An inbound-ruleset is a collection of rules that specify what hosts can or cannot connect to an application.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when inbound-ruleset was created | `"2012-01-01T12:00:00Z"` |
| **[created_by](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **id** | *uuid* | unique identifier of an inbound-ruleset | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **rules** | *array* |  | `[{"action":"allow","source":"1.1.1.1/1"}]` |

### Inbound Ruleset Info

Current inbound ruleset for a space

```
GET /spaces/{space_id_or_name}/inbound-ruleset
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/inbound-ruleset
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "rules": [
    {
      "action": "allow",
      "source": "1.1.1.1/1"
    }
  ],
  "created_by": "username@example.com"
}
```

### Inbound Ruleset Info

Info on an existing Inbound Ruleset

```
GET /spaces/{space_id_or_name}/inbound-rulesets/{inbound_ruleset_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/inbound-rulesets/$INBOUND_RULESET_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "rules": [
    {
      "action": "allow",
      "source": "1.1.1.1/1"
    }
  ],
  "created_by": "username@example.com"
}
```

### Inbound Ruleset List

List all inbound rulesets for a space

```
GET /spaces/{space_id_or_name}/inbound-rulesets
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/inbound-rulesets
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "created_at": "2012-01-01T12:00:00Z",
    "rules": [
      {
        "action": "allow",
        "source": "1.1.1.1/1"
      }
    ],
    "created_by": "username@example.com"
  }
]
```

### Inbound Ruleset Create

Create a new inbound ruleset

```
PUT /spaces/{space_id_or_name}/inbound-ruleset
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **rules** | *array* |  | `[{"action":"allow","source":"1.1.1.1/1"}]` |


#### Curl Example

```bash
$ curl -n -X PUT https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/inbound-ruleset \
  -d '{
  "rules": [
    {
      "action": "allow",
      "source": "1.1.1.1/1"
    }
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "rules": [
    {
      "action": "allow",
      "source": "1.1.1.1/1"
    }
  ],
  "created_by": "username@example.com"
}
```


## <a name="resource-invitation">Invitation</a>

Stability: `production`

An invitation represents an invite sent to a user to use the Heroku platform.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when invitation was created | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Invitation Info

Info for invitation.

```
GET /invitations/{invitation_token}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/invitations/$INVITATION_TOKEN
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Invitation Finalize Invitation

Finalize Invitation and Create Account.

```
PATCH /invitations/{invitation_token}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **password** | *string* | current password on the account | `"currentpassword"` |
| **password_confirmation** | *string* | current password on the account | `"currentpassword"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **receive_newsletter** | *boolean* | whether this user should receive a newsletter or not | `false` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/invitations/$INVITATION_TOKEN \
  -d '{
  "password": "currentpassword",
  "password_confirmation": "currentpassword",
  "receive_newsletter": false
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Invitation Invitation

Invite a user.

```
POST /invitations
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **email** | *email* | unique email address | `"username@example.com"` |
| **name** | *nullable string* | full name of the account owner | `"Tina Edmonds"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/invitations \
  -d '{
  "email": "username@example.com",
  "name": "Tina Edmonds"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```


## <a name="resource-invoice">Invoice</a>

Stability: `development`

An invoice is an itemized bill of goods for an account which includes pricing and charges.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **charges_total** | *number* | total charges on this invoice | `100.0` |
| **created_at** | *date-time* | when invoice was created | `"2012-01-01T12:00:00Z"` |
| **credits_total** | *number* | total credits on this invoice | `100.0` |
| **id** | *uuid* | unique identifier of this invoice | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **number** | *integer* | human readable invoice number | `9403943` |
| **period_end** | *string* | the ending date that the invoice covers | `"01/31/2014"` |
| **period_start** | *string* | the starting date that this invoice covers | `"01/01/2014"` |
| **state** | *integer* | payment status for this invoice (pending, successful, failed) | `1` |
| **total** | *number* | combined total of charges and credits on this invoice | `100.0` |
| **updated_at** | *date-time* | when invoice was updated | `"2012-01-01T12:00:00Z"` |

### Invoice Info

Info for existing invoice.

```
GET /account/invoices/{invoice_number}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/invoices/$INVOICE_NUMBER
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "charges_total": 100.0,
  "created_at": "2012-01-01T12:00:00Z",
  "credits_total": 100.0,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "number": 9403943,
  "period_end": "01/31/2014",
  "period_start": "01/01/2014",
  "state": 1,
  "total": 100.0,
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Invoice List

List existing invoices.

```
GET /account/invoices
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/invoices
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "charges_total": 100.0,
    "created_at": "2012-01-01T12:00:00Z",
    "credits_total": 100.0,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "number": 9403943,
    "period_end": "01/31/2014",
    "period_start": "01/01/2014",
    "state": 1,
    "total": 100.0,
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-invoice-address">Invoice Address</a>

Stability: `development`

An invoice address represents the address that should be listed on an invoice.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **address_1** | *string* | invoice street address line 1 | `"40 Hickory Blvd."` |
| **address_2** | *string* | invoice street address line 2 | `"Suite 300"` |
| **city** | *string* | invoice city | `"Seattle"` |
| **country** | *string* | country | `"US"` |
| **heroku_id** | *string* | heroku_id identifier reference | `"user930223902@heroku.com"` |
| **other** | *string* | metadata / additional information to go on invoice | `"Company ABC Inc. VAT 903820"` |
| **postal_code** | *string* | invoice zip code | `"98101"` |
| **state** | *string* | invoice state | `"WA"` |
| **use_invoice_address** | *boolean* | flag to use the invoice address for an account or not | `true` |

### Invoice Address info

Retrieve existing invoice address.

```
GET /account/invoice-address
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/invoice-address
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "address_1": "40 Hickory Blvd.",
  "address_2": "Suite 300",
  "city": "Seattle",
  "country": "US",
  "heroku_id": "user930223902@heroku.com",
  "other": "Company ABC Inc. VAT 903820",
  "postal_code": "98101",
  "state": "WA",
  "use_invoice_address": true
}
```

### Invoice Address update

Update invoice address for an account.

```
PUT /account/invoice-address
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **address_1** | *string* | invoice street address line 1 | `"40 Hickory Blvd."` |
| **address_2** | *string* | invoice street address line 2 | `"Suite 300"` |
| **city** | *string* | invoice city | `"Seattle"` |
| **country** | *string* | country | `"US"` |
| **other** | *string* | metadata / additional information to go on invoice | `"Company ABC Inc. VAT 903820"` |
| **postal_code** | *string* | invoice zip code | `"98101"` |
| **state** | *string* | invoice state | `"WA"` |
| **use_invoice_address** | *boolean* | flag to use the invoice address for an account or not | `true` |


#### Curl Example

```bash
$ curl -n -X PUT https://api.heroku.com/account/invoice-address \
  -d '{
  "address_1": "40 Hickory Blvd.",
  "address_2": "Suite 300",
  "city": "Seattle",
  "country": "US",
  "other": "Company ABC Inc. VAT 903820",
  "postal_code": "98101",
  "state": "WA",
  "use_invoice_address": true
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "address_1": "40 Hickory Blvd.",
  "address_2": "Suite 300",
  "city": "Seattle",
  "country": "US",
  "heroku_id": "user930223902@heroku.com",
  "other": "Company ABC Inc. VAT 903820",
  "postal_code": "98101",
  "state": "WA",
  "use_invoice_address": true
}
```


## <a name="resource-key">Key</a>

Stability: `production`

Keys represent public SSH keys associated with an account and are used to authorize accounts as they are performing git operations.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **comment** | *string* | comment on the key | `"username@host"` |
| **created_at** | *date-time* | when key was created | `"2012-01-01T12:00:00Z"` |
| **email** | *string* | deprecated. Please refer to 'comment' instead | `"username@host"` |
| **fingerprint** | *string* | a unique identifying string based on contents | `"17:63:a4:ba:24:d3:7f:af:17:c8:94:82:7e:80:56:bf"` |
| **id** | *uuid* | unique identifier of this key | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **public_key** | *string* | full public_key as uploaded | `"ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com"` |
| **updated_at** | *date-time* | when key was updated | `"2012-01-01T12:00:00Z"` |

### Key Create

Create a new key.

```
POST /account/keys
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **public_key** | *string* | full public_key as uploaded | `"ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/account/keys \
  -d '{
  "public_key": "ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "comment": "username@host",
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@host",
  "fingerprint": "17:63:a4:ba:24:d3:7f:af:17:c8:94:82:7e:80:56:bf",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "public_key": "ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Key Delete

Delete an existing key

```
DELETE /account/keys/{key_id_or_fingerprint}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/account/keys/$KEY_ID_OR_FINGERPRINT \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "comment": "username@host",
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@host",
  "fingerprint": "17:63:a4:ba:24:d3:7f:af:17:c8:94:82:7e:80:56:bf",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "public_key": "ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Key Info

Info for existing key.

```
GET /account/keys/{key_id_or_fingerprint}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/keys/$KEY_ID_OR_FINGERPRINT
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "comment": "username@host",
  "created_at": "2012-01-01T12:00:00Z",
  "email": "username@host",
  "fingerprint": "17:63:a4:ba:24:d3:7f:af:17:c8:94:82:7e:80:56:bf",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "public_key": "ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Key List

List existing keys.

```
GET /account/keys
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/keys
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "comment": "username@host",
    "created_at": "2012-01-01T12:00:00Z",
    "email": "username@host",
    "fingerprint": "17:63:a4:ba:24:d3:7f:af:17:c8:94:82:7e:80:56:bf",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "public_key": "ssh-rsa AAAAB3NzaC1ycVc/../839Uv username@example.com",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-log-drain">Log Drain</a>

Stability: `production`

[Log drains](https://devcenter.heroku.com/articles/log-drains) provide a way to forward your Heroku logs to an external syslog server for long-term archiving. This external service must be configured to receive syslog packets from Heroku, whereupon its URL can be added to an app using this API. Some addons will add a log drain when they are provisioned to an app. These drains can only be removed by removing the add-on.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[addon](#resource-addon)** | *nullable object* | addon that created the drain | `{"id":"01234567-89ab-cdef-0123-456789abcdef","name":"singing-swiftly-1242"}` |
| **[addon:id](#resource-addon)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon:name](#resource-addon)** | *string* | globally name of the add-on<br/> **pattern:** `^[a-zA-Z][A-Za-z0-9_-]+$` | `"acme-inc-primary-database"` |
| **created_at** | *date-time* | when log drain was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this log drain | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **token** | *string* | token associated with the log drain | `"d.01234567-89ab-cdef-0123-456789abcdef"` |
| **updated_at** | *date-time* | when log drain was updated | `"2012-01-01T12:00:00Z"` |
| **url** | *string* | url associated with the log drain | `"https://example.com/drain"` |

### Log Drain Create

Create a new log drain.

```
POST /apps/{app_id_or_name}/log-drains
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **url** | *string* | url associated with the log drain | `"https://example.com/drain"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/log-drains \
  -d '{
  "url": "https://example.com/drain"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "addon": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "singing-swiftly-1242"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "token": "d.01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "url": "https://example.com/drain"
}
```

### Log Drain Delete

Delete an existing log drain. Log drains added by add-ons can only be removed by removing the add-on.

```
DELETE /apps/{app_id_or_name}/log-drains/{log_drain_id_or_url_or_token}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME/log-drains/$LOG_DRAIN_ID_OR_URL_OR_TOKEN \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "addon": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "singing-swiftly-1242"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "token": "d.01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "url": "https://example.com/drain"
}
```

### Log Drain Info

Info for existing log drain.

```
GET /apps/{app_id_or_name}/log-drains/{log_drain_id_or_url_or_token}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/log-drains/$LOG_DRAIN_ID_OR_URL_OR_TOKEN
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "addon": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "singing-swiftly-1242"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "token": "d.01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "url": "https://example.com/drain"
}
```

### Log Drain List

List existing log drains.

```
GET /apps/{app_id_or_name}/log-drains
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/log-drains
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "addon": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "singing-swiftly-1242"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "d.01234567-89ab-cdef-0123-456789abcdef",
    "updated_at": "2012-01-01T12:00:00Z",
    "url": "https://example.com/drain"
  }
]
```


## <a name="resource-log-session">Log Session</a>

Stability: `production`

A log session is a reference to the http based log stream for an app.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when log connection was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this log session | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **logplex_url** | *string* | URL for log streaming session | `"https://logplex.heroku.com/sessions/01234567-89ab-cdef-0123-456789abcdef?srv=1325419200"` |
| **updated_at** | *date-time* | when log session was updated | `"2012-01-01T12:00:00Z"` |

### Log Session Create

Create a new log session.

```
POST /apps/{app_id_or_name}/log-sessions
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **dyno** | *string* | dyno to limit results to | `"web.1"` |
| **lines** | *integer* | number of log lines to stream at once | `10` |
| **source** | *string* | log source to limit results to | `"app"` |
| **tail** | *boolean* | whether to stream ongoing logs | `true` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/log-sessions \
  -d '{
  "dyno": "web.1",
  "lines": 10,
  "source": "app",
  "tail": true
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "logplex_url": "https://logplex.heroku.com/sessions/01234567-89ab-cdef-0123-456789abcdef?srv=1325419200",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-oauth-authorization">OAuth Authorization</a>

Stability: `production`

OAuth authorizations represent clients that a Heroku user has authorized to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[access_token](#resource-oauth-token)** | *nullable object* | access token for this authorization | `null` |
| **[access_token:expires_in](#resource-oauth-token)** | *nullable integer* | seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime | `2592000` |
| **[access_token:id](#resource-oauth-token)** | *uuid* | unique identifier of OAuth token | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[access_token:token](#resource-oauth-token)** | *string* | contents of the token to be used for authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[client](#resource-oauth-client)** | *nullable object* | identifier of the client that obtained this authorization, if any | `null` |
| **[client:id](#resource-oauth-client)** | *uuid* | unique identifier of this OAuth client | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[client:name](#resource-oauth-client)** | *string* | OAuth client name | `"example"` |
| **[client:redirect_uri](#resource-oauth-client)** | *string* | endpoint for redirection after authorization with OAuth client | `"https://example.com/auth/heroku/callback"` |
| **created_at** | *date-time* | when OAuth authorization was created | `"2012-01-01T12:00:00Z"` |
| **[grant](#resource-oauth-grant)** | *nullable object* | this authorization's grant | `null` |
| **[grant:code](#resource-oauth-grant)** | *string* | grant code received from OAuth web application authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[grant:expires_in](#resource-oauth-grant)** | *integer* | seconds until OAuth grant expires | `2592000` |
| **[grant:id](#resource-oauth-grant)** | *uuid* | unique identifier of OAuth grant | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **id** | *uuid* | unique identifier of OAuth authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[refresh_token](#resource-oauth-token)** | *nullable object* | refresh token for this authorization | `null` |
| **[refresh_token:expires_in](#resource-oauth-token)** | *nullable integer* | seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime | `2592000` |
| **[refresh_token:id](#resource-oauth-token)** | *uuid* | unique identifier of OAuth token | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[refresh_token:token](#resource-oauth-token)** | *string* | contents of the token to be used for authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **scope** | *array* | The scope of access OAuth authorization allows | `["global"]` |
| **updated_at** | *date-time* | when OAuth authorization was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:full_name](#resource-account)** | *nullable string* | full name of the account owner | `"Tina Edmonds"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### OAuth Authorization Create

Create a new OAuth authorization.

```
POST /oauth/authorizations
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **scope** | *array* | The scope of access OAuth authorization allows | `["global"]` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **client** | *string* | unique identifier of this OAuth client | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **description** | *string* | human-friendly description of this OAuth authorization | `"sample authorization"` |
| **expires_in** | *nullable integer* | seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime | `2592000` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/oauth/authorizations \
  -d '{
  "client": "01234567-89ab-cdef-0123-456789abcdef",
  "description": "sample authorization",
  "expires_in": 2592000,
  "scope": [
    "global"
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "access_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "client": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "redirect_uri": "https://example.com/auth/heroku/callback"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "grant": {
    "code": "01234567-89ab-cdef-0123-456789abcdef",
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "refresh_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "scope": [
    "global"
  ],
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com",
    "full_name": "Tina Edmonds"
  }
}
```

### OAuth Authorization Delete

Delete OAuth authorization.

```
DELETE /oauth/authorizations/{oauth_authorization_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/oauth/authorizations/$OAUTH_AUTHORIZATION_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "access_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "client": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "redirect_uri": "https://example.com/auth/heroku/callback"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "grant": {
    "code": "01234567-89ab-cdef-0123-456789abcdef",
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "refresh_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "scope": [
    "global"
  ],
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com",
    "full_name": "Tina Edmonds"
  }
}
```

### OAuth Authorization Info

Info for an OAuth authorization.

```
GET /oauth/authorizations/{oauth_authorization_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/oauth/authorizations/$OAUTH_AUTHORIZATION_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "access_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "client": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "redirect_uri": "https://example.com/auth/heroku/callback"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "grant": {
    "code": "01234567-89ab-cdef-0123-456789abcdef",
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "refresh_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "scope": [
    "global"
  ],
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com",
    "full_name": "Tina Edmonds"
  }
}
```

### OAuth Authorization List

List OAuth authorizations.

```
GET /oauth/authorizations
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/oauth/authorizations
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "access_token": {
      "expires_in": 2592000,
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "token": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "client": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example",
      "redirect_uri": "https://example.com/auth/heroku/callback"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "grant": {
      "code": "01234567-89ab-cdef-0123-456789abcdef",
      "expires_in": 2592000,
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "refresh_token": {
      "expires_in": 2592000,
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "token": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "scope": [
      "global"
    ],
    "updated_at": "2012-01-01T12:00:00Z",
    "user": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "email": "username@example.com",
      "full_name": "Tina Edmonds"
    }
  }
]
```

### OAuth Authorization Regenerate

Regenerate OAuth tokens. This endpoint is only available to direct authorizations or privileged OAuth clients.

```
POST /oauth/authorizations/{oauth_authorization_id}/actions/regenerate-tokens
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/oauth/authorizations/$OAUTH_AUTHORIZATION_ID/actions/regenerate-tokens \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "access_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "client": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "redirect_uri": "https://example.com/auth/heroku/callback"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "grant": {
    "code": "01234567-89ab-cdef-0123-456789abcdef",
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "refresh_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "scope": [
    "global"
  ],
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com",
    "full_name": "Tina Edmonds"
  }
}
```


## <a name="resource-oauth-client">OAuth Client</a>

Stability: `production`

OAuth clients are applications that Heroku users can authorize to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth).

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when OAuth client was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this OAuth client | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **ignores_delinquent** | *nullable boolean* | whether the client is still operable given a delinquent account | `false` |
| **name** | *string* | OAuth client name | `"example"` |
| **redirect_uri** | *string* | endpoint for redirection after authorization with OAuth client | `"https://example.com/auth/heroku/callback"` |
| **secret** | *string* | secret used to obtain OAuth authorizations under this client | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **updated_at** | *date-time* | when OAuth client was updated | `"2012-01-01T12:00:00Z"` |

### OAuth Client Create

Create a new OAuth client.

```
POST /oauth/clients
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | OAuth client name | `"example"` |
| **redirect_uri** | *string* | endpoint for redirection after authorization with OAuth client | `"https://example.com/auth/heroku/callback"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/oauth/clients \
  -d '{
  "name": "example",
  "redirect_uri": "https://example.com/auth/heroku/callback"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "ignores_delinquent": false,
  "name": "example",
  "redirect_uri": "https://example.com/auth/heroku/callback",
  "secret": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### OAuth Client Delete

Delete OAuth client.

```
DELETE /oauth/clients/{oauth_client_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/oauth/clients/$OAUTH_CLIENT_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "ignores_delinquent": false,
  "name": "example",
  "redirect_uri": "https://example.com/auth/heroku/callback",
  "secret": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### OAuth Client Info

Info for an OAuth client

```
GET /oauth/clients/{oauth_client_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/oauth/clients/$OAUTH_CLIENT_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "ignores_delinquent": false,
  "name": "example",
  "redirect_uri": "https://example.com/auth/heroku/callback",
  "secret": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### OAuth Client List

List OAuth clients

```
GET /oauth/clients
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/oauth/clients
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "ignores_delinquent": false,
    "name": "example",
    "redirect_uri": "https://example.com/auth/heroku/callback",
    "secret": "01234567-89ab-cdef-0123-456789abcdef",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### OAuth Client Update

Update OAuth client

```
PATCH /oauth/clients/{oauth_client_id}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | OAuth client name | `"example"` |
| **redirect_uri** | *string* | endpoint for redirection after authorization with OAuth client | `"https://example.com/auth/heroku/callback"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/oauth/clients/$OAUTH_CLIENT_ID \
  -d '{
  "name": "example",
  "redirect_uri": "https://example.com/auth/heroku/callback"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "ignores_delinquent": false,
  "name": "example",
  "redirect_uri": "https://example.com/auth/heroku/callback",
  "secret": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### OAuth Client Rotate Credentials

Rotate credentials for an OAuth client

```
POST /oauth/clients/{oauth_client_id}/actions/rotate-credentials
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/oauth/clients/$OAUTH_CLIENT_ID/actions/rotate-credentials \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "ignores_delinquent": false,
  "name": "example",
  "redirect_uri": "https://example.com/auth/heroku/callback",
  "secret": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-oauth-grant">OAuth Grant</a>

Stability: `production`

OAuth grants are used to obtain authorizations on behalf of a user. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)


## <a name="resource-oauth-token">OAuth Token</a>

Stability: `production`

OAuth tokens provide access for authorized clients to act on behalf of a Heroku user to automate, customize or extend their usage of the platform. For more information please refer to the [Heroku OAuth documentation](https://devcenter.heroku.com/articles/oauth)

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **access_token:expires_in** | *nullable integer* | seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime | `2592000` |
| **access_token:id** | *uuid* | unique identifier of OAuth token | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **access_token:token** | *string* | contents of the token to be used for authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[authorization:id](#resource-oauth-authorization)** | *uuid* | unique identifier of OAuth authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[client](#resource-oauth-client)** | *nullable object* | OAuth client secret used to obtain token | `null` |
| **[client:secret](#resource-oauth-client)** | *string* | secret used to obtain OAuth authorizations under this client | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **created_at** | *date-time* | when OAuth token was created | `"2012-01-01T12:00:00Z"` |
| **[grant:code](#resource-oauth-grant)** | *string* | grant code received from OAuth web application authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[grant:type](#resource-oauth-grant)** | *string* | type of grant requested, one of `authorization_code` or `refresh_token` | `"authorization_code"` |
| **id** | *uuid* | unique identifier of OAuth token | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **refresh_token:expires_in** | *nullable integer* | seconds until OAuth token expires; may be `null` for tokens with indefinite lifetime | `2592000` |
| **refresh_token:id** | *uuid* | unique identifier of OAuth token | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **refresh_token:token** | *string* | contents of the token to be used for authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **session:id** | *uuid* | unique identifier of OAuth token | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **updated_at** | *date-time* | when OAuth token was updated | `"2012-01-01T12:00:00Z"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### OAuth Token Create

Create a new OAuth token.

```
POST /oauth/tokens
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **client:secret** | *string* | secret used to obtain OAuth authorizations under this client | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **grant:code** | *string* | grant code received from OAuth web application authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **grant:type** | *string* | type of grant requested, one of `authorization_code` or `refresh_token` | `"authorization_code"` |
| **refresh_token:token** | *string* | contents of the token to be used for authorization | `"01234567-89ab-cdef-0123-456789abcdef"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/oauth/tokens \
  -d '{
  "client": {
    "secret": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "grant": {
    "code": "01234567-89ab-cdef-0123-456789abcdef",
    "type": "authorization_code"
  },
  "refresh_token": {
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  }
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "access_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "authorization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "client": {
    "secret": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "grant": {
    "code": "01234567-89ab-cdef-0123-456789abcdef",
    "type": "authorization_code"
  },
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "refresh_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "session": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### OAuth Token Delete

Revoke OAuth access token.

```
DELETE /oauth/tokens/{oauth_token_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/oauth/tokens/$OAUTH_TOKEN_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "access_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "authorization": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "client": {
    "secret": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "grant": {
    "code": "01234567-89ab-cdef-0123-456789abcdef",
    "type": "authorization_code"
  },
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "refresh_token": {
    "expires_in": 2592000,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "token": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "session": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```


## <a name="resource-organization">Organization</a>

Stability: `prototype`

Organizations allow you to manage access to a shared group of applications across your development team.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when the organization was created | `"2012-01-01T12:00:00Z"` |
| **credit_card_collections** | *boolean* | whether charges incurred by the org are paid by credit card. | `true` |
| **default** | *boolean* | whether to use this organization when none is specified | `true` |
| **id** | *uuid* | unique identifier of organization | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of organization | `"example"` |
| **provisioned_licenses** | *boolean* | whether the org is provisioned licenses by salesforce. | `true` |
| **role** | *nullable string* | role in the organization<br/> **one of:**`"admin"` or `"collaborator"` or `"member"` or `"owner"` or `null` | `"admin"` |
| **updated_at** | *date-time* | when the organization was updated | `"2012-01-01T12:00:00Z"` |

### Organization List

List organizations in which you are a member.

```
GET /organizations
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "created_at": "2012-01-01T12:00:00Z",
    "credit_card_collections": true,
    "default": true,
    "name": "example",
    "provisioned_licenses": true,
    "role": "admin",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### Organization Info

Info for an organization.

```
GET /organizations/{organization_name_or_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "credit_card_collections": true,
  "default": true,
  "name": "example",
  "provisioned_licenses": true,
  "role": "admin",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Organization Update

Set or unset the organization as your default organization.

```
PATCH /organizations/{organization_name_or_id}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **default** | *boolean* | whether to use this organization when none is specified | `true` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID \
  -d '{
  "default": true
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "credit_card_collections": true,
  "default": true,
  "name": "example",
  "provisioned_licenses": true,
  "role": "admin",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-organization-addon">Organization Add-on</a>

Stability: `production`

A list of add-ons the Organization uses across all apps

### Organization Add-on List For Organization

List add-ons used across all Organization apps

```
GET /organizations/{organization_name_or_id}/addons
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/addons
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "actions": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "label": "Example",
      "action": "example",
      "url": "http://example.com?resource_id=:resource_id",
      "requires_owner": true
    },
    "addon_service": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql"
    },
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "example"
    },
    "config_vars": [
      "FOO",
      "BAZ"
    ],
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "acme-inc-primary-database",
    "plan": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql:dev"
    },
    "provider_id": "abcd1234",
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://postgres.heroku.com/databases/01234567-89ab-cdef-0123-456789abcdef"
  }
]
```


## <a name="resource-organization-app">Organization App</a>

Stability: `prototype`

An organization app encapsulates the organization specific functionality of Heroku apps.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[archived_at](#resource-app)** | *nullable date-time* | when app was archived | `"2012-01-01T12:00:00Z"` |
| **[buildpack_provided_description](#resource-app)** | *nullable string* | description from buildpack of app | `"Ruby/Rack"` |
| **[created_at](#resource-app)** | *date-time* | when app was created | `"2012-01-01T12:00:00Z"` |
| **[git_url](#resource-app)** | *string* | git repo URL of app<br/> **pattern:** `^https://git\.heroku\.com/[a-z][a-z0-9-]{2,29}\.git$` | `"https://git.heroku.com/example.git"` |
| **[id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **joined** | *boolean* | is the current member a collaborator on this app. | `false` |
| **locked** | *boolean* | are other organization members forbidden from joining this app. | `false` |
| **[maintenance](#resource-app)** | *boolean* | maintenance status of app | `false` |
| **[name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **[organization](#resource-organization)** | *nullable object* | organization that owns this app | `null` |
| **[organization:name](#resource-organization)** | *string* | unique name of organization | `"example"` |
| **[owner](#resource-account)** | *nullable object* | identity of app owner | `null` |
| **[owner:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[owner:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[region:id](#resource-region)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[region:name](#resource-region)** | *string* | name of region | `"us"` |
| **[released_at](#resource-app)** | *nullable date-time* | when app was released | `"2012-01-01T12:00:00Z"` |
| **[repo_size](#resource-app)** | *nullable integer* | git repo size in bytes of app | `0` |
| **[slug_size](#resource-app)** | *nullable integer* | slug size in bytes of app | `0` |
| **[space](#resource-space)** | *nullable object* | identity of space | `null` |
| **[space:id](#resource-space)** | *uuid* | unique identifier of space | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[space:name](#resource-space)** | *string* | unique name of space<br/> **pattern:** `^[a-z0-9](?:[a-z0-9]&#124;-(?!-))+[a-z0-9]$` | `"nasa"` |
| **[stack:id](#resource-stack)** | *uuid* | identifier of stack | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[stack:name](#resource-stack)** | *string* | unique name | `"cedar-14"` |
| **[updated_at](#resource-app)** | *date-time* | when app was updated | `"2012-01-01T12:00:00Z"` |
| **[web_url](#resource-app)** | *uri* | web URL of app<br/> **pattern:** `^https?://[a-z][a-z0-9-]{3,30}\.herokuapp\.com/$` | `"https://example.herokuapp.com/"` |

### Organization App Create

Create a new app in the specified organization, in the default organization if unspecified,  or in personal account, if default organization is not set.

```
POST /organizations/apps
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **locked** | *boolean* | are other organization members forbidden from joining this app. | `false` |
| **name** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **organization** | *string* | unique name of organization | `"example"` |
| **personal** | *boolean* | force creation of the app in the user account even if a default org is set. | `false` |
| **region** | *string* | name of region | `"us"` |
| **space** | *string* | unique name of space<br/> **pattern:** `^[a-z0-9](?:[a-z0-9]&#124;-(?!-))+[a-z0-9]$` | `"nasa"` |
| **stack** | *string* | unique name | `"cedar-14"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/organizations/apps \
  -d '{
  "locked": false,
  "name": "example",
  "organization": "example",
  "personal": false,
  "region": "us",
  "space": "nasa",
  "stack": "cedar-14"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "joined": false,
  "locked": false,
  "maintenance": false,
  "name": "example",
  "organization": {
    "name": "example"
  },
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```

### Organization App List

List apps in the default organization, or in personal account, if default organization is not set.

```
GET /organizations/apps
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/apps
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "archived_at": "2012-01-01T12:00:00Z",
    "buildpack_provided_description": "Ruby/Rack",
    "created_at": "2012-01-01T12:00:00Z",
    "git_url": "https://git.heroku.com/example.git",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "joined": false,
    "locked": false,
    "maintenance": false,
    "name": "example",
    "organization": {
      "name": "example"
    },
    "owner": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "region": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "us"
    },
    "released_at": "2012-01-01T12:00:00Z",
    "repo_size": 0,
    "slug_size": 0,
    "space": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "nasa"
    },
    "stack": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "cedar-14"
    },
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://example.herokuapp.com/"
  }
]
```

### Organization App List For Organization

List organization apps.

```
GET /organizations/{organization_name_or_id}/apps
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/apps
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "archived_at": "2012-01-01T12:00:00Z",
    "buildpack_provided_description": "Ruby/Rack",
    "created_at": "2012-01-01T12:00:00Z",
    "git_url": "https://git.heroku.com/example.git",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "joined": false,
    "locked": false,
    "maintenance": false,
    "name": "example",
    "organization": {
      "name": "example"
    },
    "owner": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "region": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "us"
    },
    "released_at": "2012-01-01T12:00:00Z",
    "repo_size": 0,
    "slug_size": 0,
    "space": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "nasa"
    },
    "stack": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "cedar-14"
    },
    "updated_at": "2012-01-01T12:00:00Z",
    "web_url": "https://example.herokuapp.com/"
  }
]
```

### Organization App Info

Info for an organization app.

```
GET /organizations/apps/{organization_app_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "joined": false,
  "locked": false,
  "maintenance": false,
  "name": "example",
  "organization": {
    "name": "example"
  },
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```

### Organization App Update Locked

Lock or unlock an organization app.

```
PATCH /organizations/apps/{organization_app_name}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **locked** | *boolean* | are other organization members forbidden from joining this app. | `false` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME \
  -d '{
  "locked": false
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "joined": false,
  "locked": false,
  "maintenance": false,
  "name": "example",
  "organization": {
    "name": "example"
  },
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```

### Organization App Transfer to Account

Transfer an existing organization app to another Heroku account.

```
PATCH /organizations/apps/{organization_app_name}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **owner** | *string* | unique email address, identifier of an account or Implicit reference to currently authorized user | `"username@example.com"` or `"01234567-89ab-cdef-0123-456789abcdef"` or `"~"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME \
  -d '{
  "owner": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "joined": false,
  "locked": false,
  "maintenance": false,
  "name": "example",
  "organization": {
    "name": "example"
  },
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```

### Organization App Transfer to Organization

Transfer an existing organization app to another organization.

```
PATCH /organizations/apps/{organization_app_name}
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **owner** | *string* | unique name of organization | `"example"` |



#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME \
  -d '{
  "owner": "example"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "archived_at": "2012-01-01T12:00:00Z",
  "buildpack_provided_description": "Ruby/Rack",
  "created_at": "2012-01-01T12:00:00Z",
  "git_url": "https://git.heroku.com/example.git",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "joined": false,
  "locked": false,
  "maintenance": false,
  "name": "example",
  "organization": {
    "name": "example"
  },
  "owner": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "released_at": "2012-01-01T12:00:00Z",
  "repo_size": 0,
  "slug_size": 0,
  "space": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa"
  },
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "web_url": "https://example.herokuapp.com/"
}
```


## <a name="resource-organization-app-collaborator">Organization App Collaborator</a>

Stability: `prototype`

An organization collaborator represents an account that has been given access to an organization app on Heroku.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **[created_at](#resource-collaborator)** | *date-time* | when collaborator was created | `"2012-01-01T12:00:00Z"` |
| **[id](#resource-collaborator)** | *uuid* | unique identifier of collaborator | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[role](#resource-organization)** | *nullable string* | role in the organization<br/> **one of:**`"admin"` or `"collaborator"` or `"member"` or `"owner"` or `null` | `"admin"` |
| **[updated_at](#resource-collaborator)** | *date-time* | when collaborator was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Organization App Collaborator Create

Create a new collaborator on an organization app. Use this endpoint instead of the `/apps/{app_id_or_name}/collaborator` endpoint when you want the collaborator to be granted [permissions] (https://devcenter.heroku.com/articles/org-users-access#roles-and-app-permissions) according to their role in the organization.

```
POST /organizations/apps/{app_id_or_name}/collaborators
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **user** | *string* | unique email address, identifier of an account or Implicit reference to currently authorized user | `"username@example.com"` or `"01234567-89ab-cdef-0123-456789abcdef"` or `"~"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **silent** | *boolean* | whether to suppress email invitation when creating collaborator | `false` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/organizations/apps/$APP_ID_OR_NAME/collaborators \
  -d '{
  "silent": false,
  "user": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "role": "admin",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Organization App Collaborator Delete

Delete an existing collaborator from an organization app.

```
DELETE /organizations/apps/{organization_app_name}/collaborators/{organization_app_collaborator_email}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME/collaborators/$ORGANIZATION_APP_COLLABORATOR_EMAIL \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "role": "admin",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Organization App Collaborator Info

Info for a collaborator on an organization app.

```
GET /organizations/apps/{organization_app_name}/collaborators/{organization_app_collaborator_email}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME/collaborators/$ORGANIZATION_APP_COLLABORATOR_EMAIL
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "role": "admin",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Organization App Collaborator Update

Update an existing collaborator from an organization app.

```
PATCH /organizations/apps/{organization_app_name}/collaborators/{organization_app_collaborator_email}
```


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME/collaborators/$ORGANIZATION_APP_COLLABORATOR_EMAIL \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "role": "admin",
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Organization App Collaborator List

List collaborators on an organization app.

```
GET /organizations/apps/{organization_app_name}/collaborators
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/apps/$ORGANIZATION_APP_NAME/collaborators
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "role": "admin",
    "updated_at": "2012-01-01T12:00:00Z",
    "user": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    }
  }
]
```


## <a name="resource-organization-invoice">Organization Invoice</a>

Stability: `prototype`

An organization invoice is an itemized bill of goods for an organization which includes pricing and charges.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **addons_total** | *integer* | total addons charges in on this invoice | `25000` |
| **charges_total** | *integer* | total charges on this invoice | `0` |
| **created_at** | *date-time* | when invoice was created | `"2012-01-01T12:00:00Z"` |
| **credits_total** | *integer* | total credits on this invoice | `100000` |
| **database_total** | *integer* | total database charges on this invoice | `25000` |
| **dyno_units** | *number* | The total amount of dyno units consumed across dyno types. | `1.92` |
| **id** | *uuid* | unique identifier of this invoice | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **number** | *integer* | human readable invoice number | `9403943` |
| **payment_status** | *string* | Status of the invoice payment. | `"Paid"` |
| **period_end** | *string* | the ending date that the invoice covers | `"01/31/2014"` |
| **period_start** | *string* | the starting date that this invoice covers | `"01/01/2014"` |
| **platform_total** | *integer* | total platform charges on this invoice | `50000` |
| **state** | *integer* | payment status for this invoice (pending, successful, failed) | `1` |
| **total** | *integer* | combined total of charges and credits on this invoice | `100000` |
| **updated_at** | *date-time* | when invoice was updated | `"2012-01-01T12:00:00Z"` |
| **weighted_dyno_hours** | *number* | The total amount of hours consumed across dyno types. | `1488` |

### Organization Invoice Info

Info for existing invoice.

```
GET /organizations/{organization_name_or_id}/invoices/{organization_invoice_number}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/invoices/$ORGANIZATION_INVOICE_NUMBER
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "addons_total": 25000,
  "database_total": 25000,
  "charges_total": 0,
  "created_at": "2012-01-01T12:00:00Z",
  "credits_total": 100000,
  "dyno_units": 1.92,
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "number": 9403943,
  "payment_status": "Paid",
  "period_end": "01/31/2014",
  "period_start": "01/01/2014",
  "platform_total": 50000,
  "state": 1,
  "total": 100000,
  "updated_at": "2012-01-01T12:00:00Z",
  "weighted_dyno_hours": 1488
}
```

### Organization Invoice List

List existing invoices.

```
GET /organizations/{organization_name_or_id}/invoices
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/invoices
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "addons_total": 25000,
    "database_total": 25000,
    "charges_total": 0,
    "created_at": "2012-01-01T12:00:00Z",
    "credits_total": 100000,
    "dyno_units": 1.92,
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "number": 9403943,
    "payment_status": "Paid",
    "period_end": "01/31/2014",
    "period_start": "01/01/2014",
    "platform_total": 50000,
    "state": 1,
    "total": 100000,
    "updated_at": "2012-01-01T12:00:00Z",
    "weighted_dyno_hours": 1488
  }
]
```


## <a name="resource-organization-member">Organization Member</a>

Stability: `prototype`

An organization member is an individual with access to an organization.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when the membership record was created | `"2012-01-01T12:00:00Z"` |
| **email** | *string* | email address of the organization member | `"someone@example.org"` |
| **[role](#resource-organization)** | *nullable string* | role in the organization<br/> **one of:**`"admin"` or `"collaborator"` or `"member"` or `"owner"` or `null` | `"admin"` |
| **two_factor_authentication** | *boolean* | whether the Enterprise organization member has two factor authentication enabled | `true` |
| **updated_at** | *date-time* | when the membership record was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Organization Member Create or Update

Create a new organization member, or update their role.

```
PUT /organizations/{organization_name_or_id}/members
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **email** | *string* | email address of the organization member | `"someone@example.org"` |
| **role** | *nullable string* | role in the organization<br/> **one of:**`"admin"` or `"collaborator"` or `"member"` or `"owner"` or `null` | `"admin"` |



#### Curl Example

```bash
$ curl -n -X PUT https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/members \
  -d '{
  "email": "someone@example.org",
  "role": "admin"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "email": "someone@example.org",
  "role": "admin",
  "two_factor_authentication": true,
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Organization Member Delete

Remove a member from the organization.

```
DELETE /organizations/{organization_name_or_id}/members/{organization_member_email_or_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/members/$ORGANIZATION_MEMBER_EMAIL_OR_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "email": "someone@example.org",
  "role": "admin",
  "two_factor_authentication": true,
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Organization Member List

List members of the organization.

```
GET /organizations/{organization_name_or_id}/members
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/members
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2012-01-01T12:00:00Z",
    "email": "someone@example.org",
    "role": "admin",
    "two_factor_authentication": true,
    "updated_at": "2012-01-01T12:00:00Z",
    "user": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    }
  }
]
```


## <a name="resource-organization-payment-method">Payment Method</a>

Stability: `prototype`

The on file payment method for an account

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **address_1** | *string* | street address line 1 | `"40 Hickory Lane"` |
| **address_2** | *string* | street address line 2 | `"Suite 103"` |
| **card_last4** | *string* | last 4 digits of credit card number | `"1234"` |
| **card_type** | *string* | name of credit card issuer | `"VISA"` |
| **city** | *string* | city | `"San Francisco"` |
| **country** | *string* | country | `"US"` |
| **expiration_month** | *string* | expiration month | `"11"` |
| **expiration_year** | *string* | expiration year | `"2014"` |
| **first_name** | *string* | the first name for payment method | `"Jason"` |
| **last_name** | *string* | the last name for payment method | `"Walker"` |
| **other** | *string* | metadata | `"Additional information for payment method"` |
| **postal_code** | *string* | postal code | `"90210"` |
| **state** | *string* | state | `"CA"` |

### Payment Method update

Update an existing payment method for an account.

```
PATCH /organizations/{organization_name_or_id}/payment-method
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **address_1** | *string* | street address line 1 | `"40 Hickory Lane"` |
| **address_2** | *string* | street address line 2 | `"Suite 103"` |
| **card_number** | *string* | encrypted card number of payment method | `"encrypted-card-number"` |
| **city** | *string* | city | `"San Francisco"` |
| **country** | *string* | country | `"US"` |
| **cvv** | *string* | card verification value | `"123"` |
| **expiration_month** | *string* | expiration month | `"11"` |
| **expiration_year** | *string* | expiration year | `"2014"` |
| **first_name** | *string* | the first name for payment method | `"Jason"` |
| **last_name** | *string* | the last name for payment method | `"Walker"` |
| **postal_code** | *string* | postal code | `"90210"` |
| **state** | *string* | state | `"CA"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **other** | *string* | metadata | `"Additional information for payment method"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/payment-method \
  -d '{
  "address_1": "40 Hickory Lane",
  "address_2": "Suite 103",
  "card_number": "encrypted-card-number",
  "city": "San Francisco",
  "country": "US",
  "cvv": "123",
  "expiration_month": "11",
  "expiration_year": "2014",
  "first_name": "Jason",
  "last_name": "Walker",
  "other": "Additional information for payment method",
  "postal_code": "90210",
  "state": "CA"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "address_1": "40 Hickory Lane",
  "address_2": "Suite 103",
  "card_last4": "1234",
  "card_type": "VISA",
  "city": "San Francisco",
  "country": "US",
  "expiration_month": "11",
  "expiration_year": "2014",
  "first_name": "Jason",
  "last_name": "Walker",
  "other": "Additional information for payment method",
  "postal_code": "90210",
  "state": "CA"
}
```

### Payment Method get

Get the current payment method for an account.

```
GET /organizations/{organization_name_or_id}/payment-method
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/payment-method
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "address_1": "40 Hickory Lane",
  "address_2": "Suite 103",
  "card_last4": "1234",
  "card_type": "VISA",
  "city": "San Francisco",
  "country": "US",
  "expiration_month": "11",
  "expiration_year": "2014",
  "first_name": "Jason",
  "last_name": "Walker",
  "other": "Additional information for payment method",
  "postal_code": "90210",
  "state": "CA"
}
```


## <a name="resource-organization-preferences">Organization Preferences</a>

Stability: `prototype`

Tracks an organization's preferences

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **whitelisting-enabled** | *nullable boolean* | Whether whitelisting rules should be applied to add-on installations | `true` |

### Organization Preferences List

Retrieve Organization Preferences

```
GET /organizations/{organization_preferences_name_or_id}/preferences
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_PREFERENCES_NAME_OR_ID/preferences
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "whitelisting-enabled": true
}
```

### Organization Preferences Update

Update Organization Preferences

```
PATCH /organizations/{organization_preferences_name_or_id}/preferences
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **whitelisting-enabled** | *nullable boolean* | Whether whitelisting rules should be applied to add-on installations | `true` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/organizations/$ORGANIZATION_PREFERENCES_NAME_OR_ID/preferences \
  -d '{
  "whitelisting-enabled": true
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "whitelisting-enabled": true
}
```


## <a name="resource-otp-secret">OTP Secret</a>

Stability: `development`

This renders a secret that clients can use to build a one-time password to be supplied as a 2nd factor of authentication.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when OTP secret was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of OTP secret | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **updated_at** | *date-time* | when OTP secret was updated | `"2012-01-01T12:00:00Z"` |
| **url** | *string* | OTP secret rendered in URL format | `"otpauth://totp/username@example.com?issuer=Heroku&secret=abcd1234"` |

### OTP Secret Create

Create new OTP secret. This invalidates any existing OTP secrets on the account.

```
POST /account/otp-secret
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/account/otp-secret \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "url": "otpauth://totp/username@example.com?issuer=Heroku&secret=abcd1234"
}
```


## <a name="resource-outbound-ruleset">Outbound Ruleset</a>

Stability: `prototype`

An outbound-ruleset is a collection of rules that specify what hosts Dynos are allowed to communicate with. 

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when outbound-ruleset was created | `"2012-01-01T12:00:00Z"` |
| **[created_by](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **id** | *uuid* | unique identifier of an outbound-ruleset | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **rules** | *array* |  | `[{"target":"1.1.1.1/1","from_port":80,"to_port":80,"protocol":"tcp"}]` |

### Outbound Ruleset Info

Current outbound ruleset for a space

```
GET /spaces/{space_id_or_name}/outbound-ruleset
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/outbound-ruleset
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "rules": [
    {
      "target": "1.1.1.1/1",
      "from_port": 80,
      "to_port": 80,
      "protocol": "tcp"
    }
  ],
  "created_by": "username@example.com"
}
```

### Outbound Ruleset Info

Info on an existing Outbound Ruleset

```
GET /spaces/{space_id_or_name}/outbound-rulesets/{outbound_ruleset_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/outbound-rulesets/$OUTBOUND_RULESET_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "rules": [
    {
      "target": "1.1.1.1/1",
      "from_port": 80,
      "to_port": 80,
      "protocol": "tcp"
    }
  ],
  "created_by": "username@example.com"
}
```

### Outbound Ruleset List

List all Outbound Rulesets for a space

```
GET /spaces/{space_id_or_name}/outbound-rulesets
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/outbound-rulesets
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "created_at": "2012-01-01T12:00:00Z",
    "rules": [
      {
        "target": "1.1.1.1/1",
        "from_port": 80,
        "to_port": 80,
        "protocol": "tcp"
      }
    ],
    "created_by": "username@example.com"
  }
]
```

### Outbound Ruleset Create

Create a new outbound ruleset

```
PUT /spaces/{space_id_or_name}/outbound-ruleset
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **rules** | *array* |  | `[{"target":"1.1.1.1/1","from_port":80,"to_port":80,"protocol":"tcp"}]` |


#### Curl Example

```bash
$ curl -n -X PUT https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/outbound-ruleset \
  -d '{
  "rules": [
    {
      "target": "1.1.1.1/1",
      "from_port": 80,
      "to_port": 80,
      "protocol": "tcp"
    }
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "created_at": "2012-01-01T12:00:00Z",
  "rules": [
    {
      "target": "1.1.1.1/1",
      "from_port": 80,
      "to_port": 80,
      "protocol": "tcp"
    }
  ],
  "created_by": "username@example.com"
}
```


## <a name="resource-password-reset">PasswordReset</a>

Stability: `production`

A password reset represents a in-process password reset attempt.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when password reset was created | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### PasswordReset Reset Password

Reset account's password. This will send a reset password link to the user's email address.

```
POST /password-resets
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **email** | *email* | unique email address | `"username@example.com"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/password-resets \
  -d '{
  "email": "username@example.com"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### PasswordReset Complete Reset Password

Complete password reset.

```
POST /password-resets/{password_reset_reset_password_token}/actions/finalize
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **password** | *string* | current password on the account | `"currentpassword"` |
| **password_confirmation** | *string* | confirmation of the new password | `"newpassword"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/password-resets/$PASSWORD_RESET_RESET_PASSWORD_TOKEN/actions/finalize \
  -d '{
  "password": "currentpassword",
  "password_confirmation": "newpassword"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```


## <a name="resource-payment">Payments</a>

Stability: `prototype`

A payment represents money collected for an account

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **amount** | *number* | amount of payment in cents | `50000` |
| **created_at** | *date-time* | when payment was created | `"2012-01-01T12:00:00Z"` |
| **id** | *integer* | legacy unique identifier of payment | `9403943` |
| **[invoice](#resource-invoice)** | *nullable object* | identity of invoice | `null` |
| **[invoice:id](#resource-invoice)** | *uuid* | unique identifier of this invoice | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[invoice:number](#resource-invoice)** | *integer* | human readable invoice number | `9403943` |
| **state** | *string* | state of the payment<br/> **one of:**`"failure"` or `"pending"` or `"success"` | `"pending"` |
| **updated_at** | *date-time* | when credit was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Payments create

Create a payment on an existing account

```
POST /account/payments
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **amount** | *number* | amount of payment in cents | `50000` |
| **invoice** | *string* | human readable invoice number | `9403943` |
| **uuid** | *uuid* | unique identifier for a payment transaction | `"01234567-89ab-cdef-0123-456789abcdef"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/account/payments \
  -d '{
  "amount": 50000,
  "invoice": 9403943,
  "uuid": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "amount": 50000,
  "created_at": "2012-01-01T12:00:00Z",
  "id": 9403943,
  "invoice": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "number": 9403943
  },
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "state": "pending"
}
```


## <a name="resource-payment-method">Payment Method</a>

Stability: `prototype`

The on file payment method for an account

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **address_1** | *string* | street address line 1 | `"40 Hickory Lane"` |
| **address_2** | *string* | street address line 2 | `"Suite 103"` |
| **card_last4** | *string* | last 4 digits of credit card number | `"1234"` |
| **card_type** | *string* | name of credit card issuer | `"VISA"` |
| **city** | *string* | city | `"San Francisco"` |
| **country** | *string* | country | `"US"` |
| **expiration_month** | *string* | expiration month | `"11"` |
| **expiration_year** | *string* | expiration year | `"2014"` |
| **first_name** | *string* | the first name for payment method | `"Jason"` |
| **last_name** | *string* | the last name for payment method | `"Walker"` |
| **other** | *string* | metadata | `"Additional information for payment method"` |
| **postal_code** | *string* | postal code | `"90210"` |
| **state** | *string* | state | `"CA"` |

### Payment Method update

Update an existing payment method for an account.

```
PATCH /account/payment-method
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **address_1** | *string* | street address line 1 | `"40 Hickory Lane"` |
| **address_2** | *string* | street address line 2 | `"Suite 103"` |
| **card_number** | *string* | encrypted card number of payment method | `"encrypted-card-number"` |
| **city** | *string* | city | `"San Francisco"` |
| **country** | *string* | country | `"US"` |
| **cvv** | *string* | card verification value | `"123"` |
| **expiration_month** | *string* | expiration month | `"11"` |
| **expiration_year** | *string* | expiration year | `"2014"` |
| **first_name** | *string* | the first name for payment method | `"Jason"` |
| **last_name** | *string* | the last name for payment method | `"Walker"` |
| **postal_code** | *string* | postal code | `"90210"` |
| **state** | *string* | state | `"CA"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **other** | *string* | metadata | `"Additional information for payment method"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/account/payment-method \
  -d '{
  "address_1": "40 Hickory Lane",
  "address_2": "Suite 103",
  "card_number": "encrypted-card-number",
  "city": "San Francisco",
  "country": "US",
  "cvv": "123",
  "expiration_month": "11",
  "expiration_year": "2014",
  "first_name": "Jason",
  "last_name": "Walker",
  "other": "Additional information for payment method",
  "postal_code": "90210",
  "state": "CA"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "address_1": "40 Hickory Lane",
  "address_2": "Suite 103",
  "card_last4": "1234",
  "card_type": "VISA",
  "city": "San Francisco",
  "country": "US",
  "expiration_month": "11",
  "expiration_year": "2014",
  "first_name": "Jason",
  "last_name": "Walker",
  "other": "Additional information for payment method",
  "postal_code": "90210",
  "state": "CA"
}
```

### Payment Method get

Get the current payment method for an account.

```
GET /account/payment-method
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/payment-method
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "address_1": "40 Hickory Lane",
  "address_2": "Suite 103",
  "card_last4": "1234",
  "card_type": "VISA",
  "city": "San Francisco",
  "country": "US",
  "expiration_month": "11",
  "expiration_year": "2014",
  "first_name": "Jason",
  "last_name": "Walker",
  "other": "Additional information for payment method",
  "postal_code": "90210",
  "state": "CA"
}
```


## <a name="resource-pipeline">Pipeline</a>

Stability: `prototype`

A pipeline allows grouping of apps into different stages.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when pipeline was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of pipeline | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | name of pipeline<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **updated_at** | *date-time* | when pipeline was updated | `"2012-01-01T12:00:00Z"` |

### Pipeline Create

Create a new pipeline.

```
POST /pipelines
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | name of pipeline<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/pipelines \
  -d '{
  "name": "example"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Info

Info for existing pipeline.

```
GET /pipelines/{pipeline_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/pipelines/$PIPELINE_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Delete

Delete an existing pipeline.

```
DELETE /pipelines/{pipeline_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/pipelines/$PIPELINE_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Update

Update an existing pipeline.

```
PATCH /pipelines/{pipeline_id}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | name of pipeline<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/pipelines/$PIPELINE_ID \
  -d '{
  "name": "example"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline List

List existing pipelines.

```
GET /pipelines
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/pipelines
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-pipeline-coupling">Pipeline Coupling</a>

Stability: `prototype`

Information about an app's coupling to a pipeline

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **created_at** | *date-time* | when pipeline coupling was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of pipeline coupling | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[pipeline:id](#resource-pipeline)** | *uuid* | unique identifier of pipeline | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **stage** | *string* | target pipeline stage<br/> **one of:**`"review"` or `"development"` or `"staging"` or `"production"` | `"production"` |
| **updated_at** | *date-time* | when pipeline coupling was updated | `"2012-01-01T12:00:00Z"` |

### Pipeline Coupling List

List couplings for a pipeline

```
GET /pipelines/{pipeline_id}/pipeline-couplings
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/pipelines/$PIPELINE_ID/pipeline-couplings
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "pipeline": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "stage": "production",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### Pipeline Coupling List

List pipeline couplings.

```
GET /pipeline-couplings
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/pipeline-couplings
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "pipeline": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "stage": "production",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### Pipeline Coupling Create

Create a new pipeline coupling.

```
POST /pipeline-couplings
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **app** | *string* | unique identifier or name of app | `"01234567-89ab-cdef-0123-456789abcdef"` or `"example"` |
| **pipeline** | *uuid* | unique identifier of pipeline | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **stage** | *string* | target pipeline stage<br/> **one of:**`"review"` or `"development"` or `"staging"` or `"production"` | `"production"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/pipeline-couplings \
  -d '{
  "app": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": "01234567-89ab-cdef-0123-456789abcdef",
  "stage": "production"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "stage": "production",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Coupling Info

Info for an existing pipeline coupling.

```
GET /pipeline-couplings/{pipeline_coupling_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/pipeline-couplings/$PIPELINE_COUPLING_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "stage": "production",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Coupling Delete

Delete an existing pipeline coupling.

```
DELETE /pipeline-couplings/{pipeline_coupling_id}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/pipeline-couplings/$PIPELINE_COUPLING_ID \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "stage": "production",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Coupling Update

Update an existing pipeline coupling.

```
PATCH /pipeline-couplings/{pipeline_coupling_id}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **stage** | *string* | target pipeline stage<br/> **one of:**`"review"` or `"development"` or `"staging"` or `"production"` | `"production"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/pipeline-couplings/$PIPELINE_COUPLING_ID \
  -d '{
  "stage": "production"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "stage": "production",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Coupling Info

Info for an existing pipeline coupling.

```
GET /apps/{app_id_or_name}/pipeline-couplings
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/pipeline-couplings
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "stage": "production",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-pipeline-promotion">Pipeline Promotion</a>

Stability: `prototype`

Promotions allow you to move code from an app in a pipeline to all targets

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when promotion was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of promotion | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[pipeline:id](#resource-pipeline)** | *uuid* | unique identifier of pipeline | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[source:app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[source:release:id](#resource-release)** | *uuid* | unique identifier of release | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **status** | *string* | status of promotion<br/> **one of:**`"pending"` or `"completed"` | `"pending"` |
| **updated_at** | *nullable date-time* | when promotion was updated | `"2012-01-01T12:00:00Z"` |

### Pipeline Promotion Create

Create a new promotion.

```
POST /pipeline-promotions
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **pipeline:id** | *uuid* | unique identifier of pipeline | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **source:app:id** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **targets/app:id** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/pipeline-promotions \
  -d '{
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "source": {
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    }
  },
  "targets": [
    {
      "app": {
        "id": "01234567-89ab-cdef-0123-456789abcdef"
      }
    }
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "source": {
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "release": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    }
  },
  "status": "pending",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Pipeline Promotion Info

Info for existing pipeline promotion.

```
GET /pipeline-promotions/{pipeline_promotion_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/pipeline-promotions/$PIPELINE_PROMOTION_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "pipeline": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "source": {
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "release": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    }
  },
  "status": "pending",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-pipeline-promotion-target">Pipeline Promotion Target</a>

Stability: `prototype`

Promotion targets represent an individual app being promoted to

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **error_message** | *nullable string* | an error message for why the promotion failed | `"User does not have access to that app"` |
| **id** | *uuid* | unique identifier of promotion target | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[pipeline_promotion:id](#resource-pipeline-promotion)** | *uuid* | unique identifier of promotion | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[release](#resource-release)** | *nullable object* | the release which was created on the target app | `null` |
| **[release:id](#resource-release)** | *uuid* | unique identifier of release | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **status** | *string* | status of promotion<br/> **one of:**`"pending"` or `"succeeded"` or `"failed"` | `"pending"` |

### Pipeline Promotion Target List

List promotion targets belonging to an existing promotion.

```
GET /pipeline-promotions/{pipeline_promotion_id}/promotion-targets
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/pipeline-promotions/$PIPELINE_PROMOTION_ID/promotion-targets
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "error_message": "User does not have access to that app",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "pipeline_promotion": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "release": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "status": "pending"
  }
]
```


## <a name="resource-plan">Plan</a>

Stability: `production`

Plans represent different configurations of add-ons that may be added to apps. Endpoints under add-on services can be accessed without authentication.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[addon_service:id](#resource-addon-service)** | *uuid* | unique identifier of this addon-service | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon_service:name](#resource-addon-service)** | *string* | unique name of this addon-service | `"heroku-postgresql"` |
| **created_at** | *date-time* | when plan was created | `"2012-01-01T12:00:00Z"` |
| **default** | *boolean* | whether this plan is the default for its addon service | `false` |
| **description** | *string* | description of plan | `"Heroku Postgres Dev"` |
| **human_name** | *string* | human readable name of the addon plan | `"Dev"` |
| **id** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **installable_inside_private_network** | *boolean* | whether this plan is installable to a Private Spaces app | `false` |
| **installable_outside_private_network** | *boolean* | whether this plan is installable to a Common Runtime app | `true` |
| **name** | *string* | name of this plan | `"heroku-postgresql:dev"` |
| **price:cents** | *integer* | price in cents per unit of plan | `0` |
| **price:unit** | *string* | unit of price for plan | `"month"` |
| **space_default** | *boolean* | whether this plan is the default for apps in Private Spaces | `false` |
| **state** | *string* | release status for plan | `"public"` |
| **updated_at** | *date-time* | when plan was updated | `"2012-01-01T12:00:00Z"` |

### Plan Info

Info for existing plan.

```
GET /addon-services/{addon_service_id_or_name}/plans/{plan_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-services/$ADDON_SERVICE_ID_OR_NAME/plans/$PLAN_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "addon_service": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "default": false,
  "description": "Heroku Postgres Dev",
  "human_name": "Dev",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "installable_inside_private_network": false,
  "installable_outside_private_network": true,
  "name": "heroku-postgresql:dev",
  "price": {
    "cents": 0,
    "unit": "month"
  },
  "space_default": false,
  "state": "public",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Plan List

List existing plans.

```
GET /addon-services/{addon_service_id_or_name}/plans
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/addon-services/$ADDON_SERVICE_ID_OR_NAME/plans
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "addon_service": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "default": false,
    "description": "Heroku Postgres Dev",
    "human_name": "Dev",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "installable_inside_private_network": false,
    "installable_outside_private_network": true,
    "name": "heroku-postgresql:dev",
    "price": {
      "cents": 0,
      "unit": "month"
    },
    "space_default": false,
    "state": "public",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-rate-limit">Rate Limit</a>

Stability: `production`

Rate Limit represents the number of request tokens each account holds. Requests to this endpoint do not count towards the rate limit.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **remaining** | *integer* | allowed requests remaining in current interval | `2399` |

### Rate Limit Info

Info for rate limits.

```
GET /account/rate-limits
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/account/rate-limits
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "remaining": 2399
}
```


## <a name="resource-recovery-code">Recovery Code</a>

Stability: `development`

Recovery codes grant access to accounts with two-factor authentication enabled.

### Recovery Code Create

Generate new recovery codes. This invalidates any existing codes on the account.

```
POST /account/recovery-codes
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/account/recovery-codes \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
[
  "0123456789abcdef"
]
```


## <a name="resource-region">Region</a>

Stability: `production`

A region represents a geographic location in which your application may run.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **country** | *string* | country where the region exists | `"United States"` |
| **created_at** | *date-time* | when region was created | `"2012-01-01T12:00:00Z"` |
| **description** | *string* | description of region | `"United States"` |
| **id** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **locale** | *string* | area in the country where the region exists | `"Virginia"` |
| **name** | *string* | name of region | `"us"` |
| **private_capable** | *boolean* | whether or not region is available for creating a Private Space | `false` |
| **provider:name** | *string* | name of provider | `"amazon-web-services"` |
| **provider:region** | *string* | region name used by provider | `"us-east-1"` |
| **updated_at** | *date-time* | when region was updated | `"2012-01-01T12:00:00Z"` |

### Region Info

Info for existing region.

```
GET /regions/{region_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/regions/$REGION_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "country": "United States",
  "created_at": "2012-01-01T12:00:00Z",
  "description": "United States",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "locale": "Virginia",
  "name": "us",
  "private_capable": false,
  "provider": {
    "name": "amazon-web-services",
    "region": "us-east-1"
  },
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Region List

List existing regions.

```
GET /regions
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/regions
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "country": "United States",
    "created_at": "2012-01-01T12:00:00Z",
    "description": "United States",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "locale": "Virginia",
    "name": "us",
    "private_capable": false,
    "provider": {
      "name": "amazon-web-services",
      "region": "us-east-1"
    },
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-release">Release</a>

Stability: `production`

A release represents a combination of code, config vars and add-ons for an app on Heroku.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[app:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[app:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **created_at** | *date-time* | when release was created | `"2012-01-01T12:00:00Z"` |
| **current** | *boolean* | indicates this release as being the current one for the app | `true` |
| **description** | *string* | description of changes in this release | `"Added new feature"` |
| **id** | *uuid* | unique identifier of release | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[slug](#resource-slug)** | *nullable object* | slug running in this release | `null` |
| **[slug:id](#resource-slug)** | *uuid* | unique identifier of slug | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **status** | *string* | current status of the release<br/> **one of:**`"failed"` or `"pending"` or `"succeeded"` | `"succeeded"` |
| **updated_at** | *date-time* | when release was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **version** | *integer* | unique version assigned to the release | `11` |

### Release Info

Info for existing release.

```
GET /apps/{app_id_or_name}/releases/{release_id_or_version}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/releases/$RELEASE_ID_OR_VERSION
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "description": "Added new feature",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "slug": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "status": "succeeded",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com"
  },
  "version": 11,
  "current": true
}
```

### Release List

List existing releases.

```
GET /apps/{app_id_or_name}/releases
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/releases
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "app": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "description": "Added new feature",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "updated_at": "2012-01-01T12:00:00Z",
    "slug": {
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "status": "succeeded",
    "user": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "email": "username@example.com"
    },
    "version": 11,
    "current": true
  }
]
```

### Release Create

Create new release.

```
POST /apps/{app_id_or_name}/releases
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **slug** | *string* | unique identifier of slug | `"01234567-89ab-cdef-0123-456789abcdef"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **description** | *string* | description of changes in this release | `"Added new feature"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/releases \
  -d '{
  "description": "Added new feature",
  "slug": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "description": "Added new feature",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "slug": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "status": "succeeded",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com"
  },
  "version": 11,
  "current": true
}
```

### Release Rollback

Rollback to an existing release.

```
POST /apps/{app_id_or_name}/releases
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **release** | *uuid* | unique identifier of release | `"01234567-89ab-cdef-0123-456789abcdef"` |



#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/releases \
  -d '{
  "release": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "app": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "description": "Added new feature",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "updated_at": "2012-01-01T12:00:00Z",
  "slug": {
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "status": "succeeded",
  "user": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "email": "username@example.com"
  },
  "version": 11,
  "current": true
}
```


## <a name="resource-slug">Slug</a>

Stability: `production`

A slug is a snapshot of your application code that is ready to run on the platform.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **blob:method** | *string* | method to be used to interact with the slug blob | `"GET"` |
| **blob:url** | *string* | URL to interact with the slug blob | `"https://api.heroku.com/slugs/1234.tgz"` |
| **buildpack_provided_description** | *nullable string* | description from buildpack of slug | `"Ruby/Rack"` |
| **checksum** | *nullable string* | an optional checksum of the slug for verifying its integrity | `"SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"` |
| **commit** | *nullable string* | identification of the code with your version control system (eg: SHA of the git HEAD) | `"60883d9e8947a57e04dc9124f25df004866a2051"` |
| **commit_description** | *nullable string* | an optional description of the provided commit | `"fixed a bug with API documentation"` |
| **created_at** | *date-time* | when slug was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of slug | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **process_types** | *object* | hash mapping process type names to their respective command | `{"web":"./bin/web -p $PORT"}` |
| **size** | *nullable integer* | size of slug, in bytes | `2048` |
| **[stack:id](#resource-stack)** | *uuid* | identifier of stack | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[stack:name](#resource-stack)** | *string* | unique name | `"cedar-14"` |
| **updated_at** | *date-time* | when slug was updated | `"2012-01-01T12:00:00Z"` |

### Slug Info

Info for existing slug.

```
GET /apps/{app_id_or_name}/slugs/{slug_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/slugs/$SLUG_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "blob": {
    "method": "GET",
    "url": "https://api.heroku.com/slugs/1234.tgz"
  },
  "buildpack_provided_description": "Ruby/Rack",
  "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "commit": "60883d9e8947a57e04dc9124f25df004866a2051",
  "commit_description": "fixed a bug with API documentation",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "process_types": {
    "web": "./bin/web -p $PORT"
  },
  "size": 2048,
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Slug Create

Create a new slug. For more information please refer to [Deploying Slugs using the Platform API](https://devcenter.heroku.com/articles/platform-api-deploying-slugs).

```
POST /apps/{app_id_or_name}/slugs
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **process_types** | *object* | hash mapping process type names to their respective command | `{"web":"./bin/web -p $PORT"}` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **buildpack_provided_description** | *nullable string* | description from buildpack of slug | `"Ruby/Rack"` |
| **checksum** | *nullable string* | an optional checksum of the slug for verifying its integrity | `"SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"` |
| **commit** | *nullable string* | identification of the code with your version control system (eg: SHA of the git HEAD) | `"60883d9e8947a57e04dc9124f25df004866a2051"` |
| **commit_description** | *nullable string* | an optional description of the provided commit | `"fixed a bug with API documentation"` |
| **stack** | *string* | unique name or identifier of stack | `"cedar-14"` or `"01234567-89ab-cdef-0123-456789abcdef"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/slugs \
  -d '{
  "buildpack_provided_description": "Ruby/Rack",
  "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "commit": "60883d9e8947a57e04dc9124f25df004866a2051",
  "commit_description": "fixed a bug with API documentation",
  "process_types": {
    "web": "./bin/web -p $PORT"
  },
  "stack": "01234567-89ab-cdef-0123-456789abcdef"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "blob": {
    "method": "PUT",
    "url": "https://api.heroku.com/slugs/1234.tgz"
  },
  "buildpack_provided_description": "Ruby/Rack",
  "checksum": "SHA256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "commit": "60883d9e8947a57e04dc9124f25df004866a2051",
  "commit_description": "fixed a bug with API documentation",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "process_types": {
    "web": "./bin/web -p $PORT"
  },
  "size": 2048,
  "stack": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14"
  },
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-sms-number">SMS Number</a>

Stability: `production`

SMS numbers are used for recovery on accounts with two-factor authentication enabled.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[sms_number](#resource-account)** | *nullable string* | SMS number of account | `"+1 ***-***-1234"` |

### SMS Number SMS Number

Recover an account using an SMS recovery code

```
GET /users/{account_email_or_id_or_self}/sms-number
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF/sms-number
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "sms_number": "+1 ***-***-1234"
}
```

### SMS Number Recover

Recover an account using an SMS recovery code

```
POST /users/{account_email_or_id_or_self}/sms-number/actions/recover
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF/sms-number/actions/recover \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "sms_number": "+1 ***-***-1234"
}
```

### SMS Number Confirm

Confirm an SMS number change with a confirmation code

```
POST /users/{account_email_or_id_or_self}/sms-number/actions/confirm
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/users/$ACCOUNT_EMAIL_OR_ID_OR_SELF/sms-number/actions/confirm \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "sms_number": "+1 ***-***-1234"
}
```


## <a name="resource-source">Source</a>

Stability: `production`

A source is a location for uploading and downloading an application's source code.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **source_blob:get_url** | *string* | URL to download the source | `"https://api.heroku.com/sources/1234.tgz"` |
| **source_blob:put_url** | *string* | URL to upload the source | `"https://api.heroku.com/sources/1234.tgz"` |

### Source Create

Create URLs for uploading and downloading source.

```
POST /apps/{app_id_or_name}/sources
```


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/sources \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "source_blob": {
    "get_url": "https://api.heroku.com/sources/1234.tgz",
    "put_url": "https://api.heroku.com/sources/1234.tgz"
  }
}
```


## <a name="resource-space">Space</a>

Stability: `prototype`

A space is an isolated, highly available, secure app execution environments, running in the modern VPC substrate.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **compliance** | *nullable array* | the compliance regimes applied to a space | `["HIPAA"]` |
| **compliance** | *nullable array* | the compliance regimes applied to a space | `["HIPAA"]` |
| **created_at** | *date-time* | when space was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of space | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name of space<br/> **pattern:** `^[a-z0-9](?:[a-z0-9]&#124;-(?!-))+[a-z0-9]$` | `"nasa"` |
| **[organization](#resource-organization)** | *nullable object* | organization that owns this space | `null` |
| **[organization:name](#resource-organization)** | *string* | unique name of organization | `"example"` |
| **[region:id](#resource-region)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[region:name](#resource-region)** | *string* | name of region | `"us"` |
| **state** | *string* | availability of this space<br/> **one of:**`"allocating"` or `"allocated"` or `"deleting"` | `"allocated"` |
| **updated_at** | *date-time* | when space was updated | `"2012-01-01T12:00:00Z"` |

### Space List

List existing spaces.

```
GET /spaces
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "compliance": [
      "HIPAA"
    ],
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "nasa",
    "organization": {
      "name": "example"
    },
    "region": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "us"
    },
    "state": "allocated",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### Space Info

Info for existing space.

```
GET /spaces/{space_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "compliance": [
    "HIPAA"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "nasa",
  "organization": {
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "state": "allocated",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Space Update

Update an existing space.

```
PATCH /spaces/{space_id_or_name}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | unique name of space<br/> **pattern:** `^[a-z0-9](?:[a-z0-9]&#124;-(?!-))+[a-z0-9]$` | `"nasa"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/spaces/$SPACE_ID_OR_NAME \
  -d '{
  "name": "nasa"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "compliance": [
    "HIPAA"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "nasa",
  "organization": {
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "state": "allocated",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Space Delete

Delete an existing space.

```
DELETE /spaces/{space_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/spaces/$SPACE_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "compliance": [
    "HIPAA"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "nasa",
  "organization": {
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "state": "allocated",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Space Create

Create a new space.

```
POST /spaces
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **name** | *string* | unique name of space<br/> **pattern:** `^[a-z0-9](?:[a-z0-9]&#124;-(?!-))+[a-z0-9]$` | `"nasa"` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **compliance** | *nullable array* | the compliance regimes applied to a space | `["HIPAA"]` |
| **compliance** | *nullable array* | the compliance regimes applied to a space | `["HIPAA"]` |
| **region** | *string* | unique identifier or name of region | `"01234567-89ab-cdef-0123-456789abcdef"` or `"us"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/spaces \
  -d '{
  "name": "nasa",
  "region": "01234567-89ab-cdef-0123-456789abcdef",
  "compliance": [
    "HIPAA"
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "compliance": [
    "HIPAA"
  ],
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "nasa",
  "organization": {
    "name": "example"
  },
  "region": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "us"
  },
  "state": "allocated",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-space-app-access">Space Access</a>

Stability: `prototype`

Space access represents the permissions a particular user has on a particular space.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **[created_at](#resource-space)** | *date-time* | when space was created | `"2012-01-01T12:00:00Z"` |
| **[id](#resource-space)** | *uuid* | unique identifier of space | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **permissions/description** | *string* |  | `"example"` |
| **permissions/name** | *string* |  | `"example"` |
| **[space:id](#resource-app)** | *uuid* | unique identifier | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[space:name](#resource-app)** | *string* | name of app<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **[updated_at](#resource-space)** | *date-time* | when space was updated | `"2012-01-01T12:00:00Z"` |
| **[user:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[user:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Space Access Info

List permissions for a given user on a given space.

```
GET /spaces/{space_id_or_name}/members/{account_email_or_id_or_self}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/members/$ACCOUNT_EMAIL_OR_ID_OR_SELF
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "space": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "permissions": [
    {
      "description": "example",
      "name": "example"
    }
  ],
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Space Access Update

Update an existing user's set of permissions on a space.

```
PATCH /spaces/{space_id_or_name}/members/{account_email_or_id_or_self}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **permissions/name** | *string* |  | `"example"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/members/$ACCOUNT_EMAIL_OR_ID_OR_SELF \
  -d '{
  "permissions": [
    {
      "name": "example"
    }
  ]
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "space": {
    "name": "example",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "permissions": [
    {
      "description": "example",
      "name": "example"
    }
  ],
  "updated_at": "2012-01-01T12:00:00Z",
  "user": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
}
```

### Space Access List

List all users and their permissions on a space.

```
GET /spaces/{space_id_or_name}/members
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/members
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "space": {
      "name": "example",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "permissions": [
      {
        "description": "example",
        "name": "example"
      }
    ],
    "updated_at": "2012-01-01T12:00:00Z",
    "user": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    }
  }
]
```


## <a name="resource-space-nat">Space Network Address Translation</a>

Stability: `prototype`

Network address translation (NAT) for stable outbound IP addresses from a space

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when network address translation for a space was created | `"2012-01-01T12:00:00Z"` |
| **sources** | *array* | potential IPs from which outbound network traffic will originate | `["123.123.123.123"]` |
| **state** | *string* | availability of network address translation for a space<br/> **one of:**`"disabled"` or `"updating"` or `"enabled"` | `"enabled"` |
| **updated_at** | *date-time* | when network address translation for a space was updated | `"2012-01-01T12:00:00Z"` |

### Space Network Address Translation Info

Current state of network address translation for a space.

```
GET /spaces/{space_id_or_name}/nat
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/spaces/$SPACE_ID_OR_NAME/nat
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "sources": [
    "123.123.123.123"
  ],
  "state": "enabled",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-ssl-endpoint">SSL Endpoint</a>

Stability: `production`

[SSL Endpoint](https://devcenter.heroku.com/articles/ssl-endpoint) is a public address serving custom SSL cert for HTTPS traffic to a Heroku app. Note that an app must have the `ssl:endpoint` addon installed before it can provision an SSL Endpoint using these APIs.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **certificate_chain** | *string* | raw contents of the public certificate chain (eg: .crt or .pem file) | `"-----BEGIN CERTIFICATE----- ..."` |
| **cname** | *string* | canonical name record, the address to point a domain at | `"example.herokussl.com"` |
| **created_at** | *date-time* | when endpoint was created | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | unique identifier of this SSL endpoint | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name for SSL endpoint<br/> **pattern:** `^[a-z][a-z0-9-]{2,29}$` | `"example"` |
| **updated_at** | *date-time* | when endpoint was updated | `"2012-01-01T12:00:00Z"` |

### SSL Endpoint Create

Create a new SSL endpoint.

```
POST /apps/{app_id_or_name}/ssl-endpoints
```

#### Required Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **certificate_chain** | *string* | raw contents of the public certificate chain (eg: .crt or .pem file) | `"-----BEGIN CERTIFICATE----- ..."` |
| **private_key** | *string* | contents of the private key (eg .key file) | `"-----BEGIN RSA PRIVATE KEY----- ..."` |


#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **preprocess** | *boolean* | allow Heroku to modify an uploaded public certificate chain if deemed advantageous by adding missing intermediaries, stripping unnecessary ones, etc.<br/> **default:** `true` | `true` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/apps/$APP_ID_OR_NAME/ssl-endpoints \
  -d '{
  "certificate_chain": "-----BEGIN CERTIFICATE----- ...",
  "preprocess": true,
  "private_key": "-----BEGIN RSA PRIVATE KEY----- ..."
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
{
  "certificate_chain": "-----BEGIN CERTIFICATE----- ...",
  "cname": "example.herokussl.com",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### SSL Endpoint Delete

Delete existing SSL endpoint.

```
DELETE /apps/{app_id_or_name}/ssl-endpoints/{ssl_endpoint_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/apps/$APP_ID_OR_NAME/ssl-endpoints/$SSL_ENDPOINT_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "certificate_chain": "-----BEGIN CERTIFICATE----- ...",
  "cname": "example.herokussl.com",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### SSL Endpoint Info

Info for existing SSL endpoint.

```
GET /apps/{app_id_or_name}/ssl-endpoints/{ssl_endpoint_id_or_name}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/ssl-endpoints/$SSL_ENDPOINT_ID_OR_NAME
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "certificate_chain": "-----BEGIN CERTIFICATE----- ...",
  "cname": "example.herokussl.com",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### SSL Endpoint List

List existing SSL endpoints.

```
GET /apps/{app_id_or_name}/ssl-endpoints
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/apps/$APP_ID_OR_NAME/ssl-endpoints
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "certificate_chain": "-----BEGIN CERTIFICATE----- ...",
    "cname": "example.herokussl.com",
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "example",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```

### SSL Endpoint Update

Update an existing SSL endpoint.

```
PATCH /apps/{app_id_or_name}/ssl-endpoints/{ssl_endpoint_id_or_name}
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **certificate_chain** | *string* | raw contents of the public certificate chain (eg: .crt or .pem file) | `"-----BEGIN CERTIFICATE----- ..."` |
| **preprocess** | *boolean* | allow Heroku to modify an uploaded public certificate chain if deemed advantageous by adding missing intermediaries, stripping unnecessary ones, etc.<br/> **default:** `true` | `true` |
| **private_key** | *string* | contents of the private key (eg .key file) | `"-----BEGIN RSA PRIVATE KEY----- ..."` |
| **rollback** | *boolean* | indicates that a rollback should be performed | `false` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME/ssl-endpoints/$SSL_ENDPOINT_ID_OR_NAME \
  -d '{
  "certificate_chain": "-----BEGIN CERTIFICATE----- ...",
  "preprocess": true,
  "private_key": "-----BEGIN RSA PRIVATE KEY----- ...",
  "rollback": false
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "certificate_chain": "-----BEGIN CERTIFICATE----- ...",
  "cname": "example.herokussl.com",
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "example",
  "updated_at": "2012-01-01T12:00:00Z"
}
```


## <a name="resource-stack">Stack</a>

Stability: `production`

Stacks are the different application execution environments available in the Heroku platform.

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **created_at** | *date-time* | when stack was introduced | `"2012-01-01T12:00:00Z"` |
| **id** | *uuid* | identifier of stack | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **name** | *string* | unique name | `"cedar-14"` |
| **state** | *string* | availability of this stack: beta, deprecated or public | `"public"` |
| **updated_at** | *date-time* | when stack was last modified | `"2012-01-01T12:00:00Z"` |

### Stack Info

Stack info.

```
GET /stacks/{stack_name_or_id}
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/stacks/$STACK_NAME_OR_ID
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "created_at": "2012-01-01T12:00:00Z",
  "id": "01234567-89ab-cdef-0123-456789abcdef",
  "name": "cedar-14",
  "state": "public",
  "updated_at": "2012-01-01T12:00:00Z"
}
```

### Stack List

List available stacks.

```
GET /stacks
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/stacks
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "created_at": "2012-01-01T12:00:00Z",
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "cedar-14",
    "state": "public",
    "updated_at": "2012-01-01T12:00:00Z"
  }
]
```


## <a name="resource-user-preferences">User Preferences</a>

Stability: `production`

Tracks a user's preferences and message dismissals

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **default-organization** | *nullable string* | User's default organization | `"sushi-inc"` |
| **dismissed-getting-started** | *nullable boolean* | Whether the user has dismissed the getting started banner | `true` |
| **dismissed-github-banner** | *nullable boolean* | Whether the user has dismissed the GitHub link banner | `true` |
| **dismissed-org-access-controls** | *nullable boolean* | Whether the user has dismissed the Organization Access Controls banner | `true` |
| **dismissed-org-wizard-notification** | *nullable boolean* | Whether the user has dismissed the Organization Wizard | `true` |
| **dismissed-pipelines-banner** | *nullable boolean* | Whether the user has dismissed the Pipelines banner | `true` |
| **dismissed-pipelines-github-banner** | *nullable boolean* | Whether the user has dismissed the GitHub banner on a pipeline overview | `true` |
| **dismissed-pipelines-github-banners** | *nullable array* | Which pipeline uuids the user has dismissed the GitHub banner for | `["96c68759-f310-4910-9867-e0b062064098"]` |
| **dismissed-pipelines-github-banners** | *nullable array* | Which pipeline uuids the user has dismissed the GitHub banner for | `["96c68759-f310-4910-9867-e0b062064098"]` |
| **dismissed-sms-banner** | *nullable boolean* | Whether the user has dismissed the 2FA SMS banner | `true` |
| **timezone** | *nullable string* | User's default timezone | `"UTC"` |

### User Preferences List

Retrieve User Preferences

```
GET /users/{user_preferences_self}/preferences
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/users/$USER_PREFERENCES_SELF/preferences
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "timezone": "UTC",
  "default-organization": "sushi-inc",
  "dismissed-github-banner": true,
  "dismissed-getting-started": true,
  "dismissed-org-access-controls": true,
  "dismissed-org-wizard-notification": true,
  "dismissed-pipelines-banner": true,
  "dismissed-pipelines-github-banner": true,
  "dismissed-pipelines-github-banners": [
    "96c68759-f310-4910-9867-e0b062064098"
  ],
  "dismissed-sms-banner": true
}
```

### User Preferences Update

Update User Preferences

```
PATCH /users/{user_preferences_self}/preferences
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **default-organization** | *nullable string* | User's default organization | `"sushi-inc"` |
| **dismissed-getting-started** | *nullable boolean* | Whether the user has dismissed the getting started banner | `true` |
| **dismissed-github-banner** | *nullable boolean* | Whether the user has dismissed the GitHub link banner | `true` |
| **dismissed-org-access-controls** | *nullable boolean* | Whether the user has dismissed the Organization Access Controls banner | `true` |
| **dismissed-org-wizard-notification** | *nullable boolean* | Whether the user has dismissed the Organization Wizard | `true` |
| **dismissed-pipelines-banner** | *nullable boolean* | Whether the user has dismissed the Pipelines banner | `true` |
| **dismissed-pipelines-github-banner** | *nullable boolean* | Whether the user has dismissed the GitHub banner on a pipeline overview | `true` |
| **dismissed-pipelines-github-banners** | *nullable array* | Which pipeline uuids the user has dismissed the GitHub banner for | `["96c68759-f310-4910-9867-e0b062064098"]` |
| **dismissed-pipelines-github-banners** | *nullable array* | Which pipeline uuids the user has dismissed the GitHub banner for | `["96c68759-f310-4910-9867-e0b062064098"]` |
| **dismissed-sms-banner** | *nullable boolean* | Whether the user has dismissed the 2FA SMS banner | `true` |
| **timezone** | *nullable string* | User's default timezone | `"UTC"` |


#### Curl Example

```bash
$ curl -n -X PATCH https://api.heroku.com/users/$USER_PREFERENCES_SELF/preferences \
  -d '{
  "timezone": "UTC",
  "default-organization": "sushi-inc",
  "dismissed-github-banner": true,
  "dismissed-getting-started": true,
  "dismissed-org-access-controls": true,
  "dismissed-org-wizard-notification": true,
  "dismissed-pipelines-banner": true,
  "dismissed-pipelines-github-banner": true,
  "dismissed-pipelines-github-banners": [
    "96c68759-f310-4910-9867-e0b062064098"
  ],
  "dismissed-sms-banner": true
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "timezone": "UTC",
  "default-organization": "sushi-inc",
  "dismissed-github-banner": true,
  "dismissed-getting-started": true,
  "dismissed-org-access-controls": true,
  "dismissed-org-wizard-notification": true,
  "dismissed-pipelines-banner": true,
  "dismissed-pipelines-github-banner": true,
  "dismissed-pipelines-github-banners": [
    "96c68759-f310-4910-9867-e0b062064098"
  ],
  "dismissed-sms-banner": true
}
```


## <a name="resource-whitelisted-addon-service">Whitelisted Entity</a>

Stability: `prototype`

Entities that have been whitelisted to be used by an Organization

### Attributes

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **added_at** | *date-time* | when the add-on service was whitelisted | `"2012-01-01T12:00:00Z"` |
| **[added_by:email](#resource-account)** | *email* | unique email address | `"username@example.com"` |
| **[added_by:id](#resource-account)** | *uuid* | identifier of an account | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon_service:human_name](#resource-addon-service)** | *string* | human-readable name of the addon service provider | `"Heroku Postgres"` |
| **[addon_service:id](#resource-addon-service)** | *uuid* | unique identifier of this addon-service | `"01234567-89ab-cdef-0123-456789abcdef"` |
| **[addon_service:name](#resource-addon-service)** | *string* | unique name of this addon-service | `"heroku-postgresql"` |
| **id** | *uuid* | unique identifier for this whitelisting entity | `"01234567-89ab-cdef-0123-456789abcdef"` |

### Whitelisted Entity List

List all whitelisted Add-on Services for an Organization

```
GET /organizations/{organization_name_or_id}/whitelisted-addon-services
```


#### Curl Example

```bash
$ curl -n https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/whitelisted-addon-services
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
[
  {
    "added_at": "2012-01-01T12:00:00Z",
    "added_by": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "addon_service": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql",
      "human_name": "Heroku Postgres"
    },
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
]
```

### Whitelisted Entity Create

Whitelist an Add-on Service

```
POST /organizations/{organization_name_or_id}/whitelisted-addon-services
```

#### Optional Parameters

| Name | Type | Description | Example |
| ------- | ------- | ------- | ------- |
| **addon_service** | *string* | name of the Add-on to whitelist | `"heroku-postgresql"` |


#### Curl Example

```bash
$ curl -n -X POST https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/whitelisted-addon-services \
  -d '{
  "addon_service": "heroku-postgresql"
}' \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 201 Created
```

```json
[
  {
    "added_at": "2012-01-01T12:00:00Z",
    "added_by": {
      "email": "username@example.com",
      "id": "01234567-89ab-cdef-0123-456789abcdef"
    },
    "addon_service": {
      "id": "01234567-89ab-cdef-0123-456789abcdef",
      "name": "heroku-postgresql",
      "human_name": "Heroku Postgres"
    },
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  }
]
```

### Whitelisted Entity Delete

Remove a whitelisted entity

```
DELETE /organizations/{organization_name_or_id}/whitelisted-addon-services/{whitelisted_addon_service_id_or_name}
```


#### Curl Example

```bash
$ curl -n -X DELETE https://api.heroku.com/organizations/$ORGANIZATION_NAME_OR_ID/whitelisted-addon-services/$WHITELISTED_ADDON_SERVICE_ID_OR_NAME \
  -H "Content-Type: application/json"
```


#### Response Example

```
HTTP/1.1 200 OK
```

```json
{
  "added_at": "2012-01-01T12:00:00Z",
  "added_by": {
    "email": "username@example.com",
    "id": "01234567-89ab-cdef-0123-456789abcdef"
  },
  "addon_service": {
    "id": "01234567-89ab-cdef-0123-456789abcdef",
    "name": "heroku-postgresql",
    "human_name": "Heroku Postgres"
  },
  "id": "01234567-89ab-cdef-0123-456789abcdef"
}
```


