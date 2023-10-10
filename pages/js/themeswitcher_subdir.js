

 // Function to populate the theme select dropdown
    async function populateThemeDropdown() {
      try {
        const themeSelect = document.getElementById("theme-select");
        const response = await fetch("../themes_list.txt");
        const data = await response.text();
        const themeFiles = data.split("\n");

    themeFiles.forEach((themeFileName) => {
          const trimmedFileName = themeFileName.trim();
          if (trimmedFileName !== "") {
            const option = new Option(trimmedFileName, `../themes/${trimmedFileName}`);
          themeSelect.appendChild(option);
      }
    });
  } catch (error) {
    console.error("Error fetching theme list:", error);
  }
}


    // Call the functions to populate the dropdowns
    populateThemeDropdown();



    // Function to handle theme selection change
    function changeTheme() {
        const selectedValue = document.getElementById("theme-select").value;
        if (selectedValue !== "") {
            // Change the theme by updating the stylesheet
            document.getElementById("theme-style").href = selectedValue;
        }
    }

    // Attach the changePage and changeTheme functions to the select elements' onchange events

    document.getElementById("theme-select").addEventListener("change", changeTheme);