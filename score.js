/**
 * Sử dụng quy hoạch động để giải quyết bài toán số cách để đạt được tỉ số trong một trò chơi.
 * @param {number} x - Số bàn mà đội TT đã ghi.
 * @param {number} y - Số bàn mà đội TTLab đã ghi.
 * @returns {number} - Số cách để đạt được tỉ số x - y.
 * @author (nhtrieu-19-12-2023)
 */
function countGoalCombinations(x, y) {
    // Tạo một mảng 2 chiều để lưu trữ số cách đạt được từng tỉ số con.
    const dp = Array.from({ length: x + 1 }, () => Array(y + 1).fill(0));
    // Khởi tạo giá trị cho các trường hợp cơ bản (đội TT không ghi bàn và đội TTLab không ghi bàn).
    for (let i = 1; i <= x; i++) {
        dp[i][0] = 1; // Đội TT ghi liên tiếp i bàn.
    }

    for (let j = 1; j <= y; j++) {
        dp[0][j] = 1; // Đội TTLab ghi liên tiếp j bàn.
    }
    // Duyệt qua mảng và tính toán số cách để đạt được từng tỉ số con.
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    console.log(dp);

    // Kết quả cuối cùng là số cách để đạt được tỉ số x - y.
    return dp[x][y];

}

// Test case 1: TT ghi liên tiếp 2 bàn
console.log("Case 1:", countGoalCombinations(2, 0)); // Kết quả mong đợi: 1

// Test case 2: Các cách khác nhau
console.log("Case 2:", countGoalCombinations(1, 3)); // Kết quả mong đợi: 4
