---
title: Changelog
icon: IconRestore
---

<!-- rumdl-configure-file { "MD013": { "headings": false } } -->

All notable changes to the CodeZero software will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- AI subscription endpoint accepting flow ID, project ID, prompt and model identifier; streams the generated flow back via Velorum: [#1012](https://github.com/code0-tech/sagittarius/issues/1012)
- Query to fetch all available AI models via Velorum gRPC: [#1013](https://github.com/code0-tech/sagittarius/issues/1013)
- Typed response for AI Subscription Flow: [#1049](https://github.com/code0-tech/sagittarius/issues/1049)
- New module structure — runtime flow types, flow types, runtime functions, functions and data types are now retrieved and linked per module: [#934](https://github.com/code0-tech/sagittarius/issues/934)
- Mutatable module configurations linked to NamespaceProjectRuntimeAssignment, exposed via GraphQL: [#983](https://github.com/code0-tech/sagittarius/issues/983)
- Module update endpoint support in Aquila: [#311](https://github.com/code0-tech/aquila/issues/311)
- Module properties included in Draco runtime: [#212](https://github.com/code0-tech/draco/issues/212)
- Module properties included in Taurus: [#186](https://github.com/code0-tech/taurus/issues/186)
- Module structure implemented in code0-flow: [#147](https://github.com/code0-tech/code0-flow/issues/147)
- Module structure implemented in code0-definition with updated folder layout and reader: [#333](https://github.com/code0-tech/code0-definition/issues/333)
- Display of all available modules on runtime column and within settings: [#195](https://github.com/code0-tech/sculptor/issues/195)
- Module configuration page within project page: [#197](https://github.com/code0-tech/sculptor/issues/197)
- Module grouping in next node dialog: [#202](https://github.com/code0-tech/sculptor/issues/202)
- Auth support for the REST adapter: [#246](https://github.com/code0-tech/draco/issues/246)
- External host and URL env variables as endpoint definition: [#243](https://github.com/code0-tech/draco/issues/243)
- GraphQL subscription to execute a test execution, streaming until an execution result is received; no persistence required: [#932](https://github.com/code0-tech/sagittarius/issues/932)
- Test run implementation — select runtime, pass flow body, return results via GraphQL subscription: [#422](https://github.com/code0-tech/sagittarius/issues/422)
- Persistence of test runs in database including query and delete mutation: [#423](https://github.com/code0-tech/sagittarius/issues/423)
- Receiving, storing and querying execution results: [#933](https://github.com/code0-tech/sagittarius/issues/933)
- Node or function identifier added to execution results: [#1023](https://github.com/code0-tech/sagittarius/issues/1023), [#220](https://github.com/code0-tech/taurus/issues/220)
- Taurus handles test executions and parses back an execution result: [#185](https://github.com/code0-tech/taurus/issues/185)
- Taurus handles SubFlows with settings, default values and hidden flags: [#184](https://github.com/code0-tech/taurus/issues/184)
- removed_at field on FlowTypeSetting for safe soft-deletion: [#812](https://github.com/code0-tech/sagittarius/issues/812)
- Option to parse FunctionDefinitions over gRPC: [#881](https://github.com/code0-tech/sagittarius/issues/881)
- ActionStatus added to RuntimeStatus: [#266](https://github.com/code0-tech/tucana/issues/266)
- FlowTypeIdentifier added to AdapterConfiguration: [#261](https://github.com/code0-tech/tucana/issues/261)
- cast field for NodeParameters: [#273](https://github.com/code0-tech/tucana/issues/273)
- design field on RuntimeFunction and Function: [#270](https://github.com/code0-tech/tucana/issues/270)
- NodeFunctionIdWrapper as a possible NodeValue for parameters: [#271](https://github.com/code0-tech/tucana/issues/271)
- definition_source set by DataTypeService: [#144](https://github.com/code0-tech/code0-flow/issues/144)
- Action prefix for definition source in Aquila: [#355](https://github.com/code0-tech/aquila/issues/355)
- Overwrite of definition source from Actions to its identifier: [#306](https://github.com/code0-tech/aquila/issues/306)
- Input type as parameter for flow types: [#330](https://github.com/code0-tech/code0-definition/issues/330)
- Function definitions added in code0-definition: [#344](https://github.com/code0-tech/code0-definition/issues/344)
- Aquila gRPC split into Dynamic and Static server: [#299](https://github.com/code0-tech/aquila/issues/299)
- ActionCable setup for GraphQL subscriptions: [#357](https://github.com/code0-tech/sagittarius/issues/357)
- Aquila flags runtime status for services that are not responding: [#312](https://github.com/code0-tech/aquila/issues/312)
- Type input schema extraction in Triangulum: [#77](https://github.com/code0-tech/triangulum/issues/77)
- Sub flow suggestions in Triangulum: [#76](https://github.com/code0-tech/triangulum/issues/76)
- Schema extraction based on type in Triangulum: [#90](https://github.com/code0-tech/triangulum/issues/90)
- Select component in Pictor: [#686](https://github.com/code0-tech/pictor/issues/686)
- Error feedback strategy for Taurus — standardised error codes and types for denied requests: [#153](https://github.com/code0-tech/taurus/issues/153)
- External few-shot configuration in Velorum: [#9](https://github.com/code0-tech/velorum/issues/9)
- Primitive inputs (Boolean, Number, Text textarea) in sculptor: [#198](https://github.com/code0-tech/sculptor/issues/198)
- Select type input in sculptor: [#199](https://github.com/code0-tech/sculptor/issues/199)
- Execution results view in sculptor: [#193](https://github.com/code0-tech/sculptor/issues/193)
- New suggestion concept — tab system for filtering by type and definition source with search: [#184](https://github.com/code0-tech/sculptor/issues/184)
- New suggestions for SubFlows in sculptor: [#127](https://github.com/code0-tech/sculptor/issues/127)
- License management page in sculptor: [#228](https://github.com/code0-tech/sculptor/issues/228)
- Refactored NamespaceLicense to support instance-level licensing for self-managed EE with optional namespace association, new GraphQL mutations and queries: [#754](https://github.com/code0-tech/sagittarius/issues/754)
- Definitions received over module layer in sculptor: [#194](https://github.com/code0-tech/sculptor/issues/194)

### Changed

- Merged Execution and Test Execution in Aquila and Taurus: [#337](https://github.com/code0-tech/aquila/issues/337), [#207](https://github.com/code0-tech/taurus/issues/207)
- Reworked HTTP functions — removed http::request::create and http::response::create, objects resolved into fields: [#325](https://github.com/code0-tech/code0-definition/issues/325)
- Reworked REST flow type, REST and HTTP functions: [#359](https://github.com/code0-tech/code0-definition/issues/359), [#231](https://github.com/code0-tech/taurus/issues/231), [#205](https://github.com/code0-tech/taurus/issues/205)
- Adjusted few-shots to current definition def-0.0.28 in Velorum: [#14](https://github.com/code0-tech/velorum/issues/14)
- Runtime status changed to a heartbeat: [#213](https://github.com/code0-tech/draco/issues/213), [#187](https://github.com/code0-tech/taurus/issues/187)
- NodeFunctionIdWrapper replaced with SubFlow: [#931](https://github.com/code0-tech/sagittarius/issues/931), [#45](https://github.com/code0-tech/triangulum/issues/45), [#44](https://github.com/code0-tech/triangulum/issues/44)
- RuntimeStatusService updated to latest Tucana version: [#970](https://github.com/code0-tech/sagittarius/issues/970)
- Test executions reworked to match new available interfaces in Tucana: [#285](https://github.com/code0-tech/tucana/issues/285)
- Interface adjusted to new RuntimeError strategy in Tucana: [#279](https://github.com/code0-tech/tucana/issues/279)
- JSON input reworked in sculptor: [#200](https://github.com/code0-tech/sculptor/issues/200)
- EditorInput reworked in Pictor: [#687](https://github.com/code0-tech/pictor/issues/687)
- Runtime assignment is now set as primary directly in sculptor: [#190](https://github.com/code0-tech/sculptor/issues/190)
- Definition folder names updated in Reticulum (cron → draco_cron, rest → draco_rest, standard → taurus): [#653](https://github.com/code0-tech/reticulum/issues/653)
- Reticulum env updated — root password, provider, ide_velorum default profile and INITIAL_RUNTIME_TOKEN: [#801](https://github.com/code0-tech/reticulum/issues/801), [#802](https://github.com/code0-tech/reticulum/issues/802), [#803](https://github.com/code0-tech/reticulum/issues/803), [#808](https://github.com/code0-tech/reticulum/issues/808)
- New db fields for parameters and runtime parameters based on new Tucana version: [#890](https://github.com/code0-tech/sagittarius/issues/890)
- Telescopium set up for Taurus: [#122](https://github.com/code0-tech/taurus/issues/122)
- Aquila Status Service temporarily deactivated to eliminate UNIMPLEMENTED spam logs in Sagittarius: [#359](https://github.com/code0-tech/aquila/issues/359)
- Documentation added for Aquila Action Service and service structure: [#269](https://github.com/code0-tech/aquila/issues/269)
- Outdated links removed from Aquila README: [#319](https://github.com/code0-tech/aquila/issues/319)
- Postgres 18 update: [#920](https://github.com/code0-tech/sagittarius/issues/920)

### Removed

- Runtime features table, model, factories and related GraphQL types: [#935](https://github.com/code0-tech/sagittarius/issues/935), [#286](https://github.com/code0-tech/tucana/issues/286)
- Infinity function dropped: [#210](https://github.com/code0-tech/taurus/issues/210), [#353](https://github.com/code0-tech/code0-definition/issues/353)

### Fixed

- GenerationFlowSerializer incorrectly auto-generating a next_node_id, causing infinite loops in the flow builder: [#1058](https://github.com/code0-tech/sagittarius/issues/1058)
- Null values not allowed in flow setting values: [#1066](https://github.com/code0-tech/sagittarius/issues/1066)
- Module config mutation producing incorrect results: [#1003](https://github.com/code0-tech/sagittarius/issues/1003)
- Execution gRPC endpoint losing date information: [#1014](https://github.com/code0-tech/sagittarius/issues/1014)
- Service identified by token alone instead of identifier and token: [#307](https://github.com/code0-tech/aquila/issues/307)
- Return function reference suggestion and schema extraction not working in Triangulum: [#95](https://github.com/code0-tech/triangulum/issues/95)
- Undefined type in a union resulting in a generic schema in Triangulum: [#108](https://github.com/code0-tech/triangulum/issues/108)
- Node param type null not falling back to function param type in Triangulum: [#110](https://github.com/code0-tech/triangulum/issues/110)
- Triangulum validation failing without any error information: [#99](https://github.com/code0-tech/triangulum/issues/99)
- Action execution not handled correctly in Taurus: [#229](https://github.com/code0-tech/taurus/issues/229)
- Invalid signature in rest::control::respond in Taurus: [#235](https://github.com/code0-tech/taurus/issues/235)
- Rest Response Function Definition having incorrect signature: [#361](https://github.com/code0-tech/code0-definition/issues/361)
- Rest Auth Type missing undefined option: [#363](https://github.com/code0-tech/code0-definition/issues/363)
- JSON conversion of infinite value causing a panic in Rust: [#309](https://github.com/code0-tech/tucana/issues/309)

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
