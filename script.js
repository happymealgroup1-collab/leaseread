document.getElementById("analyzeBtn").onclick = () => {
  const text = document.getElementById("leaseInput").value;

  // Define clauses
  const clauses = [
    {word: "rent", risk: "Low", note: "The amount and date you must pay your rent."},
    {word: "deposit", risk: "Low", note: "Security payment you leave with the landlord."},
    {word: "break clause", risk: "High", note: "Conditions under which you can leave the lease early."},
    {word: "terminate", risk: "High", note: "Conditions to end the lease early."},
    {word: "renewal", risk: "Medium", note: "Lease may automatically continue after term ends."},
    {word: "late fee", risk: "High", note: "Extra charge for late payment."},
    {word: "sublet", risk: "Medium", note: "Rules about letting someone else live there."},
    {word: "maintenance", risk: "Medium", note: "Who is responsible for repairs."},
    {word: "forfeiture", risk: "High", note: "Severe consequences if terms are broken."},
    {word: "access", risk: "Low", note: "When the landlord can enter the property."},
  ];

  let resultsHTML = "";

  clauses.forEach(c => {
    if (text.toLowerCase().includes(c.word.toLowerCase())) {
      resultsHTML += `
        <p>
          <strong>${c.word}</strong> - Risk: ${c.risk}<br>
          ${c.note}
        </p>
      `;
    }
  });

  if (resultsHTML === "") {
    resultsHTML = "<p>No key clauses detected — check the lease carefully.</p>";
  }

  document.getElementById("results").innerHTML = resultsHTML;
};
//highlight clauses in the lease text
let highlightedText = text;
clauses.forEach(c => {
  const regex = new RegExp(`(${c.word})`, "gi");
  const color = c.risk === "High" ? "red" : c.risk === "Medium" ? "orange" : "green";
  highlightedText = highlightedText.replace(regex, `<span style="background-color:${color}">$1</span>`);
});
document.getElementById("results").innerHTML = highlightedText;

