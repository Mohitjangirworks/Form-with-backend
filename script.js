document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#contact-form')
    .then(function(response) {
      alert('Message sent!');
    }, function(error) {
      alert('FAILED... ' + JSON.stringify(error));
    });
});
