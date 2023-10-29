console.log("file");

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

window.unlockProtocolConfig = {
  locks: {
    "0x1234567890abcdef1234567890abcdef12345678": {
      name: "My Lock",
    },
  },
  icon: "https://your-domain.com/your-logo.png",
};
