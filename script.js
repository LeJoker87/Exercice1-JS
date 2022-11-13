const reponse1 = prompt("Saisissez votre nom");
const reponse2 = prompt("Saisissez votre prénom");
const sexe = confirm("Etes vous un homme?");
if (sexe == true) 
{
    alert("Bonjour Monsieur " + reponse1 + " " + reponse2);
}
else {
    alert("Bonjour Madame " + reponse1 + " " + reponse2);
}