document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('yooGijwizYzmlHs7a', 'template_x6obkjm', '#contact-form')
    .then(function(response) {
      alert('Message sent!');
    }, function(error) {
      alert('FAILED... ' + JSON.stringify(error));
    });
});
