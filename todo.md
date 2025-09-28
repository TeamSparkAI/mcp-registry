# TODO

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

Limitations (isSecret):
- Fields with fixed "value" and "isSecret" are not currently obscured in the UX (it's not clear they should be)
- Input format boolean or input with choices shows dropdown, whose selection is not masked if "isSecret" is specified
