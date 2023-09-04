function blogButtonHandle(){


const questionAnswer = document.getElementById("answer-container");
const p = document.createElement("p")
p.innerHTML = `
<h1 class="text-center text-3xl font-bold">Answer to the questions </h1>

<ol class="ml-5">
<li>1.Var is an old method. In modern javascript , let and const are used.
    var and let create variables that can be reassigned another value.
    const creates "constant" variables that cannot be reassigned another value.</li>

    <li>2.null is an explicitly assigned value that means "no value", whereas undefined is a variable that has not been assigned a value.</li>
    <li>3.A REST API  is an application programming interface that conforms to the constraints of REST architecture.</li>

    </ol>




`
questionAnswer.appendChild(p);


}