import emailjs from "@emailjs/browser";

function handleFormSubmit(event) {
    event.preventDefault();

    emailjs
        .sendForm(
            "TON_SERVICE_ID",
            "TON_TEMPLATE_ID",
            event.target,
            "TA_CLE_PUBLIQUE"
        )
        .then(
            (result) => {
                console.log("Email envoyé :", result.text);
                alert("Message envoyé avec succès !");
                event.target.reset();
            },
            (error) => {
                console.error("Erreur :", error.text);
                alert("Une erreur s'est produite. Réessaie.");
            }
        );
}
