let n = Number(prompt("Nhập số N"));
let temp=1; giaiThua=1;
while(temp<=n){
    giaiThua *= temp;
    temp++;
}
console.log(`${n}!=` + giaiThua);