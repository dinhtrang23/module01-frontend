let a = Number(prompt(`Mời bạn nhập vào số a`));
let b = Number(prompt(`Mời bạn nhập vào số b`));
let operator = prompt(`Mời bạn nhập các phép tính (+,-,*,/)`);
switch (operator) {
    case "+":
    alert(`Kết quả: ${a} + ${b} = ${a + b}`);
    break;
    case "-":
    alert(`Kết quả: ${a} - ${b} = ${a - b}`);
    break;
    case "*":
    alert(`Kết quả: ${a} * ${b} = ${a * b}`);
    break;
    case "/":
        if(b!==0){
            alert(`Kết quả: ${a} / ${b} = ${a / b}`);
        }else{
            alert("Lỗi: Không thể chia cho 0!");
    }
    break;
    default:
        alert("Bạn đã nhập sai");
    break;
}




