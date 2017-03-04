function Pizza (size){
  this.size = size;
  this.topping = [];
  this.cheese = [];
};

Pizza.prototype.sizePrice = function (){
  var sp = eval($("#size").val());
  return sp;
};

var order = new Pizza();

function Address(name, street, city, state, zipcode) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
};

function uncheck () {
  $('input[type="checkbox"]').prop('checked', false);
  $("#size").val("8");
  $("button#placeOrder").hide();
};

$(function(){
  $("form#order").submit(function(event){
    $("#orderDisplay").show();
    event.preventDefault();
    order.sizePrice();

    $('input:checkbox[name="cheese"]:checked').each(function () {
      order.cheese.push($(this).val());
    });

    $('input:checkbox[name="toppings"]:checked').each(function () {
      order.topping.push($(this).val());
    });

    var total = order.sizePrice() + order.cheese.length*3 + order.topping.length*1;

    $("#sizeInput").text(order.sizePrice());
    $("#cheeseInput").text(order.cheese);
    $("#toppingInput").text(order.topping);
    $("#totalCost").text(total);
    $("#confirm").show();
  });

  $("div#confirm").click(function(){
    uncheck();
    $("#delivery").show();
  });

  $("span#option").click(function(){
    var value = $("input:radio[name=delivery]:checked").val();
    if (value==="1") {
      $("#forDelivery").show();
    } else {
      $("#deliveryShow").append('Your order will be ready in 30 minutes.');
    };
  });

  $("form#forDelivery").submit(function(event){
      event.preventDefault();

      var nameInput = $("#fullName").val();
      var streetInput = $("#street").val();
      var cityInput = $("#city").val();
      var state = $("#state").val();
      var zc = $("#zipCode").val();

      var user = new Address (nameInput, streetInput, cityInput, state, zc);

      $("#deliveryShow").append('<p>Hello, ' + user.name + '. Your order will be delivered at ' + user.street + ' ' + user.city + ' ' + user.zipcode + ', ' + user.state + '.');

      $("form#forDelivery").hide();
    });
});
