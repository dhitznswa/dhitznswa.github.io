function navopen() {
  const NavContent = document.querySelector("#nav-content");
  NavContent.classList.toggle("hidden");
}

async function backsound() {
  const audio = await new Audio("dist/audio/backsound.mp3");
  audio.play();
}

function redirect(url) {
  return (location.href = url);
}
