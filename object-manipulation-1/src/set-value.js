/* exported setValue */
/*
  input: object(any javascript object),
  key(a javascript string), value(any javascript value)
  output: no return

  -add the new property with the key
   as the property and value as the property value
*/

function setValue(object, key, value) {
  object[key] = value;
}
