//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

function Address (type, street, city, state, zip) {
  this.type = type;
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
var contactIndex = 0;
var addressIndex = 0;

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    contacts.push(newContact);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#addAddress").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    //$(".address").text(newContact.address);
    contactIndex = contacts.indexOf(newContact);
    //console.log(contactIndex);
    });
  });
  $("#newAddress").submit(function() {
    event.preventDefault();
    var inputType = $("#addressType").val();
    var inputAddress = $("#street").val();
    var inputCity = $("#city").val();
    var inputState = $("#state").val();
    var inputZip = $("#zip").val();

    var newAddress = new Address (inputType, inputAddress, inputCity, inputState, inputZip);

    contacts[contactIndex].address.push(newAddress);
    addressIndex = contacts[contactIndex].address.indexOf(newAddress);
    console.log(newAddress.type);

    clearAddress();

    $("#address").append("<li>" + contacts[contactIndex].address[addressIndex].type + ": " + contacts[contactIndex].address[addressIndex].fullAddress() + "</li>");
    // $("#address").append("<li>" + contacts[index].address.fullAddress() + "</li>");

  })
});
