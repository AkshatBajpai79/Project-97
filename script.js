const urlRegex = /^(http|https):\/\/[^\s]+/i;

function scanLink() {
  const linkInput = document.getElementById("link-input");
  const link = linkInput.value.trim();

  
  if (!urlRegex.test(link)) {
    document.getElementById("result").textContent = "Invalid URL format. Please try again.";
    return;
  }

  
  const redFlags = [];
  if (link.includes("http://")) {
    redFlags.push("URL uses insecure HTTP protocol.");
  }
  if (link.includes("@") || link.includes("=")) {
    redFlags.push("URL contains suspicious characters.");
  }
  if (link.includes("/?")) {
    redFlags.push("URL contains a query string, be cautious of unexpected parameters.");
  }

  
  document.getElementById("result").innerHTML = "";
  if (redFlags.length === 0) {
    document.getElementById("result").textContent = "This link appears safe based on initial checks. However, always be cautious and research unfamiliar websites before visiting.";
  } else {
    document.getElementById("result").textContent = "This link has potential red flags:";
    for (const flag of redFlags) {
      document.getElementById("result").innerHTML += `<li>${flag}</li>`;
    }
    document.getElementById("result").innerHTML += `<li>**Caution:** This link might be fraudulent. Research further before visiting.</li>`;
  }
}

document.getElementById("scan-button").addEventListener("click", scanLink);
