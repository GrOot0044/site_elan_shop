document.addEventListener("DOMContentLoaded", function() {
    // Sélection des boutons dans la navigation
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(button => {
        // Ajout d'un événement de clic sur chaque bouton
        button.addEventListener("click", function() {
            alert("Button clicked: " + this.innerText); // Afficher une alerte avec le texte du bouton
        });
    });

    // Sélection du bouton d'inscription
    const inscriptionButton = document.querySelector(".inscription");
    inscriptionButton.addEventListener("click", function() {
        // Afficher une alerte de bienvenue pour l'inscription
        alert("Bienvenue! Vous pouvez maintenant accéder aux livres des produits.");
    });

    // Fonction pour afficher une fenêtre surgissante après 5 secondes
    setTimeout(() => {
        const popup = document.createElement("div");
        // Style de la fenêtre surgissante
        popup.style.position = "fixed"; // Position fixe
        popup.style.bottom = "10px"; // Positionner à 10px du bas
        popup.style.right = "10px"; // Positionner à 10px de la droite
        popup.style.backgroundColor = "#fff"; // Couleur de fond blanc
        popup.style.border = "1px solid #ccc"; // Bordure grise
        popup.style.padding = "10px"; // Padding de 10px
        popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)"; // Ombre autour de la popup

        // Contenu HTML de la popup
        popup.innerHTML = '<img src="chopper_couverture_droit.jpg" alt="Mascotte" style="width: 50px; height: auto;"> Hey, nooooon, tu nous quittes déjà!'; 

        // Ajouter la popup au body
        document.body.appendChild(popup);

        // Fermer la popup en cliquant dessus
        popup.addEventListener("click", () => {
            document.body.removeChild(popup); // Supprimer la popup
        });
    }, 5000); // Délai de 5 secondes avant d'afficher la popup
});
