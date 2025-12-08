// ===============================
// FULL UK LEASE CLAUSE DATABASE
// ===============================
const CLAUSES = {
  "rent": {
    risk: "Low",
    description: "Amount you must pay and when it's due."
  },
  "deposit": {
    risk: "Medium",
    description: "Money held as security for damages or unpaid rent."
  },
  "holding deposit": {
    risk: "Medium",
    description: "A payment to reserve the property before signing."
  },
  "joint and several liability": {
    risk: "High",
    description: "You may be responsible for your housemates’ rent and damages."
  },
  "guarantor": {
    risk: "High",
    description: "Someone who must pay your rent if you don't."
  },
  "break clause": {
    risk: "High",
    description: "Rules allowing the tenancy to end early."
  },
  "terminate": {
    risk: "High",
    description: "Conditions for ending the tenancy."
  },
  "forfeiture": {
    risk: "High",
    description: "Landlord’s right to end the tenancy and reclaim the property."
  },
  "quiet enjoyment": {
    risk: "Low",
    description: "Your right to live without unnecessary interference."
  },
  "fair wear and tear": {
    risk: "Medium",
    description: "Normal ageing, not chargeable damage."
  },
  "indemnity": {
    risk: "High",
    description: "You must cover the landlord’s losses if you breach the contract."
  },
  "rent review": {
    risk: "Medium",
    description: "Rent may increase at renewal."
  },
  "HMO": {
    risk: "Medium",
    description: "Extra rules for shared housing under UK law."
  },
  "utilities overage": {
    risk: "High",
    description: "You pay extra if gas/electric/water exceed the usage cap."
  },
  "cleaning fee": {
    risk: "Medium",
    description: "Charges for professional cleaning at check-out."
  },
  "assignment": {
    risk: "Medium",
    description: "Transferring your tenancy to another person."
  },
  "sublet": {
    risk: "Medium",
    description: "Rules about renting your room to someone else."
  },
  "guest policy": {
    risk: "Low",
    description: "Limits on overnight visitors."
  },
  "access": {
    risk: "Low",
    description: "When the landlord can enter the property."
  },
  "maintenance": {
    risk: "Medium",
    description: "Who is responsible for repairs."
  }
};


// ===============================
// MAIN ANALYSIS FUNCTION
// ===============================
document.getElementById("analyzeBtn").onclick = () => {
  const text = document.getElementById("leaseInput").value.toLowerCase();
  let resultsHTML = "";

  Object.keys(CLAUSES).forEach(keyword => {
    if (text.includes(keyword)) {
      const info = CLAUSES[keyword];

      resultsHTML += `
        <div class="result-item ${info.risk.toLowerCase()}">
          <h3>${keyword}</h3>
          <p><strong>Risk:</strong> ${info.risk}</p>
          <p>${info.description}</p>
        </div>
      `;
    }
  });

  if (resultsHTML === "") {
    resultsHTML = "<p>No clauses found. Try adding more of your lease.</p>";
  }

  document.getElementById("results").innerHTML = resultsHTML;
};
