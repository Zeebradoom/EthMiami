// // unlock.js
// import { Unlock, networks } from "@unlock-protocol/unlock-js";

// export async function unlockContent() {
//   const unlock = new Unlock(networks.ropsten);
//   const locked = await unlock.isLocked(
//     "0x...",
//     window.ethereum.selectedAddress
//   );

//   const lockedSection = document.getElementById("locked-section");
//   lockedSection.hidden = locked;
// }

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
});

window.addEventListener("unlockProtocol.transactionSent", function (event) {
  // event.detail.hash includes the hash of the transaction sent
});
