// @ts-nocheck

/*
With thanks to:
https://stackoverflow.com/a/36648958 for validate()
https://stackoverflow.com/a/27446523 for jquery-slider-changing
Licensed under CC BY-SA 4.0
*/

function validate(id, _lower, _upper) {
  return document.getElementById(id).val;
}

document.getElementById("StandardBtn").click();
$("pressureSlider").slider("option", "data-slider-min", 0);

/*
After this, set:
Rocket Diameter (mm) to 70
Nozzle Diameter (mm) to 26
Total Volume (L) to 1.052
Water Amount (L) to 0.175
Empty Mass (g) to 58

Then SLIDE pressure to 0.8
*/
