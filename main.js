const toggle = document.querySelector("#toggle");
const cancel = document.querySelector("#cancel");

toggle.addEventListener("click",  () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    // console.log("hi");
});

cancel.addEventListener("click",  () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    // console.log("hi");
});

// function toggling() {
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display = "flex";
//     console.log("hi");
// }