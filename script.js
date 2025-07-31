document.addEventListener("DOMContentLoaded", () => {
  fetch("daten.csv")
    .then(response => response.text())
    .then(data => {
      const rows = data.trim().split("\n").slice(1); // Header ignorieren
      const tableBody = document.querySelector("#farbTable tbody");

      rows.forEach(row => {
        const cols = row.split(",");
        const tr = document.createElement("tr");
        cols.forEach(text => {
          const td = document.createElement("td");
          td.textContent = text;
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });
    });

  document.getElementById("searchInput").addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll("#farbTable tbody tr");

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? "" : "none";
    });
  });
});

