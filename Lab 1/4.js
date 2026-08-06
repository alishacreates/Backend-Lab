// File System (Read & Write Files)Node.js uses the built-in fs module to interact with your computer's files. 
// This script creates a new text file and immediately reads its content back.

const fs = require('fs');

fs.writeFile("four.txt", "hello from node", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("feli created");
    
})