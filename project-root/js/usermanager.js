const tbody = document.getElementById("tbody");

let currentPage = 1;
const usersPerPage = 5;
function showData() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        tbody.innerHTML = "<tr><td colspan='7'>Không có user nào</td></tr>";
        document.getElementById("pagination").innerHTML = "";
        return;
    }

    const start = (currentPage - 1) * usersPerPage;
    const end = start + usersPerPage;
    const usersToShow = users.slice(start, end);


    tbody.innerHTML = usersToShow
    .map((user, index) => {
        const statusClass = user.status === "Active" ? "status-active" : "status-deactivate";
        return `
        <tr>
            <td>${start + index + 1}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.birthday}</td>
            <td>
                <span class="status-badge ${statusClass}">${user.status}</span>
            </td>
            <td>
                <button class="icon-button" onclick="deleteUser('${user.usercode}')"><img src="/project-root/assets/icons/delete.png" alt="delete"></button>
                <button class="icon-button" onclick="editUser('${user.usercode}')"><img src="/project-root/assets/icons/edit.png" alt="edit"></button>
            </td>
        </tr>
    `;
})
.join('');

        renderPagination(users.length);
}

function deleteUser(code) {
    if (confirm("Bạn có chắc chắn muốn xóa user này không?")) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users = users.filter(user => user.usercode !== code);
        localStorage.setItem("users", JSON.stringify(users));
        showData(); 
    }
}

function editUser(code) {
    localStorage.setItem("editingUserCode", code);
    window.location.href = "editUser.html"; //vào trang edit
}

function renderPagination(totalUsers) {
    const totalPages = Math.ceil(totalUsers / usersPerPage);
    let paginationHTML = "";
  
    paginationHTML += `<button onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>&larr;</button>`;

    const maxVisible = 5; // Số lượng trang hiển thị tối đa ở giữa
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
  
    if (startPage > 1) {
      paginationHTML += `<button onclick="goToPage(1)">1</button>`;
      if (startPage > 2) {
        paginationHTML += `<span>...</span>`;
      }
    }
  
    for (let i = startPage; i <= endPage; i++) {
      paginationHTML += `<button onclick="goToPage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
    }
  
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationHTML += `<span>...</span>`;
      }
      paginationHTML += `<button onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }
    
      // Nút tiến »
      paginationHTML += `<button onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>&rarr;</button>`;
  
    document.getElementById("pagination").innerHTML = paginationHTML;
  }

  document.getElementById("signOutLink").addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn trình duyệt chuyển trang
  
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
      window.location.href = "/project-root/index.html"; // Chuyển về trang login
    }
  });

  function goToPage(page) {
    currentPage = page;
    showData();
  }

showData();

