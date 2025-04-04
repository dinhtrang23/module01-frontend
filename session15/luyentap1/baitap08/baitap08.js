let a=[];
let b=[];
for (let i = 0; i < 10; i++) {
    a.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1} của mảng a:`), 10));
}
for (let i = 0; i < 10; i++) {
    b.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1} của mảng b:`), 10));
}
let c = b.concat(a);
console.log("Mảng a:", a);
console.log("Mảng b:", b);
console.log("Mảng c (gồm các phần tử của b và a):", c);