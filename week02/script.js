"use strict";

//^ 1.syntax

//^ 2. variable
/**
 *
 * JsDoc
 */

//^ 2.1 scope
// global scope
// function scope
// block scope
// module scope

//^ 2.2 hoisting
// attach to blobal scope

//^ 2.2.1
// decleration 1.
// initialazation 2.
// use 3.

//^ 2.3 variable comparison

// **** var :
// console.log(title);
// var title = "quera"; // data type: String
// 1.scope
// block scope -
// function scope +
// hoisting +

// console.log(title)
// {
//   var title = "quera2";
// }

// **** let :

let fName; //declaration
fName = "mohsen"; // initailazation

// block scope +
// hoist -

// & let variable in function scope & block scope it's not be hoisting -

// var name2 = "mobin";
// var name2 = "mobin";
// var name2 = "mobin";
// var name2 = "mobin";
// {
//   var name2 = "mobin";
// }

// let name3 = "maha";
// name3 = "maha";
// name3 = "maha";
{
  //   console.log(name3);
  //   let name3 = "maha";
  //   console.log(name3);
}

// let name2;

// {
//   let name2 = () => {};
// }

// {
//   let name2 = "ali";
// }

// {
//   let name2 = 0;
// }

// const family = '     babaali    23    3';
// family.charAt(2)
// console.log(family.trim())

const fullName = "pouriya      babaali";
console.log(fullName.replaceAll(" ", ""));
