        function changeTheme() {
            var select = document.getElementById("theme-select");
            var selectedTheme = select.value;

            // Remove the existing stylesheet
            var existingLink = document.getElementById("theme-css");
            existingLink.parentNode.removeChild(existingLink);

            // Create a new link element for the selected theme
            var newLink = document.createElement("link");
            newLink.id = "theme-css";
            newLink.rel = "stylesheet";
            newLink.href = selectedTheme;

            // Append the new link element to the head
            document.head.appendChild(newLink);
        }