/** 迭代器 */
function Iterator(generator) {
  // 此处只做演示（应该只针对可迭代对象），可利用：
  // 1. `typeof generator.collections[Symbol.iterator] === 'function'`；
  // 2. generator.collections[Symbol.iterator] === 'undefined'；
  // 来判断。
  this.collections = generator.collections;
  this.index = 0;
}

Iterator.prototype.next = function next() {
  if (this.hasNext()) {
    return this.collections[this.index++];
  }

  return null;
}

Iterator.prototype.hasNext = function hasNext() {
  if (this.index < this.collections.length) {
    return true;
  }

  return false;
}

/** 生成器 */
function Generator(collections) {
  this.collections = collections;
}

Generator.prototype.getIterator = function getIterator() {
  return new Iterator(this);
}

// 利用 ES6-Iterator 对有序集合做一个统一的遍历操作函数（可用`for of`代替）
function each(data) {
  if (!data[Symbol.iterator]) {
    return null;
  }

  const iterator = data[Symbol.iterator]();
  let item = {
    done: false,
  };

  while (!item.done) {
    item = iterator.next();

    if (!item.done) {
      console.log(item.value);
    }
  }
}