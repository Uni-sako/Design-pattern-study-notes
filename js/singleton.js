function Singleton() {
  this.greet = function() {
    console.log('Hello ~');
  };
}

Singleton.getInstance = (function() {
  var instance;

  return function() {
    if (instance) {
      return instance;
    }

    return (instance = new Singleton());
  }
})();

var o1 = Singleton.getInstance();
var o2 = Singleton.getInstance();

console.log(o1 === o2);