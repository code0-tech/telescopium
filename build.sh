#!/usr/bin/env bash

set -eo pipefail

rm -rf dist/

build_project() {
  project=$1

  echo "Building $project"
  mkdir -p projects/$project/content
  ln $(pwd)/src/env.d.ts projects/$project/env.d.ts
  ln -s $(pwd)/projects/$project/docs/content projects/$project/content/docs
  ln $(pwd)/src/content/config.ts projects/$project/content/config.ts
  if [[ "$project" != "docs-landing-page" ]]; then
    export BASE_URL=$C0_GLOBAL_BASE/$project/
    export OUT_DIR=./dist/$project
  fi
  SRC_DIR=$(pwd)/projects/$project npm run build
  unset BASE_URL
  unset OUT_DIR
  rm -rf projects/$project/content
  rm -rf projects/$project/env.d.ts
}

export BASE_URL=$C0_GLOBAL_BASE/
build_project "docs-landing-page"

for project in $(ls projects | grep -v docs-landing-page); do
  build_project $project
done
