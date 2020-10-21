#!/usr/bin/env node

const log = console.log;

/* 添加方法 */

let Check = function() {};

Check.prototype.addMethod = function(name, fn) {
  this[name] = fn;
  return this;
};

/* 实例化 */
let checker = new Check();

checker.addMethod('checkName', function () {
  log('check name');
  return this;
}).addMethod('checkEmail', function () {
  log('check email');
  return this;
}).addMethod('checkPassword', function () {
  log('check password');
  return this;
});

checker.checkName().checkEmail().checkPassword();

// -------------------------------------------------- //

Check.addMethod = function (name, fn) {
  this[name] = fn;
  return this;
};

Check.addMethod('checkName', function () {
  log('check name');
  return this;
}).addMethod('checkEmail', function () {
  log('check email');
  return this;
}).addMethod('checkPassword', function () {
  log('check password');
  return this;
});

/* 非实例化 */
Check.checkName().checkEmail().checkPassword();
