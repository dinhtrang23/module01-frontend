const input = document.getElementById("birthday");

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function changeDate(amount) {
  const currentValue = input.value;
  const [dd, mm, yyyy] = currentValue.split('/').map(Number);
  const current = new Date(yyyy, mm - 1, dd);

  current.setDate(current.getDate() + amount);
  input.value = formatDate(current);
}

function updateUser() {
    // Lấy các input
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("pwd");
  
    // Xóa lỗi cũ
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
  
    let isValid = true;
    // Hiển thị lỗi
    if (username.value.trim() === "") {
      document.getElementById("username-error").textContent = "Username không được để trống";
      isValid = false;
    }
  
    if (email.value.trim() === "") {
      document.getElementById("email-error").textContent = "Email không được để trống";
      isValid = false;
    }
  
    if (password.value.trim() === "") {
      document.getElementById("pwd-error").textContent = "Password không được để trống";
      isValid = false;
    } else if (password.value.length < 8) {
      document.getElementById("pwd-error").textContent = "Password phải ít nhất 8 ký tự";
      isValid = false;
    }
  
    if (!isValid) return;

// Hàm cập nhật user
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const code = document.getElementById("usercode").value;
  const updatedUser = {
    usercode: code,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("pwd").value,
    role: document.getElementById("role").value,
    birthday: document.getElementById("birthday").value,
    status: document.querySelector('input[name="status"]:checked').value,
    description: document.querySelector("textarea").value
  };
  

  const index = users.findIndex(u => u.usercode == code);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
    alert("User đã được cập nhật!");
    window.location.href = 'usermanager.html';//chuyen huong ve danh sach user
  } else {
    alert("Không tìm thấy user để cập nhật!");
  }
}

window.onload = function () {
  const code = localStorage.getItem("editingUserCode");
  if (!code) return;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.usercode == code);
  if (!user) return;

  // Gán dữ liệu vào form
  document.getElementById("usercode").value = user.usercode;
  document.getElementById("username").value = user.username;
  document.getElementById("email").value = user.email;
  document.getElementById("pwd").value = user.password;
  document.getElementById("role").value = user.role;
  document.getElementById("birthday").value = user.birthday;
  //document.querySelector(`input[name="status"][value="${user.status}"]`).checked = true;
  document.querySelector("textarea").value = user.description;
  const statusRadios = document.querySelectorAll('input[name="status"]');
  statusRadios.forEach(radio => {
    radio.checked = radio.value === user.status;
  });
};

document.getElementById("backBtn").addEventListener("click", function () {
  location.href = "usermanager.html";
});

document.getElementById("signOutLink").addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn trình duyệt chuyển trang

  if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
    window.location.href = "/project-root/index.html"; // Chuyển về trang login
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userDisplay = document.getElementById("loggedInUser");

  if (loggedInUser && loggedInUser.username) {
    userDisplay.textContent = ` ${loggedInUser.username}`;
  } else {
    userDisplay.textContent = "Chưa đăng nhập";
  }
});