fetch("data.json")
    .then((rep) => {
        return rep.json()
    })
    .then(donnee => {
        // donnee est un objet
        console.log(donnee.slogan)
        // donneee.produits est un tableau
        // je boule dessus et pour chaque produit :
        // jaffiche (afficher) => le produit
        donnee.produits.forEach(produit => {
            afficher(produit)
        });

        donnee.listeBeneficesClients.forEach(benefice => {
            afficherBenefice(benefice)
        });

        donnee.clients.forEach(temoignage => {
            afficherTemoignage(temoignage)
        });

    })


function afficher(produit) {
    // parametre produit : 1 seul produit 
    let titre = produit.titre; // Nom du produit
    let imageUrl = produit.imageUrl;// Lien URL de l'image de la recette
    let presentation = produit.presentation; // Présentation du produit

    console.log(produit)

    let template = `<div>
            <img src = ${imageUrl} alt="Praliné croustillant">
                <h3>${titre}</h3>
                <p>${presentation}</p>
        </div>`

    document.querySelector("#zoneproduit").innerHTML += template

}


function afficherBenefice(benefice) {


    let template = `
    <li>${benefice}</li>`

    document.querySelector("#listBene").innerHTML += template


}


function afficherTemoignage(clients) {
    let nom = clients.nom
    let typePrestation = clients.typePresentation
    let commentaire = clients.commentaire
    let note = clients.note


    let template = `
<li> ${nom}</li>
<li>${typePrestation} </li>
<li>${note}</li>
<li>${commentaire}</li>`
    document.querySelector("#zonetemoignage").innerHTML += template




    /*console.log(temoignage.nom)
    console.log(temoignage.commentaire)
    console.log(temoignage.typePrestation)
    console.log(temoignage.note)*/
}






