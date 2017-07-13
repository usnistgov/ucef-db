#!/bin/bash
if [ ! -d "dist" ]; then
  mkdir -p "dist"
fi

# combine
prmd combine --meta meta.json schemata/ > dist/cpswtng-db-schema.json

# generate markdown
prmd doc dist/cpswtng-db-schema.json > dist/cpswtng-db-schema.md
