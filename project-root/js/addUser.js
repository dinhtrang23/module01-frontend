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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-container");
  const addUserBtn = document.getElementById("addUserBtn");

  const usercode = document.getElementById("usercode");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("pwd");
  const role = document.getElementById("role");
  const birthday = document.getElementById("birthday");
  
  const description = document.querySelector("textarea");

  addUserBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const status = document.querySelector('input[name="status"]:checked'); //Lấy status sau sự kiện click
    // Reset lỗi
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");

    let isValid = true;

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
      document.getElementById("pwd-error").textContent = "Password phải có ít nhất 8 ký tự";
      isValid = false;
    }

    if (!isValid) return;

    // Tạo object user
    const newUser = {
      usercode: usercode.value.trim(),
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value, // có thể mã hóa nếu cần
      role: role.value,
      birthday: birthday.value,
      status: status.value,
      description: description.value.trim()
    };

    // Lấy users hiện tại từ localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Thêm user mới
    users.push(newUser);

    // Lưu lại
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("usercode").value = generateUserCode();

    alert("User đã được thêm!");

    // Reset form (tuỳ ý)
    form.reset();
    birthday.value = "01/01/2000"; 
  });
});

document.getElementById("backBtn").addEventListener("click", function () {
  location.href = "usermanager.html";
});

function generateUserCode() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.length + 1; // Mỗi lần thêm mới thì tăng lên 1
}

// Khi trang load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("usercode").value = generateUserCode();
});

document.getElementById("signOutLink").addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn trình duyệt chuyển trang

  if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
    window.location.href = "/project-root/index.html"; // Chuyển về trang login
  }
});
