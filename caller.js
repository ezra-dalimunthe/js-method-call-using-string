class Caller {
  async callFooFunction(name) {
    return await import("./foo.js").then((obj) => {
      var f = new obj.default();
      return f[name]();
    });
  }
  async callAnonClassMethod(classname, methodname) {
    return await import(`./${classname}.js`).then((obj) => {
      var theClassInstance = new obj.default();
      return theClassInstance[methodname]();
    });
  }
}
export default Caller;
