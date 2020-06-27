/** 颜色类 */
function Color(name) {
  this.name = name;
}

/** 形状类 */
function Shape(name, color) {
  this.name = name;
  this.color = color;
  this.draw = function() {
    console.log(`${this.color.name} ${this.name}`);
  };
}

var cyan = new Color('Cyan');
var circle = new Shape('Circle', cyan);

// 青色的圆形
circle.draw();