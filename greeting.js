// Iteration 4: Setup background switcher
bg1.onclick =()=>{
card.style.backgroundImage="url('https://cdn.progradjunior.org/greetn/b1.png')"
}
bg2.onclick =()=>{
card.style.backgroundImage="url('https://cdn.progradjunior.org/greetn/b2.png')"
}
bg3.onclick =()=>{
card.style.backgroundImage="url('https://cdn.progradjunior.org/greetn/b3.png')"
}


// Iteration 5: Insert text to the card

const button=document.getElementById("button")
const message=document.getElementById("message")
const cardtext=document.getElementById("cardText")

button.onclick=()=>{
cardtext.textContent=message.value;
}
