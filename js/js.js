// إضافة كلاس show عند دخول العنصر إلى الشاشة (عند التمرير)
const modal = document.getElementById("signInModal");
const btn = document.querySelector(".btn-start");
const closeBtn = document.getElementById("closeModal");

const closeBtn_sec = document.querySelector(".btn-close");

window.addEventListener("scroll", function () {
  const sloganContent = document.querySelector(".slogan-content");
  const sloganImage = document.querySelector(".slogan-img");
  const btnStart = document.querySelector(".btn-start");

  const isInView = elementInView(sloganContent);

  if (isInView) {
    sloganContent.classList.add("show");
    sloganImage.classList.add("show");
    btnStart.classList.add("show");
  }
});

function elementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
// Get the modal and the button

// Open the modal when the button is clicked
btn.onclick = function () {
  console.log("hhhhiiiiiiiiiii");
  modal.style.display = "block";
};

// Close the modal when the user clicks the close button
closeBtn.onclick = function () {
  modal.style.display = "none";
  console.log("byyee");
};
closeBtn_sec.onclick = function () {
  modal.style.display = "none";
  console.log("byyee");
};

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    console.log("byyee");
  }
};
