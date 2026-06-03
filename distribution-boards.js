
//distribution boards data series

const sSeries = [

{
    name:"Acti9 Isobar P",

    image:"images/acti9-isobar-p.jpg",

    description:
    "Premium distribution board solution designed for commercial and industrial electrical installations.",

    rating:"Up to 250A",

    poles:"SPN / TPN",

    capacity:"High Circuit Capacity",

    applications:"Commercial Buildings, Offices, Infrastructure",

    features:[

        "Modular Design",

        "High Reliability",

        "Easy Expansion",

        "Enhanced Electrical Safety"

    ]
},

{
    name:"Acti9 Isobar B",

    image:"images/acti9-isobar-b.jpg",

    description:
    "Flexible and efficient power distribution board for residential and commercial applications.",

    rating:"Up to 125A",

    poles:"SPN / TPN",

    capacity:"Multiple Outgoing Circuits",

    applications:"Residential Buildings, Retail Spaces, Offices",

    features:[

        "Compact Construction",

        "Safe Power Distribution",

        "Easy Maintenance",

        "Quality Components"

    ]
},

{
    name:"Easy9 Distribution Board",

    image:"images/easy9-distribution-board.jpg",

    description:
    "Cost-effective distribution board solution for residential and light commercial installations.",

    rating:"Up to 125A",

    poles:"SPN / TPN",

    capacity:"Residential Distribution",

    applications:"Homes, Apartments, Small Commercial Projects",

    features:[

        "Economic Solution",

        "Simple Installation",

        "Reliable Protection",

        "Compact Design"

    ]
},

{
    name:"PrismaSeT",

    image:"images/prismaset.jpg",

    description:
    "Advanced low-voltage switchboard and distribution board solution for critical power distribution systems.",

    rating:"Up to 4000A",

    poles:"Multiple Configurations",

    capacity:"Industrial Power Distribution",

    applications:"Industries, Data Centers, Utilities, Infrastructure",

    features:[

        "Scalable Architecture",

        "Advanced Safety Features",

        "High Performance",

        "Future Ready Design"

    ]
},
{
    name:"Pragma Distribution Board",

    image:"images/pragma.jpg",

    description:
    "Modular distribution board solution designed for residential and commercial electrical installations with enhanced safety and flexibility.",

    rating:"Up to 125A",

    poles:"SPN / TPN",

    capacity:"Modular Circuit Distribution",

    applications:"Homes, Apartments, Commercial Buildings",

    features:[

        "Modular Design",

        "Easy Installation",

        "Safe Power Distribution",

        "Expandable Configuration"

    ]
}

];


/* =========================
    DOM
========================= */

const sContainer =
document.getElementById("sContainer");



/* =========================
    RENDER CARDS
========================= */

function renderCards(data){

    if(data.length === 0){

        sContainer.innerHTML = `

            <div class="no-result">

                <h2>No Series Found</h2>

            </div>

        `;

        return;
    }



    let cardsHTML = "";



    data.forEach(item => {

        let featuresHTML = "";



        item.features.forEach(feature => {

            featuresHTML += `

                <li>${feature}</li>

            `;

        });



        cardsHTML += `

            <div class="s-card">

                <div class="s-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>



                <div class="s-header">

                    <div>

                        <h2>${item.name}</h2>

                        <p>${item.description}</p>

                    </div>



                    <div class="expand-icon">

                        <i class="fa-solid fa-chevron-down"></i>

                    </div>

                </div>



                <div class="s-body">

                    <div class="spec-grid">

                        <div class="spec-item">

                            <h4>Rating Range</h4>

                            <p>${item.rating}</p>

                        </div>



                        <div class="spec-item">

                            <h4>Poles</h4>

                            <p>${item.poles}</p>

                        </div>



                        <div class="spec-item">

                            <h4>Breaking Capacity</h4>

                            <p>${item.capacity}</p>

                        </div>



                        <div class="spec-item">

                            <h4>Applications</h4>

                            <p>${item.applications}</p>

                        </div>

                    </div>



                    <ul class="feature-list">

                        ${featuresHTML}

                    </ul>



                    <a
                        href="contact.html"
                        class="enquire-btn"
                    >

                        Enquire Now

                    </a>

                </div>

            </div>

        `;

    });



    sContainer.innerHTML = `

        <div class="s-grid">

            ${cardsHTML}

        </div>

    `;



    initializeAccordion();

}



/* =========================
    ACCORDION
========================= */

function initializeAccordion(){

    const headers =
    document.querySelectorAll(".s-header");



    headers.forEach(header => {

        header.addEventListener("click", () => {

            const card =
            header.parentElement;



            card.classList.toggle("active");

        });

    });

}



/* =========================
    INITIAL LOAD
========================= */

renderCards(sSeries);

/* =========================
    FAQ ACCORDION
========================= */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});