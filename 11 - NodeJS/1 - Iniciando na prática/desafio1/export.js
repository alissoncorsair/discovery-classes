module.exports = function getFlag(nome, saudação) {
    
    for(i=0; i<process.argv.length; i++){
        if(nome == process.argv[i]) {
           return process.argv[i+1];
        }
    }

};



