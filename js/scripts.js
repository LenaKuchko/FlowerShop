// var flowersName = ["Rose", "Tulip", "Sunflower", "African Violet", "Hibiscus", "Oxalis"];
// var price = [12, 6, 3, 5, 7, 10];
// var type = ["indoor", "outdoor"];
var flowers = [];
function Flower(name, price, type) {
  this.Name = name;
  this.Price = price;
  this.Type = type;
  this.Status = false;

}
// function addAssortement(flowersName, price, type) {
//   for (var i = 0; i < 6; i++) {
//     if (i<3) {
//       var item = new Flower(flowersName[i], price[i], "indoor");
//     } else {
//       var item = new Flower(flowersName[i], price[i], "outdoor");
//     }
//   }
// }

$(function () {
  $("form#add_flower").submit(function(event) {
    event.preventDefault();
    var name = $("input#flower_name").val();
    var price = $("input#flower_price").val();
    var type = $("input:radio[name=flowerOption]:checked").val();
    var newFLower = new Flower(name, price, type)
  });
});
