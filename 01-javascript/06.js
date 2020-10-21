#!/usr/bin/env node

const log = console.log;

/* 类 */

let Check = function () {
  this.checkName     = () => log('check name');
  this.checkEmail    = () => log('check email');
  this.checkPassword = () => log('check password');
};

/* // es6 class syntax
class Check {
  checkName() {
    log('check name');
  }

  checkEmail() {
    log('check email');
  }

  checkPassword() {
    log('check password');
  }
}
*/
let checker = new Check();

checker.checkName();
checker.checkEmail();
checker.checkPassword();
