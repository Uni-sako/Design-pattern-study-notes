/** 椰子面包 */
function CoconutBread() {
  this.ingredient = ['flour', 'milk powder', 'coconut powder', 'sugar'];
}

/** 黄油面包 */
function ButterBread() {
  this.ingredient = ['flour', 'milk', 'butter', 'egg'];
}

/** 杂粮面包 */
function MultigrainBread() {
  this.ingredient = ['flour', 'rye flour', 'oat', 'flaxseed', 'milk'];
}

/** 面包店（工厂） */
function Bakery() {}

// 制作特定类型的面包
Bakery.prototype.makeBread = function makeBread(type) {
  if (!type) {
    return null;
  }

  switch (type) {
    case 'COCONUT':
      return new CoconutBread();
    case 'BUTTER':
      return new ButterBread();
    case 'MULTIGRAIN':
      return new MultigrainBread();
    default:
      return null;
  }
};