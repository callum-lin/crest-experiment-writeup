// @ts-nocheck

function presetValues() {
  $("#rocketDiameter").val(70);
  $("#nozzleDiameter").val(26);
  $("#volume").val(1.052);
  $("#mass").val(58);
  $("#mass").val(58);
  $("#drag").val(0.5);
  $("#waterAmount").val(0.75);
  $("#pressure").val(1);

  try {
    $("#rocketDiameter").trigger("input").trigger("change");
  } catch (error) {}
  try {
    $("#nozzleDiameter").trigger("input").trigger("change");
  } catch (error) {}
  try {
    $("#volume").trigger("input").trigger("change");
  } catch (error) {}
  try {
    $("#mass").trigger("input").trigger("change");
  } catch (error) {}
  try {
    $("#mass").trigger("input").trigger("change");
  } catch (error) {}
  try {
    $("#drag").trigger("input").trigger("change");
  } catch (error) {}
  try {
    $("#waterAmount").trigger("input").trigger("change");
  } catch (error) {}
  try {
    $("#pressure").trigger("input").trigger("change");
  } catch (error) {}
}

function simulate() {
  let times = [];
  for (let i = 0.1; i <= 1; i += 0.01) {
    try {
      $("#waterAmount").val(i).trigger("input").trigger("change");
      $("#runSimBtn").trigger("click");
      let time = document.getElementById("crashdownTime").innerText;
      time = Number(time.slice(0, -2));
      times.push(time);
    } catch (error) {
      times.push(NaN);
    }
  }
  return times;
}

presetValues();
console.log(simulate().toString());
