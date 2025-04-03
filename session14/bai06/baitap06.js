
let books=[];
while(true){
let choose=+prompt(`
    1.Thêm sách mới
    2.Hiển thị danh sách Sách
    3.Tìm kiếm theo tên
    4.Xóa
    5.Thoát
    Nhập lựa chọn của bạn:
    `)
    if(choose==1){
        console.log("Thêm sách");
        let id;
        if(books.length==0){
            id=1;
        }else{
            id=books[books.length-1].id+1;
        }
        let bookName=prompt("Mời bạn nhập tên sách");
        let author=prompt("Mời bạn nhập tác giả");
        let year=prompt("Mời nhập năm xuất bản");
        let book={
            id:id,
            name:bookName,
            author:author,
            year: year,
        }
        books.push(book);
    }else if(choose==2){
        for (let i = 0; i < books.length; i++) {
            console.log(`quyển sách thứ ${i+1}:
                id_${books[i].id},
                name_${books[i].name},
                tác giả_${books[i].author},
                năm_${books[i].year}`);
            
        }
    }else if(choose==3){
        let searchName=prompt("Mời bạn nhập tên sách ");
        let flag=true;
        for(let i=0;i<books.length;i++){
        if(books[i].name.includes(searchName)){
            console.log("sách bạn muốn tìm",books[i]);
            flag=false;
        }
    }
        if(flag){
            console.log(`Không có quyển sách nào có tên`);
        }
}else if(choose==4){
    let id=+prompt("Mời nhập id sách muốn xóa");
    let flag=true;
    for(let i=0;i<books.length;i++){
        if(books[i].id==id){
            console.log("sách đã xóa",books[i]);
            books.splice(i,1);
            flag=false;
            break;
        }
    }
    if(flag){
        console.log("Không có danh sách thỏa mãn id la",id);
    }
}else if(choose==5){
    break;
}
}