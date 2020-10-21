#!/usr/bin/env node

const log = console.log;

/* 函数是全局变量，下面代码增加了三个全局变量 */

function checkName() {
  log('check name');
}

function checkEmail() {
  log('check email');
}

function checkPassword() {
  log('check password');
}

checkName();
checkEmail();
checkPassword();
