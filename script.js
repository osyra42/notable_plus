const colors = {
  "red": "#F72119",
  "orange": "#FF9E3D",
  "yellow": "#FFF01F",
  "green": "#1FFF0F",
  "aqua": "#23C1FF",
  "purple": "#B026FF"
};

$(document).ready(function() {
  let string = $("body").text();
  let array = string.split(" ");
  let post = "";
  let color = "";

  $.each(array, function(index,word) {
//set to red
    /^false$/.test(word) ?
      color = colors["red"]:
//set to orange
    /^some$/.test(word) ?
      color = colors["orange"]:
//set to yellow
    /.*stock$/.test(word) ?
      color = colors["yellow"]:
//set to green
    /^true$/.test(word) ?
      color = colors["green"]:
//set to aqua
     /^(new|loc|old|all|why)$/.test(word) ?
      color = colors["aqua"]:
//set to purple
    /^[A-Z]\d{2}/.test(word) ?
      color = colors["purple"]:
      color = "#DDDDDD";
    
     post = `<span style="color:${color}">${word}</span>`
    array[index] = post
  });
  newtext = array.join(" ");
  $("body").html(newtext);
});