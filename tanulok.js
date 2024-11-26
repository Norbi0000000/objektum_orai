// 1. Feladat: Tanulók adatainak tárolása
function tanulokAdatai() {
    const tanulok = [];
    const hanyAdat = parseInt(prompt("Hány adatot szeretnél megadni?"), 10);

    for (let i = 0; i < hanyAdat; i++) {
        const nev = prompt("Név:");
        const email = prompt("E-mail:");
        tanulok.push({ nev, email });
    }

    const eredmenyDiv = document.getElementById("tanulokEredmeny");
    eredmenyDiv.innerHTML = "<h3>A tanulók adatai:</h3>";

    tanulok.forEach(tanulo => {
        const p = document.createElement("p");
        p.innerHTML = `Név: ${tanulo.nev}, <br> E-mail: ${tanulo.email}`;
        eredmenyDiv.appendChild(p);
    });
}

// 2. Feladat: Heti órarend megjelenítése
function hetiOrarend() {
    const orarend = [
        { nap: "Hétfő", tantargyak: ["Matematika", "Fizika", "Biológia"] },
        { nap: "Kedd", tantargyak: ["Irodalom", "Történelem", "Kémia"] },
        { nap: "Szerda", tantargyak: ["Angol", "Testnevelés", "Földrajz"] },
        { nap: "Csütörtök", tantargyak: ["Matematika", "Fizika", "Informatika"] },
        { nap: "Péntek", tantargyak: ["Zene", "Művészet", "Történelem"] }
    ];

    const orarendDiv = document.getElementById("orarendEredmeny");
    orarendDiv.innerHTML = "<h3>Heti órarend:</h3>";

    orarend.forEach(nap => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${nap.nap}:</strong> ${nap.tantargyak.join(", ")}`;
        orarendDiv.appendChild(p);
    });
}
