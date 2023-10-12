
    // Function to populate the page select dropdown
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
                        option.style.cursor="pointer";
                        pageSelect.appendChild(option);
                       
                    }
                });
            })
            .catch(error => {
                console.error("Error fetching page list:", error);
            });
    }


    // Function to populate the theme select dropdown
    async function populateThemeDropdown() {
      try {
        const themeSelect = document.getElementById("theme-select");
        const response = await fetch("themes_list.txt");
        const data = await response.text();
        const themeFiles = data.split("\n");

    themeFiles.forEach((themeFileName) => {
          const trimmedFileName = themeFileName.trim();
          if (trimmedFileName !== "") {
            const option = new Option(trimmedFileName, `themes/${trimmedFileName}`);
          themeSelect.appendChild(option);
      }
    });
  } catch (error) {
    console.error("Error fetching theme list:", error);
  }
}


    // Call the functions to populate the dropdowns
    populatePageDropdown();
    populateThemeDropdown();

    // Function to handle page selection change
    function changePage() {
        const selectedValue = document.getElementById("page-select").value;
        if (selectedValue !== "") {
            // Redirect to the selected page
            window.location.href = selectedValue;
        }
    }

    // Function to handle theme selection change
    function changeTheme() {
        const selectedValue = document.getElementById("theme-select").value;
        if (selectedValue !== "") {
            // Change the theme by updating the stylesheet
            document.getElementById("theme-style").href = selectedValue;
        }
    }

    // Attach the changePage and changeTheme functions to the select elements' onchange events
    document.getElementById("page-select").addEventListener("change", changePage);
    document.getElementById("theme-select").addEventListener("change", changeTheme);
