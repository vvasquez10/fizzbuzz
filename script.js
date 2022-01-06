function printPairs(){
    for(var i=1; i<=20; i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}

function decreaseMul(){
    for(var i=100; i>=0; i--){
        if(i%3==0){
            console.log(i)
        }
    }
}

function printSec(times){ //cuantos numeros de la secuencia desea, partiendo desde el +4
    var i=4;
    for(var x=0; x<times; x++){
        console.log(i)
        i=i-1.5
    }
}

function sigma(){
    var sum=0;
    for(var i=1; i<=100; i++){
        sum=sum+i
    }
    console.log(sum)
}

function factorial(){
    var product=1;
    for(var i=1; i<=12; i++){
        product=product*i
    }
    console.log(product)
}

factorial()
