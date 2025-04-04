let numbers =[];
while (numbers.length < 10){
    let num = Number(prompt(`Nhập số nguyên thứ, ${numbers.length + 1}`),10);
    if(!numbers.includes(num)){
        numbers.push(num);
    }else{
        alert("Số đã tồn tại,vui lòng nhập lại");
    }
}
let sortedDescending = [...numbers].sort((a, b) => b - a);
console.log("Mảng số nguyên đã nhập:", numbers);
console.log("Mảng sau khi sắp xếp giảm dần:", sortedDescending);