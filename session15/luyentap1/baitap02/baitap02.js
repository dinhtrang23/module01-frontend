let numbers =[];
while (numbers.length < 10){
    let num = Number(prompt(`Nhập số nguyên thứ, ${numbers.length + 1}`),10);
    if(!numbers.includes(num)){
        numbers.push(num);
    }else{
        alert("Số đã tồn tại,vui lòng nhập lại");
    }
}
let maxNumber = Math.max(...numbers);
let maxIndex = numbers.indexOf(maxNumber);
console.log("Mảng số nguyên đã nhập:", numbers);
console.log(`Phần tử lớn nhất: ${maxNumber}, tại vị trí: ${maxIndex}`);