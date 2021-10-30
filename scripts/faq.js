const accordToggle = document.querySelectorAll(".accordToggle")
const answer = document.querySelectorAll(".answer")
let sign = true
console.log(accordToggle, answer)
for (let i=0; i<accordToggle.length;i++) {
    console.log(accordToggle, answer)
    accordToggle[i].addEventListener("click", function() {
        if (sign === true) {
            console.log("if"+sign)
            answer[i].style.display = "block";
            sign = false;
            accordToggle[i].classList.add("bx-minus")
            accordToggle[i].classList.remove("bx-plus")
    
        }else {
            console.log("else"+sign)
            answer[i].style.display ="none";
            sign = true;
            accordToggle[i].classList.add("bx-plus")
            accordToggle[i].classList.remove("bx-minus")
    
        }
        
        
    })
}

