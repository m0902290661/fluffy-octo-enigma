// 示例数据
const inventoryData = [
   
  
];

// 初始化页面
function init() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    inventoryData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

// 添加产品
const addItemForm = document.getElementById("addItemForm");
addItemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const productQuantity = parseInt(document.getElementById("productQuantity").value);
    const productPrice = parseFloat(document.getElementById("productPrice").value);

    if (productName && !isNaN(productQuantity) && !isNaN(productPrice)) {
        inventoryData.push({ name: productName, quantity: productQuantity, price: productPrice });
        init();
        addItemForm.reset();
    }
});

// ...

// 删除产品
const deleteItemForm = document.getElementById("deleteItemForm");
deleteItemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const deleteProductName = document.getElementById("deleteProductName").value;
    if (deleteProductName) {
        const index = inventoryData.findIndex(item => item.name === deleteProductName);
        if (index !== -1) {
            inventoryData.splice(index, 1);
            init();
            deleteItemForm.reset();
        } else {
            alert("庫存未找到！");
        }
    }
});

// 查询产品
const searchItemForm = document.getElementById("searchItemForm");
searchItemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchProductName = document.getElementById("searchProductName").value;
    if (searchProductName) {
        const foundItem = inventoryData.find(item => item.name === searchProductName);
        if (foundItem) {
            const tbody = document.querySelector("tbody");
            tbody.innerHTML = `
                <tr>
                    <td>${foundItem.name}</td>
                    <td>${foundItem.quantity}</td>
                    <td>$${foundItem.price.toFixed(2)}</td>
                </tr>
            `;
            searchItemForm.reset();
        } else {
            alert("庫存未找到！");
        }
    }
});

// ...

// 初始化页面
init();
