class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        //index of the the current string being typedout
        this.wordIndex = 0;
        //this.wait must be a base 10 interger
        this.wait = parseInt(wait, 10);
        //method type()
        this.type();
        // Boolean if the word is currently deleting
        this.isDeleting = false;
    }

    
    type() {
        //current index of words
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fullTxt = this.words[current];

        // check if deleting
        if (this.isDeleting){
        //remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        //add a charaacter
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }            

    


        // insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //type speed for when it is typing, deleting and pausing after deletion

        let typeSpeed = 300;

        //select pencil icon for writting animation
        const typingElement = document.querySelector('.fas');

        if (this.isDeleting){
            typeSpeed /= 4;        
        }
 
        if(this.isDeleting){
            typingElement.className = "fas fa-pencil-alt erasing-animation";
        }else{
            typingElement.className = "fas fa-pencil-alt writing-animation";
        }

        // if word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            // make pause at end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
            //will stop the pencil animation after word completion
            typingElement.className = "fas fa-pencil-alt";


        } else if (this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            //move to the next word in the HTML property
            this.wordIndex++;
            // pause time before the word start typing
            typeSpeed = 1000;

        }

        setTimeout(() => this.type(), typeSpeed)
    }
}


//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
const txtElement = document.querySelector('.txt-type');
// const words = JSON.parse(txtElement.getAttribute('data-words'));
const words = ['Pedro Henrique'];


// const wait = txtElement.getAttribute('data-wait');
const wait = 2500;

new TypeWriter(txtElement, words, wait);
}




class MobileNavbar {
    constructor(mobileMenu, navList,navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

animateLinks() {
    this.navLinks.forEach((link, index) => {
        link.style.animation 
        ? (link.style.animation = "")  
        : (link.style.animation = `navLinkFade 1.8s ease forwards ${index / 7 + .1}s`)
    });
}

handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
}


addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
}
init() {
    if(this.mobileMenu) {
        this.addClickEvent()
    }
    return this
}
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

mobileNavbar.init()

//animações cards
const container1 = document.querySelector(".card-animation1")
const card1 = document.querySelector(".a1")



container1.addEventListener("mousemove", (event) => {
    const {width, height} = container1.getBoundingClientRect()
    const {offsetX, offsetY} = event;
    card1.style.setProperty("--x-pos", (offsetX / width) - 0.6)
    
    card1.style.setProperty("--y-pos", (offsetY / height) - 0.6);
})

const container2 = document.querySelector(".card-animation2")
const card2 = document.querySelector(".a2")



container2.addEventListener("mousemove", (event) => {
    const {width, height} = container2.getBoundingClientRect()
    const {offsetX, offsetY} = event;
    card2.style.setProperty("--x-pos", (offsetX / width) - 0.6)
    
    card2.style.setProperty("--y-pos", (offsetY / height) - 0.6);
})

const container3 = document.querySelector(".card-animation3")
const card3 = document.querySelector(".a3")



container3.addEventListener("mousemove", (event) => {
   const {width, height} = container3.getBoundingClientRect()
    const {offsetX, offsetY} = event;
    card3.style.setProperty("--x-pos", (offsetX / width) - 0.6)
    
    card3.style.setProperty("--y-pos", (offsetY / height) - 0.6);
})

const container4 = document.querySelector(".card-animation4")
const card4 = document.querySelector(".a4")



container4.addEventListener("mousemove", (event) => {
    const {width, height} = container4.getBoundingClientRect()
    const {offsetX, offsetY} = event;
    card4.style.setProperty("--x-pos", (offsetX / width) - 0.6)
    
    card4.style.setProperty("--y-pos", (offsetY / height) - 0.6);
})

const container5 = document.querySelector(".card-animation5")
const card5 = document.querySelector(".a5")



container5.addEventListener("mousemove", (event) => {
    const {width, height} = container5.getBoundingClientRect()
    const {offsetX, offsetY} = event;
    card5.style.setProperty("--x-pos", (offsetX / width) - 0.6)
    
    card5.style.setProperty("--y-pos", (offsetY / height) - 0.6);
})


const container6 = document.querySelector(".card-animation6")
const card6 = document.querySelector(".a6")


container6.addEventListener("mousemove", (event) => {
const {width, height} = container6.getBoundingClientRect()

    const {offsetX, offsetY} = event;
    card6.style.setProperty("--x-pos", (offsetX / width) - 0.6)
    
    card6.style.setProperty("--y-pos", (offsetY / height) - 0.6);
})

const container7 = document.querySelector(".card-animation7")
const card7 = document.querySelector(".a7")



container7.addEventListener("mousemove", (event) => {
    const {width, height} = container7.getBoundingClientRect()
    const {offsetX, offsetY} = event;
    card7.style.setProperty("--x-pos", (offsetX / width) - 0.6)
    
    card7.style.setProperty("--y-pos", (offsetY / height) - 0.6);
})




