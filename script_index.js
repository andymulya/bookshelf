const getSectionForm = document.querySelector('.sectionForm');
getTombolTambahDaftarBuku = document.querySelector('.tombol .tambahDaftarBuku'),
getTombolClose = document.querySelector('.close'),
getValueJudul = document.getElementById('judul'),
getValuePenulis = document.getElementById('penulis'),
getValueTahun = document.getElementById('tahun'),
getTombolTambah = document.querySelector('.tambah'),
getValueCheckBox = document.querySelector('#selesai_dibaca'),
storageKey = 'DATA_BOOK',
dataBukuArray = [];

//Tombol Tambah daftar buku
getTombolTambahDaftarBuku.addEventListener('click', function(){
	getSectionForm.removeAttribute('hidden');
});

//Tombol close di form
getTombolClose.addEventListener('click', function(){
	getSectionForm.setAttribute('hidden','');
});

//Tombol tambah data buku
getTombolTambah.addEventListener('click', function(){
	if(checkStorage()){
		const getData = {
			id: +new Date,
			judul: getValueJudul.value,
			penulis: getValuePenulis.value,
			tahun: getValueTahun.value,
			isComplate: getValueCheckBox.checked
		}
		if(getValueJudul.value == '' && getValuePenulis.value == '' && getValueTahun.value == ''){
			alert('Maaf, mohon diisi dengan benar');
		}else{
			dataBukuArray.push(getData);

			const result = JSON.stringify(dataBukuArray);
			localStorage.setItem(storageKey, result);

			alert('Data buku berhasil ditambahkan');

			getValueJudul.value = '';
			getValuePenulis.value = '';
			getValueTahun.value = '';
			getValueCheckBox.checked = false;
		}
	}else{
		alert('Website anda tidak mendukung storage');
	}
	
});

//Cek dukungan localStorage pada web
const checkStorage = () => typeof(Storage) !== 'undifine';





