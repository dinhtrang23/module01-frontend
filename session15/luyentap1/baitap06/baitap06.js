let numbers =[];
while (numbers.length < 10){
    let num = Number(prompt(`Nhập số nguyên thứ, ${numbers.length + 1}`),10);
    if(!numbers.includes(num)){
        numbers.push(num);
    }else{
        alert("Số đã tồn tại,vui lòng nhập lại");
    }
}
let searchNum = parseInt(prompt("Nhập một số nguyên để kiểm tra:"), 10);
if (numbers.includes(searchNum)) {
    console.log(`Number ${searchNum} is in the array.`);
} else {
    console.log(`Number ${searchNum} is not in the array.`);
}