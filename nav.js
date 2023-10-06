function changePage() {
  var selectBox = document.getElementById("page-select");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue !== "") {
    window.location.href = selectedValue;
  }
}
