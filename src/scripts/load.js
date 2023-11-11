window.addEventListener("load", init);
function init() {
  var effectList = [];
  var elementList = document.querySelectorAll(".my-effect");

  for (var i = 0; i < elementList.length; i++) {
    var element = elementList[i];
    element.dataset.index = i;

    effectList[i] = new ShuffleText(element);

    element.addEventListener("mouseenter", function () {
      effectList[+this.dataset.index].start();
    });

    // element.addEventListener("mouseleave", function () {
    //   effectList[+this.dataset.index].start();
    // });
    effectList[i].start();
  }
}