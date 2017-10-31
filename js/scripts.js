//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

function Address (street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function () {
  return this.street + " " + this.city + ", " + this.state + " " + this.zip;
}

var clearAddress = function() {
  $("#street").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zip").val("");
}

// user interface logic
$(document).ready(function() {

var contacts = [];
var index = 0;

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    contacts.push(newContact);
    console.log(contacts);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    index = contacts.indexOf(newContact);
    });
  });
  $("#newAddress").submit(function() {
    event.preventDefault();
    var inputAddress = $("#street").val();
    var inputCity = $("#city").val();
    var inputState = $("#state").val();
    var inputZip = $("#zip").val();

    var newAddress = new Address (inputAddress, inputCity, inputState, inputZip);
    contacts[index].address.push(newAddress);
    clearAddress();
    $(".address").text(contacts[index].address);

    $("#address").append("<li>" + newAddress.fullAddress() + "</li>");
  })
});
