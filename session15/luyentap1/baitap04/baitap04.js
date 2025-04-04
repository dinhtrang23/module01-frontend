let numbers =[];
while (numbers.length < 10){
    let num = Number(prompt(`Nhập số nguyên thứ, ${numbers.length + 1}`),10);
    if(!numbers.includes(num)){
        numbers.push(num);
    }else{
        alert("Số đã tồn tại,vui lòng nhập lại");
    }
}
let reverseNumbers = [...numbers].reverse();
console.log(`Các phần tử trong mảng ${numbers}`);
console.log(`Mảng sau khi đảo ngược,${reverseNumbers}`);
