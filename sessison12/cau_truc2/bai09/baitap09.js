let a=Number(prompt("Nhập a"));
let b=Number(prompt("Nhập b"));
let c=Number(prompt("Nhập c"));
if((a+b>c) && (a+c>b) &&(b+c>a)){
    alert(`Ba số ${a},${b},${c} là tam giác`);
}else{
    alert(`Ba số ${a},${b},${c} Không phải là tam giác`);
}