document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("mobileMenuIcon");
  const navMenu = document.getElementById("navMenu");

  if (!menuIcon || !navMenu) return;

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
