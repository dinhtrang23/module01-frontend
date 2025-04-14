const students = [];

    function themSinhVien() {
      let id = prompt("Nhập ID:");

      let idTrung = students.some(sv => sv.id === id);
      if (idTrung) {
        alert("ID đã tồn tại. Vui lòng nhập ID khác.");
        return;
      }

      let name = prompt("Nhập tên:");
      let gender = prompt("Nhập giới tính:");
      let age = parseInt(prompt("Nhập tuổi:"), 10);
      let mark = parseFloat(prompt("Nhập điểm:"));

      let newStudent = { id, name, gender, age, mark };

      students.push(newStudent);
      hienThiThongTin(newStudent);
    }

    function hienThiThongTin(student) {
      const tbody = document.querySelector("#bangThongTin tbody");
      tbody.innerHTML = ""; // Xoá bảng cũ

      for (const key in student) {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${key}</td><td>${student[key]}</td>`;
        tbody.appendChild(row);
      }
    }

    function timDiemCaoNhat() {
      if (students.length === 0) {
        alert("Chưa có sinh viên nào!");
        return;
      }

      let maxStudent = students[0];

      for (let i = 1; i < students.length; i++) {
        if (students[i].mark > maxStudent.mark) {
          maxStudent = students[i];
        }
      }

      alert(`Sinh viên có điểm cao nhất là: ${maxStudent.name} (${maxStudent.mark} điểm)`);
      hienThiThongTin(maxStudent);
    }