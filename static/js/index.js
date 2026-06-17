document.addEventListener("DOMContentLoaded", function() {
  var burger = document.querySelector(".navbar-burger");
  var menu = document.querySelector(".navbar-menu");

  if (burger && menu) {
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }

  var longHorizonVideo = document.getElementById("long-horizon-video");
  var choices = document.querySelectorAll(".video-choice");

  choices.forEach(function(choice) {
    choice.addEventListener("click", function() {
      if (!longHorizonVideo) {
        return;
      }

      choices.forEach(function(item) {
        item.classList.remove("is-active");
      });

      choice.classList.add("is-active");

      var nextSrc = choice.getAttribute("data-video");
      var source = longHorizonVideo.querySelector("source");

      if (source && source.getAttribute("src") !== nextSrc) {
        source.setAttribute("src", nextSrc);
        longHorizonVideo.load();
        var playPromise = longHorizonVideo.play();

        if (playPromise !== undefined) {
          playPromise.catch(function() {});
        }
      }
    });
  });
});
