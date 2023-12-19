// bái toán xử lý vỡi chuỗi
// định nghĩa ra các trường hợp test

const initialTest = [
    "( )",
    "{ [ ( ) ] }",
    "{ [ ( ) } ]",
    "( ) (",
    "] ( ) ["
];
// Các giá trị có thể Mapping
const matchingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{'
};
console.log('<<<<<<<  matchingBrackets >>>>>>>', matchingBrackets);
/**
 * Hàm kiếm tra sự đúng đắn của độ daì chuỗi
 * @param {*} str Là chuỗi nhập dữ liệu đầu vào kiểm tra
 * @returns Trả về false nếu giá trị không hợp lệ và ngược lịa
 * @author (nhtrieu-19-122023)
 */
const isValidStringLength = (str) => {
    return str.length > 10000 ? false : true
};
/// tạo 1 ngăn xếp chứa các kí tự ( [ {

const stackbalance = [];
// hàm kiểm tra tính hợp lệ của dấu ngoặc
/**
 * Hàm viết logic xử lý tính đúng đắn của dấu
 * @param {*} str Là chuỗi nhập dữ liệu đầu vào kiểm tra
 * @returns Trả về YES nếu là có tính đúng dắn dâu và ngược lại
 * @author (nhtrieu-19-12-2023)
 */
const stackItem = (str) => {
    for (const char of str) {
        switch (char) {
            case '(':
            case "[":
            case "{":
                stackbalance.push(char);
                break;
            case ')':
            case ']':
            case '}':
                const lastBalance = stackbalance.pop();
                if (lastBalance !== matchingBrackets[char]) {
                    return 'NO';
                }
            default:
                break;

        }

    }
    return stackbalance.length === 0 ? 'YES' : 'NO';
}
/**
 * Hàm tổng hợp các điều kiện và logic
 * @param {*} str 
   @returns Trả về YES nếu là có tính đúng dắn dâu và ngược lại
 * @author (nhtrieu-19-12-2023)
 */
const isVliddBalance = (str) => {
    const inValid = isValidStringLength(str);
    if (!inValid) return;
    const checkConditionBalance = stackItem(str);
    return checkConditionBalance;
}
/**
 * Hàm trả ra màn hình các giá trị kiểm tra
 * @param {*} initTest là 1 mảng chứa các test case
 * @author (nhtrieu-19-12-2023)
 */
const initUnitTestCase = (initTest) => {
    for (let i = 0; i < initTest.length; i++) {
        const balanceTest = isVliddBalance(initTest[i]);
        console.log(`Test case ${i + 1}: ${initTest[i]} => ${balanceTest}`);
    }
}
initUnitTestCase(initialTest);