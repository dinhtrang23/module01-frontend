let charArray = [];
let lengthChar = parseInt(prompt("Bạn muốn nhập bao nhiêu ký tự?"), 10);

for (let i = 0; i < lengthChar; i++) {
    let ch = prompt(`Nhập ký tự thứ ${i + 1}:`).charAt(0); 
    charArray.push(ch);
}
let updatedArray = charArray.map(ch => ch === '-' ? '_' : ch);
console.log("Mảng ký tự đã nhập:", charArray);
console.log("Mảng ký tự sau khi thay thế '-':", updatedArray);