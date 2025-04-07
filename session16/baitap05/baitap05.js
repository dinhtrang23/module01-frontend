function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  const userInput = prompt("Nhập vào một chuỗi để kiểm tra chuỗi đối xứng:");
  if (isPalindrome(userInput)) {
    alert("Chuỗi bạn nhập là chuỗi đối xứng.");
  } else {
    alert("Chuỗi bạn nhập KHÔNG phải là chuỗi đối xứng.");
  }