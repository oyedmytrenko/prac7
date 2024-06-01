// Обробка відправки контактної форми
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Дякуємо, " + name + "! Ваше повідомлення відправлено.");
        $('#contactModal').modal('hide');
        document.getElementById("contactForm").reset();
    } else {
        alert("Будь ласка, заповніть всі поля форми.");
    }
});