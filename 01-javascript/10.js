#!/usr/bin/env node

const log = console.log;

/* 链式添加方法，和链式调用方法 */

let Check = function() {};

Check.prototype.addMethod = function(name, fn) {
  this[name] = fn;
  return this;
};

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
