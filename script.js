// Fetch les données depuis le fichier data.json
fetch("data.json")
    .then((rep) => {
        // Convertit la réponse en JSON
        return rep.json();
    })
    .then(donnee => {
        // donnee est un objet contenant les données JSON
        console.log(donnee.slogan); // Affiche le slogan dans la console

        // donnee.produits est un tableau contenant les produits
        // Boucle sur chaque produit et affiche chaque produit
        donnee.produits.forEach(produit => {
            afficher(produit);
        });

        // Boucle sur chaque bénéfice client et affiche chaque bénéfice
        donnee.listeBeneficesClients.forEach(benefice => {
            afficherBenefice(benefice);
        });

        // Boucle sur chaque témoignage client et affiche chaque témoignage
        donnee.clients.forEach(temoignage => {
            afficherTemoignage(temoignage);
        });

        // Affiche le slogan de l'entreprise
        affichermonslogan(donnee.slogan);

        // Affiche le bouton
        affichermonbouton(donnee.bouton);

        // Affiche le nom de l'entreprise
        affichermonentreprise(donnee.nomEntreprise);
    });

// Fonction pour afficher un produit
function afficher(produit) {
    // produit est un objet représentant un seul produit
    let titre = produit.titre; // Nom du produit
    let imageUrl = produit.imageUrl; // Lien URL de l'image du produit
    let presentation = produit.presentation; // Présentation du produit

    console.log(produit); // Affiche le produit dans la console

    // Crée un template HTML pour le produit
    let template = `<div class="large20 small100">
            <img src="${imageUrl}" alt="Praliné croustillant">
            <h3>${titre}</h3>
            <p>${presentation}</p>
        </div>`;

    // Ajoute le template HTML à la zone des produits
    document.querySelector("#zoneproduit").innerHTML += template;
}

// Fonction pour afficher un bénéfice client
function afficherBenefice(benefice) {
    // Crée un template HTML pour le bénéfice
    let template = `<li>${benefice}</li>`;

    // Ajoute le template HTML à la liste des bénéfices
    document.querySelector("#listBene").innerHTML += template;
}

// Fonction pour afficher un témoignage client
function afficherTemoignage(temoignage) {
    let nom = temoignage.nom; // Nom du client
    let typePrestation = temoignage.typePrestation; // Type de prestation
    let commentaire = temoignage.commentaire; // Commentaire du client
    let note = temoignage.note; // Note du client

    // Crée un template HTML pour le témoignage
    let template = `
    <div class="card-body">
        <p class="card-title">${nom}</p>
         <div class="card-text">
        <p>${typePrestation}</p>
        <p>${commentaire}</p>
        <p>${etoile(note)}</p>
        </div>
    </div>`

    // Ajoute le template HTML à la zone des témoignages
    document.querySelector("#zonetemoignage").innerHTML += template;
}

// Fonction pour afficher le nom de l'entreprise
function affichermonentreprise(nomEntreprise) {
    // Ajoute le nom de l'entreprise à la zone du nom de l'entreprise
    document.querySelector("#zonenomentreprise").innerHTML = nomEntreprise;
}

// Fonction pour afficher le slogan de l'entreprise
function affichermonslogan(slogan) {
    // Ajoute le slogan à la zone du slogan
    document.querySelector("#zoneslogan").innerHTML = slogan;
}

// Fonction pour afficher le bouton
function affichermonbouton(bouton) {
    // Ajoute le bouton à la zone du bouton
    document.querySelector("#zonebouton").innerHTML = bouton;
}


function etoile(note) {
    return "★".repeat(note) + "☆".repeat(5-note)
}