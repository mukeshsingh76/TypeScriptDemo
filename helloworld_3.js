function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = { firstName: "Mukesh", lastName: "Singh" };
document.getElementById("welcomemessage").innerHTML = greeter3(user3);
