function showToast(type) {
  const messages = {
    success: "Successfully completed!",
    error: "Something went wrong.",
    invalid: "Invalid action.",
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <div class="message">${messages[type] || "Notification"}</div>
    <button class="close-btn" aria-label="Close">&times;</button>
    <div class="progress">
      <div class="progress-bar"></div>
    </div>
  `;

  const toastContainer = document.getElementById("toastContainer");
  toastContainer.appendChild(toast);

  // Remove on click
  toast.querySelector(".close-btn").addEventListener("click", () => {
    toast.remove();
  });

  // Auto remove after 6s
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
