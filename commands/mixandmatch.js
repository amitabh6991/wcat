let  fs = require('fs');
let path = require('path');

function mixandmatch(arr){
    for(let i = 2 ; i < arr.length ;i++){
        // check file or directory
        if(isFileorNot(arr[i]) == true){
            if(arr[0]== "-b" && arr[1] == "-s"  || arr[0]== "-s" && arr[1] == "-b" ){
                let data = fs.readFileSync(arr[i] , 'ascii' ) ;
                 
                numberingnonEmpty(space(data)) ; 

            }else if(arr[0]== "-n" && arr[1] == "-s"  || arr[0]== "-s" && arr[1] == "n"){
                let data = fs.readFileSync(arr[i] , 'ascii' ) ;
               
                numberingAll( space(data) ) ;
            }

            // }else if(arr[0]== "-b" && arr[1] == "-n" ){
            //     let data = fs.readFileSync(arr[i] , 'ascii' ) ;
            //     numberingnonEmpty(data) ; 

            // }else{// if(arr[0]== "-n" && arr[1] == "-b"  )
            // let data = fs.readFileSync(arr[i] , 'ascii' ) ;
            // numberingAll(data) ;
            // }
        }else{
            console.log(" file does not exist") ;
        }
    }
    
}
  
//remove space
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
    return names ;
    // for(let val in names){
    //     console.log(names[val])
    // }
}

// numbering NonEmpty
// take a variable for numbering on nonEmpty content
function numberingnonEmpty(strarr){
    let num = 1 ;
    // let strarr = data.toString().split('\n') ;
    for(let k = 0 ; k < strarr.length ; k++){
        var trimmed = strarr[k].trim();
        if(strarr[k].length != 0){
           
           
           if (trimmed .length !== 0) {
            
            console.log(num++ + ". " + trimmed) ;
           }
        
        }
        
    }
   
}

//numberingAll 
function numberingAll(strarr){
    //take a variable for numbering 
     let n = 1 ;
    // let strarr = data.toString().split('\n') ;
    for(let k = 0 ; k < strarr.length ; k++){
        console.log(n++ + ". " + strarr[k]) ;
    }
     
}
// check extension
function isFileorNot( file){
    return fs.lstatSync(file ).isFile() ;
}
//module
module.exports = {
    mixnmatchfun : mixandmatch
}