---
title: Directory Structure
---

The telescopium project sets some expectations on projects that use it as documentation page.

Requirements:

- `docs/starlight.json`
- `docs/content/`

## `docs/starlight.json`

This file contains the [starlight configuration](https://starlight.astro.build/reference/configuration/).

## `docs/content/`

This directory contains the actual documentation pages. It is configured as a content collection of
documentation type. It can contain `*.md` and `*.mdx` files. Every page needs a `title` set in the
front-matter configuration.
