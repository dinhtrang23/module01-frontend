let length = Math.floor(Math.random() * 11) + 10;
let numbers=[];
for(let i=0;i<length;i++){
numbers.push(Math.floor(Math.random()*100));
}
let sum_odd_number=0;
let sum_even_number=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
        sum_even_number+=numbers[i];
    }
    else{
        sum_odd_number+=numbers[i];
    }
}
alert(`Tổng các số chẵn${sum_even_number}`);
alert(`Tổng các số lẻ${sum_odd_number}`);

