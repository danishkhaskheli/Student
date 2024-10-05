function getprocess(){

    let button = document.getElementById("button");
    let main = document.getElementById("main");
    button.classList.toggle("active")
    main.classList.toggle("show")

}

 let myitems = document.querySelectorAll(".listingimg")
myitems.forEach((element, index) => {
    element.addEventListener('click', function(){
        const content = element.innerHTML;
        document.getElementById("popup-content").innerHTML = content;
        document.getElementById("popup").classList.add("active");
        let bodies = document.getElementById("body1");
        
        bodies.classList.add("apply")
    });
});
function getbutton() {
    let btn = document.getElementById("popup")
    btn.classList.remove("active")
    let ability =document.getElementById("body1")
    ability.classList.remove("apply")
}
window.addEventListener('scroll', function(){
    let being = document.getElementById("formate");
    if(this.window.scrollY > 100){
        being.classList.add('scroll-class')
    }
    else{
        being.classList.remove('scroll-class')
    }
})