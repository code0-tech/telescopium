---
title: Changelog
icon: IconRestore
---

All notable changes to the CodeZero software will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Support for OpenTelemetry within the frontend application of sculptor capturing logs, traces, metrics and errors.
- New textarea component inside UI library of pictor.
- Variables and their corresponding Node are now highlighted inside the flow editor.
- New sidebar within the frontend application of sculptor.
- Runtime usage calculation on runtime.
- Support for bigger number values.
- New remove digits and has digits functions.
- A flow can be disabled to be updated to the runtime. We've implemented a reasoning field to explain why the flow is disabled.
- Delete user mutation for administrators.
- Implement flow validation on backend side.
- License management in cloud.
- Redirect option on login or registration within cloud version.
- Runtime support for actions build with our Action SDK.

### Changed

- Switched to TypeScript for RuntimeFunction, Function, Flow and DataType definitions. This generelly improves type safety and increased reliability of suggestion and validation.
- Runtime status is now more accurate and has more details and also exposes features installed on the runtime.
- Moving dashboard components from UI library named pictor to frontend application named sculptor.
- New DataTypeType input based on custom type language.

### Fixed

- Correct naming of variables inside suggestion.
- Uncaught TypeError: can't access property "push", n.settings. nodes are undefined
- The flow creation menu shows even though there is no flow type available.
- Role creation page back link is broken.
- Cron flow definition is wrong.
- Number is always displayed with a decimal point. It not depends on the value of the number.
- Prevent role deletion if no member has a different admin role.
- Change foreign key from namespace_projects(primary_runtime_id) to runtimes(id) from cascade to restrict.
- Ensure a project always has a primary runtime if it contains flows.
- std::number::math Panics when second number is bigger than first.
- REST adapter returns ProtoJson not JSON.
- Wrong parameter description for HTTP Status code.
- Project slug input validation is missing.
- NodeParameter is possible to be an empty array. Fallback to FunctionParameterDefinition.
- Input fields error when not filled.
- Create new project page go back link is broken.
- Go back button link is broken on members add page.
- Sagittarius version is a placeholder.
- Create role mutation and screen are missing and not linked.
- Remove old project tab fragmental component under [namespaceId].
- ReferenceValue missing fields during flow update.
- Type OBJECT and Function std::object::set have wrong signature.
- Validation for trigger doesn't exist.

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