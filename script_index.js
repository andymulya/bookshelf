const getSectionForm = document.querySelector('.sectionForm'),
getSectionDaftarBuku = document.querySelector('.sectionDaftarBuku');
getTombolTambahDaftarBuku = document.querySelector('.tombol .tambahDaftarBuku'),
getTombolCloseForm = document.querySelector('.closeForm'),
getTombolLihatDaftarBuku = document.querySelector('.lihatDaftarBuku'),
getTombolCloseDaftarBuku = document.querySelector('.closeDaftarBuku');
getValueJudul = document.getElementById('judul'),
getValuePenulis = document.getElementById('penulis'),
getValueTahun = document.getElementById('tahun'),
getTombolTambah = document.querySelector('.tambah'),
getValueCheckBox = document.querySelector('#selesai_dibaca'),
storageKey = 'DATA_BUKU',
dataBukuArray = [];

//Cek dukungan localStorage pada web
const checkStorage = () => typeof(Storage) !== 'undifined';

//Tombol Tambah daftar buku
getTombolTambahDaftarBuku.addEventListener('click', function(){
	getSectionForm.removeAttribute('hidden');
});

//Tombol close di form
getTombolCloseForm.addEventListener('click', function(){
	getSectionForm.setAttribute('hidden','');
});

//Tombol Lihat daftar buku
getTombolLihatDaftarBuku.addEventListener('click', function(){
	getSectionDaftarBuku.removeAttribute('hidden');
	dataBukuArray = JSON.parse(localStorage.getItem(storageKey));

	console.log(dataBukuArray);
});

//Tombol close di lihat daftar buku
getTombolCloseDaftarBuku.addEventListener('click', function(){
	getSectionDaftarBuku.setAttribute('hidden','');
});

//Tombol tambah data buku
getTombolTambah.addEventListener('click', function(){
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
});

window.addEventListener('load', function(){
	if(checkStorage()){
		
		if(localStorage.key(storageKey)){
			const getDataLocal = JSON.parse(localStorage.getItem(storageKey));
			for(data of getDataLocal){
		 		dataBukuArray.push(data);
		 		console.log(dataBukuArray);
		 	}
		}
	}else{
		alert('Maaf web browser anda tidak mendukung');
	}
});


