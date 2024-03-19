// function tambah() {
//   let forms = document.getElementById("form");
//   let a1 = parseFloat(forms.angkaPertama.value);
//   let a2 = parseFloat(forms.angkaKedua.value);

//   let total = a1 + a2;

//   forms.hasChildNodes.value = total;
// }

// function hitung(operator) {
//   let forms = document.getElementById("form");
//   let a1 = parseFloat(forms.angkaPertama.value);
//   let a2 = parseFloat(forms.angkaKedua.value);
//   let total;

//   if (operator === "+") {
//     total = a1 + a2;
//   } else if (operator === "-") {
//     total = a1 - a2;
//   } else if (operator === "/") {
//     total = a1 / a2;
//   } else if (operator === "x") {
//     total = a1 * a2;
//   } else if (operator === "^") {
//     total = Math.pow(a1, a2);
//   } else {
//     // Default case
//     total = "Operasi tidak valid";
//   }

//   forms.hasil.value = total;
// }

// // Event listeners for buttons
// document.getElementById("tambahBtn").addEventListener("click", function () {
//   hitung("+");
// });

// document.getElementById("kurangBtn").addEventListener("click", function () {
//   hitung("-");
// });

// document.getElementById("kaliBtn").addEventListener("click", function () {
//   hitung("x");
// });

// document.getElementById("bagiBtn").addEventListener("click", function () {
//   hitung("/");
// });

// document.getElementById("pangkatBtn").addEventListener("click", function () {
//   hitung("^");
// });

function hitung(operator) {
  let forms = document.getElementById("form");
  let a1 = parseFloat(forms.angkaPertama.value);
  let a2 = parseFloat(forms.angkaKedua.value);
  let total;

  switch (operator) {
    case "+":
      total = a1 + a2;
      break;
    case "-":
      total = a1 - a2;
      break;
    case "/":
      total = a1 / a2;
      break;
    case "x":
      total = a1 * a2;
      break;
    case "^":
      total = Math.pow(a1, a2);
      break;
    default:
      total = "Operasi tidak valid";
  }

  forms.hasil.value = total;
}

// Function to add event listener to buttons
function addEventListenerToButton(buttonId, operator) {
  document.getElementById(buttonId).addEventListener("click", function () {
    hitung(operator);
  });
}

// Add event listeners to buttons
addEventListenerToButton("tambahBtn", "+");
addEventListenerToButton("kurangBtn", "-");
addEventListenerToButton("kaliBtn", "x");
addEventListenerToButton("bagiBtn", "/");
addEventListenerToButton("pangkatBtn", "^");
