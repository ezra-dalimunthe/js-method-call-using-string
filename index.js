import foo from "./foo.js";
import Caller from "./caller.js";
function helloBar() {
  var f = new foo();
  const method = "bar";
  return f[method]();
}
window.addEventListener(
  "load",
  function () {
    var caller = new Caller();
    caller.callFooFunction("baz").then((result) => {
      this.document.getElementById("bazPlaceHolder").innerHTML = result;
    });

    caller.callAnonClassMethod("foo", "bar").then((result) => {
      this.document.getElementById("barPlaceHolder").innerHTML = result;
    });
  },
  false
);
