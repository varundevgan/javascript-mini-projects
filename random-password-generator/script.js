function generatePassword() {
  const length = document.getElementById('length').value;
  const hasLower = document.getElementById('lowercase').checked;
  const hasUpper = document.getElementById('uppercase').checked;
  const hasNumber = document.getElementById('numbers').checked;
  const hasSymbol = document.getElementById('symbols').checked;

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]<>?";

  let characters = "";
  if (hasLower) characters += lowercase;
  if (hasUpper) characters += uppercase;
  if (hasNumber) characters += numbers;
  if (hasSymbol) characters += symbols;

  let password = "";
  if (characters.length === 0) {
    password = "⚠️ Select at least one option!";
  } else {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  }

  document.getElementById("password").textContent = password;
}

document.getElementById("copyBtn").addEventListener("click", function () {
  const password = document.getElementById("password").textContent;
  if (password && !password.includes("Select")) {
    navigator.clipboard.writeText(password);
    this.textContent = "✅";
    setTimeout(() => this.textContent = "📋", 1000);
  }
});
