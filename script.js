const todos = [],
storageKey = 'DATA_BUKU',
getData = JSON.parse(localStorage.getItem(storageKey)),
checkStorage = () => typeof(Storage) !== 'undifined',
generateId = () => +new Date();

//Ketika jendela refres
window.addEventListener('load', function(){
	const getSectionDaftarBukuSelesaiDibaca = document.querySelector('.daftarBukuSelesaiDibaca'),
	getSectionDaftarBukuBelumSelesaiDibaca = document.querySelector('.daftarBukuBelumSelesaiDibaca');

	if(checkStorage()){

		if(localStorage.key(storageKey)){
			for(data of getData){
				todos.push(data);
				const element = makeTodoList(data);

				if(data.isComplate){
					getSectionDaftarBukuSelesaiDibaca.append(element);
				}else{
					getSectionDaftarBukuBelumSelesaiDibaca.append(element);
				}
			}
		}
	}else{
		alert('Mohon Maaf Browser Anda Tidak Mendukung Penyimpanan Lokal');
	}
});

//todo Object
function generateTodoObject(id, judul, penulis, tahun, isComplate){
	return {
		id,
		judul,
		penulis,
		tahun,
		isComplate
	}
}

//Tambah Buku
function tambahTodo(){
	const getValueId = generateId(),
	getValueJudul = document.getElementById('judul').value,
	getValuePenulis = document.getElementById('penulis').value,
	getValueTahun = document.getElementById('tahun').value,
	getValueCheckBox = document.getElementById('selesai_dibaca').checked,

	todoObject = generateTodoObject(getValueId, getValueJudul, (getValuePenulis == '') ? '-' : getValuePenulis, (getValueTahun == '') ? '-' : getValueTahun, getValueCheckBox);

	todos.push(todoObject);
	localStorage.setItem(storageKey, JSON.stringify(todos));
}

//Tombol tambah daftar buku
function klikTombolTambahDaftarBuku(){
	const getTombolDaftarBuku = document.querySelector('.tambahDaftarBuku');

	const getSectionForm = document.querySelector('.sectionForm');
	const getTombolTutupForm = document.querySelector('.closeForm');

	const getTombolTambahBuku = document.querySelector('.tambah');

	//Membuka form
	getTombolDaftarBuku.addEventListener('click', function(){
		getSectionForm.removeAttribute('hidden');
	});

	//Menutup Form
	getTombolTutupForm.addEventListener('click', function(){
		getSectionForm.setAttribute('hidden', '');
	});

	//Tombol Tambah Buku
	getTombolTambahBuku.addEventListener('click', function(){
		const getValueJudul = document.getElementById('judul');

		(getValueJudul.value == '') ? alert('Mohon form judul harap diisi') : tambahTodo();
		location.reload(true);
	});
}
klikTombolTambahDaftarBuku();


//Tombol lihat daftar buku
function klikTombolLihatDaftarBuku(){
	const getTombolLihatDaftarBuku = document.querySelector('.lihatDaftarBuku');
	const getSectionLihatDaftarBuku = document.querySelector('.sectionDaftarBuku');
	const getTombolTutupDaftarBuku = document.querySelector('.closeDaftarBuku');

	//Membuka lihat daftar buku
	getTombolLihatDaftarBuku.addEventListener('click', function(){
		getSectionLihatDaftarBuku.removeAttribute('hidden');
	});

	//Menutup daftar buku
	getTombolTutupDaftarBuku.addEventListener('click', function(){
		getSectionLihatDaftarBuku.setAttribute('hidden', '');
	});
}
klikTombolLihatDaftarBuku();

//Container todo list
function makeTodoList(todoObject){
	let {id, judul, penulis, tahun, isComplate} = todoObject;

	const textJudul = document.createElement('h3');
	textJudul.innerHTML = judul;

	const textPenulis = document.createElement('p');
	textPenulis.innerHTML = penulis;

	const textTahun = tahun;
	textTahun.innerHTML = tahun;

	const textContainer = document.createElement('div');
	textContainer.setAttribute('class', 'containerBuku');
	textContainer.append(textJudul, textPenulis, textTahun);

	const containerTodo = document.createElement('div');
	containerTodo.setAttribute('class', 'containerTodo');
	containerTodo.append(textContainer);
	containerTodo.setAttribute('id', `${id}`);

	const tombolAction = document.createElement('div');
	tombolAction.setAttribute('class', 'tombolAction');

	const tombolHapus = document.createElement('div');
	tombolHapus.innerHTML = 'Hapus';
	tombolHapus.setAttribute('class', 'hapusBuku');

	const containerAction = document.createElement('div');
	containerAction.setAttribute('class', 'action');
	containerAction.append(tombolAction, tombolHapus);

	containerTodo.append(containerAction);

	const getSectionCustomDialog = document.querySelector('.customDialog'),
	getActionCustomDialogYes = document.querySelector('.yes'),
	getActionCustomDialogNo = document.querySelector('.no');

	//Temukan todo index
	function findTodoIndex(todoIndex){
		for(const i in todos){
			if(todos[i].id === todoIndex) return i;
		}
		return -1;
	}

	//Menghapus todo
	function hapus(todoId){
		const target = findTodoIndex(todoId);
		if(target === -1) return;

		todos.splice(target, 1);
	}
	
	//Tombol hapus
	tombolHapus.addEventListener('click', function(){
		getSectionCustomDialog.removeAttribute('hidden');

		//Tombol yes
		getActionCustomDialogYes.addEventListener('click', function(){
			hapus(id);
			localStorage.setItem(storageKey, JSON.stringify(todos));
			location.reload(true);
		});

		//Tombol no
		getActionCustomDialogNo.addEventListener('click', function(){
			getSectionCustomDialog.setAttribute('hidden', '');
		});
	});

	if(isComplate){
		tombolAction.innerHTML = 'Belum selesai dibaca';

		tombolAction.addEventListener('click', function(){
			for(const data of todos){
				if(data.id == id){
					data.isComplate = false;
					localStorage.setItem(storageKey, JSON.stringify(todos));
					location.reload(true);
				}
			}
		});
	}else{
		tombolAction.innerHTML = 'Selesai dibaca';

		tombolAction.addEventListener('click', function(){
			for(const data of todos){
				if(data.id == id){
					data.isComplate = true;
					localStorage.setItem(storageKey, JSON.stringify(todos));
					location.reload(true);
				}
			}
		});
	}

	return containerTodo;
}