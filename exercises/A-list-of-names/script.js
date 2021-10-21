function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    let name = document.createElement('h1');
    let job = document.createElement('h2');

    name.innerText = person.name;
    job.innerText = person.job;

    content.append(name, job);
  }


}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
