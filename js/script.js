var section = document.querySelector(".brends");
var buttonViewBrends = section.querySelector(".brends__viewButton");

buttonViewBrends.addEventListener("click", function () {
  section.classList.toggle("brends--show");
  section.classList.toggle("brends--hide");

  var buttonShow = document.querySelector(".brends--show");
  var buttonHide = document.querySelector(".brends--hide");

  if (buttonHide) {
    buttonViewBrends.textContent = "Скрыть";
  }

  if (buttonShow) {
    buttonViewBrends.textContent = "Показать все";
  }
});
