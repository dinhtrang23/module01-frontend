let n=Number(prompt("Nhập n"));
let m=Number(prompt("Nhập m"));
for(let i = 0;i < n;i++){
    let row="";
    for(let j = 0;j < m;j++){
        if(i == 0 || j == 0 || i == n-1 || j == m-1){
        row +=" * ";
    }else{
        row +="   ";
    }
}
    console.log(row);

}