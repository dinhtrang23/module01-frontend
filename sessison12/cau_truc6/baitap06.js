let fullName;
let age;
while(true){
    let choose= prompt(`
    Lựa chọn 1: Nhập tên của người dùng.
    Lựa chọn 2: Nhập tuổi của người dùng.
    Lựa chọn 3: In tên và tuổi của người dùng.
    Lựa chọn 4: In bảng cửu chương của một số.
    Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
    Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
    Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
    Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
    Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
    Lựa chọn 10: Thoát khỏi chương trình.`)
    if(choose==1){
        fullName=prompt("Mời nhập tên");
    }else if(choose==2){
        age = Number(prompt("Nhập tuổi"));
    }else if(choose==3){
        console.log(`tên: ${fullName}, tuổi : ${age}`);
    }else if(choose==4){
        console.log("in bảng cửu chương");
        let number=prompt("Mời bạn nhập bảng cửu chương");
        for(let i=1;i<=10;i++){
            console.log(`${number} X ${i}= ${number*i}`);
        }
    }else if(choose==5){
        let number=prompt("Nhập số cần kiểm tra");
        if(number%2==0){
            console.log(` ${number}là số chẵn`);
        }else{
            console.log("là số chẵn");
        }
    }else if(choose==6){
        let sum=0;
        let number=prompt("Mời bạn nhập số bất kì");
        for(let i=1;i<=number;i++){
            sum+=1;
        }
        console.log(`tổng từ 1 đến${number} là:${sum}`);
        
    }else if(choose==7){
        let number = prompt("Mời nhập dãy số");
        for(let i=0;i<number.length;i++){
            console.log(number[i]);
        }
    }else if(choose==8){
        let number=prompt("Mời nhập số kiểm tra");
        let count=0;
        for(let i=0;i <= number; i++){
            if(number%i==0){
                count++;
            }
        }
        if(count==2){
            console.log(`${number}là số nguyên tố`);
        }else{
            console.log(`${number}không phải là số nguyên tố`);
        }
    }else if(choose==9){
        let str = prompt("Mời nhập chuỗi cần đảo ngược");
        let result="";
        for (let i = str.length-1; i>=0; i--) {
            result+=str[i];
        }
        console.log(result);
    }else if(choose==10){
        break;
    }
}