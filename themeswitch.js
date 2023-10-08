// Function to populate the theme select dropdown
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
                    option.value = "themes/" + trimmedFileName;
                    option.textContent = trimmedFileName;
                    option.style.cursor="pointer";
                    themeSelect.appendChild(option);
                }
            });
        })
        .catch(error => {
            console.error("Error fetching theme list:", error);
        });
}

populateThemeDropdown();
// Function to handle theme selection change
function changeTheme() {
    const selectedValue = document.getElementById("theme-select").value;
    if (selectedValue !== "") {
        // Change the theme by updating the stylesheet
        document.getElementById("theme-style").href = selectedValue;
    }
}

document.getElementById("theme-select").addEventListener("change", changeTheme);
