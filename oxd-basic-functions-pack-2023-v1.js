// Release v1 2023-06-26
function cl(str) {
  // shorthand for 'console.log()'
  return console.log(str);
}
// EOF FNCT
function booleanize(str) {
  var strb = $.trim(str).toLowerCase();
  var res =
    strb === 0 || strb === "0" || strb === "" || strb === false || strb === "false" || strb === null || strb === "null" ? false :
    strb !== "" || strb > 0 || strb < 0 || strb === true || strb === "true" ? true :
    undefined;
  return res;
}
// EOF FNCT
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    word = $.camelCase(word);
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/(-|\s)/g, '');
}
// EOF FNCT