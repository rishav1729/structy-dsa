every recurtion has two part
1. bsae case
2. recursive step

const countdown = (n) => {
*    if(n===0){
*        return                      
*    }

^     clg(n)    
^     countdown(n-1)                    

}

countdown(10);

line with * is base case which will eventually stop the rescursion
line with ^ is recursive step


- general observation -> in recursive function argument changes at every recursive call according to the logiv in the function