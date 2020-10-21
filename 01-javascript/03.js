#!/usr/bin/env node

const log = console.log;

/* 用对象收编函数，下面代码只增加了一个全局变量 */
/* 当然，如果 objCheck 冲突，会导致所有方法不能使用 */

let objCheck = {
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

objCheck.checkName();
objCheck.checkEmail();
objCheck.checkPassword();
