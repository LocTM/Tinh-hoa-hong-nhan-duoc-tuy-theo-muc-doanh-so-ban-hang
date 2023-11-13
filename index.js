function tinhHoaHong() {
    let mds1 = 1000;
    let mds2 = 5000;
    let mds3 = 10000;

    let hh1 = 0.05;
    let hh2 = 0.1;
    let hh3 = 0.15;
    let hh4 = 0.2;

    if (ds <= mds1) {
        return ds * hh1;
    } else if (ds <= mds2) {
        return mds1 * hh1 + (ds - mds1) * hh2;
    } else if (ds <= mds3) {
        return mds1 * hh1 + (mds2 - mds1) * hh2 + (ds - mds2) * hh3;
    } else {
        return mds1 * hh1 + (mds2 - mds1) * hh2 + (mds3 - mds2) * hh3 + (ds - mds3) * hh4;
    }
}
let ds = +prompt("Nhập vào doanh số tháng này của bạn:");
let hh        = tinhHoaHong();
alert("Hoa hồng nhận được cho  doanh số ${ds} là: ${hh}");

