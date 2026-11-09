
let selectedName = "";
let selectedPrice = 0;

function showPackage(name, price) {
    selectedName = name;
    selectedPrice = price;

    document.getElementById("packageName").textContent = name;
    document.getElementById("packagePrice").textContent =
        "Starting from ₹" + price.toLocaleString("en-IN");

    document.getElementById("modal").hidden = false;
}

function closePackage() {
    document.getElementById("modal").hidden = true;
}

function bookPackage() {
    const phone = "919037794224";
    const message = `Hello! I am interested in ${selectedName}, starting at ₹${selectedPrice.toLocaleString("en-IN")}. Please share more details.`;

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") closePackage();
});

document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target === this) closePackage();
});
