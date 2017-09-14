var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = "<p>Hello,<p>My name is " + person.name + ". </p>";
message += "<p>I am " + person.age + " and I am from  " + person.country + ". <p/>";
person.name = "Cat Perry";
message += "<p> But I wish my name were " + person.name + ". </p>";
person.age = 36;
message += "<p> My age is now " + person.age + " to be more like " + person.name + ". </p>";
message += "<p> I have " + person.skills.length + " skills: ";
message += person.skills.join(", ") + ".</p>";
print(message);