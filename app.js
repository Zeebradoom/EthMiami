console.log("file");

const button = document.getElementById("get-balance");
const addressInput = document.getElementById("address");
const balanceDiv = document.getElementById("balance");

button.addEventListener("click", async () => {
  const tatum = await TatumSDK.init({ network: Network.ETHEREUM });
  const balance = await tatum.address.getBalance({
    addresses: [addressInput.value],
  });
  const balanceData = balance.data.filter((asset) => asset.asset === "ETH")[0];
  balanceDiv.textContent = `${balanceData.balance} ${balanceData.asset}`;
});

console.log("filestore");

window.addEventListener("unlockProtocol.status", function (event) {
  // We hide all .unlock-content elements
  document.querySelector(".unlock-content").style.display = "none";
  // We show only the relevant element
  document
    .querySelectorAll(`.unlock-content.${event.detail.state}`)
    .forEach((element) => {
      element.style.display = "block";
    });
});

window.addEventListener("unlockProtocol.authenticated", function (event) {
  // event.detail.addresss includes the address of the current user, when known
  window.location.href = "./donation.html";
});

window.addEventListener("unlockProtocol.transactionSent", function (event) {
  // event.detail.hash includes the hash of the transaction sent
});
