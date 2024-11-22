let btn1=document.getElementById('mybutton')
let btn2=document.getElementById('mybutton2')
let copydiv=document.querySelector('.copycode')
let rgb1="rgb(92,145,229)"
let rgb2="#54d542"

// GENRETATE HEXADECIMAL NUMBER USING FUCTION
const hexavalues=()=>{
    let hexavalues='0123456789abcdef'
    let colors='#'
    for (let i=0;i<6;i++){
        colors=colors+hexavalues[Math.floor(Math.random()*16)]
    }
    return colors
}

// FOR BUTTON 1 
const handelbutton1=()=>{
    rgb1=hexavalues()
    console.log(rgb1)
    btn1.innerText=rgb1
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
    copydiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`
}

// FOR BUTTON 2 
const handelbutton2=()=>{
    rgb2=hexavalues()
    console.log(rgb2)
    btn2.innerText=rgb2
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`
    copydiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`
}

btn1.addEventListener('click',handelbutton1)
btn2.addEventListener('click',handelbutton2)

copydiv.addEventListener('click',()=>{
    navigator.clipboard.writeText(copydiv.innerText)
})