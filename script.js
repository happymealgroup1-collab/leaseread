document.getElementById("analyzeBtn").onclick = () => {
  const text = document.getElementById("leaseInput").value;

  const keywords = [
    "rent",
    "deposit",
    "terminate",
    "late fee",
    "payment",
    "renewal",
    "break clause",
    "damages"
  ];

  let resultsHTML = "";

  keywords.forEach(word => {
    if (text.toLowerCase().includes(word.toLowerCase())) {
      resultsHTML += `<p>Found clause: <strong>${word}</strong></p>`;
    }
  });

  if (resultsHTML === "") {
    resultsHTML = "<p>No key clauses detected yet — try adding more text.</p>";
  }

  document.getElementById("results").innerHTML = resultsHTML;
};
