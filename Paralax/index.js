function paralax(event){
    document.querySelectorAll(".layer").forEach(elem => {
    const speed = elem.getAttribute("data-speed")
        elem.style.transform = `translateX(${event.clientX*speed/500}px)`
    })
}

document.addEventListener("mousemove", paralax)