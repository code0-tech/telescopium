---
title: Changelog
icon: IconRestore
---

<!-- rumdl-configure-file { "MD013": { "headings": false } } -->

All notable changes to the CodeZero software will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [[0.0.0-canary-2479774825-5f30e1cf348478a20d0d708f31e863f5e521b368]](https://github.com/code0-tech/codezero/releases/tag/0.0.0-canary-2479774825-5f30e1cf348478a20d0d708f31e863f5e521b368) - 2026-04-25

### Added

- Foundational validation and suggestion support for flows, nodes, and validation rules: [#3](https://github.com/code0-tech/triangulum/issues/3), [#22](https://github.com/code0-tech/triangulum/issues/22), [#32](https://github.com/code0-tech/triangulum/issues/32)
- Reference, value, and default-handling improvements for suggestion generation: [#31](https://github.com/code0-tech/triangulum/issues/31), [#60](https://github.com/code0-tech/triangulum/issues/60), [#68](https://github.com/code0-tech/triangulum/issues/68)
- Runtime observability and service endpoints for status and usage reporting: [#94](https://github.com/code0-tech/taurus/issues/94), [#95](https://github.com/code0-tech/taurus/issues/95), [#97](https://github.com/code0-tech/taurus/issues/97)
- Runtime value handling and helper functions for numbers and digits: [#113](https://github.com/code0-tech/taurus/issues/113), [#118](https://github.com/code0-tech/taurus/issues/118), [#119](https://github.com/code0-tech/taurus/issues/119)
- Follow-up runtime and integration work around boolean checks and startup inputs: [#120](https://github.com/code0-tech/taurus/issues/120), [#127](https://github.com/code0-tech/draco/issues/127), [#143](https://github.com/code0-tech/tucana/issues/143)
- Validation edge cases, request flow, and synchronization fixes: [#149](https://github.com/code0-tech/taurus/issues/149), [#151](https://github.com/code0-tech/taurus/issues/151), [#158](https://github.com/code0-tech/taurus/issues/158)
- Data-model cleanup for references, node parameters, and request payloads: [#162](https://github.com/code0-tech/taurus/issues/162), [#169](https://github.com/code0-tech/sculptor/issues/169), [#196](https://github.com/code0-tech/draco/issues/196)
- Cross-service runtime integration and status delivery work: [#197](https://github.com/code0-tech/draco/issues/197), [#223](https://github.com/code0-tech/aquila/issues/223), [#224](https://github.com/code0-tech/aquila/issues/224)
- Sagittarius core runtime updates for disabled flows, missing fields, and validation readiness: [#781](https://github.com/code0-tech/sagittarius/issues/781), [#820](https://github.com/code0-tech/sagittarius/issues/820), [#821](https://github.com/code0-tech/sagittarius/issues/821)
- Sagittarius permission, validation, and runtime-token changes: [#848](https://github.com/code0-tech/sagittarius/issues/848), [#867](https://github.com/code0-tech/sagittarius/issues/867), [#919](https://github.com/code0-tech/sagittarius/issues/919)
- Tucana function signatures and runtime-definition alignment: [#215](https://github.com/code0-tech/tucana/issues/215), [#219](https://github.com/code0-tech/tucana/issues/219), [#220](https://github.com/code0-tech/tucana/issues/220)
- Tucana flow-type contracts and JSON/proto conversion support: [#221](https://github.com/code0-tech/tucana/issues/221), [#226](https://github.com/code0-tech/tucana/issues/226), [#239](https://github.com/code0-tech/tucana/issues/239)
- Data-type model refinements and definition synchronization: [#244](https://github.com/code0-tech/tucana/issues/244), [#254](https://github.com/code0-tech/tucana/issues/254), [#256](https://github.com/code0-tech/code0-definition/issues/256)
- Definition-function updates for parameter metadata and new helpers: [#258](https://github.com/code0-tech/tucana/issues/258), [#263](https://github.com/code0-tech/code0-definition/issues/263), [#264](https://github.com/code0-tech/code0-definition/issues/264)
- Definition baseline updates for newer Tucana versions and data types: [#298](https://github.com/code0-tech/code0-definition/issues/298), [#302](https://github.com/code0-tech/code0-definition/issues/302)
- UI improvements for OpenTelemetry, sidebars, and node highlighting: [#87](https://github.com/code0-tech/sculptor/issues/87), [#96](https://github.com/code0-tech/sculptor/issues/96), [#102](https://github.com/code0-tech/sculptor/issues/102)
- UI refinements for custom data types, login redirects, and function icons: [#115](https://github.com/code0-tech/sculptor/issues/115), [#117](https://github.com/code0-tech/sculptor/issues/117), [#129](https://github.com/code0-tech/sculptor/issues/129)
- UI behavior updates for flow creation, translations, and search performance: [#136](https://github.com/code0-tech/sculptor/issues/136), [#138](https://github.com/code0-tech/sculptor/issues/138), [#142](https://github.com/code0-tech/sculptor/issues/142)
- Schema and edit-flow safeguards for custom types and reference editing: [#153](https://github.com/code0-tech/sculptor/issues/153), [#155](https://github.com/code0-tech/sculptor/issues/155), [#167](https://github.com/code0-tech/sculptor/issues/167)
- Tooling and release prep for the TypeScript core and wrapper gem setup: [#1](https://github.com/code0-tech/triangulum/issues/1), [#2](https://github.com/code0-tech/triangulum/issues/2), [#6](https://github.com/code0-tech/triangulum/issues/6)
- Release automation checks and dev-environment orchestration: [#17](https://github.com/code0-tech/pyxis/issues/17), [#20](https://github.com/code0-tech/pyxis/issues/20), [#195](https://github.com/code0-tech/reticulum/issues/195)
- Build and packaging updates for runtime versioning and compose files: [#427](https://github.com/code0-tech/reticulum/issues/427), [#439](https://github.com/code0-tech/reticulum/issues/439), [#604](https://github.com/code0-tech/reticulum/issues/604)
- Runtime environment and UX polish for token handling and validation inputs: [#608](https://github.com/code0-tech/reticulum/issues/608), [#673](https://github.com/code0-tech/pictor/issues/673)

### Changed

- Core compatibility and refactors for sculptor, flow handling, and type updates: [#79](https://github.com/code0-tech/sculptor/issues/79), [#80](https://github.com/code0-tech/sculptor/issues/80), [#81](https://github.com/code0-tech/sculptor/issues/81)
- Flow and project infrastructure updates around validator replacement and retry behavior: [#116](https://github.com/code0-tech/code0-flow/issues/116), [#123](https://github.com/code0-tech/code0-flow/issues/123), [#251](https://github.com/code0-tech/tucana/issues/251)
- Versioning and component alignment across definitions, runtime, and UI packages: [#266](https://github.com/code0-tech/code0-definition/issues/266), [#572](https://github.com/code0-tech/reticulum/issues/572), [#599](https://github.com/code0-tech/pictor/issues/599)
- Dashboard and runtime updates for moved components and newer Sagittarius behavior: [#627](https://github.com/code0-tech/pictor/issues/627), [#640](https://github.com/code0-tech/pictor/issues/640), [#871](https://github.com/code0-tech/sagittarius/issues/871)
- Flow definition and routing adjustments for updated inputs and metadata: [#880](https://github.com/code0-tech/sagittarius/issues/880), [#894](https://github.com/code0-tech/sagittarius/issues/894), [#189](https://github.com/code0-tech/draco/issues/189)
- Tucana structure changes for signatures and shared flow models: [#215](https://github.com/code0-tech/tucana/issues/215), [#219](https://github.com/code0-tech/tucana/issues/219), [#220](https://github.com/code0-tech/tucana/issues/220)
- Tucana follow-ups for flow types, proto/json conversion, and value shaping: [#221](https://github.com/code0-tech/tucana/issues/221), [#239](https://github.com/code0-tech/tucana/issues/239), [#244](https://github.com/code0-tech/tucana/issues/244)
- Definition and Taurus synchronization for newer models and helper functions: [#302](https://github.com/code0-tech/code0-definition/issues/302), [#151](https://github.com/code0-tech/taurus/issues/151), [#158](https://github.com/code0-tech/taurus/issues/158)
- Final Taurus follow-up for object access helpers: [#162](https://github.com/code0-tech/taurus/issues/162)

### Fixed

- Validation and suggestion bugs across node parameters, JSON inputs, and node suggestion logic: [#169](https://github.com/code0-tech/sculptor/issues/169), [#147](https://github.com/code0-tech/sculptor/issues/147), [#51](https://github.com/code0-tech/triangulum/issues/51)
- Suggestion and reference edge cases for nested paths, optional types, and real data fixtures: [#50](https://github.com/code0-tech/triangulum/issues/50), [#15](https://github.com/code0-tech/triangulum/issues/15), [#22](https://github.com/code0-tech/triangulum/issues/22)
- Definition and parameter fixes for node suggestions, HTTP types, and object access behavior: [#68](https://github.com/code0-tech/triangulum/issues/68), [#276](https://github.com/code0-tech/code0-definition/issues/276), [#275](https://github.com/code0-tech/code0-definition/issues/275)
- Flow and runtime basics such as list access, reserved names, and undefined node settings: [#274](https://github.com/code0-tech/code0-definition/issues/274), [#277](https://github.com/code0-tech/code0-definition/issues/277), [#73](https://github.com/code0-tech/sculptor/issues/73)
- Flow creation and role management fixes for navigation and missing definitions: [#74](https://github.com/code0-tech/sculptor/issues/74), [#91](https://github.com/code0-tech/sculptor/issues/91), [#253](https://github.com/code0-tech/code0-definition/issues/253)
- Namespace and runtime integrity checks for admin roles, runtime deletion, and primary runtime rules: [#851](https://github.com/code0-tech/sagittarius/issues/851), [#852](https://github.com/code0-tech/sagittarius/issues/852),
  [#853](https://github.com/code0-tech/sagittarius/issues/853)
- Runtime data consistency fixes for foreign-key handling and flow updates: [#854](https://github.com/code0-tech/sagittarius/issues/854), [#855](https://github.com/code0-tech/sagittarius/issues/855), [#131](https://github.com/code0-tech/sculptor/issues/131)
- Service and adapter updates for number handling, ProtoJSON, and missing configurations: [#117](https://github.com/code0-tech/taurus/issues/117), [#161](https://github.com/code0-tech/draco/issues/161), [#217](https://github.com/code0-tech/tucana/issues/217)
- Status and response handling improvements for HTTP status descriptions and restart options: [#252](https://github.com/code0-tech/code0-definition/issues/252), [#446](https://github.com/code0-tech/reticulum/issues/446), [#76](https://github.com/code0-tech/sculptor/issues/76)
- UI and navigation fixes for validation, empty fields, and broken back links: [#103](https://github.com/code0-tech/sculptor/issues/103), [#632](https://github.com/code0-tech/pictor/issues/632), [#78](https://github.com/code0-tech/sculptor/issues/78)
- Back-link and placeholder fixes for role screens, version placeholders, and missing links: [#77](https://github.com/code0-tech/sculptor/issues/77), [#71](https://github.com/code0-tech/sculptor/issues/71), [#75](https://github.com/code0-tech/sculptor/issues/75)
- Component cleanup and validation work for old fragments, reference fields, and missing variants: [#82](https://github.com/code0-tech/sculptor/issues/82), [#107](https://github.com/code0-tech/sculptor/issues/107), [#14](https://github.com/code0-tech/triangulum/issues/14)
- Type and signature fixes for OBJECT, adapters, and validation payloads: [#293](https://github.com/code0-tech/code0-definition/issues/293), [#295](https://github.com/code0-tech/code0-definition/issues/295), [#914](https://github.com/code0-tech/sagittarius/issues/914)
- Flow deletion and data-type handling improvements around missing IDs and login policy: [#913](https://github.com/code0-tech/sagittarius/issues/913), [#165](https://github.com/code0-tech/sculptor/issues/165), [#67](https://github.com/code0-tech/triangulum/issues/67)
- Validation and node-reference fixes for message routing and input parameter detection: [#49](https://github.com/code0-tech/triangulum/issues/49), [#140](https://github.com/code0-tech/sculptor/issues/140), [#65](https://github.com/code0-tech/sculptor/issues/65)
- Runtime validation and protocol bugs in flow settings and foreign-key-sensitive updates: [#891](https://github.com/code0-tech/sagittarius/issues/891), [#892](https://github.com/code0-tech/sagittarius/issues/892), [#895](https://github.com/code0-tech/sagittarius/issues/895)
- Flow type and validation mapping fixes for missing datatypes and validation inputs: [#898](https://github.com/code0-tech/sagittarius/issues/898), [#904](https://github.com/code0-tech/sagittarius/issues/904), [#52](https://github.com/code0-tech/triangulum/issues/52)
- Reference and parsing issues for numeric values, null indices, and control flow: [#149](https://github.com/code0-tech/taurus/issues/149), [#58](https://github.com/code0-tech/triangulum/issues/58), [#154](https://github.com/code0-tech/taurus/issues/154)
- Runtime data and request handling for missing references and protobuf decoding: [#63](https://github.com/code0-tech/triangulum/issues/63), [#197](https://github.com/code0-tech/draco/issues/197), [#196](https://github.com/code0-tech/draco/issues/196)
- Definition and branching fixes for response payloads, loop handling, and missing starting nodes: [#321](https://github.com/code0-tech/code0-definition/issues/321), [#65](https://github.com/code0-tech/triangulum/issues/65), [#909](https://github.com/code0-tech/sagittarius/issues/909)
- Missing start node handling for validation service and flow input requirements: [#910](https://github.com/code0-tech/sagittarius/issues/910), [#911](https://github.com/code0-tech/sagittarius/issues/911)
- Final validation follow-ups for string conversion and reference updates: [#912](https://github.com/code0-tech/sagittarius/issues/912), [#917](https://github.com/code0-tech/sagittarius/issues/917)

## [[0.0.0-canary-2356067148-c06e576791513b10dbcb10aa3b0420b87178a205]](https://github.com/code0-tech/codezero/releases/tag/0.0.0-canary-2356067148-c06e576791513b10dbcb10aa3b0420b87178a205) - 2026-02-28

### Added

- Create, delete and update runtimes
- Create and delete flows
- Create, delete and update organizations
- Create, delete and update projects
- Invite and remove members
- Create, delete and update roles and permissions
- Assign and remove roles on members
- Assign and remove runtimes on projects
- Update application restrictions (Organizations creation, User registration, Display admin status)
- Set legal pages
- Add next nodes inside flows
- Update parameters of nodes
- Update flow settings
- Execute flows over runtime
- Use variables and nested nodes in flows
- Support for REST flows
- Login, register and logout
- Forgot password, reset password and email verification
