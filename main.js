window.onload = function () {
	document.querySelector(".notification-panel").classList.add("active");
  };
  
  let notificationPanel = document.querySelector(".notification-panel");
  document.querySelector(".button-close").addEventListener("click", function () {
	notificationPanel.classList.add("hidden");
  });
  
  window.onscroll = function () {
	if (window.scrollY > 300) {
	  document.querySelector(".newsletter-panel").classList.add("active");
	}
  };
  
  let newsletterPanel = document.querySelector(".newsletter-panel");
  document.querySelector(".close-panel").addEventListener("click", function () {
	newsletterPanel.classList.add("hidden");
  });	