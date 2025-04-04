let charArray = [];
let lengthChar = parseInt(prompt("Bạn muốn nhập bao nhiêu ký tự?"), 10);
for (let i = 0; i < lengthChar; i++) {
    let ch = prompt(`Nhập ký tự thứ ${i + 1}:`).charAt(0); 
    charArray.push(ch);
}
let digitCount = charArray.filter(ch => ch >= '0' && ch <= '9').length;
console.log("Mảng ký tự đã nhập:", charArray);
console.log(`Số lượng ký tự là số trong mảng: ${digitCount}`);