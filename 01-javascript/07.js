#!/usr/bin/env node

const log = console.log;

/* 原型 */

let Check = function () {};

/*
Check.prototype.checkName     = () => log('check name');
Check.prototype.checkEmail    = () => log('check email');
Check.prototype.checkPassword = () => log('check password');
*/

/* 原型的另一种写法 */

Check.prototype = {
  checkName() {
    log('check name');
  },

  checkEmail() {
    log('check email');
  },

  checkPassword() {
    log('check password');
  }
};

let checker = new Check();

checker.checkName();
checker.checkEmail();
checker.checkPassword();
