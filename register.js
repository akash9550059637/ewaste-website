document.querySelector('#register-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const contact = document.querySelector('#contact').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, contact, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert('Registration successful!');
    })
    .catch((error) => {
      console.error(error);
      alert('Registration failed.');
    });
});
