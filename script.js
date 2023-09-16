document.addEventListener('DOMContentLoaded', function () {
    const subscribeForm = document.getElementById('newsletterForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subscribeBtn = document.getElementById('subscribeBtn');
    
    const apiUrl = 'https://digitalmarketing-d5jppwmih-kelvin-ndoma.vercel.app'; // Update with your Vercel app URL
    
    subscribeForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get the input values
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
  
      if (!name || !email) {
        alert('Please fill in both name and email fields.');
        return;
      }
  
      // Prepare the data to be sent
      const data = {
        name,
        email,
        id: Math.floor(Math.random() * 1000) + 1, // Generate a random ID
      };
  
      // Send a POST request to the Vercel-hosted JSON data
      fetch(`${apiUrl}/subscribers`, { // Use the correct endpoint URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((responseData) => {
          alert(responseData.message);
          // Clear the form
          nameInput.value = '';
          emailInput.value = '';
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
          alert('Thank you subscribing.');
        });
    });
  });
  