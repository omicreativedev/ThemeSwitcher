function populatePageDropdown() {
    const pageSelect = document.getElementById("page-select");
    fetch("pages_list.txt")
        .then(response => response.text())
        .then(data => {
            const pageFiles = data.split("\n");
            pageFiles.forEach(pageFileName => {
                // Trim the page file name to remove leading/trailing whitespace
                const trimmedFileName = pageFileName.trim();
                if (trimmedFileName !== "") {
                    const option = document.createElement("option");
                    option.value = "pages/" + trimmedFileName;
                    option.textContent = trimmedFileName;
                    pageSelect.appendChild(option);
                }
            });
        })
        .catch(error => {
            console.error("Error fetching page list:", error);
        });
}

function populateThemeDropdown() {
    const themeSelect = document.getElementById("theme-select");
    fetch("themes_list.txt")
        .then(response => response.text())
        .then(data => {
            const themeFiles = data.split("\n");
            themeFiles.forEach(themeFileName => {
                // Trim the theme file name to remove leading/trailing whitespace
                const trimmedFileName = themeFileName.trim();
                if (trimmedFileName !== "") {
                    const option = document.createElement("option");
                    option.value = "../themes/" + trimmedFileName;
                    option.textContent = trimmedFileName;
                    themeSelect.appendChild(option);
                }
            });
        })
        .catch(error => {
            console.error("Error fetching theme list:", error);
        });
}


    // Call the functions to populate the dropdowns
    populateThemeDropdown();
    populatePageDropdown();


    // Function to handle theme selection change
    function changeTheme() {
        const selectedValue = document.getElementById("theme-select").value;
        if (selectedValue !== "") {
            // Change the theme by updating the stylesheet
            document.getElementById("theme-style").href = selectedValue;
        }
    }
    function changePage() {
        const selectedValue = document.getElementById("page-select").value;
        if (selectedValue !== "") {
            // Change the theme by updating the stylesheet
            window.location.href = selectedValue;
        }
    }

    // Attach the changePage and changeTheme functions to the select elements' onchange events
  
    document.getElementById("theme-select").addEventListener("change", changeTheme);
    document.getElementById("page-select").addEventListener("change", changePage);