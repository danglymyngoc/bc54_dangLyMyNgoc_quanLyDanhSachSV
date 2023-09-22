function kiemTraRong(value, idErr) {
	if (value != "") {
	  document.getElementById(idErr).innerHTML = "";
	  return true;
	} else {
	  document.getElementById(idErr).innerHTML = "Nội dung không được để trống";
	  return false;
	}
}

function kiemTraSo(value, idErr){
	var checkNumber = /^\d+$/.test(value);
	if(checkNumber == true){
		document.getElementById(idErr).innerHTML = '';
		return true;
	} else{
		document.getElementById(idErr).innerHTML = 'Nhập vào số';
		return false;
	} 
}

