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
    new RegExp(/false/).test(word) ?
      color = colors["red"]:
    new RegExp(/some/).test(word) ?
      color = colors["orange"]:    
    new RegExp(/.*stock$/).test(word) ?
      color = colors["yellow"]:
    new RegExp(/true/).test(word) ?
      color = colors["green"]:
    new RegExp(/new|loc|old|all|why/).test(word) ?
      color = colors["aqua"]:
    new RegExp(/^[A-Z]\d{2}/).test(word) ?
      color = colors["purple"]:
      color = "#DDDDDD";
    
     post = `<span style="color:${color}">${word}</span>`
    array[index] = post
  });
  newtext = array.join(" ");
  $("body").html(newtext);
});