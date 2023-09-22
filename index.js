var dssv = [];
var DSSV_LOCAL = 'DSSV_LOCAL'

var dataJson = localStorage.getItem(DSSV_LOCAL);
if(dataJson != null){
	dssv = JSON.parse(dataJson).map(function(sv){
		return new SinhVien(sv.maSV, sv.tenSV, sv.emailSV, sv.matKhauSV, sv.diemToanSV, sv.diemLySV, sv.diemHoaSV);
	});
	renderDSSV(dssv);
}

function themSV(){
	var sv = layThongTinTuForm()

	var isValid = kiemTraRong(sv.maSV, 'spanMaSV') & kiemTraRong(sv.tenSV, 'spanTenSV') & kiemTraRong(sv.emailSV, 'spanEmailSV') & kiemTraRong(sv.matKhauSV, 'spanMatKhau') & kiemTraRong(sv.diemToanSV, 'spanToan') & kiemTraRong(sv.diemLySV, 'spanLy') & kiemTraRong(sv.diemHoaSV, 'spanHoa');
	 
	var isValidSo = kiemTraSo(sv.diemToanSV, 'spanToan') & kiemTraSo(sv.diemLySV, 'spanLy') & kiemTraSo(sv.diemHoaSV,'spanHoa');

	if(!isValid || !isValidSo){
		return;
	}

	dssv.push(sv);
	renderDSSV(dssv);
	setItem(dssv);
}

function suaSV(id){
	var index;
	for(var i = 0; i < dssv.length; i++){
		console.log(dssv[i])
		if(dssv[i].maSV == id){
			index = i;
			var sv = dssv[index];
			document.getElementById('txtMaSV').value = sv.maSV
			document.getElementById('txtTenSV').value = sv.tenSV;
			document.getElementById('txtEmail').value = sv.emailSV;
			document.getElementById('txtPass').value = sv.matKhauSV;
			document.getElementById('txtDiemToan').value = sv.diemToanSV;
			document.getElementById('txtDiemLy').value = sv.diemLySV;
			document.getElementById('txtDiemHoa').value = sv.diemHoaSV;
		}	
	}
}

function xoaSV(id){
	var index;
	for(var i = 0; i < dssv.length; i++){
		if(dssv[i].ma == id){
			index = i;
		}
	}
	dssv.splice(index,1);
	renderDSSV(dssv)
}

