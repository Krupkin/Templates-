const coub = document.querySelector(".cube");

coub.addEventListener("click", showSize);

function showSize(evt){
    const target = evt.target.dataset.size;
    console.log(target)
    
}