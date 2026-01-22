function show(){
    const get = document.querySelector(".sidebar")
    get.style.display = "flex"
    const x = document.querySelector(".hide")
    x.style.display ="none"
}

function hide(){
    const get = document.querySelector(".sidebar")
    get.style.display ="none"
    const x = document.querySelector(".hide")
    x.style.display ="flex"
}