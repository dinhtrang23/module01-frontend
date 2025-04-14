function nhapThongTin() {
    const ten = prompt("Nhập tên:");
    const tuoi = prompt("Nhập tuổi:");
    const diaChi = prompt("Nhập địa chỉ:");
    const soDienThoai = prompt("Nhập số điện thoại:");
  const nguoi = {
    ten: ten,
    tuoi: tuoi,
    diaChi: diaChi,
    soDienThoai: soDienThoai
  };

  alert(
    "Thông tin bạn đã nhập:\n" +
    "Tên: " + nguoi.ten + "\n" +
    "Tuổi: " + nguoi.tuoi + "\n" +
    "Địa chỉ: " + nguoi.diaChi + "\n" +
    "SĐT: " + nguoi.soDienThoai
  );

  console.log(nguoi);
}