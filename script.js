document.getElementById("analyzeBtn").onclick = () => {
  const text = document.getElementById("leaseInput").value;

  // Define clauses with risk & notes
  const clauses = [
    {word: "rent", risk: "Low", note: "The exact amount and date you must pay your rent."},
    {word: "deposit", risk: "Low", note: "Security payment you leave with the landlord."},
    {word: "break clause", risk: "High", note: "Conditions under which you can leave the lease early."},
    {word: "terminate", risk: "High", note: "Conditions to end the lease early."},
    {word: "renewal", risk: "Medium", note: "Lease may automatically continue after term ends."},
    {word: "late fee", risk: "High", note: "Extra charge applied if rent is late."},
    {word: "sublet", risk: "Medium", note: "Rules about letting someone else live there."},
    {word: "maintenance", risk: "Medium", note: "Who is responsible for repairs."},
    {word: "forfeiture", risk: "High", note: "Severe consequences if terms are broken."},
    {word: "access", risk: "Low", note: "When the landlord can enter the property."},
  ];

  // Helper: get color by risk
  const getColor = (risk) => risk === "High" ? "red" : risk === "Medium" ? "orange" : "green";

  let highlightedText = text;

  // Highlight keywords + numeric amounts with tooltips
  clauses.forEach(c => {
    // Escape special chars in regex
    const escapedWord = c.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedWord}|£\\d+|\\d+\\s*month)`, "gi");

    highlightedText = highlightedText.replace(regex, (match) => {
      // Only color keyword or numeric values
      let color = c.word.toLowerCase() === match.toLowerCase() ? getColor(c.risk) : "blue";
      return `<span class="tooltip highlight" style="background-color:${color}">${match}
                <span class="tooltiptext">${c.note}</span>
              </span>`;
    });
  });

  document.getElementById("results").innerHTML = highlightedText;
};
