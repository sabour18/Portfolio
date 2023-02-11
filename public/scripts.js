



function hamLinks(){

    // When hamburger link is clicked, hamburger becomes unchecked and disappears
    let hamburger = document.getElementById("hamburger");
    let hamLinks = document.getElementsByClassName("ham-item");

    for(let i = 0; i < hamLinks.length; i++){

        hamLinks[i].addEventListener("click", function(){

            hamburger.checked = false;

        });
    }
}





function load(){

    hamLinks();

}






document.addEventListener("DOMContentLoaded", function(){
    load();
});