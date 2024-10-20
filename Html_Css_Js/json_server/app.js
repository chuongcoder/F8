var coursesApi = 'http://localhost:3000/courses';

fetch(coursesApi) 
.then(function(response) {
    return response.json();
})
.then(function(courses){
    console.log(courses);
})
.catch(function(error) {
    console.error('Lỗi:', error);
});

// var coursesApi = 'http://localhost:3000/courses';

// // Dữ liệu đối tượng JSON
// var data = {
//     name: 'khoa',
//     // Thêm các trường dữ liệu khác nếu cần
// };

// // Chuyển đổi đối tượng JSON thành chuỗi JSON hợp lệ
// var jsonData = JSON.stringify(data);

// fetch(coursesApi, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: jsonData // Gửi dữ liệu dưới dạng chuỗi JSON
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error) {
//     console.error('Lỗi:', error);
// });
