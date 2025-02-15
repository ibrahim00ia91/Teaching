document.querySelectorAll(".sidebar ul li").forEach((item) => {
    item.addEventListener("click", function () {
        document.querySelector(".sidebar ul li.active").classList.remove("active");
        this.classList.add("active");
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
});
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
});
