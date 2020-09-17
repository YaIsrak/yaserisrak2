//Nav bar
function myFunction(a) {
  a.classList.toggle("change");
}
function btnFunction(x) {
  x.classList.toggle("changed");
}

//Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".for-about-img"), {
  max: 25,
  speed: 400,
});

/* curator-feed-default-feed-layout */
(function () {
  var i,
    e,
    d = document,
    s = "script";
  i = d.createElement("script");
  i.async = 1;
  i.src =
    "https://cdn.curator.io/published/08136742-5e3e-4aa0-9452-23d2458c52ec.js";
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
})();

//
(function () {
  var i,
    e,
    d = document,
    s = "script";
  i = d.createElement("script");
  i.async = 1;
  i.src =
    "https://cdn.curator.io/published/a13d1e80-98cd-48de-a376-f97a16267f91.js";
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
})();

function trad() {
  document.getElementById("trad").style.display = "inline-block";
  document.getElementById("digital").style.display = "none";
  document.getElementById("port").style.display = "none";
}
function digital() {
  document.getElementById("trad").style.display = "none";
  document.getElementById("digital").style.display = "inline-block";
  document.getElementById("port").style.display = "none";
}
function port() {
  document.getElementById("trad").style.display = "none";
  document.getElementById("digital").style.display = "none";
  document.getElementById("port").style.display = "inline-block";
}
