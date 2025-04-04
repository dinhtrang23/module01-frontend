let numbers =[];
let count = 0;
for(let i=0;i<10;i++){
    let num=Number(prompt(`Nhập số nguyên thứ ${i +1}:`),10);
    numbers.push(num);
    if(num>=10) count++;
}
console.log("Mảng số nguyên đã nhập:", numbers);
console.log(`Số lượng số nguyên lớn hơn hoặc bằng 10:${count}`);