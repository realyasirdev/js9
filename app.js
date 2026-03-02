// Scenario 3: Video Game Character Status (prompt + variables + alert)

// Step 1: Maximum health (yeh level me change nahi hogi)
const maxHealth = Number(prompt("Enter character MAX health (e.g., 1000):"));

// Step 2: Current health
let currentHealth = Number(prompt("Enter character CURRENT health (e.g., 850):"));

// Step 3: Shield activated? (boolean)
let shieldInput = prompt("Is shield activated? (yes/no)");
let isShieldActive = (shieldInput.toLowerCase() === "yes");

// Step 4: Poisoned? (boolean)
let poisonInput = prompt("Is character poisoned? (yes/no)");
let isPoisoned = (poisonInput.toLowerCase() === "yes");

// Step 5: Incoming damage
let damage = Number(prompt("Enter incoming damage (e.g., 150):"));

// Step 6: Current health update (damage subtract)
currentHealth = currentHealth - damage;

// Optional: health 0 se neeche na jaye
if (currentHealth < 0) {
  currentHealth = 0;
}

// Step 7: Result show karna
alert(
  "Character Status" +
  "\nMax Health: " + maxHealth +
  "\nCurrent Health (after damage): " + currentHealth +
  "\nShield Active: " + isShieldActive +
  "\nPoisoned: " + isPoisoned +
  "\nDamage Taken: " + damage
);