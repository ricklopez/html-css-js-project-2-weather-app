console.log("results.js");

var url = window.location.href;
//https://developer.mozilla.org/en-US/docs/Web/API/URL
var params = new URL(url);

console.log(url);
console.log(params.searchParams.get("zip"));