# cpswtng-db-schema

This repository contains the definition of the CPS Windtunnel NewGen database schema.

## Why?

* [HTTP API Design](https://www.gitbook.com/book/geemus/http-api-design/details) - HTTP API design guide extracted from work on the Heroku Platform API
* [prmd](https://github.com/interagent/prmd) - JSON Schema tools and doc generation for HTTP APIs
* ...and because NIST likes well-defined schemas

## Prerequisites:

```bash
brew install ruby
gem install prmd
```

## Steps to add new entities

```bash
cd /path/to/cpswtng-db-schema/

# 'entity' should be singular

# create json schema
prmd init entity > schemata/entity.json
# or
prmd init --yaml entity > schemata/entity.yml

# edit json/yaml: add new definitions, properties, etc
# { subl, vim, whatever-editor } schemata/entity.{ json | yml }
subl schemata/entity.json

# when done with editing
./build.sh

## ---> see 'dist' folder

```

