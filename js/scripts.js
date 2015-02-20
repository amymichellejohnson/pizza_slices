var Pizza = {
  type: "",
  diameter: 0,
  slices: function() {
  return Math.round ((3.14 *(Math.pow(((this.diameter)/2), 2)))/14.13)
  },
  feed: function() {
    return Math.round (this.slices() /3);
  }

};

$(function() {
  $("form.diameter").submit(function(event){
    event.preventDefault();
    var diameter = parseInt($("input.diameter").val());
    var newPizza = Object.create(Pizza);
    newPizza.diameter = diameter;

    $("#diameter").text(diameter);
    $("#slices").text(newPizza.slices());
    $("#feed-adults").text(newPizza.feed());
    $(".slices").show();
    $("input.diameter").val("");
  });
  $("form.order-pizza").submit(function(event){
    event.preventDefault();

    var diameter = parseInt($("input.order-diameter").val());
    var orderPizza = Object.create(Pizza);
    orderPizza.diameter = diameter;
    orderPizza.type = $("input[name=pizza-kind]:checked").val();

    $(".order").text(orderPizza.type + " " + diameter);
    $(".thankyou").show();
    $("input.order-diameter").val("");
    $("input[name=pizza-kind]").prop('checked', false);
  });
});
