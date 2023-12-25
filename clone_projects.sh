#!/usr/bin/env bash

set -eo pipefail

shopt -s extglob
shopt -s dotglob

cd projects
rm -rf -- !(docs-landing-page)

for project in $(cat ../documentation_repositories.txt); do
    git clone ${project}.git
    cd $(basename "$project")

    if [[ "$C0_TRIGGER_PROJECT" == "$(basename "$project")" && -n "$C0_TRIGGER_SHA" ]]; then
      if [[ -n "$C0_TRIGGER_REF" ]]; then
        git fetch origin $C0_TRIGGER_REF
      fi
      git checkout $C0_TRIGGER_SHA
    fi

    rm -rf -- !(docs)
    rm -rf .git
    cd ..
done
cd ..
