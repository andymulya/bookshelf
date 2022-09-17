function formTambahDaftarBuku(){
	const bTambahDaftarBuku = document.querySelector('div.tombol a:first-child');
	bTambahDaftarBuku.addEventListener('click', function(){
		const form = 
		`
			<h1>Tambahkan Daftar Buku</h1>
			<form class='form'>
		      <label for="judul">Judul:</label>
		      <input type="text" id="judul">

		      <label for="penerbit">Penerbit:</label>
		      <input type="text" id="penerbit">

		      <label for="tahun">Tahun:</label>
		      <input type="number" id="tahun">

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
	});
}

formTambahDaftarBuku();