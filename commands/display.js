let  fs = require('fs');
let path = require('path');
function display(arr){
    for(let i = 0 ; i < arr.length ;i++){
        // check this is file or folder
        if(isFileorNot(arr[i]) == true){
            console.log(fs.readFileSync(arr[i] , 'ascii' )) ;
        }else{
            console.log(" file does not exist") ;
        }
    }
}

// check extension
function isFileorNot( file){
    return fs.lstatSync(file ).isFile() ;
}
// module
module.exports = {
    displayfun : display 
}