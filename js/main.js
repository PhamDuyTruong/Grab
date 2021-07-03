/**
 * Version: 1.0
 * 
 * 
 * Khối 1:
 * soKm
 * thoiGianCho
 * grabCar
 * grabSUV
 * grabBlack
 * 
 * Khối 2:
 * Khai báo biến ,lấy dữ liệu từ Form
 * Tìm loại xe (grabCar,grabSUV,grabBlack)
 * Tính tổng tiền (dựa vào soKm,loaixe,thoiGianCho)
 * Theo Km              GrabCar(Đ)   GrabSUV(Đ)   GrabBlack(Đ)
 * 1 km đầu tiên        8000            9000       10000
 * Từ 1 đến 19          7500            8500       9500
 * Từ 19 trờ lên        7000            8000       9000
 * Thời gian chờ        2000            3000       3500
 * (mỗi 3 phút)
 * 
 * 
 * Hiển thị lên UI
 *
 * 
 * Khối 3: Hiển thị thông tin
 * Tổng tiền đi được (Thành tiền)
 * 
 */




//Hàm rút gọn cú pháp document.getElementById
function getEle(id){
    return document.getElementById(id);
}
//Hàm tìm loại xe có kết quả(loaiXe) trả về 
 function timLoaiXe(){
     //Khởi tạo giá trị ketQua để lưu các loại xe cần tìm
     var ketQua = "";
    //Hiển thị thông tin các loại xe 
    var grabCar = getEle("grabCar").checked;
    var grabSUV = getEle("grabSUV").checked;
    var grabBlack = getEle("grabBlack").checked;
    //Chọn loại xe
    if(grabCar){
        ketQua = "grabCar";
    } else if(grabSUV){
        ketQua = "grabSUV";
    } else if(grabBlack){
        ketQua = "grabBlack";
    } else{
        ketQua = "Bạn phải chọn một loại xe";
    }
    return ketQua;
 }


//Hàm tính tổng tiền
 function tinhTongTien(){
    var thanhTien = getEle("divThanhTien");
    thanhTien.style.display = "block";
    var xuatTien = getEle("xuatTien");
    //Hiển thị thông tin và lấy giá trị
    var soKm = getEle("soKm").value;
    //Ep kiểu
    var laySoKm = parseFloat(soKm);
    var thoiGianCho = getEle("thoiGianCho").value;
    var thoiGianCanTinh = parseFloat(Math.floor(thoiGianCho /3));
    // console.log(soKm,thoiGianCanTinh);
    var loaiXe = timLoaiXe();
   
    // console.log(loaiXe);
    switch(loaiXe){
        case 'grabCar':
            if(laySoKm <= 1 && laySoKm > 0){
                thanhTien = laySoKm*8000 + thoiGianCanTinh*2000;
            } else if( laySoKm > 1 && laySoKm <= 19){
                thanhTien = 8000 + (laySoKm-1)*7500 +thoiGianCanTinh*2000;
            } else if(laySoKm > 19 ){
                thanhTien = 8000 + 19*7500 + (laySoKm-20)*7000 +thoiGianCanTinh*2000;
            }else if( laySoKm < 0){
                thanhTien = 0;
            }
            break;
        case 'grabSUV':
            if(laySoKm <= 1 && laySoKm > 0){
                thanhTien = laySoKm*9000 + thoiGianCanTinh*3000;
            } else if( laySoKm > 1 && laySoKm <= 19){
                thanhTien = 9000 + (laySoKm-1)*8500 +thoiGianCanTinh*3000;
            } else if(laySoKm > 19 ){
                thanhTien = 9000 + 19*8500 + (laySoKm-20)*8000 +thoiGianCanTinh*3000;
            }else if( laySoKm < 0){
                thanhTien = 0;
            }
            break;

        case 'grabBlack':
            if(laySoKm <= 1 && laySoKm > 0){
                thanhTien = laySoKm*10000 + thoiGianCanTinh*3500;
            } else if( laySoKm > 1 && laySoKm <= 19){
                thanhTien = 10000 + (laySoKm-1)*9500 +thoiGianCanTinh*3500;
            } else if(laySoKm > 19 ){
                thanhTien = 10000 + 19*9500 + (laySoKm-20)*9000 +thoiGianCanTinh*3500;
            }else if( laySoKm < 0){
                thanhTien = 0;
            }
            break;
    }
    xuatTien.innerHTML = thanhTien;
 }




