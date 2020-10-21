#!/usr/bin/env node

const log = console.log;

/* 函数的另一种写法，下面代码增加了三个全局变量 */

let checkName     = () => log('check name');
let checkEmail    = () => log('check email');
let checkPassword = () => log('check password');

checkName();
checkEmail();
checkPassword();
