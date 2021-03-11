let  fs = require('fs');
let path = require('path');

function  numNonEmpty(arr){
    for(let i = 1 ; i < arr.length ;i++){
        // check the file or folder
        if(isFileorNot(arr[i]) == true){ 
            let data = fs.readFileSync(arr[i] , 'ascii' ) ;
            numbering(data) ;  
        }else{
            console.log(" file does not exist") ;
        }
    }
}
// take a variable for numbering on nonEmpty content
function numbering(data){
    let num = 1 ;
    let strarr = data.toString().split('\n') ;
    for(let k = 0 ; k < strarr.length ; k++){
        var trimmed = strarr[k].trim();
        if(strarr[k].length != 0){
           
           
           if (trimmed .length !== 0) {
            
            console.log(num++ + ". " + trimmed) ;
           }else{
            console.log(trimmed) ;
           }
        }
        
    }
   
}
// check extension
function isFileorNot( file){
    return fs.lstatSync(file ).isFile() ;
}
//module
module.exports  = {
    numberfun :  numNonEmpty
}
