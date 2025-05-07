function validateForm() {
    var email = document.getElementById("email").value.trim();
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var errors = [];

    // Kiểm tra email trống
    if (email === "") {
        errors.push("Email không được bỏ trống!");
    } else {
        // Kiểm tra định dạng email nếu đã nhập
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            errors.push("Email không đúng định dạng!");
        }
    }
    // Kiểm tra username trống
    if (username === ""){
        errors.push("username không được bỏ trống!");
    }
    // Kiểm tra mật khẩu trống
    if (password === "") {
        errors.push("Mật khẩu không được bỏ trống!");
    } else {
        if (password.length < 8) {
            errors.push("Mật khẩu phải có ít nhất 8 ký tự!");
        }
    
        var hasLowercase = /[a-z]/.test(password);
        var hasUppercase = /[A-Z]/.test(password);
        var hasNumber = /[0-9]/.test(password);
    
        if (!hasLowercase || !hasUppercase || !hasNumber) {
            errors.push("Mật khẩu phải có chữ thường, chữ hoa và số!");
        }
    }
    
     // Nếu có lỗi
     if (errors.length > 0) {
        showError(errors.join("<br>")); // Hiển thị từng dòng lỗi
        return false; //Không hợp lệ thì không gửi hiện thông báo!!!
    }else{
        saveUser(email,username,password);
        showSuccess("Đăng ký thành công!");
        return false;
    }
}

function saveUser(email, username, password) {
    // Tạo object user
    var user = {
        email: email,
        username: username,
        password: password
    };

    // Lấy danh sách user cũ (nếu có)
    var userList = JSON.parse(localStorage.getItem("users")) || [];

    // Thêm user mới vào danh sách
    userList.push(user);

    // Lưu lại danh sách mới vào localStorage
    localStorage.setItem("users", JSON.stringify(userList));
}

function showError(message) {
    var errorMessage = document.getElementById("errorMessage");

    const formattedMessage = message
        .split("<br>")
        .map(line => `
            <div style="display: flex; align-items: center; margin-bottom: 4px;">
                <i class="fas fa-circle-exclamation" style="color: red; margin-right: 8px;"></i>
                <span>${line}</span>
            </div>
        `)
        .join("");
    errorMessage.innerHTML = formattedMessage; // Cập nhật thông báo lỗi
    errorMessage.style.display = "block"; // Hiển thị thông báo
    setTimeout(function() {
        errorMessage.classList.add("show"); // Thêm lớp để hiển thị hiệu ứng
    }, 10); // Đảm bảo lớp được thêm sau khi hiển thị

    // Ẩn thông báo sau 3 giây
    setTimeout(function() {
        errorMessage.classList.remove("show"); // Ẩn thông báo
        setTimeout(function() {
            errorMessage.style.display = "none"; // Ẩn hẳn sau khi hiệu ứng kết thúc
        }, 500);
    }, 3000);
}

function showSuccess(message) {
    var successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <i class="fas fa-circle-check" style="color: green; margin-right: 8px;"></i>
            <span>${message}</span>
        </div>
    `;
    successMessage.style.display = "block";

    setTimeout(function() {
        successMessage.classList.add("show");
    }, 10);

    // Chờ 2.5s rồi chuyển sang trang login
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 2500);
}