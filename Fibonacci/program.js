function fibs(n){
    let f0=0;
    let f1=1;
    let outputArray=[f0,f1];
    for(let i=0;i<n-2;i++){
        let next=f0+f1;
        outputArray.push(next);
        f0=f1;
        f1=next;
    }
    return outputArray;
}

function fibsRec(n){
    return n>2 ? [...fibsRec(n-1),fibsRec(n-1)[n-2]+fibsRec(n-2)[n-3]] : (n===1 ? [0] : [0,1]);
}

console.log(`Iterative Fibonacci : ${fibs(8)}`);
console.log(`Recursive Fibonacci : ${fibsRec(8)}`);