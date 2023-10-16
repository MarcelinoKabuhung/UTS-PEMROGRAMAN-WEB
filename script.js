const films = document.querySelectorAll('.film');

//Mengulangi setiap elemen film yang telah dipilih dan menetapkan event listener untuk setiap elemen tersebut.
films.forEach(film => {
    film.addEventListener('click', () => {
        const sinopsis = film.querySelector('.sinopsis');
        if (sinopsis.style.display == 'none' || sinopsis.style.display == '') {
            sinopsis.style.display = 'block';
        } else {
            sinopsis.style.display = 'none';
        }
    });
});

function changeColor() {
    var colorInput = document.getElementById("colorInput").value.toLowerCase();
    var colorTable = document.getElementById("colorTable").getElementsByTagName("td");

    for (var i = 0; i < colorTable.length; i++) {
        if (colorTable[i].textContent.toLowerCase() === colorInput) {
            colorTable[i].style.backgroundColor = colorInput;
        }
    }
}

function addColor() {
    var colorInput = document.getElementById("colorInput").value;
    var colorTable = document.getElementById("colorTable");
    // Menambahkan baris baru ke dalam tabel warna
    var newRow = colorTable.insertRow(colorTable.rows.length); //colorTable.rows.length digunakan untuk menentukan posisi baris baru.
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.style.backgroundColor = colorInput.toLowerCase();
    cell2.textContent = colorInput;
}

function addFooter() {
    var footer = document.querySelector("footer");
    footer.textContent = "Ini adalah footer.";
}
