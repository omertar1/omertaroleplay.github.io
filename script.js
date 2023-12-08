function submitForm() {
          // Get form data
          var username = document.getElementById('username').value;
          var email = document.getElementById('email').value;
          var characterName = document.getElementById('characterName').value;
          var reason = document.getElementById('reason').value;
      
          // Create a result message
          var resultMessage = "Whitelist Application Result:" +
                              "\nUsername: " + username +
                              "\nEmail: " + email +
                              "\nCharacter Name: " + characterName +
                              "\nReason: " + reason;
      
          // Display the result on the page
          var resultContainer = document.getElementById('result');
          resultContainer.innerHTML = "<h2>Result</h2><p>" + resultMessage + "</p>";
      }
      