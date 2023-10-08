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


// Call the functions to populate the dropdowns
populatePageDropdown();

// Function to handle page selection change
function changePage() {
    const selectedValue = document.getElementById("page-select").value;
    if (selectedValue !== "") {
        // Redirect to the selected page
        window.location.href = selectedValue;
    }
}


// Attach the changePage and changeTheme functions to the select elements' onchange events
document.getElementById("page-select").addEventListener("change", changePage);