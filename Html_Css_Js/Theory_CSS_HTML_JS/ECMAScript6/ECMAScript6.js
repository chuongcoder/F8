// 1/ Let & const

// code block: if else , loop ,{},..
// if(true) {} == {}
// var/ let,const : Scope Hosting (diem khac nhau -> pham vi truy cap)
// {
// let c = 'javascript'
// }
// console.log(c); ko truy cap duoc (thay let = var thi duoc)

// var : co hosting -> tu dong dua var a len dau
// Ex:
//  a = 1;
//  var a;
//  console.log(a);
//  => ko loi

// 2/ Template literals : ` `

// const name = 'Chuong';
// const name2 = 'Minh';
// const NAME = `Pham han : ${name} ${name2}`;
// console.log(NAME)

// 3/ Arrow function
// const logger = function(log) {
//     console.log(log);
// }

// logger('Minh CHuong')


// *Arrow
// const logger = (log) => {
//         console.log(log);
//     }

//     logger('Minh CHuong')

// const sum = (a,b) => a+b
// console.log(sum(2,2))

// *return a object: =>( Object )
// const sum  = (a,b) =>({a:a,b:b});
// console.log(sum(2,3))

// * return a propertis of Object
// const course = {
//     name: 'Javascript',
//     getName: function() {
//         return this.name;
//     }
// }
// console.log(course.getName())

// 4/ Classes (Object Constructor -> nang cap)

// *OC
// function Course(name,price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function() {
//     return this.name;
// }
// }

// const New_course = new Course('Javascript',333333)
// console.log(New_course);

// *Classes: phan cap constructor va function rieng biet
// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     getName() {
//         return this.name;
//     }
// }


// 5/ Default parameter values
// function log(logger) {
//     if(typeof logger ==='undefined') {
//         logger = 'Gia tri mac dinh';
//     }
//      console.log(logger);
// }
// log(); => Gia tri mac dinh

// *type
// function log(l,type='log') {
//     console[type](l);
// }
// log('chuong')
// //  => chuong
// log('chuong','error')
// //  => chuong(red)
// log('chuong','warn')
// // => chuong(warn)


// 6/ Enhanced object literals
// object co key trung value -> bo value
// {
//     name:name, => name,
//     getName: function() {
//         return name;
//     }
//      => getName() {
//         return name;
//     }
// }

// dinh nghia key cho object duoi dang bien
// var fieldName = 'name';

// const course = {
//     name:'Javascript',
//     [fieldName]:'Js'
// }

// 7/ Destructuring
// *sd voi array
// Ex: Array
// var array = ['JS','PHP','C'];
// var [a,b,c] = array;
// console.log(a,b,c);
// // => JS,PHP,C

// var [a,...rest] = array;
// console.log(rest);
// // => PHP C

// *su dung voi object [var] == {key}
// Ex:Object
// var course = {
//     name: 'Javascript',
//     price: 333
// }
// var {name,price} = course;
// console.log(name,price)
// // => Javascript 333

// *object long nhau
// var course = {
//     name :'JS',
//     image:'IMG',
//     children :{
//         name:'MInh CHuong'
//     }
// }

// var {name:ParentName ,children:{name:CHildName}} = course;
// doi lai ten name: Rename
// console.log(ParentName);
// console.log(CHildName);
// * Tu khoi tao gia tri cho key
// var {key='New_value',key2,key3};
// Ex:
// var {age= '19',addresss = 'Quang Ngai'} = course;
// console.log(age,addresss);
// 19 Quang Ngai


// 8/Rest Parameters
// function logger(...params) {
//     console.log(params);
// }
// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8));
// => 1,2,3,4,5,6,7,8
// (a,b,...params) =>3,4,5,6,7,8

// *Rest voi Object (tuong tu voi array[])
// function log({name,age, ...rest}) {
//     console.log(name);
//     console.log(age);
//     console.log(rest);
// }
// log({
//     name:'Minh chuong',
//     age:19,
//     address:'Ho Chi Minh',
//     gt:'male'
// })
// Minh chuong
// 19
// {address: 'Ho Chi Minh', gt: 'male'}



// 9/ SPREAD
// * Noi Array
// var array1 = ['JS','PHP','C'];
// var array2 = ['Java'];
// var array3 = [...array2,...array1];
// console.log(array3);

// * Noi Object tuong tu array [] = {...obj1,...obj2}
// key trung nhau -> lay key dc dinh nghia sau
// *Array
// var a = ['PHP','JS'];
// function arr(...rest) {
// for (var i=0;i<rest.length;i++){
//         console.log(rest[i]);
//     }
// }
// arr(...a);
// // truyen doi so (...a) => spread.. Neu la obj : ({...name_obj});
// // tham So (...rest) => rest

// Ex: Bạn hãy sử dụng spread để sao chép tất cả các key và value từ object person1 sang person2
// c1: ko dung spread
// const person1 = {
//     name: 'Son',
//     age: 21
// }


// const person2 = {};
// function ps1({name,age}) {
//     person2.name = name;
//     person2.age = age;
// }
// ps1({
//     name: 'Son',
//     age: 21
// })


// console.log(person2.name) // Output: 'Son'
// console.log(person2.age) // Output: 21
// console.log(person1 === person2) // Output: false

// c2: dung rest ;
// const person1 = {
//     name: 'Son',
//     age: 21
// }

// const person2 = {
//     ...person1
// }

// // Expected results
// console.log(person2.name) // Output: 'Son'
// console.log(person2.age) // Output: 21
// console.log(person1 === person2) // Output: false


// c3: dung spread
// const person1 = {
//     name: 'Son',
//     age: 21
// }

// function Create_Obj(...rest) {
//     var new_obj = {};
//     for (var i=0;i<rest.length;i++) {
//         new_obj['name'] = rest[i].name;
//         new_obj['age'] = rest[i].age;
//     }
//     return new_obj;
// }

// const person2 = Create_Obj({...person1});



// console.log(person2.name) // Output: 'Son'
// console.log(person2.age) // Output: 21
// console.log(person1 === person2) // Output: false


// 10/ Tagged template literals (mẫu chữ đc gắn thẻ)
// Ex:
// dung destructuring -> lay chu 'hoc lap trinh'
// console.log('fisrt',first);
// console.log('strings',strings);
// console.log('values',values);
// //     [fisrt] Hoc lap trinh
// //     [' tai ', ' !']
// //    ['Javascript', 'F8']

// function hightlight([first,...strings],...values) {
//     // lap mang values
//     // ...acc: lay tat ca gia tri khoi tao dang array
//     // curr: duyet tung phan tu trong values (javascript,F8)
//     // strings,shift(): lay phan tu dau tien trong mang chuoi strings('tai' ,'!') va xoa no
//     return values.reduce(
//         (acc,curr) => [...acc,'<span>${curr}</span>',strings.shift()],
//         // gia tri khoi tao (acc):[first] = hoc lap trinh tai
//         [first]
//     )
//     .join('')
//     // Hoc lap trinh <span>${curr}</span> tai <span>${curr}</span> !
// }
// // Hoc lap trinh
// // Hoc lap trinh Javascript tai
// // Hoc lap trinh Javascript tai F8 !


// var brand = 'F8';
// var course = 'Javascript';


// // 0 : tham so thu nhat(phan tu thu nhat) -> chuoi ko co phan nội suy
// // (3) ['Hoc lap trinh ', ' tai ', ' !', raw: Array(3)]
// // // 2 tham so con lai la cac biến nội suy ${var}
// // 1
// // "Javascript"
// // 2
// // "F8"

// const html = hightlight`Hoc lap trinh ${course} tai ${brand} !`;

// console.log(html);


// 11/ Modules ( fun export && fun import)
// * 2 loai export : const & default 
// * mot module chi export default mot cai 
// syn:  import name_fun from 'source' : nap ham co ten name_fun tu sourse  (use.js)
//       export default name_fun (source.js)
// Ex
// // use.js
// import export default 
// import logger from 'source.js'
// logger('Day la module...','error')
// // source.js :
// function logger(log,type='log'){
//     console[type](log);
// }
// // cho phep file khac sd ham logger
// export default logger 


// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js';

// or

// import * as constants from ./constants.js : auto import all export from constant file to contants var

// from constans.js :
// export const TYPE_LOG = 'log';
// export const TYPE_WARN = 'warn';
// export const TYPE_ERROR = 'error';


// * Co the sd mot file index trung gian de import va export mot module khac 
// Ex: 
// trunggian.js 
// import logger from './logger.js'; 
// export default logger;

// or 

// export { default } from './logger.js';


// 12/ Optional chaining: dung de check trong mot object co ton tai key dang xet hay khong 
// Ex:
const obj = {
    name: 'Alice',
    cat: {
        name: 'Alice1',
        cat2: {
            name: 'Alice2',
            cat3: {
                name: 'Alice3'
            }
        }
    }
}

if (
    // obj.cat &&
    // obj.cat.cat2 &&
    // obj.cat.cat2.cat3 
    obj?.cat?.cat2?.cat3
) {
    console.log(obj.cat.cat2.cat3.name)
    // Alice3
}

