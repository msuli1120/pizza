function Pizza (size){
  this.size = size;
  this.topping = [];
  this.cheese = [];
};

Pizza.prototype.sizePrice = function (){
  var sp = eval($("#size").val());
  return sp;
};

Pizza.prototype.cost = function () {
  var total = this.sizePrice + (this.topping.length*1) + (this.cheese.length*3);
  return total;
};

var order = new Pizza();

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    order.sizePrice();
    console.log(order.sizePrice());

    $('input:checkbox[name="cheese"]:checked').each(function () {
      order.cheese.push($(this).val());
      console.log(order.cheese);
    });

    $('input:checkbox[name="toppings"]:checked').each(function () {
      order.topping.push($(this).val());
      console.log(order.topping);
    });

    $("#sizeInput").text(order.sizePrice());
    $("#cheeseInput").text(order.cheese);
    $("#toppingInput").text(order.topping);
    $("#totalCost").text(order.cost());

  });
});
