let a = Number(prompt("Nhập a:"));
let b = Number(prompt("Nhập b:"));
let c = Number(prompt("Nhập c:"));
if (a==0){
    if(b==0){
        alert("Phương trình vô nghiệm");
    }else{
        alert(`Phương trình có 1 nghiệm x = +${-c/b}`);
    }
} else {
let delta = b*b - 4*a*c;
if(delta>0){
let x1 = ((-b + Math.sqrt(delta))/(2*a));
let x2 = ((-b - Math.sqrt(delta))/(2*a));
alert(`Phương trình có 2 nghiệm là:" x1= = ${x1}  x2 =  ${x2}`);
}else if(delta===0){
    let x = -b/(2*a);
    alert(`Phương trình có nghiệm kép:"+"x1=x2="+ ${x}`);
} else {
    alert("Phương trình vô nghiệm");
}
}