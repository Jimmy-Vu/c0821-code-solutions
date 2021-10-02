/* exported defaults */
/*
  input: target(any javascript Object) and
  source(any javascript object)
  output: no output but target is modified

  -go through each property in source and check it
  against the properties in target
  -if target doesn't have that property, assign the property to target
*/
function defaults(target, source) {

  for (var x in source) {
    if (target[x] === undefined) {
      target[x] = source[x];
    }
  }
}
