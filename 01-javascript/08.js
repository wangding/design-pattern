#!/usr/bin/env node

const log = console.log;

/* 链式调用 */

let Check = function () {};

Check.prototype = {
  checkName() {
    log('check name');
    return this;
  },

  checkEmail() {
    log('check email');
    return this;
  },

  checkPassword() {
    log('check password');
    return this;
  }
};

let checker = new Check();

checker.checkName().checkEmail().checkPassword();
