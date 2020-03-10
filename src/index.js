module.exports = function check(str, bracketsConfig) {

  let checker = false;
 
  while(checker === false) {
    
    let symbolCounter = str.length;
 
    for(i = 0; i < bracketsConfig.length; i++ ) {
      str = str.replace(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`, '');
    }

    if(str.length === symbolCounter) {
      checker = true;// = dead while cycle
    }
  }
 
  if(str.length === 0) {
    checker = true;
  } else {
    checker = false;
  }
 
  return checker;
}