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
let average = eval(numbers.join('+')) / numbers.length;
console.log("Mảng số nguyên đã nhập:", numbers);
console.log(`Phần tử lớn nhất: ${maxNumber}`);
console.log(`Giá trị trung bình của các phần tử: ${average}`);