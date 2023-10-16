function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver em light mode, colocar a img light
    img.setAttribute("src", "./assets/assets/lightavatar.png")
  } else {
    //se estiver sem light manter img normal
    img.setAttribute("src", "./assets/assets/transpaarente.png")
  }
}
