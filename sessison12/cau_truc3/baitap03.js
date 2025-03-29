let n;
let num=3;
let count=1;
alert("20 số nguyên tố đầu tiên là:");
console.log(2);
while(count<20){
    let isPrime=true;
    for(let j=2;j<=Math.sqrt(num);j++)
    {
        if(num%j===0)
        {
            isPrime=false;
            break;
        }
    }
    if(isPrime)
    {
        console.log(num);
        count++;
    }
    num++;
}