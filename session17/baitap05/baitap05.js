document.getElementById("loginBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
      alert("Vui lòng nhập đầy đủ email và mật khẩu.");
    } else if (email === "huanrose@gmail.com" && password === "123456") {
      alert("Đăng nhập thành công!");
    } else {
      alert("Đăng nhập thất bại!");
    }
  });