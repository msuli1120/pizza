function Pizza (size,cheese,topping){
  this.size = size;
  this.cheese = cheese;
  this.topping = topping;
};

var cheeseInput = [];
var toppingsInput = [];

Pizza.prototype.subtotal = function () {
  var subtotal = this.size + this.cheese.length*3 + this.topping.length*1;
  return subtotal;
};

function Address(name, street, city, state, zipcode) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
};

function reset () {
  cheeseInput = [];
  toppingsInput = [];
  sizeInput = "";
 $("#size").val("0");
};

function uncheck () {
  $('input[type="checkbox"]').prop('checked', false);
  $("#size").val("8");
  $("button#placeOrder").hide();
};

$(function(){
  $("form#order").submit(function(event){
    event.preventDefault();

    var size = parseInt($("#size").val());

    $('input:checkbox[name="cheese"]:checked').each(function () {
      cheeseInput.push($(this).val());
    });

    $('input:checkbox[name="toppings"]:checked').each(function () {
      toppingsInput.push($(this).val());
    });

    var order = new Pizza (size, cheeseInput, toppingsInput);

    $("#orderDisplay").show();

    $("#sizeInput").text(order.size);
    $("#cheeseInput").text(order.cheese.join(", "));
    $("#toppingInput").text(order.topping.join(", "));
    $("#totalCost").text(order.subtotal());
    reset();
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

      if ((nameInput === "")||(streetInput=== "")||(cityInput=== "" )||(state=== "" )||(zc === "")){
          alert("Please complete the form!");
      } else {
        var user = new Address (nameInput, streetInput, cityInput, state, zc);

        $("#deliveryShow").append('<p>Hello, ' + user.name + '. Your order will be delivered at ' + user.street + ' ' + user.city + ' ' + user.zipcode + ', ' + user.state + '.');

        $("form#forDelivery").hide();
      };
    });
});
