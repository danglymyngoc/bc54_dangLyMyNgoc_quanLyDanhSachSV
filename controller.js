function layThongTinTuForm(){
	var ma = document.getElementById('txtMaSV').value;
	var ten = document.getElementById('txtTenSV').value;
	var email = document.getElementById('txtEmail').value;
	var matKhau = document.getElementById('txtPass').value;
	var diemToan = Number(document.getElementById('txtDiemToan').value);
	var diemLy = Number(document.getElementById('txtDiemLy').value);
	var diemHoa = Number(document.getElementById('txtDiemHoa').value);

	var sv = new SinhVien(ma, ten, email, matKhau, diemToan, diemLy, diemHoa);

	return sv;
}

function renderDSSV(dssv){
	var contentHTML = '';
	for(var i = 0; i < dssv.length; i++){
		var sv = dssv[i];
		var trString = `<tr>
							<td>${sv.maSV}</td>
							<td>${sv.tenSV}</td>
							<td>${sv.emailSV}</td>
							<td>${sv.diemTrungBinh()}</td>
							<td><button class='btn btn-warning' onclick="suaSV('${sv.maSV}')">Sửa</button></td>
							<td><button class='btn btn-danger' onclick="xoaSV('${sv.maSV}')">Xóa</button></td>
						</tr>`;
		contentHTML += trString;
	}
	document.getElementById('tbodySinhVien').innerHTML = contentHTML
}

function setItem(dssv){
	var dataJson = JSON.stringify(dssv);
	localStorage.setItem(DSSV_LOCAL, dataJson)
}