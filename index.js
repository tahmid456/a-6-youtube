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
const loadPhone = async () =>{

const res = await fetch(" https://openapi.programming-hero.com/api/videos/category/1000");
const data = await res.json();
const phones = data.data;
// console.log(phones);
displayPhones(phones);




}



const displayPhones = phones =>{

    // console.log(phones);
    // step 1
    const phoneContainer = document.getElementById("phone-container");
    phones.forEach(phone =>{

        console.log(phone);
        // step2
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card w-96 bg-gray-100 shadow-xl`;
        // step 3
        phoneCard.innerHTML=`<figure><img src="${phone.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>`;



        // step 4 append child;
        phoneContainer.appendChild(phoneCard);
    })

    
}
loadPhone();