#!/usr/bin/env node

const log = console.log;

/* 添加方法 */

let Check = function () {};

Check.prototype.addMethod = function(name, fn) {
  this[name] = fn;
};

let checker = new Check();

checker.addMethod('checkName',     () => log('check name'));
checker.addMethod('checkEmail',    () => log('check email'));
checker.addMethod('checkPassword', () => log('check password'));

checker.checkName();
checker.checkEmail();
checker.checkPassword();
