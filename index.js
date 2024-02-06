$(document).ready(function () {
  // Full list of dishes
  var fullDishList = [
    "Spaghetti",
    "Pizza",
    "Salad",
    "Chicken",
    "Pasta",
    "Sandwich",
    // Add more dishes as needed
  ];

  // Function to populate options for a given day
  function populateOptions(day) {
    var selectElement = $("#" + day);
    selectElement.empty(); // Clear existing options

    // Add options based on the full dish list
    fullDishList.forEach(function (dish) {
      var optionElement = $("<option>").text(dish).attr("value", dish);
      selectElement.append(optionElement);
    });
  }

  // Populate options for each day
  populateOptions("monday");
  populateOptions("tuesday");
  populateOptions("wednesday");
  populateOptions("thursday");
  populateOptions("friday");
  populateOptions("saturday");
  populateOptions("sunday");

  $("#selectedDishesDisplay").hide();

  $("form").submit(function (event) {
    event.preventDefault();

    // Collect selected dishes
    var selectedDishes = {
      monday: $("#monday").val(),
      tuesday: $("#tuesday").val(),
      wednesday: $("#wednesday").val(),
      thursday: $("#thursday").val(),
      friday: $("#friday").val(),
      saturday: $("#saturday").val(),
      sunday: $("#sunday").val(),
    };

    // Display selected dishes (optional)
    displaySelectedDishes(selectedDishes);
  });

  function displaySelectedDishes(dishes) {
    var displaySection = $("#selectedDishesDisplay");
    displaySection.empty();

    Object.keys(dishes).forEach(function (day) {
      var dishText =
        day.charAt(0).toUpperCase() + day.slice(1) + ": " + dishes[day];
      var dishParagraph = $("<p>").text(dishText);
      displaySection.append(dishParagraph);
    });

    displaySection.show();
  }
});
