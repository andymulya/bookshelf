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
getSectionCustomDialog = document.querySelector('.customDialog');
getActionCustomDialogYes = document.querySelector('.yes');
getActionCustomDialogNo = document.querySelector('.no');
storageKey = 'DATA_BUKU',
dataBukuArray = [],
getDataLocal = JSON.parse(localStorage.getItem(storageKey));

//Ketika load window
window.addEventListener('load', function(){
	if(checkStorage()){
		
		if(localStorage.key(storageKey)){
			const daftarBukuSelesaiDibaca = document.querySelector('.daftarBukuSelesaiDibaca'),
			daftarBukuBelumSelesaiDibaca = document.querySelector('.daftarBukuBelumSelesaiDibaca');
			for(data of getDataLocal){
		 		dataBukuArray.push(data);

				if(data.isComplate == true){
					//membuat card untuk daftar buku
					let createElementDiv = document.createElement('div'),
					createElementContainerBuku = document.createElement('div'),
					createElementJudul = document.createElement('h3'),
					createElementPenulis = document.createElement('p'),
					createElementTahun = document.createElement('p'),
					createElementAction = document.createElement('div'),
					createElementTombol = document.createElement('div'),
					createElementHapus = document.createElement('div');

					//Memmbuat Attribute untuk setiap Element
					createElementDiv.setAttribute('class', 'selesaiDibaca');
					createElementContainerBuku.setAttribute('class', 'containerBuku');
					createElementAction.setAttribute('class', 'action');
					createElementTombol.setAttribute('class', 'tombolAction');
					createElementHapus.setAttribute('class', 'hapusBuku');

					//Memasukkan element
					createElementDiv.appendChild(createElementContainerBuku);
					createElementDiv.appendChild(createElementAction);
					createElementContainerBuku.appendChild(createElementJudul);
					createElementContainerBuku.appendChild(createElementPenulis);
					createElementContainerBuku.appendChild(createElementTahun);
					createElementAction.appendChild(createElementTombol);
					createElementAction.appendChild(createElementHapus);

					const createTextJudul = document.createTextNode(`${data.judul}`),
					createTextPenulis = document.createTextNode(`Penulis: ${data.penulis}`),
					createTextTahun = document.createTextNode(`Tahun: ${data.tahun}`),
					createTextTombolBelumSelesaiDibaca = document.createTextNode('Belum selesai dibaca');
					createTextHapus = document.createTextNode('Hapus');

					createElementJudul.appendChild(createTextJudul);
					createElementPenulis.appendChild(createTextPenulis);
					createElementTahun.appendChild(createTextTahun);
					createElementTombol.appendChild(createTextTombolBelumSelesaiDibaca);
					createElementHapus.appendChild(createTextHapus);

					daftarBukuSelesaiDibaca.appendChild(createElementDiv);

					
				}else{
					//membuat card untuk daftar buku
					let createElementDiv = document.createElement('div'),
					createElementContainerBuku = document.createElement('div'),
					createElementJudul = document.createElement('h3'),
					createElementPenulis = document.createElement('p'),
					createElementTahun = document.createElement('p'),
					createElementAction = document.createElement('div'),
					createElementTombol = document.createElement('div'),
					createElementHapus = document.createElement('div');

					//Memmbuat Attribute untuk setiap Element
					createElementDiv.setAttribute('class', 'belumSelesaiDibaca');
					createElementContainerBuku.setAttribute('class', 'containerBuku');
					createElementAction.setAttribute('class', 'action');
					createElementTombol.setAttribute('class', 'tombolAction');
					createElementHapus.setAttribute('class', 'hapusBuku');

					//Memasukkan element
					createElementDiv.appendChild(createElementContainerBuku);
					createElementDiv.appendChild(createElementAction);
					createElementContainerBuku.appendChild(createElementJudul);
					createElementContainerBuku.appendChild(createElementPenulis);
					createElementContainerBuku.appendChild(createElementTahun);
					createElementAction.appendChild(createElementTombol);
					createElementAction.appendChild(createElementHapus);
					
					const createTextJudul = document.createTextNode(`${data.judul}`),
					createTextPenulis = document.createTextNode(`Penulis: ${data.penulis}`),
					createTextTahun = document.createTextNode(`Tahun: ${data.tahun}`),
					createTextTombolSelesaiDibaca = document.createTextNode('Selesai dibaca');
					createTextHapus = document.createTextNode('Hapus');

					createElementJudul.appendChild(createTextJudul);
					createElementPenulis.appendChild(createTextPenulis);
					createElementTahun.appendChild(createTextTahun);
					createElementTombol.appendChild(createTextTombolSelesaiDibaca);
					createElementHapus.appendChild(createTextHapus);

					daftarBukuBelumSelesaiDibaca.appendChild(createElementDiv);

				}
		 	}
		}
	}else{
		alert('Maaf web browser anda tidak mendukung');
	}
});

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

	const getTombolAction1 = document.getElementsByClassName('hapusBuku');
	const getTombolAction2 = document.getElementsByClassName('tombolAction');

	for(let i = 0; i < getTombolAction1.length; i++){

		//Tombol hapus data
		getTombolAction1[i].addEventListener('click', function(){
			getSectionCustomDialog.removeAttribute('hidden');

			//Tombol Yes
			getActionCustomDialogYes.addEventListener('click', function(){
				getDataLocal.splice(i, i+1);
				dataBukuArray.splice(i, i+1);
				localStorage.setItem(storageKey, JSON.stringify(getDataLocal));
				location.reload(true);
				alert('Berhasil dihapus');
			});

			//Tombol No
			getActionCustomDialogNo.addEventListener('click', function(){
				getSectionCustomDialog.setAttribute('hidden', '');
			});
			
		});

		getTombolAction2[i].addEventListener('click', function(){
			getDataLocal[i].isComplate = !getDataLocal[i].isComplate;
			localStorage.setItem(storageKey, JSON.stringify(getDataLocal));
			location.reload(true);
		});
	}

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
			location.reload(true);
		}
});