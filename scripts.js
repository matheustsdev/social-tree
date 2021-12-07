function animate() {
    const linksAmount = document.getElementById("link-list").childElementCount
    console.log(linksAmount)
    for(let i = 1; i <= linksAmount; i++) {
        setTimeout(() => {
            document.querySelector(`#link-list button:nth-child(${i})`).classList.add("animation")
            document.querySelector(`#link-list button:nth-child(${i})`).classList.remove("prev-animation")
        }, (i-1)*150)
    }
}
window.onload = animate;