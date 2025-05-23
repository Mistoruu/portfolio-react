import emailjs from "@emailjs/browser";

function handleFormSubmit(event) {
    event.preventDefault();

    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            event.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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

export default handleFormSubmit;
