function validateForm() {
    var email = document.getElementById("email").value.trim();
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

    // Kiểm tra mật khẩu trống
    if (password === "") {
        errors.push("Mật khẩu không được bỏ trống!");
    }

    // Nếu có lỗi
    if (errors.length > 0) {
        showError(errors.join("<br>")); // Hiển thị từng dòng lỗi
        return false; //Không hợp lệ thì không gửi hiện thông báo!!!
    }
    var userList = JSON.parse(localStorage.getItem("users")) || [];

    var foundUser = userList.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        if (document.getElementById("remember").checked) {
            localStorage.setItem("rememberEmail", email);
            localStorage.setItem("rememberPassword", password);
        } else {
            localStorage.removeItem("rememberEmail");
            localStorage.removeItem("rememberPassword");
        }
        showSuccess("Đăng nhập thành công!");
        setTimeout(function() {
            window.location.href = "/project-root/page/usermanager.html";
        }, 2500); // 2.5 giây sau thì chuyển trang
    } else {
        showError("Sai email hoặc mật khẩu!");
    }

    return false; 
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

    if (!successMessage) {
        // Nếu chưa có thẻ successMessage thì tạo luôn
        successMessage = document.createElement("div");
        successMessage.id = "successMessage";
        successMessage.className = "success-toast";
        document.body.appendChild(successMessage);
    }

    successMessage.innerHTML = `
        <div style="display: flex; align-items: center;">
            <i class="fas fa-circle-check" style="color: green; margin-right: 8px;"></i>
            <span>${message}</span>
        </div>
    `;
    successMessage.style.display = "block";
    setTimeout(function() {
        successMessage.classList.add("show");
    }, 10);

    setTimeout(function() {
        successMessage.classList.remove("show");
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 500);
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("email").value = localStorage.getItem("rememberEmail") || "";
    document.getElementById("password").value = localStorage.getItem("rememberPassword") || "";
});