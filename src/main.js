import { initSentry } from "./sentry";
import "./style.css";

// Initialize Sentry
initSentry();

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1>Sentry Dead Click Reproduction</h1>
    <p>Click the button below multiple times, then click the navigation link.</p>
    <p>On the next page, wait a few seconds then use your browser's back button to return here.</p>
    <p>After returning, click the button again to see if dead clicks are recorded in Sentry.</p>
    
    <div class="actions">
      <button id="test-button" class="button">Click Me</button>
      <a href="secondPage.html" id="navigation-link" class="button">Go to Second Page</a>
    </div>
  </div>
`;

// Set up click tracking for testing
document.getElementById("test-button").addEventListener("click", function () {
  console.log("Button clicked at", new Date().toISOString());
});
