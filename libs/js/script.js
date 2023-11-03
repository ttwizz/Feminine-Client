//document.querySelector(".modal-fade").addEventListener("click", () => {
//  document.querySelector(".modal").style.display = "none";
//});
//function openModal() {
//  document.querySelector(".modal").style.display = "flex";
//}
function downloadInstaller() {
	window.open("https://bit.ly/FeminineClient");
}
var anchors = [];
var currentAnchor = 0;
var isAnimating = false;

$(function () {
  function updateAnchors() {
    anchors = [];
    $(".anchor").each(function (i, element) {
      anchors.push($(element).offset().top);
    });
  }

  $("body").on("mousewheel", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (isAnimating) {
      return false;
    }
    isAnimating = true;
    // Increase or reset current anchor
    if (e.originalEvent.wheelDelta >= 0) {
      currentAnchor--;
    } else {
      currentAnchor++;
    }
    if (currentAnchor > anchors.length - 1 || currentAnchor < 0) {
      currentAnchor = 0;
    }
    isAnimating = true;
    $("html, body").animate(
      {
        scrollTop: parseInt(anchors[currentAnchor]),
      },
      500,
      "swing",
      function () {
        isAnimating = false;
      }
    );
  });

  updateAnchors();
});