// FUNCTION BUILT-IN:(có sẵn)
/*var nameofvariable=value;
- function co san:alert,prompt,confirm
 * alert('hien thong bao');
 * alert(age):tao thong bao  -Ex: var age=18;
 * confirm("co nut cancel"): co nut xac nhan hoac cancel
 * prompt("Day la mot hop thoai"):tao hop thoai

 * setTimeout (tham so1,thamso2);
  Ex: setTimeout(function() {
    alert('thong bao hien ra sau 1000ms')
}, 1000)    :cho code run after time 
     - tham so 1: là 1 function-> <function () {code}>
     - tham so 2: time -> n (ms) (n thuoc int) 1000ms=1s

 * setInterval :tương tự setTimeout-> câu lệnh lặp lại sau time
  Ex:setInterval(function() {
    console.log("min chuong" );
},3000)      : chay code sau a time ( 3000ms) va lap lai code sau time. 
*/

// const { urlencoded } = require("body-parser")


//OPERATOR PART 1:
/* 

*Tiền tố :++/-- variable:biến tăng rồi gán lại cho: a && ++/--a;
Ex: var a=4; console.log(++a) -> output=5; (a=++a && a=--a)
*Hậu tố : variable ++/--  :biến tăng rồi gán lại cho:a ;
 *a++/a-- : lưu giá trị cũ của a;  (a!=a-- && a!=a++)
Ex: var a=4 ;console.log(a++) -> output=4; 
-> coi : a++/-- hay --/++a là 1 biến . 
*/

// STRING:var name ='xau';
/*
 var name="Min";
  name += " Chuong";
 console.log(name);
=> Min Chuong
 *Boolean :return true/false của một biểu thức
 Ex: var name= biểu thức ss,...
+ var a=2,b=3;
var c= a>b;
console.log(c);
=> false

 * six value luôn return false:0,false,"",'',undefined,null,NaN;
 else return true!
  Ex: var kt=undefined;
 if (kt)  
    console.log(" YES");
 else console.log("NO"); output:NO

 * toan tu : '!' :dk true -> false hoặc false -> true
  Ex :  var a=9;
        if (!(a<0)) console.log('DK dung'); output: DK dung
*/
/*
** DATA TYPE IN JS
1.Primitive Data: kiểu data nguyên thủy
-Number : var a =2 -> 2
-String : var a ='Minh \' Chuong' -> Min Chuong
-Boolean : var isSuccess =true -> true
-Undefined: var a; console.log(a)->undefined (ko gán value cho biến)
-Null : var isNull= null -> null
-Symbol : var name= Symbol('xau');console.log(name) ->Symbol(xau)
2.Complex Data: kiểu data phức tạp
-Function:cú pháp: <var ten = function() {code};> gọi hàm: ten();
  Ex: var fun=function () {alert('helo')};fun(); -> helo;
-Object :
  *myObject : lưu data tương tác in js
  -cú pháp:<var myObject={
    key : value (string,,function,..) , (key='key')
    key : value,
    tenham:function() {} : mot cap key - value
};>
 Ex: var myObject = {
    'age' : 19,
    name:'Minh Chuong',
    fun:function() {},
}; 
 -> output: {age: 19, name: 'Minh Chuong', fun: ƒ}
age: 19
fun: ƒ ()
name: "Minh Chuong"
[[Prototype]]: Object (0)
----------------------------------------------
  *myArray: as myObject các key tự động đánh số
  -cú pháp < var myArray =[value];>
   Ex: var myArray=
  [
    'Min ch','18'int
  ]; 
 -> output: ['Min', 'Chuong']
0: "Min"
1: "Chuong"
length: 2
[[Prototype]]: Array(0)
------------------------------------------------
*OPERATOR PART 2:
 === : ss data type  + value
 !==:  //
 Ex:  var a=1; var b='1';
     console.log(a==b) -> true
     console.log(a===b) -> false
     console.log(a!==b) -> true
     console.log(a!=b) -> false

*Value false:false,NaN,0,'',"",null.
-&& : 1 cái sai -> return sai
-|| : 1 cái đúng -> return đúng 
Ex: 
  var result ='A' && NaN && 'B';
if (result) 
console.log('True');else console.log('False'); 
output: False

var result =null || NaN || 0 || ''||""|| 'A' ;
if (result) 
console.log('True');else console.log('False'); 
output: True (có kí tự A != 6 gia trị return False)

*/

/*
CHUỖI IN JS
- do dai chuoi : ten.length
- Template string ES6:
Ex : var firstname="Minh";
     var lastname="Chuong";
console.log(`"toi la " ${firstname} + ${lastname}`);
- console.log(`content`); in ra content ->in ra tất các kí tự
a
 */

/* LÀM VIỆC VỚI CHUỖI :
var mystring= " Hoc JS tai F8";
1.Length: 
 console.log(mystring.length);
2.Find index:
 console.log(mystring.indexOf('JS',vitri bắt đầu tìm));
 console.log(mystring.lastIndexOf('JS'));-> return last index of JS
 console.log(mystring.search('JS')); ko hỗ trợ vị trí như indexOf  
3.Cut string: 
 console.log(mystring.slice(index start,index final));
4.Replace:
 console.log(mystring.replace('JS','JavaScript'));
 bieu thuc chinh quy / /g
 replace(/JS/g,'Javascript') -> thay tat cac JS trong chuoi -> Javadcript
5.Split:
 console.log(mystring.split(điểm chung của xâu để tách);
 Ex: var a='Javascript';
 console.log(a.split('')); split(diem chung)
 -> ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
6.Touppercase: viết hoa
 console.log(mystring.toUpperCase());
7.Tolowercase :
 console.log(mystring.toLowerCase())
8.Get a character by index:lấy kí tự từ index
 console.log(mystring[index])
 or console.log(mystring.charAt(index))
9.Trim : tự động xóa kí tự trống ở 2 đầu chuỗi
 console.log(mystring.trim());
*/

/* WORK WITH NUMBER 
-return value === Number(value); -> chi return true khi no la number ke ve value va kieu data
- 1e9 == 10^9
var number = 22;
- number.isFinite(number) -> boolean : so huu han
- number.isInteger(number) -> boolean : so int
var number = '22,2 34 hello '
- number.parseFloat(number) -> return float : 22.2
- number.parseInt (number) -> 22
 var a=3.934427;
-kiểm tra datatype : console.log(isNaN(biến cần kt));
-a.Tofixed(a,2) -> 3.93
-a.toString() -> '3.934427'
*/

/* Array
- cú pháp: var name = [
   item1,item2,..
]; 
-gọi array : console.log(name);
-lấy phần tử theo index:console.log(name[index]);
-kt data :console.log(Array.isArray(language)) ->True
        console.log(Array.isArray({})) -> False
        --> fan biệt data
 *WORK WITH ARRAY:
   var language = ['javascript','PHP','Ruby'];
   0,1,2-> index xui ; -3,-2,-1 index nguoc
1.To string :chuyen data sang chuoi
console.log(language.toString()) 
->javascript,PHP,Ruby.
1.1 Join:console.log(language.join(' - '))  (as split)
->javascript - PHP - Ruby.
2.Pop/shift: xoá phần từ cuối/đầu return phần tử đó
 console.log(language.pop()) 
3.Push/unshift :them phan tu vào cuối/đầu mảng 
 console.log(language.push('Dark',....))
 ->['javascript', 'PHP', 'Ruby', 'Dark']
4.splicing:xóa phần tử (insert new value <=> so elements muon xoa =0)
language.splice(index,số element muốn xóa,element mới)
Ex:console.log(language.splice(1,1,'Blue','Red')) 
->['javascript','Blue','Red','Ruby']
5.concat:hợp nhất array.
language.concat(language2) language + language 2
6.slicing:cắt element of array và return element đó
language.slice(index star,end)
Ex:console.log(language.slice(-2)) -> ['PHP','Ruby']
Ex:console.log(language.slice(1,2)) 
->['PHP']

* Function:
c1: Expression:phải ĐN -> mới sd đc hàm
 < var name = function() {code};> 
c2: Declaration:có thể gọi trc khi đc định nghĩa
 < function name() {code};>
 -> goi ham: name();
-Truyền tham số : function name(tham số) {code};
 -> write (array,xau,number,..);
Ex: function write(message) {console.log(message)};
   write('hello'); (bien chi sd in function:private(bao mat))

-Arguments(mang chua cac value): console.log(arguments);->in tất cả tham số của hàm
Ex: function name() {console.log(arguments)};
    name(1,2,3,4,5) ; 
    output: 1,2,3,4,5.
Ex: function name2() {console.log(arguments)};
    name2('Minh','Chuong') ;
    output: Arguments(2) ['Minh', 'Chuong', callee: ƒ, Symbol(Symbol.iterator): ƒ]
0: "Minh"
1: "Chuong"
callee: ƒ name2()
length: 2
Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
Ex: function name1(thamso) {
 console.log(typeof thamso); 
} name1(['array','mang']);
 output:object (typeof array : object)
-for of: lặp sd arguments lưu và thực thi code tất cả tham số
cú pháp:< for (var biến of arguments) {code};
Ex: function aray() {
 for(var a of arguments)  
  // arguments : duyệt tất cả tham số
 // lấy aray[1] gán cho a -> console.log(a)...
  {
   console.log(a);
 }
} aray(1,2,3); truyền tham số 
output: 1 2 3
Ex2:function nameoffunction() {
 var mystring='';
 for(var a of arguments) {
    mystring+= `${a} -`;
 }
  console.log(mystring);
} 
nameoffunction('Minh','Chuong')
output:Minh -Chuong -

Ex3:sum
function sum() {
 var s=0;
 for (var a of arguments) {
   s+=a;
 } console.log(s);
} sum(1,2,3);
-> 6
*Return trong hàm:
Ex:function sum(a,b) {
 return a+b;
} console.log(sum(2,3)); -> 5
Ex: function string(a,b) {
 return a.toString() + b.toString();
} console.log(string(2,3))
Ex: function array(a,b) {
 return [a,b];
}  console.log(array(2,3));
* Declaration function : function showmessage (){}. goi dc trc khi dn (hosting)
* Expression function : var showmessage2 = function(){}. goi sau khi dn
* Template string : `${string1} ${string2}` == string 1 + string 2 . string 1 , string 2 : bien luu chuoi
*OBJECT : đối tượng
< var name ={ key: value,...};>
Ex:

var myinfo = {
  name: 'chuong',
  age: 18,
  address: 'VietNam',

}
//them key mới:
myinfo.gmail='chuongminh3225@gmail.com';
// key have words  error in js -> put key in array string:
myinfo['my-gmail']='chuonghero230@gmail.com';
console.log(myinfo);
-> output:
address: "VietNam"
age: 18
gmail: "chuongminh3225@gmail.com"
my-gmail: "chuonghero230@gmail.com"

// in ra key value nhưng ko gọi trực tiếp key in object:
Ex: 
var myinfo = {
 name: 'chuong',
 age: 18,
 address: 'VietNam',
}
var savekey='address'; key dc lưu dưới dạng chuỗi
console.log(myinfo[savekey]); -> return value of savekey = address
-> Viet Nam.

Ex2: add key with a variable :
var addkey='class';
var myinfo = {
 name: 'chuong',
 age: 18,
 address: 'VietNam',
 [addkey]:'key moi', 
}
console.log(myinfo);

->name: 'chuong',
 age: 18,
 address: 'VietNam',
 class:'key moi', 

// function in a object:
Ex:
var myinfo= {
  age :18,
  name:'Chuong',
  address: 'Viet Nam',
  fun: function() 
   {
   return this.age;
  }}
console.log(myinfo.fun()); 
-> 18 (fun is a function type  --> fun() )

* properties: thuộc tính -> các biến đc gán với đối tượng
(chứa data of object)
Ex:age :18,
  name:'Chuong',
  address: 'Viet Nam',
* methods: Phương thức(function) -> các hàm dc define 
in a object, thực hiện 
hành động hoặc tính toán data của object
*OBJECT CONSTRUCTOR: xây dựng đối tượng (create function)

// create a Object Constructor (bản thiết kế)
var User = function(firstname,lastname,avatar) {
 // properties
  this.firstname=firstname;// this.fn -> mo ta properties vs method se co trong doi tuong moi khi su dung object constructor
  this.lastname=lastname;// this == new object sd ban thiet ke tren
  this.avatar=avatar;
 //method
  this.fullname = function() {
    return `${this.firstname} ${this.lastname}`// template:noi chuoi `${} ${}`
  } 
}
// doi tuong moi sd object constructor
var  author = new User ('Pham','Minh','Avatar');
var user =new User ('Minh','Minh','Avatar');

// goi properties:Name-Object.properties;
// goi method: Name-Object.method();
console.log(author.fullname());
-> Pham Minh
console.log(author);
->User {firstname: 'Pham', lastname: 'Minh', avatar: 'Avatar', fullname: ƒ}

// add properties of object: thêm properties cho từng object cụ thể
author.title='tieu de'; <nameObject.properties = value;>
 
*Object prototype - Basic: 
thêm properties bên ngoài hàm tạo 
-> sd cho tất cả object đc khởi tạo
< nameObject.prototype.properties/method = 'value';> 
Ex:
function User(age,name) {
  this.age=age;
  this.name=name;
}
var mc = new User ('18','chuong');
//add a properties:
User.prototype.address='VN';
console.log(mc.address); -> VN
// add a method : 
User.prototype.fun= function() {
 return this.age;
}
console.log(mc.fun()); -> 18

* Date : (Object)
new Date() (a Object) ;
console.log(new Date().getFullYear()) -> 2024
- getDay(); getMonth() -> properties of new Date()

console.log(`${day} / ${month} /${year}`);
->30 / 10 /2023

* cu phap : switch (variable)
// tu value right -> chay het tat ca cau lenh duoi neu ko break
{
 case value : code ;
 dafault : code;
} -> variable=== value : run code
Ex:
var date =5;
switch (date) {
 case 2 :case 3 : case 4 :
   console.log('Hom nay la thu 2 3 4 ');
   default :
   console.log('ko bit');
}
-> ko bit

* three operator :toan tu 3 ngoi
Ex: var a=2 ; var b=3;
var c = a > b ? 'dung' : 'sai';
console.log(c);
->sai
Ex2:
var course = {
 coin: 250 ,
 name: 'JS',
}

var result = (course.coin)>0 ? ` ${course.coin} coin `:' Mien Phi';
console.log(result);
-> 250 coin

` ${variable} -  text ` -> in ra ki tu dac biet
Ex:var a =3;
console.log(`${a} !@#$%^&`) ->3 !@#$%^&

* For: as C++;
Ex:
var array =[
 'js','c','java'
];
for ( var i=0;i<array.length;i++) {
 console.log(array[i]);
}

* For/in loop: -> key return index
for ( var key in nameObject/nameArray/namestring/..) {code}
key(object) : index (array/string) 
-> duyet toi value : name[key];
Ex:
var array = [
 'javascript','PHP','C++','Dart'
]
for (var key in array) {console.log(array[key])};
->javascript,PHP,C++,Dart.

var string = 'Chuong';
for (var key in string) {console.log(string[key])};
-> c h u
o n g
var object = {
 age:18,
 name:'chuong',
}

for (var key in object) {console.log(object[key])}; 
-> 18 chuong
----------------------------
*For of : -> key return value doivoi array ,string
// Object :  for (var key of Object.keys(name)) 
{
 console.log(name[key]) -> value of key
}
// array :  for (var key of name) {console.log(key)}
-> in ra value of index 
// string :  for (var key of name) {console.log(key)}
-> in ra ki tu

*do/while:
// if(isSuccess) : nếu isSuccess retrun true -> run code
// if(!isSuccess) : nếu isSuccess retrun false -> run code
// if (false) {code} -> ko run code
// if (true) {code} -> run code

*vd for :
Ex: var array = [
 [1,2],
 [3,4],
 [5,6]
]

for (var i = 0; i < array.length;i++) {
 for (var j = 0 ;j<array[i].length;j++) {
   console.log(array[i][j]) ;
 }
} -> 1 to 6
---------------
* Rescusion
 function giaithua(n) {
 if(n) {
   return n*giaithua(n-1);
 }
 return 1;
}
console.log(giaithua(4)) -> 24

*Array method 
- forEach(),every(),some(),map() : function deu co 3 paramater -> return value of array
, index , origin array
- reduce() : 4 para -> bien tich tru(accumulator) , valueof array(currentvalue) , index(currentindex) , originArray
Ex: 
var course = [
 {
   id: 1,
   name : 'javascript',
   coin: 200
 },
 {
   id:2,
   name: 'Ruby',
   coin:100
 },
 {
   id:3,
   name:'angular',
   coin:0
 }
]

* USE METHOD ARRAY:  nameofArray.method()
+ forEach(function(para1 , para2, para3){code}): return tất cả data trong array
-paramater 1 -> value of array
-paramater 2 -> index of array
-paramater 3 -> originArray (return tat ca value of array)
* ten cua cac tham so tuy y nhung chuc nang ko doi
Ex:  course.forEach(function(object,index,originArray){
 console.log(object); -> duyet tung phan tu array va in ra 
})
OUT:
{ id: 1, name: 'javascript', coin: 0 }
{ id: 2, name: 'html', coin: 0 }
{ id: 3, name: 'angular', coin: 0 }

+ every(): return true ( tat ca dung -> return true)
- paramater : giong forEach
- chi can 1 dk sai -> return false
Ex: var result = course.every(function(object,index,originArray){
 return object.coin === 0; gap 1 phan tu co coin != 0 -> return
})
console.log(result);
->false (do co khoa hoc mat phi , neu tat ca free -> true)

+ some() : 1 cai dung return true
Ex: var result = object.some(function(object,index,originArray){
 return  object.coin === 0;
})
console.log(result) -> true 

+includes(value,index) => return true/false : tim kiem value tu chi so index
+ find(): lap qua tung phan tu array , neu tim dc -> return value 
Ex: var  nameOfCourse = course.find(funciton(object,index,originArray){
 return object.name === 'Ruby' ; //dk
})
console.log(nameOfCourse); 
OUT
{
   id:2,
   name: 'Ruby',
   coin:100
},
+ filter() : tuong tu find -> return tat ca cac phan tu cung thoa man dk

// bai tap vd : tim cac mon the thao co diem yeu thich lon hon 5
var sport = [
 {
   name:"soccer",
   like:666,
 },
 {
   name:"voleybal",
   liek:665,
 }
]

function getMostSport(array){
 return array.filter(function(object,index){
   return object.like > 665 
 })
}

console.log(getMostSport(sport)); ->[ { name: 'soccer', like: 666 } ]
*/

//* ARRAY MAP () METHOD
//  + map(function(para 1, para 2, para 3)) : change element of array
//  -para 1 : value of array , para 2 : index , para 3 : originArray (return tat ca value array)
// Ex:
// var course = [
//   {
//     id: 1,
//     name : 'javascript',
//     coin: 200
//   },
//   {
//     id:2,
//     name: 'Ruby',
//     coin:100
//   },
//   {
//     id:3,
//     name:'angular',
//     coin:100
//   },
//   {
//     id:4,
//     name:'Dart',
//     coin:300
//   },
//   {
//     id:5,
//     name:'Java',
//     coin:250
//   }
// ]



//  -> return {new key : new value}
// var result = course.map(function (courses,index,originArray) {
//     return {
//      id: courses.id, 
//      name: `Khoa hoc ${courses.name}`,
//      coin: `Price ${courses.coin}`,
//      index: index,
//      origiArray:originArray,
//     }}
// )

// console.log(result);
// OUT: 
// [
//   {
//     id: 1,
//     name: 'Khoa hoc javascript',
//     coin: 'Price 200',
//     index: 0,
//     origiArray: [ [Object], [Object], [Object] ]
//   },
//   {
//     id: 2,
//     name: 'Khoa hoc Ruby',
//     coin: 'Price 100',
//     index: 1,
//     origiArray: [ [Object], [Object], [Object] ]
//   },
//   {
//     id: 3,
//     name: 'Khoa hoc angular',
//     coin: 'Price 0',
//     index: 2,
//     origiArray: [ [Object], [Object], [Object] ]
//   }
// ]

// 

// ARRAY REDUCE() METHOD
// - reduce(para 1, para 2)  -> dung de tinh toan 1 properties of value in array
// + para 1: function(accumulator,curretValue,currentIndex,originArray) , + para 2 : initial value (gia tri khoi tao) -> tinh sum
//  - accumulator : bien tich tru
//  - currentValue : value ofarray
//  - currentindex: index tuong ung currentValue

// vd bai tap tinh tong coin dung reduce
// c1: kem table cho de hieu
//  var i=0;
// // luot chay dau thi accumulator (bien tich tru) == initialvalue (gia tri khoi tao)
// var result = course.reduce(function(accumulator,currentvalue,currentindex,originarray){
//   i++;
//    console.table({
//     'luot chay ':i,
//     'bien tich tru ':accumulator,
//     'Totalcoin ':currentvalue.coin,
//    })
//    return accumulator + currentvalue.coin; -> tra ve cho accumulator
// },0)

// console.log(result);
// ┌────────────────┬────────┐
// │    (index)     │ Values │
// ├────────────────┼────────┤
// │   luot chay    │   1    │
// │ bien tich tru  │   0    │
// │   Totalcoin    │  200   │
// └────────────────┴────────┘
// ┌────────────────┬────────┐
// │    (index)     │ Values │
// ├────────────────┼────────┤
// │   luot chay    │   2    
// │ bien tich tru  │  200   │
// │   Totalcoin    │  100   │
// └────────────────┴────────┘
// ┌────────────────┬────────┐
// │    (index)     │ Values │
// ├────────────────┼────────┤
// │   luot chay    │   3    │
// │ bien tich tru  │  300   │
// │   Totalcoin    │  100   │
// └────────────────┴────────┘
// ┌────────────────┬────────┐
// │    (index)     │ Values │
// ├────────────────┼────────┤
// │   luot chay    │   4    │
// │ bien tich tru  │  400   │
// │   Totalcoin    │  300   │
// └────────────────┴────────┘
// ┌────────────────┬────────┐
// │    (index)     │ Values │
// ├────────────────┼────────┤
// │   luot chay    │   5    │
// │ bien tich tru  │  700   │
// │   Totalcoin    │  250   │
// └────────────────┴────────┘
// 950

// c2: rut ngan
// console.log(course.reduce(function(accumulator,currentvalue){
//   // duyet qua cac phan tu mang lay coin tung phan tu cong accumulator 
//    return accumulator + currentvalue.coin;
//    // cong lai gan cho accumulator 
// }),0)
// c3 : dung arrow function 
// co toi 4 para nhung sd 2 para chu yeu: bien tich tru (a), value array (b)
// var result = course.reduce((a,b)=>{
//   return a + b.coin;
// },0)
// console.log(result);

// # Note: trong reduce(function(accumulator,currentvalue,,){},initialvalue) 
// Neu bo  initialvalue : mac dinh accumualator lay value dau tien cua mang
// tinh tong mang thi co the bo initialValue
// Ex:  var Newarray = [10,20,30];
// var sum = Newarray.reduce(function(total,number){
//   return total + number;
// })
// console.log(sum); -> 60

// Bai tap reduce:
//bai 1: Flat - "  Lam phang mang tu Depth array" 
// var deepArray = [1,2,[3,4],5,6,[7,8,9]];
// var flatArray = deepArray.reduce(function(FlatOutput,DeepItem){
//   return FlatOutput.concat (DeepItem) 
// },[])
// console.log(flatArray);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

// bai 2: lay ra cac khoa hoc va dua vao mang moi
// var topics = [
//   {
//     topic:"Front-end",
//     courses:
//      [
//        {
//         id:1,
//         title:"HTML,CSS",
//       },
//       {
//         id:2,
//         title:"javascript"
//       }
//     ]
//   },
// {
//   topic:"Back-end",
//   courses:
//   [
//     {
//       id:1,
//       title:"NodeJS"
//     },
//     {
//       id:2,
//       title:"PHP"
//     }
//   ]
// },
// ]

// // bien tich tru : courseOut = [] -> thuc hien noi chuoi voi 
// // courseCurrent.course sau moi lan chay

// var Newcourses = topics.reduce(function(coureseOut,courseCurrent){
//    return coureseOut.concat(courseCurrent.courses);
// },[]) 
// console.log(Newcourses);

// duyet ra html de hien ra web

// var htmls = course.map(function(object){
//   return `<div>
//    <h2> ${object.name} </h2>
//    <p> ${object.id} </p>
//            </div>`
// })
// // htmls -> return chuoi -> dung join -> phantach chuoi theo''
// console.log(htmls.join(''))


// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//   }
// ];

// function calculateRating(arr){
//   var filmlist = arr.filter(function(film){
//     return film.Director == "Christopher Nolan" ;
//   });
//   // tinh tong dua theo filmlist
//   var score = filmlist.reduce(function(sum,film){
//      return sum += parseFloat(film.imdbRating);
//   },0)
//  return score/filmlist.length;
// }
// // Expected results
// // console.log(calculateRating(watchList)); // Output: 8.675


// // tu tao ham reduce 2
//  Array.prototype.reduce2 = function(callback,result){
//    let i=0;
//    // khi argument(duyet tat ca para) =1 -> 1 tham so : funtion -> ko co initialvalue
//    if(arguments.length<2) {
//      i=1; // current value bat dau tu phan tu thu 2 tro di neu ko truyen initialvalue
//      result = this[0]; // accumulator(result) = gia tri dau tien cua mang
//    }
//    for (;i<this.length;i++){
//      result = callback(result,this[i],i,this); // value method return
//    }
//    return result;
//  }
//  const number = [1,2,3,4,5];
// const Result = number.reduce2(function(total,number){
//   return total + number; // value method return
// },0)
// // console.log(Result);
// // ham reduce : call back 
// // o : initial value



//  // bai tap reduce
// // Expected results:
// var arr = [
//   ['name', 'Sơn Đặng'],
//   ['age', 18],
// ];

// c1 dung loop
// function arrToObj(arr) {
//   var obj = {};
//   for (var i=0;i<arr.length;i++){
//     var key = arr[i][0];
//     var value = arr[i][1];
//      obj[key]=value;
//   }
//   return obj;
// }

// c2 dung reduce
// function arrToObj(arr){
//   return arr.reduce(function(a,b){
//     // a: object , b phan tu thi i , b[j] phan tu thu j cua phan tu thu i
//     a[b[0]] = b[1]; // a[key]=value
//     return  a;
//   },{})
// }
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
// key -> name , age = arr[i][0] , value = arr[1][i]

//* STRING/ARRAY includes() method
// string
// ex:
// var title = "Responsive web design "
// console.log(title.includes('Responsive',0));  -> true (tim dc chuoi Responsive tu vi tri 0)

// array
// ex:
// var courses = ['Javs' ,'PHP','C++'];
// console.log(courses.includes('Java',0));
// return true neu tim thay Java tu index 0 tro di
// index : 0,1,2 <=> -3,-2,-1


//* CallBack : ham duoc truyen qua doi so cua mot function khac : callback

// function mycallBack(param){
//   // param :method
//    param('hello world')
// }
// function MycallBack(value) {
//   console.log('Value: ',value);
// }
// // dua function MycallBack vao doi so cua function mycallBack
// mycallBack(MycallBack);
// // bt 


// function caculate(a, b, cb) {
//   // cb : method
//     return cb(a, b);
// }
// function sumCb(a,b){
//  return a+b;
// }
// function subCb(a,b){
//   return a-b;
// }
// function divCb(a,b){
//   return a/b;
// }
// function multiCb(a,b){
//   return a*b;
// }
// console.log(caculate(1,2,multiCb));

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

//CallBack(part 2)  map,filter,every,some,reduce,.. -> callback

// var courses = ['java','PHP','Javascript'];
// var result = courses.map(function(object){
//    return `<h2>${object}</h2>`; 
// })
// console.log(result.join(''));
// //output:
// {/* <h2>java</h2> <h2>PHP</h2> <h2>Javascript</h2> */}

// // dinh nghia map2 
// Array.prototype.map2 = function(callback) {
//   var newArray = [];
//   var arraylength = this.length;
//   for(var i = 0 ;i<arraylength;i++){
//     // result saves current value vs idx of current value
//     var result = callback(this[i],i);
//     newArray.push(result);
//   }
//   return newArray;
// }
// // // function(callback){} = map2(fun(){}) => callback : ham 
// var courses = ['java','PHP','Javascript'];
// var result = courses.map2(function(object){
//    return `<h2>${object}</h2>`; 
// })
// console.log(result.join(' '));
//output:
{/* <h2>java</h2> <h2>PHP</h2> <h2>Javascript</h2> */ }


// // dinh nghia lai ham reduce ;
// Array.prototype.reduce2 = function(callback,result){
//   var i=0;
//   var arraylength = this.length;
//   if(arguments.size <2){
//     result = this[0];
//     i = 1;
//   }
//   for (var i=0;i<arraylength;i++){
//     var result = callback(result,this[i],i,this);
//   }
//   return result;
// }
// // dinh nghia forEach()
// Array.prototype.forEach2 = function(callback){
//   var arraylength = this.length;
//   for (var i = 0; i<arraylength;i++){
//     // object,index,array -> luu vao result
//     var result = callback(this[i],i,this);
//   }
//   return result;
// }
// // dinh nghia find()
// Array.prototype.find2 = function(callback){
//   var arraylength = this.length;
//   for (var i=0;i<arraylength;i++){
//     if(callback(this[i],i,this)) {
//       var result = this[i];
//       break;
//     }
//   } return result;
// }
// var language = [
//   {
//     lan: 'Javascript',
//     coint : 100 ,
//     level : 'easy'
//   },
//   {
//     lan: 'Java',
//     coint : 200 ,
//     level : 'medium'
//   },
//   {
//     lan: 'Java',
//     coint : 300 ,
//     level : 'hard'
//   }

// ];

// // dinh nghia ham filter 
// Array.prototype.filter2 = function(callback){
//   var Arr = [];
//   var arraylength = this.length;
//   for (var i =0 ;i<arraylength;i++){
//     if(callback(this[i],i,this)) {
//       Arr.push(this[i]);
//     }
//   }
//   return Arr;
// }

// var result = language.filter2(function(langu,index){
//   return langu.lan == 'Java';
// })
// console.log(result);

// var coursesEvery = [{
//   id: 1,
//   name: 'js',
//   price: 200
// },
// {
//   id: 2,
//   name: 'php',
//   price: 200
// },
// {
//   id: 3,
//   name: 'ruby',
//   price: 200
// },
// {
//   id: 4,
//   name: 'node js',
//   price: 200
// }
// ];
// // every mac dinh -> return bolean
// // dinh nghia ham everyPro  -> name object
// Array.prototype.everyPro = function(callback) {
//   var arrayLength = this.length;

//   for (var i = 0; i < arrayLength; i++) {
//     resultEvery = callback(this[i], i);
//     console.log(this[i].name);
//   }

//   return resultEvery;
// } 
// -

// var resultEvery = coursesEvery.every(function(course, index) {
//   return course.price === 200;
//   // in All object co properties price == 200
// })

// console.log(resultEvery);
// var resultEvery = coursesEvery.map(function(course, index) {
//   return course.price === 200;
//   // in All object co properties price == 200
// })
// console.log(resultEvery);


// * TONG HOP DINH NGHIA CAC METHOD ARRAY
// reduce
// Array.prototype.reduce2=function(callback,result){
//   let i=0;
//   var arraylength = this.length;
//   if(arguments.length < 2){
//     i=1;
//     result = this[0];
//   }
//   for (;i<arraylength ;i++){
//     result = callback(result,this[i],i,this);
//   }
//   return result;
// }

// dinh nghia map return -> []
// Array.prototype.map2=function(callback){
//   var arrayLength = this.length;
//   var Newarr = [];
//   for (var i=0;i<arrayLength;i++){
//     var result = callback(this[i],i,this)
//     Newarr.push(result);
//   }
//   return Newarr;
// }


// // dinh nghia ham every -> return true neu tat ca pan tu thoa man
// Array.prototype.every2=function(callback){
//   var arrlength=this.length;
//   for (var i=0;i<arrlength;i++){
//     if(!callback(this[i],i,this)) return false;
//   }
//   return true;
// }
// // dinh nghia ham some -> return true : chi can 1 phan tu thoa man dk
// Array.prototype.some2=function(callback){
//   var arr=this.length;
//   for (var i = 0;i<arr;i++){
//     if(callback(this[i],i,this)) return true;
//   }
//   return false;
// }
// // dinh nghia filter -> return all obj thoa man dk
// Array.prototype.filter2=function(callback){
//   var arr=this.length; var Newarr = [];
//   for (var i = 0;i<arr;i++){
//     if(callback(this[i],i,this))
//         Newarr.push(this[i]);
//   }
//   return Newarr;
// }
// // find -> return 1 phan tu dau tien thoa man dk
// Array.prototype.find2=function(callback){
//   var arr = this.length;
//   for (var i=0;i<arr;i++){
//     if(callback(this[i],i,this)) {
//       return this[i];
//       break;
//     }
//   }
// }

// var animal = [
//   {
//     name :'cat',
//     weight : '2kg',
//   },
//   {
//     name:'dog',
//     weight:'2kg'
//   }
// ]

//  var result = animal.filter2(function(ani){
//  return ani.weight == '2kg';
// })
// console.log(result);


// bai tap create method map
// Array.prototype.myMap = function(cb) {
//     var arr = this.length; var Newarr = [];
//     for (var i = 0 ; i < arr ; i++){
//       var result = cb(this[i],i,this);
//       Newarr.push(result);
//     }
//     return Newarr;
// }

// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

//* Empty elements(phan tu) of array
// var courses = ['Java','Javascript'];
// for (var index in courses) {
//   console.log(index);
// }
// // c2 khai bao array
// var courses = new Array(10); // truyen tu 2 phan tu -> value ( 1phan tu -> length)

// // * My forEach() method  (dung for in-> chi duyet cac phan tu co trong array)
// // Array.prototype.forEach2 = function(){} => dinh nghia mot phuong thuc moi: forEach() cho Array constructor 
// // => doi tuong (this) dc khoi tao se thua huong cac phuong thuc do(for in se duyet cac method nay(nam trong prototype) va value in array)
// var courses = [
//   'Javascript',
//   'Java',
//   'PHP'
// ]
// // Array.prototype => list includes: method array 
// Array.prototype.forEach2=function(callback){
//   for(var index in this) {
//     // mothod in proto : forEach2  -> false , index -> true 
//     // this.hasOwnProperty(index) => loai bo duoc method forEach2 trong prototype , chi duyet qua cac index
//    if(this.hasOwnProperty(index)) {
//     callback(this[i],i,this);
//    }
//   }
// }

// courses.forEach(function(object,index,array){
//   console.log(object,index,array);
// })

// * My filter() method

// var courses = [
//   {
//     name :'PHP',
//     coin : 200
//   },
//   {
//     name : 'Javascript',
//     coin : 300
//   },
//   {
//     name : 'Java',
//     coin : 100
//   }
// ]
// // return khoa hoc > 100
// dinh nghia
// Array.prototype.filter2=function(callback){
//   var Newarr = [];
//   for (var index in this ){
//       if(this.hasOwnProperty(index)) // ngan ko cho vong for duyet toi method filter2
//                                         {
//         if(callback(this[index],index,this)) {
//           Newarr.push(this[index]);
//         }
//       }
//   }
//   return Newarr;
// }
// var result = courses.filter2(function(course){
//   if (course.coin>100) return course;
// })
// console.log(result);
// //=> [{..},{..}] 2 khoa coin > 100


// Bai tap 
// Array.prototype.myFilter = function(cb) {
//     var Newarr = [];
//     for (var index in this ){
//       if(this.hasOwnProperty(index)) {
//         // result = bolean
//         var result = cb(this[index],index,this) ;
//         if(result) {Newarr.push(this[index])};
//       }
//     }
//     return Newarr;
// }
// // Expected results:

// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0; // return bolean
// })); Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
// })); Output: [1, 2, 3, 4]


// *My some() method

// var courses = [
//   {
//     name :'Javascript',
//     coin : 680,
//     isFinish : true,
//   },
//  {
//   name :'PHP',
//   coin : 860,
//   isFinish : false
//  },
//  {
//   name : 'Ruby',
//   coin : 980,
//   isFinish : false
//  }
// ]
// dinh nghia
// Array.prototype.some2=function(callback){
//   for (var index in this) {
//     if(this.hasOwnProperty(index)) 
//     // ngan ko cho for in duyet toi some2
//    {
//      if(callback(this[index],index,this)) return true;      
//     }
//   }
//   return false;
// }
// // kt toi thiu mot isFinish return true
// var result = courses.some2(function(course){
//   return course.isFinish;
// })
// console.log(result);

//*My every() method
// var courses = [
//   {
//     name :'Javascript',
//     coin : 680,
//     isFinish : true,
//   },
//  {
//   name :'PHP',
//   coin : 860,
//   isFinish : false
//  },
//  {
//   name : 'Ruby',
//   coin : 980,
//   isFinish : false
//  }
// ]
// // dinh nghia
// Array.prototype.every2=function(callback){
//   for (var index in this) {
//     // ngan ko cho for in duyet toi some2
//     if(this.hasOwnProperty(index)) {
//      if(!callback(this[index],index,this)) return false;      
//     }
//   }
//   return true;
// }
// var result = courses.every2(function(course){
//   return courses.isFinish;
// })
// console.log(result);

// *The HTML DOM (Document Object Model) => quy chuan cua W3C (code HTML theo quy chuan)
// 3 thanh phan : Element (tag) , Atributes(class,id,href,..) , Text . (JS provide cong cu de choc vao HTML DOM -> can change ,add , edit,.. atributes/element/text)
// moi o vuong : node 
//   khi web load -> trinh duyet nhan chuoi HTML , dua vao quy chuan -> dich thanh DOM
// quy chuan : dua vao tieu chuan W3C 

//* HTML DOM vs DOM API : DOM ko phai thuoc  JS
// JS : chay tren Browser(chrome, edge,(FrontEnd)..) | Server (Node Js (Backend)...)
// API : Application Programing Interface : mot ung dung mo ra con duong de cac ung dung khac co the thay va giao tiep duoc
// Browser : can viet ma HTML -> DOM -> DOM API thuoc WEB API (cung cap DOM) . JS chay tren Browser ma Browser co Web api ma api cung cap DOM (giao thuc de browser truy cap DOM)

//* Document Object in JS :
// Document : (luu toan bo ma code HTML) dai dien cho toan bo website
// dem them sua xoa deu phai di qua phuong thuc document
// ex : decument.write("Hello world") -> ghi vao  sau phan tu cuoi cung trong the body

// * Get Element method 
// Element: ID, class, tag , CSS selector, HTML colection
// de edit code html thi phai di qua document(theo so do)

// ID
// var headingNode  = document.getElementById('heading');
// console.log(headingNode);
// //  <h1 id="heading">Javascript</h1> -> object
// console.log(
//   {
//     element : headingNode
//   }
// )

// class
// var headingNodes = document.getElementsByClassName('heading');
// console.log(headingNodes); -> return array

// tag 
// var headingNodes = document.getElementsByTagName('p');
// console.log(headingNodes);

// CSS selector : 
// 1 the div (.box)co nhiu the h2(.heading2) trong the div : .box .heading2:first-child -> lay ra the h2 dau tien
// .box .heading2:nth-child(n) -> lay ra the h2 thu n
// var headingNode = document.querySelector('.heading') 
// console.log(headingNode); // -> return tag co id = heading
// var headingNodes = document.querySelectorAll('.heading') // return nodelist
// console.log(headingNodes); // headingNodes[index] -> return tag thu index+1

// HTML selector 
// console.log(document.forms['form-1']) // -> return form co id = 'form-1'    (forms.name -> hop le/forms.form-1 :error -> dua vao array)
// console.log(document.anchors); // return tag a co atributes name

// * Get element method 2 
// c1:truy cap tu document -> cac element khac 
// c2: truy cap tu mot node (box) -> cac element khac
// ex :
//b1: su dung box node lay tu document
//var boxnode = document.querySelector('.box-1');// return tag co class="box-1"
//b2: truy van toi cac node con cua box node 
//var boxnode1 = boxnode.getElementsByTagName('p'); // return tag p

//* Get elements method 3: review
// 1. getElementById -> return 1 element 
// 2. getElementsByClassName -> return nhiu hon 1 element
// 3. getElementsByTagName('tag') -> return tat ca tag name
// 4. querySelector('.nameid/class') -> return 1 element co nameid
// 5. querySelectorAll() -> return all element co nameid


// // * DOM atributes : a(href) ,h(title),img(src)...tag(atributes_hop_le)
//  var headingElement = document.querySelector('a');
//  var TagName = document.querySelector('h1');
//  var btn = document.querySelector('.btn');
//  TagName.setAttribute('data-title','hello');
//  btn.onclick = function() {
//   // click btn -> add class vao h1 
//   headingElement.href = 'heading';
//   // c2 : headingElement.classList.add('heading');
//  }

//  //c3: headingElement.setAtributes('id','heading'); -> set 1 id,class,.. cho 1 tag
//  // headingElement.getAtributes('class'); -> return class


//  *InnerText TextContent Properties :  -> add textNode 
// - in ra console textnode cua tag h1 :
// var headingElement = document.querySelector('.heading');
// console.log(headingElement.innerText);  // -> geter : lay ra 
//  textContent == innerText
// - gan textNode moi : 
// headingElement.innerText = 'New Text';  // -> seter : chinh sua
// innerText : chi lay phan text , chi in ra dc text nhin thay dc 
// textContent : lay luong khong gian cua textnode , in ra dc text bi an
// Ex: 
// <h1 class="heading">

// <span style="display: none">Hello</span>
// <span>world</span>
//  <style>
// .box {
//     width:10px;
//     height:10px;
// }
// </style> 
// </h1>

// console.log(heading.textContent);
// -> 

//          Hello 
//          World 

//  .box {
//     width:10px;
//    height:10px;
// }

// console.log(heading.innerText)
// -> World

// => content in tag(textNode) (h1,script,style,...) -> textContent : in ra ;
// => innerText :in ra nhung gi thay dc tren trinh duyet web

// * InnerHTML vs OuterHTML 
// - innerHTML -> add a tag(add a element, add textNode, add atributesNode) ben trong 1 div box dc lay ra 
// var boxElement = document.querySelector('.box');
// // boxElement.innerHTML = '<h1> New Heading <h1>'; // add a element
// // boxElement.innerHTML = ' New Heading '; // add a textNode
// boxElement.innerHTML = '<h1 title = " New Heading"> <h1>'; // add a element
// console.log(document.querySelector('h1').innerText) // lay ra textNode h1 
// - outerHTML -> lay ra div , ghi de 
// var boxElement = document.querySelector('.box');
// boxElement.outerHTML = '<span> TEST </span>'; -> ghi de div 

// ex: ham render chen value html cho Ul 
// function render(html) {
//   var unoerderList = document.querySelector('ul');
//   unoerderList.innerHTML = html;
// }

// // render(`
// //     <li>Khóa học HTML</li>
// //     <li>Khóa học JS</li>
// //     <li>Khóa học PHP</li>
// // `)

// ex2: tuong tu nhung voi mang 
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var result = [];
//     result = courses.map(function(course){
//         return `<li>${course}</li>`
//     })
//     document.querySelector('.courses-list').innerHTML = result.join("/n");
// }

// // render(courses)



// * Node Properties : 
// var boxElement = document.querySelector('.box');
// console.log([boxElement]); -> list of properties 
// Ex : boxElement.style/className/innerText/....

// * DOM style 

// var boxElement = querySelector('.box');
// c1: 
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// c2:
// Object.assign(boxElement.style, {
//   width:'200px',
//   height:'100px',

// })


// * CLASSLIST PROTOTYPES 
// add (them class) 
// box.boxElement.classList.add('class1','class2',...)
// contains(check co class hay ko) -> true / false
// remove(gho class)
// toggle (neu ko co calss -> tu them va ngc lai)
// var boxElement = querySelector('.box');
// console.log(boxElement.classList.length[index])
// value -> return all class of atributes 

// chu trong box nhap nhay mau do (lap lai sau 1000ms)
// Ex: setInterval(() => {
//   boxElement.classList.toggle('red')
// },1000)

// Ex: them class box vao 1 nodeList div (10 the div)
// var div = document.querySelectorAll('div');
// for (var i=0;i<div.length;i++) {
//   div[i].classList.add('box');
// }
//  c2 : khi click 1 div -> add class 
// var div = document.querySelectorAll('div');
// for (var i=0;i<div.length;i++) {
//   div[i].onclick = function(e) {
// e.target.classList.add('box');
// }
// }



// * DOM events : onclick/onmouseover(hover)/onchange/onkeydown/onkeyup/....
// https://www.w3schools.com/jsref/dom_obj_event.asp

// 1.onclick (tag,button,..)

// // Ex1:listen events when click element
// var tagName = document.querySelector('h1');
// //  selector tag h1 dau tien trong dom 
// tagName.onclick = function(e) {
//   // code here 
// }

// Ex2: doi mau nut khi click vao btn
// var btn = document.querySelector('button');
// btn.onclick = function(e) {
//     e.target.style.color = '#fff';
// }

// 2. onchange (input,.) 

// Ex: 
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e) {
//   console.log(e.target.value) 
//   // return value the input 
//   // onchange -> run khi user nhap xong va bo con tro chuot ra khoi input  
//   // oninput -> go toi dau lay data toido
// }


// * e.target.nodeProperties  ( e.target -> get element) 
// console.log([boxElement]) -> list of nodeProperties (thuoc tinh cua element do : style,className,...)


// Ex: kiem tra da tick vao o checkbox hay chua 
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e) {
//   console.log(e.target.checked) 
//   // -> return true/false 
// }

// Ex: get value in option 
// html 
/* <select name="" id="">
<option value="value1">1</option>
<option value="value2">2</option>
<option value="value3">3</option>
</select> */

// var inputElement = document.querySelector('select');
// inputElement.onchange = function(e) {
//   console.log(e.target.value)  
//   // return value of option : value1,2,3,.. 
// }

// 3. onkeydown /up 

// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(e) {
//   console.log(e.target.value) 
//   // return value the input khi nhấc phím lên : gõ chữ a r nhấc lên -> save value a 
// }

// // Ex: press esc -> exit 
// var inputElement = document.querySelector('input[type="text"]');
// inputElement.onkeyup = function(e) {
//   // console.log(e.which) -> biết được size từng phím để code (vd: esc = 27) 
//   switch(e.which) {
//     case 27 :
//       console.log("Exit");
//       break;
//   } 
//   // return value the input khi nhấc phím lên : gõ chữ a r nhấc lên -> save value a 
// }


// * Prevent default / stopPropagation 
// 1. Prevent Default : ngan chan hanh vi mac dinh cua element 
// Ex: var aElements = document.links;
// for (var i=0;i<aElements.length;i++) {
//   aElements[i].onclick = function(e) {
//     // neu link lay ra ko phai la link fullstack  
//      // startsWith : properties of string in ES6 (kiểm tra 1 chuỗi có bắt đầu ..)
//     if(!e.target.href.startsWith('https://fullstack.edu.vn')){
//       // -> ngan hanh vi mac dinh
//        e.preventDefault();
//     }
//   }
//  }

//  Ex2 :
//  html :

//  <style>
//  ul {
//      display:none;
//  }
//  /* focus input -> ul  */
//  input:focus ~ ul {
//      display: block;
//  }
// </style>
// </head>
// <body>
// <input type="text" placeholder="Tim kiem">
// <ul>
//  <li>Javascript</li>
//  <li>PHP</li>
//  <li>Golang</li>
// </ul>

// </body>


//  var ulElement = document.querySelector('ul');
// //  ngan chan hanh vi mac dinh click chuot xuong (onmousedown) tag li -> an di 
//  ulElement.onmousedown = function(e) {
//   e.preventDefault();
//  }
//   ulElement.onclick = function(e) {
//     console.log(e.target);
//   }

// 2. stopPropagation : ngan chan hanh vi noi bot (lan truyen tu con -> cha)
// Ex :
// html 
// {/* <body>
//   <div onclick="console.log('DIV')">
//   DIV 
//   <button onclick="console.log('click me!')">Click me</button>
//   </div>
// /* -> click button -> the div cx bi anh huong  */
// </body> */}

// document.querySelector('div').onclick = function() {
//   console.log('DIV');
// }

// document.querySelector('button').onclick = function(e) {
//   e.stopPropagation();
//   console.log('Click me!');
// }


// * Event listener 

// Ex:
//  var btn = document.querySelector('.button');

// setTimeout(function() {
//   btn.onclick = function() {
//     console.log("viec1");
//     console.log("viec2");
//     console.log("viec3");
//   }
// },3000)


// function viec1() {
//   console.log('viec1');
// }
// function viec2() {
//   console.log('viec2');
// }
// function viec3() {
//   console.log('viec3');
// }
// btn.addEventListener('click',viec1)
// btn.addEventListener('click',viec2)
// setTimeout(function() {
//   btn.removeEventListener('click',viec1)
// },3000)


// * JSON : Javascript Object Notation 
// JSON là 1 định dạng dữ liệu.
// Phương thức JSON.parse nhận vào 1 chuỗi JSON và chuyển hóa nó thành dạng dữ liệu gốc(JS).
// Phương thức JSON.stringify dùng để chuyển dạng dữ liệu gốc thành dạng JSON



// *PROMISE  : da dc tao truoc bang Object constructor -> chi sd 

// var Promise = function(para1,para2,...){
// code logic for Promise  ES6
// }
// var promise = new Promise(para)
// para : function(para1,para2){code};
// para1: resolve->success
// para2: reject->fail

// Promise:  xu li thao tac bat dong bo, truoc khi co promise -> dung callback -> code roi (long nhau)
// de tao Promise ta dung tu khoa new voi Promise trong constructor truyen mot Excutor function
// trong Excutor function ta nhan dc 2 tham so (tu dat ten) dang ham
// resolve  : dc goi khi thao tac xu li thanh Cong 
// reject   : that bai
// -> khi sd promise , doi tuong promise dc tao ra , chung ta sd 2 method then(promise resolve),catch (promise reject)
// - Sync : dong bo 
// - Async :bat dong bo

// 3 trang thai Promise 
// * Pendding: chua goi resolve or reject
// * Fulfilled: thanh Cong 
// * Reject: That bai

// 1/ Promise Concept 
// ex:
// var promise = new Promise(
//   //Excutor
//   function(resolve, reject) {
//     // loggic
//     //thanh cong: 
//     resolve();
//     //that bai: 
//     // reject();
//   }
// )

// promise
//      .then(function(){
//       console.log("Thanh cong");
//      })
//      .catch(function(){
//       console.log("That bai");
//      })
//     //  1 trong 2 resolve or reject dc goi -> finally dc goi 
//      .finally(function(){
//       console.log("Done");
//      })


// 2/ Promise chain 

// var promise = new Promise(
//   function(resolve,reject) {
//     resolve();
//   }
// )

// promise 
// .then(function(){
//   return 1;
// })
// // du lieu ham trc do = tham so dau vao ham hien tai 
// .then(function(data){
//   console.log(data);
//   return 2;
// })
// .then(function(data){
//   console.log(data);
// })

// .finally(function(){
//   console.log("Done!");
// })

// Neu return Promise -> then ke tiep se dc thuc thi voi tham so la du lieu tra ve cua Promise 
// promise 
// .then(function(){
//   return new Promise(function(resolve){
//     setTimeout(function(){
//       // delay 3s -> resolve 
//       resolve([1,2,3]);
//     },3000);
//   })

// .then(function(data){
//   console.log(data);
// })
// })

// in ra tuan tu 1, 2, Done (sau 1s lam vc tiep theo) => sd Promise Chain(chuoi)
// function sleep(ms){
//   return new Promise(
//     function(resolve){
//       setTimeout(resolve,ms);
//     }
//   )
// }
// sleep(1000)
// .then(function(){
//   console.log(1);
//   sleep(1000);
// })
// .then(function(){
//   console.log(2);
//   return sleep(1000);
// })
// .finally(function(){
//   console.log("Done!");
// })

// 1 
// 2 
// Done!


// Không sử dụng Promise dẫn đến tạo ra callback hell 
// function hell(value, cb) {
//   cb(value);
// }

// hell(1, function (valueFromA) {
//   hell(valueFromA + 1, function (valueFromB) {
//       hell(valueFromB + 1, function (valueFromC) {
//           hell(valueFromC + 1, function (valueFromD) {
//               console.log(valueFromD + 1);
//           });
//       });
//   });
// });

// // solve : sd Promise chain
// function solve(value) {
//   return new Promise(function(resolve){
//     resolve(value);
//   })
// }

// solve(1)
// .then(function(value){
//   return value+1;
//   // 2
// })
// .then(function(value){
//   return value+1;
//   // 3
// })
// .then(function(value){
//   return value+1;
//   // 4
// })
// .then(function(value){
//   console.log(value+1);
//   // 5
// })

// - Neu co mot promise reject ->chay ham catch ko chay then 

// function sleep(ms){
//   return new Promise(function(resolve,reject){
//     setTimeout(resolve,ms);
//   })
// }

// sleep(1000)
// .then(function(){
//   console.log(1);
//   return sleep(1000);
// })

// .then(function(){
//   return new Promise(function(resolve,reject){
//     reject('co loi');
//   })
// })
// .catch(function(err){
//   console.log(err);
// })
// .finally(function(){
//   console.log("Done!");
// })

// Tao Promise luon thanh cong/ that bai 
// var promise = Promise.resolve('Thanh cong');

// promise
// .then(function(data){
//   console.log(data);
// })
// .catch(function(data){
//   console.log(data);
// })

// * Promise.all 
// var promise1 = new Promise(
//   function (resolve) {
//     setTimeout(function () {
//       resolve([1, 2, 3])
//     }, 1000);
//   }
// )

// var promise2 = new Promise(
//   function (resolve) {
//     setTimeout(function () {
//       resolve([4, 5])
//     }, 2000);
//   }
// )

// var promise3 = Promise.reject('co loi');

// Promise.all([promise1, promise2, promise3])
//   // ko loi 
//   .then(function ([result1, result2, promise3]) {
//     console.log(result1.concat(result2));
//   })
//   // loi 
//   .catch(function (err) {
//     console.log(err);
//   });
// [ 1, 2, 3, 4, 5 ]
// chi can 1 trong cac tac vu co loi -> in ra loi 


// *Promise Example
// var users = [
//   {
//     id:1,
//     name:"Minh Chuong"
//   },
//   {
//     id:2,
//     name:'Chuong Minh'
//   },
//   {
//     id:3,
//     name:'Chuong Chuong'
//   }
// ]

// var comments = [
//   {
//     id:1,
//     user_id:1,
//     content:"Hello ban !"
//   },
//   {
//     id:2,
//     user_id:2,
//     content:"Chao ban"
//   }
// ]
// 
// 1/ get comment
// 2/ get user id tu comment
// 3/ tu user id lay user tuong ung (vd trên chỉ lấy id 1 và 2) chỉ lấy id trùng nhau giữa user và comments 

// get comments : hàm resolve return object comments 
// function getComments(){
//   return new Promise(function(resolve){
//     setTimeout(function(){
//       resolve(comments);
//     }, 1000);
//   });
// }

// // lay id tu users thong qua id trong comments  (lấy id trùng nhau)
// function getUsersByIDs(userIDs){
//   return new Promise(function(resolve){
  // users : object -> lọc id trong users trùng id trong comments 
//     var result = users.filter(function(user){
//       return userIDs.includes(user.id);
//     });
//     setTimeout(function(){
//       resolve(result);
//     }, 1000);
//   });
// }

// // lay id trong comments 
// getComments()
//   .then(function(comments){
//     // map: tao mang moi include id of comments -> save userIDs
//     var userIDs = comments.map(function(comment){
//       return comment.user_id;
//     });
//     // return Promise 
//     return getUsersByIDs(userIDs)
//     .then(function(users){ 
//       return{
//         // in ra data user va comment ma id trung nhau 
//         users:users,
//         comments:comments,
//       };
//     })
//   })
//   // lay du lieu return tu .then truoc do gan data
//   .then(function(data){
//     var commentBlock = document.getElementById('comment-block');
//     var html = '';
//     // voi moi phan tu trong Object array comments , thi ta duyet tung phan tu trong users , check thu id co bang nhau khong 
//     data.comments.forEach(function(comment){
//       var user = data.users.find(function(user){
//         return user.id === comment.user_id;
//       });
//       html += `<li> ${user.name}: ${comment.content} </li>`;
//     });
//     commentBlock.innerHTML=html;
//   });


// * FETCH : goi API lay data dc luu tru tu backend , frontend rander ra cho ng dung
// API : cong giao tiep giua cac phan mem 
// Backend -> API(url) -> Fetch -> JSON/XML -> JSON.parse() -> JS type -> render giao dien cho ng dung

// Ex:
// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi) 
    //  chuyen json -> js (data nhan duoc o dang json)
//   .then(function(response){
//     return response.json();
//     // Json.parse -> js 
//   })
      
      // xu li du lieu de render ra man hinh 
//   .then(function(posts) {
//     // posts : data (js) 
//     var htmls = posts.map(function(post) {
//       return `
//       <li> 
//         <h2> ${post.title} </h2>
//         <p> ${post.body} </p>
//       </li>
//       `;

//     });
//     var html = htmls.join('');
//     document.getElementById('post-block').innerHTML = html;
//   });


// *JSON SERVER 
// - npm : Node package manager: quan li cac thu vien trong node 
// - package.json: quan li thu vien 
// npm install -g json-server : cai thu vien json-server 

// Lệnh npm install -g json-server được sử dụng để cài đặt một công cụ gọi là json-server thông qua Node Package Manager (npm).
//  Đoạn lệnh này được chia thành các phần sau:

// npm: Là viết tắt của Node Package Manager, một công cụ được sử dụng để quản lý các gói (packages) của JavaScript.
// install: Đây là một trong các lệnh của npm, được sử dụng để cài đặt các gói.
// -g: Đây là một option cho lệnh install, nói cho npm biết rằng bạn muốn cài đặt gói đó một cách toàn cầu (global).
//  Khi bạn cài đặt một gói global, nó sẽ được cài đặt vào thư mục /usr/local (trên UNIX) hoặc C:\Users\<username>\AppData\Roaming\npm (trên Windows) 
//  và có thể sử dụng từ bất kỳ đâu trong hệ thống.
// json-server: Đây là tên của gói bạn muốn cài đặt. Trong trường hợp này, json-server là một công cụ mô phỏng máy chủ HTTP từ tệp JSON. 
//  - db.json : data  (database)
// Nó cho phép bạn tạo ra một API giả bằng cách sử dụng một tệp JSON làm dữ liệu. Điều này thường được sử dụng để phát triển và kiểm thử ứng dụng frontend mà cần tương tác với một API.
// terminal (Ctrl + ~) -> cd json_server -> npm start -> local (3000) (data:Json) 
// "start": "json-server --watch db.json", -> npm start : tao API locallhost3000(data dang json)

// Lay data tu API (URL)
// var coursesApi = 'http://localhost:3000/courses';
// fetch(coursesApi) 
// .then(function(response) {
//   // convert to js 
//     return response.json();
//    json->JS 
// }) 
//
// .then(function(courses){
  // data duoc lay ve : render -> ra giao dien 
//   // console 
//     console.log(courses);
// })


// *REST API (POSTMAN) : HD DUA TREN GIAO THUC HTTP(POST(Create),GET(Read),PUT/PATCH(Update),DELETE)
// HTTP: viec truyen tai data qua internet (Giao thuc) 
// - CRUD : Create/Read/Update/Delete -> 4 thao tac chinh 
// goi len API server vs hanh CRUD: create,read,update,delete 
// Create -> POST : raw -> nhap {"key":"Value","","",...} ->send : tao moi du lieu 
// Delete -> DELETE : URL../id -> xoa object id ->send
// Update -> PUT : URL../id -> update key,value -> send
// get: nhan data 
// post: body->xwww-form-urlencoded : khoi tao object moi (key:value)
