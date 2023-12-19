const isValidParamenterPass = (m, d, k, c) => 0 <= m <= 1000 && 0 <= k <= 1000 && 0 <= c <= 1000 && 0 <= d <= 1000;
/**
 * Dùng giải thuật tham lam để giải quyết bài toán
 * @param {number} m là sô con quái
 * @param {number} d độ phục hồi của thanh kiếm
 * @param {number} k độ bền của thanh kiếm giảm đi k
 * @param {number} c ố tiền tốn đẻ sửa thanh kiếm
 * @returns số tiền để qua màn
 * @author nhtrieu (19-12-2023)
 */
const diablo = (m, d, k, c) => {
    // check điều kiện 
    if (!isValidParamenterPass) return;
    // Nếu độ bền ban đầu ít hơn hoặc bằng sát thương, và có nhiều hơn một con quái,
    // thì không thể tiếp tục, trả về -1.
    if (d <= k && m > 1) return -1;

    let count = 0;  // Khởi tạo biến đếm cho số lần sửa chữa cần thiết
    let tg = d;    // Khởi tạo độ bền hiện tại bằng độ bền ban đầu

    // Tiếp tục vòng lặp cho đến khi không còn quái nào
    while (m > 0) {
        // Kiểm tra nếu độ bền hiện tại trừ đi sát thương nhỏ hơn hoặc bằng 0,
        // và còn nhiều hơn một con quái.
        if (tg - k <= 0 && m > 1) {
            count++;   // Tăng biến đếm số lần sửa chữa
            tg = d;    // Đặt lại độ bền hiện tại bằng độ bền ban đầu sau khi sửa chữa
        }

        m -= 1;        // Giảm số lượng quái
        tg -= k;       // Giảm độ bền hiện tại đi giá trị sát thương
    }

    // Trả về tổng số vàng cần thiết cho sửa chữa
    return count * c;
};


// Đọc dữ liệu từ input
const input = '10 4 1 2'; // Thay đổi input tùy theo yêu cầu
const [m, d, k, c] = input.split(' ').map(Number);

// Gọi hàm và in kết quả
const result = diablo(m, d, k, c);
console.log(result);
