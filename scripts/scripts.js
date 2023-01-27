
const myName = document.getElementById("nameAnimation")
const snackbar = document.getElementById("snackbar");
const contactForm = document.getElementById("contactForm");
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const contactEmail = document.getElementById("contactEmail")
const message = document.getElementById("message")
const hello = document.getElementById("helloAnimation")
const avatarBackground = document.getElementById("avatarBackground")
const avatarBgList = ["bg-styles bg-one", "bg-styles bg-two", "bg-styles bg-three", "bg-styles bg-four", "bg-styles bg-five", "bg-styles bg-six"]
let backgroundCount = 0;

function typeWriter(element, timeToStart,speed) {
    const textArray = element.innerHTML.split("")
    element.innerHTML = ""

    setTimeout(()=>{
        textArray.forEach((letter, i) => {
            setTimeout(() => {
                element.innerHTML += letter
            }, speed * i)
        }) 
    },timeToStart)
}

function changeAvatarBg() {
    if(backgroundCount===6){
        backgroundCount=0
    }
    avatarBackground.className=avatarBgList[backgroundCount];
    backgroundCount++;
}


function copyToClipboardEmail(e) {
    console.log(e)
    navigator.clipboard.writeText().then(() => {
        alert("Copied to clipboard: " + e.srcElement.innerHTML);
    });
  }

function hiddeSnack (){
    snackbar.className = snackbar.className.replace("show", "");
}

function displaySnackbar(e) {
    e.preventDefault()
    contactEmail.value = ''
    message.value = ''
    snackbar.className = "show";
    setTimeout(hiddeSnack, 4000);
}

// events listneers
email.addEventListener('click',()=>{
    navigator.clipboard.writeText("leslie.snyder@example.com").then(() => {
        alert("Copied to clipboard: leslie.snyder@example.com");
    });
} );

phone.addEventListener('click',()=>{
    navigator.clipboard.writeText("(235) 779-4297").then(() => {
        alert("Copied to clipboard: (235) 779-4297");
    });
});

contactForm.addEventListener("submit",displaySnackbar)



//on inital page load
typeWriter(hello,1500,250)
typeWriter(myName,3000,200)
setInterval(changeAvatarBg, 3000);