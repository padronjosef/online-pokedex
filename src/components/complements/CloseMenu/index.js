const closeMenu = () => {
  let modal = document.body.style.overflow;
  hamburger.classList.toggle("hamburger--is-active");
  header.classList.toggle("header--is-active");
  (modal == 'hidden') ? modal = document.body.style.overflow = 'visible' : modal = document.body.style.overflow = "hidden"
}

export default closeMenu