let numbers =[];
while (numbers.length < 10){
    let num = Number(prompt(`Nhập số nguyên thứ, ${numbers.length + 1}`),10);
    if(!numbers.includes(num)){
        numbers.push(num);
    }else{
        alert("Số đã tồn tại,vui lòng nhập lại");
    }
}
let negativeCount = numbers.filter(num => num < 0).length;
console.log("Mảng số nguyên đã nhập:", numbers);
console.log(`Số lượng số nguyên âm trong mảng: ${negativeCount}`);