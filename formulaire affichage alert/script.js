document.getElementById("formulaire").addEventListener("submit", function(event)
{
    event.preventDefault();

    let name = document.getElementById("nom").value;
    let firstName = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let numero = document.getElementById("numero").value;


    // Affichage popUP
    alert(`Nom : ${name} \nPrenom : ${firstName} \nEmail : ${email} \nAdresse : ${adresse} \nNumero : ${numero}`)


    //Affichage dans le console
    console.log("Nom :", name);
    console.log("Prenom :", firstName);
    console.log("Email :", email);
    console.log("Adresse :", adresse);
    console.log("Numero :", numero);

    

});