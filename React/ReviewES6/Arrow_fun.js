var Object = {
    name:'Js',
    price:1000,
    children:{
        name:'Java',
    }
}

// dat ten de tranh bi trung khi goi key 
var {name:parentname,children:{name:childname}} = Object;
console.log(parentname);
console.log(childname);

// dinh nghia key-value 
var {name,description='default des'} = Object;
console.log(description);