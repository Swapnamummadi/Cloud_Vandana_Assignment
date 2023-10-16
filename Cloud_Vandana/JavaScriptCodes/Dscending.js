function Descending(ar){

    let temp;
    for(let i = 0; i < ar.length; i++){
        for(let j = 0; j < ar.length-i-1; j++){
            
            if(ar[j] < ar[j+1]){

                temp = ar[j];
                ar[j] = ar[j+1]
                ar[j+1] = temp
                
            }
        }
        
    }
    console.log(ar)
}

const array = [10,30,5,1,50,90,6,100,20,3]
Descending(array);