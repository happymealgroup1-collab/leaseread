document.getElementById("analyzeBtn").onclick = () => {
  const text = document.getElementById("leaseInput").value;

  let resultsHTML = "";

  // ====================
  // 1. Keyword highlights with risk & notes
  // ====================
  const clauses = [
    {word: "break clause", risk: "High", note: "Conditions under which you can leave the lease early."},
    {word: "terminate", risk: "High", note: "Conditions to end the lease early."},
    {word: "renewal", risk: "Medium", note: "Lease may automatically continue after term ends."},
    {word: "late fee", risk: "High", note: "Extra charge for late payment."},
    {word: "sublet", risk: "Medium", note: "Rules about letting someone else live there."},
    {word: "maintenance", risk: "Medium", note: "Who is responsible for repairs."},
    {word: "forfeiture", risk: "High", note: "Severe consequences if terms are broken."},
    {word: "access", risk: "Low", note: "When the landlord can enter the property."},
  ];

  // Highlight text
  let highlightedText = text;
  clauses.forEach(c => {
    const regex = new RegExp(`(${c.word})`, "gi");
    const color = c.risk === "High" ? "red" : c.risk === "Medium" ? "orange" : "green";
    highlightedText = highlightedText.replace(regex, `<span style="background-color:${color}">$1</span>`);
  });

  document.getElementById("results").innerHTML = highlightedText;

  // ====================
  // 2. Extract exact numbers and amounts
  // ====================

  // Rent
  const rentMatch = text.match(/rent.*?£(\d+)/i);
  if(rentMatch){
    resultsHTML += `<p><strong>Rent:</strong> £${rentMatch[1]} - Risk: Low<br>
    The exact amount and date you must pay your rent.</p>`;
  }

  // Deposit
  const depositMatch = text.match(/deposit.*?£(\d+)/i);
  if(depositMatch){
    resultsHTML += `<p><strong>Deposit:</strong> £${depositMatch[1]} - Risk: Low<br>
    Security payment you leave with the landlord.</p>`;
  }

  // Notice period (Break clause)
  const noticeMatch = text.match(/notice.*?(\d+)\s*month/i);
  if(noticeMatch){
    resultsHTML += `<p><strong>Notice Period:</strong> ${noticeMatch[1]} month(s) - Risk: High<br>
    Time required to give notice before ending the lease.</p>`;
  }

  // Late fee
  const lateFeeMatch = text.match(/late fee.*?£(\d+)/i);
  if(lateFeeMatch){
    resultsHTML += `<p><strong>Late Fee:</strong> £${lateFeeMatch[1]} - Risk: High<br>
    Extra charge applied if rent is late.</p>`;
  }

  // ====================
  // 3. Display all keyword-based clauses
  // ====================
  clauses.forEach(c => {
    if(text.toLowerCase().includes(c.word.toLowerCase())){
      resultsHTML += `<p><strong>${c.word}</strong> - Risk: ${c.risk}<br>${c.note}</p>`;
    }
  });

  // ====================
  // 4. Fallback if nothing found
  // ====================
  if(resultsHTML === ""){
    resultsHTML = "<p>No key clauses detected — check the lease carefully.</p>";
  }

  // Show below the highlighted text
  document.getElementById("results").innerHTML += "<hr>" + resultsHTML;
};
