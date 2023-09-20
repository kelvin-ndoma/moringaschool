document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get user input values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      // Create an object with the user's data
      const subscriberData = { name, email };

      // Send a POST request to your JSON Server API
      fetch("https://deploy-json-server-on-vercel.vercel.app/api/subscribers", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(subscriberData),
      })
          .then((response) => {
              if (response.ok) {
                  alert("Subscription successful!"); // Show a success message
                  form.reset(); // Clear the form fields
              } else {
                  alert("Subscription successful"); // Show an error message
              }
          })
          .catch((error) => {
              console.error("Error:", error);
              alert("An error occurred. Please try again later.");
          });
  });
});
