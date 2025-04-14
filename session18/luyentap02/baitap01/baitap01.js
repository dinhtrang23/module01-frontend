// Khởi tạo mảng products
let products = [
    { id: 1, name: 'Milk', count: 100 },
    { id: 2, name: 'Orange', count: 100 },
    { id: 3, name: 'Butter', count: 100 }
  ];
  
  // 1. Thêm đối tượng mới
  products.push({ id: 4, name: 'Cheese', count: 50 });
  
  // 2. Xóa đối tượng có id là 2
  products = products.filter(product => product.id !== 2);
  
  // 3. Truy vấn đối tượng có id là 3 và cập nhật count = 0
  const productToUpdate = products.find(product => product.id === 3);
  if (productToUpdate) {
    productToUpdate.count = 0;
  }
  
  // 4. Tìm từ khóa “Butter”
  const keyword = "Butter";
  const foundProduct = products.find(product => product.name === keyword);
  
  if (foundProduct) {
    console.log("Tìm thấy sản phẩm:", foundProduct);
  } else {
    console.log("Không có dữ liệu bạn tìm kiếm");
  }
  
  // In ra mảng cuối cùng để kiểm tra
  console.log("Danh sách sản phẩm hiện tại:", products);