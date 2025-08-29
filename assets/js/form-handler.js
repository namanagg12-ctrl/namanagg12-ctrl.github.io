const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!/^[A-Za-z\s]+$/.test(name)) {
      alert('Please enter a valid name (letters only).');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
    if (message === '') {
      alert('Please enter a message.');
      return;
    }

    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        window.location.href = 'thanks.html';
      } else {
        alert('Submission failed. Please try again.');
      }
    }).catch(err => alert('Submission failed. Please try again.'));
  });
}