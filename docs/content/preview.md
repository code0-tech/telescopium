---
title: Previewing locally
---

The telescopium project can start a local preview for the documentation a project.

This is done with the `project:preview` script which calls `scripts/docs_preview.js`.

## Start local preview

Requirements:

- Dependencies of Telescopium are installed
- The other project is cloned in the same parent directory as telescopium
- The other project follows the [expected structure](structure.md)

Run `npm run project:preview <project-name>` where `<project-name>` is replaced with
the name of the directory which contains the project you want to preview.

The preview relies on symbolic links. If symbolic links are not supported by your platform,
you can't use the preview.
