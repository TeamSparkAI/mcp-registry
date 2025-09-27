# TODO

Limitation: Input format boolean or input with choices shows dropdown, whose selection is not masked if isSecret is specified

Support valueHint in positional arguments

Support isRepeated for positional and named arguments
- Add another instance
- Remove any instance other than first one

Add support for "strict" mode
- No inference of things like packageHint
- No auto add of package ref
- No auto prefix of arg namess that don't start with a dash
- Review and identify any other non-spec massaging we do

Add support for other registry types (npm and pypi should work)
- oci (docker)
- mcpb
- nuget

Test Mode
- Test Your server.json link in header bar
- Creates test view
  - Input server.json (enter to complete, way to re-edit later)
- Render registry details page with Configure support
