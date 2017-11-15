$(document).ready(function () {
  console.log("Ready");
  $('#year').text(getCurrentYear());
});

function getCurrentYear() {
  return (new Date()).getFullYear();
}
