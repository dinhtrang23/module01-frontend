let height = Number(prompt('Nhập chiều cao'));
let weight = Number(prompt('Nhập cân nặng'));
height=height/100;
let bmi=(weight/Math.pow(height,2));
if(bmi<18.5){
    alert('Cân nặng thấp(gầy)');
}
else if(((bmi>=18.5)&&(bmi<=24.9))||((bmi>=18.5)&&(bmi<=22.9))){
    alert('Bình thường');
}
else if((bmi>=25)||(bmi>=23)){
    alert('Thừa cân');
}
else if(((bmi>=25)&&(bmi<=29.9))||((bmi>=23)&&bmi<=24.9)){
    alert('Tiền béo phì');
}
else if(((bmi>=30)&&(bmi<=34.9))||((bmi>=25)&&bmi<=29.9)){
    alert('Béo phì độ I');
}
else if((bmi>=35)&&(bmi<=39.9)||(bmi>=30)){
    alert('Béo phì độ II');
}
else {
    alert('Béo phì độ III');
}