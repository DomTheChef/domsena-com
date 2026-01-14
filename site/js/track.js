(function () {
  const KEY = "domsena-last-track-ts";
  const COOLDOWN_MS = 30 * 1000;
  const now = Date.now();

  const last = Number(localStorage.getItem(KEY) || 0);
  if (now - last < COOLDOWN_MS) {
    return;
  }

  fetch("https://dom-prod-fnapp-fgf2hsd7gvexf8h0.westeurope-01.azurewebsites.net/api/track", {
    method: "GET",
    mode: "cors",
    cache: "no-store"
  })
    .then(r => r.json())             
    .then(data => {
      localStorage.setItem(KEY, String(now));
      console.log("Total visits:", data.totalVisits); 
    })
    .catch((err) => {
      console.warn("Tracking call failed:", err);
    });
})();
