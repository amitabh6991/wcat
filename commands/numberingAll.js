let  fs = require('fs');
let path = require('path');

function numAll(arr){
    for(let i = 1 ; i < arr.length ;i++){
        // check file or directory
        if(isFileorNot(arr[i]) == true){
            let data = fs.readFileSync(arr[i] , 'ascii' ) ;
            numbering(data) ;  
        }else{
            console.log(" file does not exist") ;
        }
    }
}
function numbering(data){
    //take a variable for numbering 
     let n = 1 ;
    let strarr = data.toString().split('\n') ;
    for(let k = 0 ; k < strarr.length ; k++){
        console.log(n++ + ". " + strarr[k]) ;
    }
     
}
// check extension
function isFileorNot( file){
    return fs.lstatSync(file ).isFile() ;
}
// module
module.exports  = {
    numfun :  numAll
}
