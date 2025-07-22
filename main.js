document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle");
    const sidebar = document.getElementById("sidebar");

    // Hide sidebar by default on small screens
    function hideSidebarOnSmallScreen() {
        if (window.innerWidth <= 1200) {
            sidebar.style.left = "-320px";
        } else {
            sidebar.style.left = "0";
        }
    }

    hideSidebarOnSmallScreen();
    window.addEventListener("resize", hideSidebarOnSmallScreen);

    toggle.addEventListener("click", function () {
        if (sidebar.style.left === "0px" || sidebar.style.left === "0") {
            sidebar.style.left = "-320px";
        } else {
            sidebar.style.left = "0";
        }
    });
});
