// var flowersName = ["Rose", "Tulip", "Sunflower", "African Violet", "Hibiscus", "Oxalis"];
// var price = [12, 6, 3, 5, 7, 10];
// var type = ["indoor", "outdoor"];
// var flowers = [];
function Flower(name, price, color, type) {
  this.Name = name;
  this.Price = price;
  this.Type = type;
  this.Color = color;
  this.Status = false;
}
Flower.prototype.fullInfo = function () {
  return "<ul>" + "<li>" + this.Name + "</li>" + "<li>$" + this.Price + "</li>" +"<li>Color: " + this.Color + "</li>" + "<li>Type: " + this.Type + "</li>" + "</ul>";
}
function clearField(){
  $("#flower_info").text("");
}
$(function () {
  $("form#add_flower").submit(function(event) {
    event.preventDefault();
    var name = $("#flower_name").val();
    var price = $("input#flower_price").val();
    var color = $("input#flower_color").val();
    var type = $("input:radio[name=flower_type]:checked").val();
    var newFlower = new Flower(name, price, color, type);
    console.log(newFlower);
    $("#flower1").append('<img class="output_info" src="'+'img/' + newFlower.Name + '.jpg"' + "/>");
    $(".output_info").last().click(function () {
      clearField();
      $("#flower_info").append(newFlower.fullInfo());
    });
    // $("#flower1").click(function(){
    //   clearField();
    //   console.log(newFlower);
    //   $("#hibiscus").show();
    //   $("#hibiscus").last().append(newFlower.fullInfo());
    // });
    // $("#flower2").click(function(){
    //   clearField();
    //   console.log(newFlower);
    //   $("#african-violet").show();
    //   $("#african-viloet").last().append(newFlower.fullInfo());
    // });

  });


});
