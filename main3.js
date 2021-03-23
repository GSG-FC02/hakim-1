"use strict";

document.querySelector("#submit").addEventListener("click", function () {
  let radius = 0;
  radius = document.querySelector("#radius").value;
  let sphere_volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.querySelector("#volume").value = sphere_volume.toFixed(4);
});
