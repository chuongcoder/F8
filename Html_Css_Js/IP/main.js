// document.addEventListener("DOMContentLoaded", function() {
//     // Sử dụng API của ipify để lấy địa chỉ IP
//     fetch("https://api.ipify.org?format=json")
//         .then(response => response.json())
//         .then(data => {
//             // Hiển thị địa chỉ IP trên trang HTML
//             document.getElementById("ip-address").innerText = data.ip;
//         })
//         .catch(error => {
//             console.error("Error fetching the IP address:", error);
//             document.getElementById("ip-address").textContent = "Unable to fetch IP address.";
//         });
// });


let width = 526;
let height = 526;
let columns = 4;
let rows = 4;

let steps = 16;

let x = 0;
let y = 0;

for (let i = 0; i < steps; i++) {
    console.log(`
    ${((100 / steps) * i)} % {
        background-position: -${(width / columns) * x}px - ${
            (height / rows)*y }px;
        }
    `);

    x++;

    if ((i + 1) % 4 === 0) {
        y++;
        x = 0;
    }
}