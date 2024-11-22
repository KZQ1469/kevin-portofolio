document.querySelector('nav a[href="#"]').addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const typingElement = document.querySelector(".typing-text span");
if (typingElement) {
  const roles = ["Web Designer", "Language Speaker"];
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[currentRoleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, currentCharIndex--);
      if (currentCharIndex < 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }
    } else {
      typingElement.textContent = currentRole.substring(0, currentCharIndex++);
      if (currentCharIndex > currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }
    }
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }

  typeEffect();
} else {
  console.error("No .typing-text span element found on the page.");
}
