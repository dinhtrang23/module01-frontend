let age=Number(prompt("Nhập tuổi của bạn"));
if(age>0 && age<120){
    alert(`Bạn đã nhập tuổi hợp lệ:${age}`);
}else{
    alert("Số tuổi của bạn không hợp lệ! Tuổi phải lớn hơn 0 và nhỏ hơn 120");
}