console.log("file");

import { TatumSDK, Network } from "https://cdn.skypack.dev/@tatumio/tatum";
const button = document.getElementById("get-balance");
const addressInput = document.getElementById("address");
const balanceDiv = document.getElementById("balance");
const blockDiv = document.getElementById("block");

button.addEventListener("click", async () => {
  const tatum = await TatumSDK.init({
    network: Network.CELO_ALFAJORES,
  });
  const balance = await tatum.address.getBalance({
    addresses: [addressInput.value],
  });
  console.log(balance);

  let balanceList = "";

  // Iterate through the balance.data array and append each token and balance to the balanceList string
  balance.data.forEach((asset) => {
    balanceList += `<div>${asset.asset}: ${asset.balance}</div>`;
  });

  // Set the innerHTML property of the balanceDiv element to the balanceList string
  balanceDiv.innerHTML = balanceList;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    method: "eth_getBlockByHash",
    params: [
      "0x7e82014cd227e4bddd7eb9679196ed60f48b9700749fa6e8c91d6ec3cb0c1fc2",
      true,
    ],
    id: 1,
    jsonrpc: "2.0",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://black-alien-sky.celo-mainnet.quiknode.pro/b811de5d233050ef7541ad8cd4f59e51afb4e53e/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => (blockDiv.textContent = result))
    .catch((error) => console.log("error", error));
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
