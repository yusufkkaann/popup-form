const blackPanel = document.querySelector(".black-panel");


document.querySelector("#show-buton").addEventListener("click", function(){
  document.querySelector(".popup").classList.add("active");
  blackPanel.classList.add("active");

});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
  blackPanel.classList.remove("active");
});
blackPanel.addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
  blackPanel.classList.remove("active");
});
