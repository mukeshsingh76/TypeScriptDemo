interface Person {
  firstName: string;
  lastName: string;
}

function greeter3(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = { firstName: "Mukesh", lastName: "Singh" };

document.getElementById("welcomemessage").innerHTML = greeter3(user3);
