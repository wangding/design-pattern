#!/usr/bin/env node

const log = console.log;

/* 对象的另一种形式，方法可以通过点语法使用，也可以通过点语法创建 */

let objCheck = () => {};

objCheck.checkName = () => log('check name');
objCheck.checkEmail = () => log('check email');
objCheck.checkPassword = () => log('check password');

objCheck.checkName();
objCheck.checkEmail();
objCheck.checkPassword();
