let doanhSo = +prompt("Nhập vào doanh số");
let mocDoanhSo1 = 1000;
let mocDoanhSo2 = 5000;
let mocDoanhSo3 = 10000;
let tiLe1 = 0.05;
let tiLe2 = 0.1;
let tiLe3 = 0.15;
let tiLe4 = 0.2;
let hoaHong = 0;
tinhHoaHong(doanhSo);
function tinhHoaHong(doanhSo) {
    if (doanhSo < mocDoanhSo1) {
        hoaHong = doanhSo * tiLe1;
    }
    else if (doanhSo < mocDoanhSo2) {
        hoaHong = mocDoanhSo1 * tiLe1 + (doanhSo - mocDoanhSo1) * tiLe2;
    }
    else if (doanhSo < mocDoanhSo3) {
        hoaHong = mocDoanhSo1 * tiLe1 + (mocDoanhSo2 - mocDoanhSo1) * tiLe2 + (doanhSo - mocDoanhSo2) * tiLe3;
    }
    else  {
        hoaHong = mocDoanhSo1 * tiLe1 + (mocDoanhSo2 - mocDoanhSo1) * tiLe2 + (mocDoanhSo3 - mocDoanhSo2) * tiLe3 + (doanhSo - mocDoanhSo3) * tiLe4;
    }
    alert(`Hoa hồng nhận được cho doanh số ${doanhSo} là: ${hoaHong}`);
}