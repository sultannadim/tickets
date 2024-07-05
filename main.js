document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  M.Datepicker.init(elems, { format: "yyyy-mm-dd" });

  var selectElems = document.querySelectorAll("select");
  M.FormSelect.init(selectElems);

  // Populate the people dropdown
  const peopleSelect = document.getElementById("people");
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    peopleSelect.appendChild(option);
  }
  M.FormSelect.init(peopleSelect);
});

const cities = [
  "Addis Ababa",
  "Adama",
  "Hawassa",
  "Dire Dawa",
  "Bahir Dar",
  "Gondar",
  "Mekelle",
  "Harar",
  "Jimma",
  "Debre Berhan",
  "Awasa",
  "Bishoftu",
  "Axum",
  "Sodo",
  "Shashamane",
];

const attractions = {
  "Addis Ababa": ["National Museum", "Holy Trinity Cathedral", "Mount Entoto"],
  Adama: ["Bishoftu Crater Lakes", "Kuriftu Resort"],
  Hawassa: ["Lake Hawassa", "Amora Gedel Park"],
  "Dire Dawa": ["Harar Jugol", "Dire Dawa Railway Station"],
  "Bahir Dar": ["Lake Tana", "Blue Nile Falls"],
  Gondar: ["Fasil Ghebbi", "Debre Berhan Selassie Church"],
  Mekelle: ["Martyrs' Memorial", "Atse Yohannes IV Palace"],
  Harar: ["Hyena Feeding", "Harar Jugol"],
  Jimma: ["Jimma Museum", "Aba Jifar Palace"],
  "Debre Berhan": [
    "Debre Berhan Selassie Church",
    "Debre Berhan Selassie Monastery",
  ],
  Awasa: ["Lake Awasa", "Amora Gedel Park"],
  Bishoftu: ["Bishoftu Crater Lakes", "Kuriftu Resort"],
  Axum: ["Church of St. Mary of Zion", "Northern Stelae Field"],
  Sodo: ["Lake Abaya", "Sodo Market"],
  Shashamane: ["Rastafarian Community", "Wondo Genet"],
};

let bookingDetails = {};

function handleInputChange(e, suggestionsId) {
  const value = e.target.value;
  const suggestionsElem = document.getElementById(suggestionsId);
  suggestionsElem.innerHTML = "";
  if (value.length > 0) {
    const filteredSuggestions = cities.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    filteredSuggestions.forEach((suggestion) => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", () =>
        handleSuggestionClick(e.target, suggestionsElem, suggestion)
      );
      suggestionsElem.appendChild(li);
    });
  }
}

function handleSuggestionClick(inputElem, suggestionsElem, suggestion) {
  inputElem.value = suggestion;
  suggestionsElem.innerHTML = "";
  if (inputElem.id === "destination") {
    showAttractions();
  }
}

function showAttractions() {
  const destination = document.getElementById("destination").value;
  const attractionsList = document.getElementById("attractionsList");
  const attractionsDiv = document.getElementById("attractions");
  if (attractions[destination]) {
    attractionsList.innerHTML = "";
    attractions[destination].forEach((attraction) => {
      const li = document.createElement("li");
      li.textContent = attraction;
      attractionsList.appendChild(li);
    });
    attractionsDiv.classList.remove("hidden");
  } else {
    attractionsDiv.classList.add("hidden");
  }
}

document
  .getElementById("departure")
  .addEventListener("input", (e) =>
    handleInputChange(e, "departureSuggestions")
  );
document
  .getElementById("destination")
  .addEventListener("input", (e) =>
    handleInputChange(e, "destinationSuggestions")
  );

function searchBuses() {
  const departure = document.getElementById("departure").value;
  const destination = document.getElementById("destination").value;

  // Mock data for demonstration
  const busServices = [
    {
      name: "Selam Bus",
      price: 100,
      details: "Comfortable seats, WiFi",
      image: "images/bus-1.jpg",
    },
    {
      name: "Sky Bus",
      price: 90,
      details: "Air conditioning, Snacks",
      image: "images/bus-2.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
    {
      name: "Golden Bus",
      price: 110,
      details: "Luxury seats, Entertainment",
      image: "images/bus-3.jpg",
    },
  ];

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "<h5>Available Buses</h5>";

  busServices.forEach((service) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div class="card-image">
                <img src="${service.image}" alt="${
      service.name
    }" class="bus-image">
            </div>
            <div class="card-content">
                <span class="card-title">${service.name}</span>
                <p>Price: $${service.price}</p>
                <p>Details: ${service.details}</p>
            </div>
            <div class="card-action">
                <button class="btn" onclick='bookTicket(${JSON.stringify(
                  service
                )})'>Book Ticket</button>
            </div>
        `;
    resultsDiv.appendChild(card);
  });
}

function bookTicket(service) {
  bookingDetails.service = service;
  showPage("calendarPage");
}

function generatePassengerFields() {
  const people = document.getElementById("people").value;
  const passengerFieldsDiv = document.getElementById("passengerFields");
  passengerFieldsDiv.innerHTML = "";
  for (let i = 1; i <= people; i++) {
    const firstNameField = document.createElement("div");
    firstNameField.classList.add("input-field", "col", "s12", "m6");
    firstNameField.innerHTML = `
            <input id="firstName${i}" type="text">
            <label for="firstName${i}">First Name ${i}</label>
        `;
    const lastNameField = document.createElement("div");
    lastNameField.classList.add("input-field", "col", "s12", "m6");
    lastNameField.innerHTML = `
            <input id="lastName${i}" type="text">
            <label for="lastName${i}">Last Name ${i}</label>
        `;
    passengerFieldsDiv.appendChild(firstNameField);
    passengerFieldsDiv.appendChild(lastNameField);
  }
}

function confirmTrip() {
  const departure = document.getElementById("departure").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;
  bookingDetails.departure = departure;
  bookingDetails.destination = destination;
  bookingDetails.date = date;
  bookingDetails.people = people;

  const passengerDetails = [];
  for (let i = 1; i <= people; i++) {
    const firstName = document.getElementById(`firstName${i}`).value;
    const lastName = document.getElementById(`lastName${i}`).value;
    if (!firstName || !lastName) {
      alert("Please fill in all passenger details.");
      return;
    }
    passengerDetails.push({ firstName, lastName });
  }
  bookingDetails.passengers = passengerDetails;

  const confirmationNumber = generateConfirmationNumber();
  bookingDetails.confirmationNumber = confirmationNumber;

  showPage("confirmPage");

  document.getElementById("serviceName").textContent =
    bookingDetails.service.name;
  document.getElementById("servicePrice").textContent =
    bookingDetails.service.price;
  document.getElementById("serviceDetails").textContent =
    bookingDetails.service.details;
  document.getElementById("tripDeparture").textContent =
    bookingDetails.departure;
  document.getElementById("tripDestination").textContent =
    bookingDetails.destination;
  document.getElementById("tripDate").textContent = bookingDetails.date;
  document.getElementById("tripPeople").textContent = bookingDetails.people;
  document.getElementById("confirmationNumber").textContent =
    bookingDetails.confirmationNumber;

  const passengerDetailsDiv = document.getElementById("passengerDetails");
  passengerDetailsDiv.innerHTML = "";
  bookingDetails.passengers.forEach((passenger, index) => {
    const passengerDiv = document.createElement("div");
    passengerDiv.innerHTML = `<p>Passenger ${index + 1}: ${
      passenger.firstName
    } ${passenger.lastName}</p>`;
    passengerDetailsDiv.appendChild(passengerDiv);
  });
}

function showPaymentDetails() {
  showPage("paymentPage");
}

function confirmPayment() {
  const paymentConfirmation = document.getElementById(
    "paymentConfirmation"
  ).value;
  if (!paymentConfirmation) {
    alert("Please enter the payment confirmation number.");
    return;
  }
  bookingDetails.paymentConfirmation = paymentConfirmation;

  document.getElementById("confirmationCodeReceipt").textContent =
    bookingDetails.confirmationNumber;
  document.getElementById("serviceNameReceipt").textContent =
    bookingDetails.service.name;
  document.getElementById("servicePriceReceipt").textContent =
    bookingDetails.service.price;
  document.getElementById("serviceDetailsReceipt").textContent =
    bookingDetails.service.details;
  document.getElementById("tripDepartureReceipt").textContent =
    bookingDetails.departure;
  document.getElementById("tripDestinationReceipt").textContent =
    bookingDetails.destination;
  document.getElementById("tripDateReceipt").textContent = bookingDetails.date;
  document.getElementById("tripPeopleReceipt").textContent =
    bookingDetails.people;
  document.getElementById("confirmationNumberReceipt").textContent =
    bookingDetails.confirmationNumber;

  const passengerDetailsReceiptDiv = document.getElementById(
    "passengerDetailsReceipt"
  );
  passengerDetailsReceiptDiv.innerHTML = "";
  bookingDetails.passengers.forEach((passenger, index) => {
    const passengerDiv = document.createElement("div");
    passengerDiv.innerHTML = `<p>Passenger ${index + 1}: ${
      passenger.firstName
    } ${passenger.lastName}</p>`;
    passengerDetailsReceiptDiv.appendChild(passengerDiv);
  });

  showPage("receiptPage");
}

function generateConfirmationNumber() {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
}

function printReceipt() {
  const receipt = document.getElementById("receipt");
  window.print();
}

function saveReceipt() {
  const receipt = document.getElementById("receipt");
  receipt.style.display = "block";
  html2canvas(receipt).then(function (canvas) {
    const link = document.createElement("a");
    link.download = "receipt.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    receipt.style.display = "none";
  });
}

function showPage(pageId) {
  document.getElementById("searchPage").classList.add("hidden");
  document.getElementById("calendarPage").classList.add("hidden");
  document.getElementById("confirmPage").classList.add("hidden");
  document.getElementById("paymentPage").classList.add("hidden");
  document.getElementById("receiptPage").classList.add("hidden");
  document.getElementById(pageId).classList.remove("hidden");
}

function cancelBooking() {
  showPage("searchPage");
}
