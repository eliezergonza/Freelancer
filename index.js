const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");
    const h1 = document.createElement("h1");
    h1.innerHTML = "FREELANCERS";
    root.appendChild(h1);

    let unorderedList = document.querySelector(".unordered-list");

    let userItems = ''
  
  for (user of users) {
    userItems += '<li>' + user.name + '</li>' 
    userItems += '<li>' + user.age + '</li>' 
    userItems += '<li>' + user.occupation + '</li>' + '<br>'
  
    unorderedList.innerHTML = userItems
}
}

//call the main function
main();