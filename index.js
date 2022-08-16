function jumpingOnClouds(c) { 
let current= null
 let jump = 0;
  let i = 0; 

while(i < c.length){ 
    current = c[i];
    
    if( c[i+2] == 0 && i+2 < c.length ){
         i+=2; jump += 1; 
    } else if(c[i+1] == 0 && i+1 < c.length ){
         i+=1; jump += 1; 
    
    } else i+= 1; 
} return jump;

} 

function catAndMouse(x,y,z){
     let adistM = Math.abs(x-z)
      let bdistM = Math.abs(y-z)
    
    if(adistM>bdistM){ 
        return "Cat B"; } 
    
    if(adistM<bdistM){ 
        return "Cat A"; }
        return("Mouse C") 
} 