


// 1. Select all the input elements using their IDs
const nameInput = document.getElementById("name-input");
const rollnoInput = document.getElementById("rollno-input");
const deptInput = document.getElementById("dept-input");
const uniInput = document.getElementById("uni-input");
const phoneInput = document.getElementById("phone-input");
const button = document.getElementById("generate-btn");
const cardcontainer = document.getElementById("card-container");
const studentForm = document.getElementById("student-form");



studentForm.addEventListener("submit" , (event) => {

    console.log("JavaScript is running!");
     
    event.preventDefault();  // STOP the form from refreshing the browser page!

    const namevalue = nameInput.value  ;
    const rollnovalue = rollnoInput.value ;
    const deptvalue = deptInput.value  ;
    const univalue = uniInput.value ;
    const phonevalue = phoneInput.value  ;

// [ User types data ] ──> [ Clicks Button ] ──> [ JS reads values ] ──> [ JS uses innerHTML to construct NEW elements in the browser ]

    cardcontainer.innerHTML =   `
    
    <div>
        <h2>${namevalue.toUpperCase()}</h2>
        <p><strong>Roll No:</strong> ${rollnovalue}</p>
        <p><strong>Department:</strong> ${deptvalue}</p>
        <p><strong>University:</strong> ${univalue}</p>
        <p><strong>Contact:</strong> ${phonevalue}</p>
    </div>`
    ;
    
});

