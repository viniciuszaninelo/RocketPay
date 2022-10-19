import "./css/index.css"

const creditCardBgColor = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const creditCardBgColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

const CreditCardLogo = document.querySelector('.cc-logo span:nth-child(2) img')


function setCardType(type) {
  const colors = {
    "visa": ["#2D57F2", "#436D99"],
    "mastercard": ["#DF6F29","#C69347"],
    "default": ["black", "gray"],
  }
  creditCardBgColor.setAttribute("fill", colors[type][0])
  creditCardBgColor2.setAttribute("fill", colors[type][1])

  CreditCardLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType