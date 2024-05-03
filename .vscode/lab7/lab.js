// index.js - Lab 7 Functions
// Author: Caitlin Papp
// Date: April 28, 2024
// Art 101-01 Spring Quarter 2024
<script>
        // Function to sort the letters of the user's name
        function sortUserName() {
            // Prompt user for their name and store it in a variable
            var userName = window.prompt("Please enter your name:");
            
            // Convert the user's name into an array of characters
            var nameArray = userName.split('');
            
            // Sort the array of characters
            nameArray.sort();
            
            // Convert the sorted array back to a string
            var sortedName = nameArray.join('');
            
            // Return the sorted name
            return sortedName;
        }
        
        // Call the function and output the results
        var sortedName = sortUserName();
        document.writeln("Your sorted name: " + sortedName);
    </script>