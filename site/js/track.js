(function () {
  const KEY = "domsena-visit-tracked";

  if (sessionStorage.getItem(KEY)) {
    return;
  }

  fetch("https://dom-prod-fnapp.azurewebsites.net/api/track", {
    method: "GET",
    mode: "cors"
  })
    .then(() => {
      sessionStorage.setItem(KEY, "1");
    })
    .catch((err) => {
      console.warn("Tracking call failed:", err);
    });
})();

