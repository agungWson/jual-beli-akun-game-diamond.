let cart = [];
let total = 0;

function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu button').forEach(b => b.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    event.target.classList.add('active');
}

function addCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCartCount();
    updateTotal();
    alert(name + " ditambahkan ke keranjang");
}

function updateCartCount() {
    document.getElementById("cartCount").innerText = cart.length;
}

function updateTotal() {
    document.getElementById("total").innerText =
        "Rp " + total.toLocaleString("id-ID");
}

function checkout() {
    const list = document.getElementById("cartItems");
    const pay = document.getElementById("payment").value;

    if (cart.length === 0) {
        alert("Keranjang kosong");
        return;
    }

    if (pay === "") {
        alert("Pilih metode pembayaran");
        return;
    }

    list.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent =
            item.name + " - Rp " + item.price.toLocaleString("id-ID");
        list.appendChild(li);
    });

    alert("Pembayaran via " + pay + " berhasil (terimakasih karna beli di gunz pedia)");

    // reset
    cart = [];
    total = 0;
    list.innerHTML = "";
    document.getElementById("payment").value = "";

    updateCartCount();
    updateTotal();
}

function resetTransaksi() {
    if (confirm("Semua data pembayaran akan direset. Lanjutkan?")) {
        document.querySelectorAll("input").forEach(input => {
            input.value = "";
        });
    }
}
