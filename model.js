function SinhVien(ma, ten, email, matKhau, diemToan, diemLy, diemHoa){
	this.maSV = ma;
	this.tenSV = ten;
	this.emailSV = email;
	this.matKhauSV = matKhau;
	this.diemToanSV = diemToan;
	this.diemLySV = diemLy;
	this.diemHoaSV = diemHoa;
	this.diemTrungBinh = function(){
        var dtb = (Number(this.diemToanSV) + Number(this.diemLySV) + Number(this.diemHoaSV))/3;
		return dtb.toFixed(2);
	};
}