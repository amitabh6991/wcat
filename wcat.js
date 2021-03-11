//let cmd2 = input[1] ;
// Commands:
// 1- node wcat.js filepath => displays content of the file in the terminal 
// 2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
// 3- node wcat.js -s filepath => convert big line breaks into a singular line break
// 4- node wcat -n filepath => give numbering to all the lines 
// 5- node wcat -b filepath => give numbering to non-empty lines
// We can mix and match the options.

let displayobj = require("./commands/display") ;
let remspaceobj = require("./commands/removeSpace");
let numberAllobj = require("./commands/numberingAll")
let numberingobj = require("./commands/numberingnonempty");
let mixandmatchobj = require("./commands/mixandmatch") ;

// take input
let input=process.argv.slice(2);
 let arr = [] ;
 let i = 0 ;
 // input store in array
 while( i != input.length){
     arr[i] = input[i] ;
     i++ ;
 }

 // checking input conditions
if(arr[0] == "-b" && arr[1] == "-s" || arr[0] == "-s" && arr[1] == "-b"){
    mixandmatchobj.mixnmatchfun(arr) ;

}else if(arr[0] == "-b" && arr[1] == "-n"){
        numberingobj.numberfun(arr) ;

    }else if(arr[0] == "-n" && arr[1] == "-b"){
            numberAllobj.numfun(arr) ;

        }else if(arr[0] == "-n"){
                numberAllobj.numfun(arr) ;

            }else if(arr[0] == "-b"){
                    numberingobj.numberfun(arr) ;

                }else if(arr[0] == "-s"){
                        //  
                        remspaceobj.spacefun(arr) ; 
                    }else{

                        displayobj.displayfun(arr) ;
                    }
