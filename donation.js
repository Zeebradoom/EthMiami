console.log("donation file");

// Dummy data
const donors = [
  {
    name: "Alice",
    recentTransactions: ["Tx101", "Tx102"],
    frequency: "Monthly",
    securityScore: "High",
  },
  {
    name: "Bob",
    recentTransactions: ["Tx201"],
    frequency: "Weekly",
    securityScore: "Medium",
  },
  {
    name: "Charlie",
    recentTransactions: ["Tx301", "Tx302", "Tx303"],
    frequency: "Daily",
    securityScore: "Low",
  },
];

const transactions = [
  { id: "Tx101", amount: "100 CELO", date: "2021-10-01" },
  { id: "Tx102", amount: "50 CELO", date: "2021-10-15" },
  { id: "Tx201", amount: "75 CELO", date: "2021-10-07" },
  { id: "Tx301", amount: "25 CELO", date: "2021-10-20" },
  { id: "Tx302", amount: "30 CELO", date: "2021-10-21" },
  { id: "Tx303", amount: "45 CELO", date: "2021-10-22" },
];

// Function to populate donor list
function populateDonorList() {
  const donorList = document.getElementById("donor-list");
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  headerRow.innerHTML = `<th>Name</th><th>Recent Transactions</th><th>Donation Frequency</th><th>Security Score</th>`;
  donors.forEach((donor) => {
    const row = table.insertRow();
    row.innerHTML = `<td>${donor.name}</td><td>${donor.recentTransactions.join(
      ", "
    )}</td><td>${donor.frequency}</td><td>${donor.securityScore}</td>`;
  });
  donorList.appendChild(table);
}

// Function to populate transaction list
function populateTransactionList() {
  const transactionList = document.getElementById("transaction-list");
  const table = document.createElement("table");
  const headerRow = table.insertRow();
  headerRow.innerHTML = `<th>Transaction ID</th><th>Amount</th><th>Date</th>`;
  transactions.forEach((transaction) => {
    const row = table.insertRow();
    row.innerHTML = `<td>${transaction.id}</td><td>${transaction.amount}</td><td>${transaction.date}</td>`;
  });
  transactionList.appendChild(table);
}

window.onload = function () {
  populateDonorList();
  populateTransactionList();
};

// Bind the download function to the button click event
document.getElementById("download-pdf").addEventListener("click", function () {
  window.print();
});
