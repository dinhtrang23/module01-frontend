let a = Number(prompt("Nhập điểm giữa kỳ"));
let b = Number(prompt("Nhập điểm cuối kỳ"));
let c=(a+b)/2;
if(c>=9.5){
    alert("Xếp học lực Xuất Sắc");
}
else if (c>=8.5){
    alert("Xếp học lực giỏi");
}
else if (c>=7.5){
    alert("Xếp hạng học lực khá");
}
else if(c>=5){
    alert("Xếp hạng học lực trung bình");
}
else{
    alert("Yếu");
}