let  fs = require('fs');
let path = require('path');

function remSpace(arr){
    for(let i = 1 ; i < arr.length ;i++){
        //check file or directory==> folder
        if(isFileorNot(arr[i]) == true){
            let data = fs.readFileSync(arr[i] , 'ascii' ) ;
            space(data) ;   
        }else{
            console.log(" file does not exist") ;
        }
    }
}
function space(data){
    //create an array for storing strings
    var  names = [];
    let strarr = data.toString().split('\n') ;
    for(let i = 0 ; i < strarr.length ; i++){
        var trimmed = strarr[i].trim();
        if(strarr[i].length != 0){
           if (trimmed .length !== 0) {
               names.push(trimmed);
           }
        }
    }
    for(let val in names){
        console.log(names[val])
    }
}
// check extension
function isFileorNot( file){
    return fs.lstatSync(file ).isFile() ;
}
//module
module.exports  = {
    spacefun : remSpace
}
