// FAQ DROPDOWN ACCORDION

// get all the questions
let question = document.querySelectorAll(".question");

// loop through each question
question.forEach(question => {
    // add an event listener to each question
    question.addEventListener("click", event => {
        // get the currently active question
        const active = document.querySelector(".question.active");
        
        // if there's already an active question and it's not the current question
        if(active && active !== question ) {
            // close the active question
            active.classList.toggle("active");
            active.nextElementSibling.style.maxHeight = 0;
        }
        
        // toggle the active class on the current question
        question.classList.toggle("active");
        
        // get the answer element of the current question
        const answer = question.nextElementSibling;
        
        // if the question is active, open the answer
        if(question.classList.contains("active")){
            answer.style.maxHeight = answer.scrollHeight + "px";
        } 
        // otherwise, close the answer
        else {
            answer.style.maxHeight = 0;
        }
    })
})
