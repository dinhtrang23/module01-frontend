let charArray = [];
let lengthChar = Number(prompt("Bạn muốn nhập bao nhiêu ký tự?"), 10);
for (let i = 0; i < lengthChar; i++) {
    let ch = prompt(`Nhập ký tự thứ ${i + 1}:`).charAt(0);
    charArray.push(ch);
}
let reversedString = charArray.reverse().join("");
console.log("Ký tự sau khi đảo ngược:", reversedString);