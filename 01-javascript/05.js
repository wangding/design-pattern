#!/usr/bin/env node

const log = console.log;

/* 真假对象 */

let objCheck = () => {
  return {
    checkName() {
      log('check name');
    },

    checkEmail() {
      log('check email');
    },

    checkPassword() {
      log('check password');
    }
  }
};

let checker = objCheck();

checker.checkName();
checker.checkEmail();
checker.checkPassword();
