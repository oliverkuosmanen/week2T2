import "./styles.css";
const submitButton = document.getElementById("submit-data");
const tableBodyData = document.getElementById("tablebody-data");
const usernameData = document.getElementById("input-username");
const emailData = document.getElementById("input-email");
const addressData = document.getElementById("input-address");
const adminData = document.getElementById("input-admin");

submitButton.addEventListener("click", function () {
  let newTableData = document.createElement("tr");

  let newData0 = document.createElement("td");
  newData0.innerText = usernameData.value;
  newTableData.appendChild(newData0);

  let newData1 = document.createElement("td");
  newData1.innerText = emailData.value;
  newTableData.appendChild(newData1);

  let newData2 = document.createElement("td");
  newData2.innerText = addressData.value;
  newTableData.appendChild(newData2);

  let newData3 = document.createElement("td");
  newData3.innerText = adminData.checked ? "X" : "-";
  newTableData.appendChild(newData3);

  tableBodyData.appendChild(newTableData);
  console.log("Button pressed");
});
