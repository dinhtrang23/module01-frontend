let number=Number(prompt(`Nhap can bao nhieu so ponanci`));
let n1=0, n2=1, nextTerm;
console.log("Day so ponannci la:")
for(let i=1;i<=number;i++){
    console.log(n1);
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}