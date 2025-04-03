let students = [];
while(true){
    let choose=+prompt(`
        1.Thêm sinh viên mới
        2.Hiển thị danh sách sinh viên
        3.Xóa sinh viên
        4.Thoát
    `)
    if(choose==1){
        console.log("Thêm sinh viên mới");
        let id;
        if(students.length==0){
            id=1;
        }else{
            id=students[students.length-1].id+1;
        }
        let name = prompt("Nhập tên");
        let age = prompt("Nhập tuổi");
        let student={
            id:id,
            name:name,
            age:age,
        }
        students.push(student);
    }else if(choose==2){
        for (let i = 0; i < students.length; i++) {
            console.log(`sinh viên thứ ${i+1}:
                id_${students[i].id},
                Tên_${students[i].name},
                Tuổi_${students[i].age}`);
            
        }
    }else if(choose==3){
        let id=+prompt("Mời nhập id học sinh muốn xóa");
        let flag=true;
        for(let i=0;i<students.length;i++){
        if(students[i].id==id){
            console.log("học sinh đã xóa",students[i]);
            students.splice(i,1);
            flag=false;
            break;
        }
    }
    if(flag){
        console.log("Không có danh sách thỏa mãn id la",id);
    }
}else if(choose==4){
    break;
}

}
