function formTambahDaftarBuku(){
	const bTambahDaftarBuku = document.querySelector('div.tombol a:first-child');
	
	//Tombol Tambah daftar buku
	bTambahDaftarBuku.addEventListener('click', function(){
		const form = 
		`	<div class='close'>
				<div class='kiri'></div>
				<div class='kanan'></div>
			</div>
			<h1>Tambahkan Daftar Buku</h1>
			<form class='form'>
		      <label for="judul" class='judul'>Judul:</label>
		      <input type="text" id="judul">

		      <label for="penerbit">Penerbit:</label>
		      <input type="text" id="penerbit">

		      <label for="tahun">Tahun:</label>
		      <input type="number" id="tahun" >

		      <button>Tambah</button>
		    </form>
		`;
		const createElementSectionForm = document.createElement('section');
		const createElementDivForm = document.createElement('div.form');
		const getMain = document.querySelector('main');

		createElementSectionForm.appendChild(createElementDivForm);
		getMain.appendChild(createElementSectionForm);

		createElementSectionForm.setAttribute('class', 'sectionForm');
		createElementDivForm.setAttribute('class', 'container');

		createElementDivForm.innerHTML = form;

		const getButtonClos = querySelector('.close');
		getButtonClos.addEventListener('click', () => createElementSectionForm.setAttribute('hidden'))
	});
}

formTambahDaftarBuku();