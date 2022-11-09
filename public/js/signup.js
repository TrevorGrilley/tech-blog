async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const twitter = document.querySelector('#twitter-register').value.trim();
    const github = document.querySelector('#github-register').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password,
            twiiter,
            github
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('winner winner');
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
        }
    }
  
  document.querySelector('.register-form').addEventListener('submit', registerFormHandler);
