
const data = [
  {
    id: "d1",
    name: "Administration",
    people: [
      { id: "e1", first: "Zoë", last: "Robins" },
      { id: "e2", first: "Madeleine", last: "Madden" }
    ]
  },
  {
    id: "d2",
    name: "Audit",
    people: [
      { id: "e3", first: "Josha", last: "Sadowski" },
      { id: "e4", first: "Kate", last: "Fleetwood" }
    ]
  },
  {
    id: "d3",
    name: "Banking Operations",
    people: [
      { id: "e5", first: "Priyanka", last: "Bose" },
      { id: "e6", first: "Hammed", last: "Animashaun" }
    ]
  },
  {
    id: "d4",
    name: "Communications",
    people: [
      { id: "e7", first: "Gil", last: "Cardinal" },
      { id: "e8", first: "Richard J.", last: "Lewis" }
    ]
  },
  {
    id: "d5",
    name: "Corporate Services",
    people: [
      { id: "e9", first: "Randy", last: "Bradshaw" },
      { id: "e10", first: "Tracey", last: "Cook" }
    ]
  },
  {
    id: "d6",
    name: "Facilities",
    people: [
      { id: "e11", first: "Dakota", last: "House" },
      { id: "e12", first: "Lori Lea", last: "Okemah" }
    ]
  },
  {
    id: "d7",
    name: "Financial Services",
    people: [
      { id: "e13", first: "Selina", last: "Hanusa" },
      { id: "e14", first: "Buffy", last: "Gaudry" }
    ]
  },
  {
    id: "d8",
    name: "Human Resources",
    people: [
      { id: "e15", first: "Jesse Ed", last: "Azure" },
      { id: "e16", first: "Stacy", last: "Da Silva" }
    ]
  },
  {
    id: "d9",
    name: "Information Technology",
    people: [
      { id: "e17", first: "Sandika", last: "Evergreen" },
      { id: "e18", first: "Graham", last: "Greene" }
    ]
  }
];


document.addEventListener("DOMContentLoaded", function () {
  showData();
  showYear();
});


function showData() {
  const main = document.getElementById("main-content");

  data.forEach(function (group) {

    const box = document.createElement("section");
    box.id = group.id;

    const title = document.createElement("h2");
    title.textContent = group.name;

    const list = document.createElement("ul");

    group.people.forEach(function (person) {
      const item = document.createElement("li");

      item.textContent = person.first + " " + person.last;
      item.setAttribute("data-id", person.id);

      list.appendChild(item);
    });

    box.appendChild(title);
    box.appendChild(list);
    main.appendChild(box);
  });
}


function showYear() {
  const footer = document.getElementById("footer");
  const year = new Date().getFullYear();

  footer.textContent = "Pixell River Financial " + year;
}