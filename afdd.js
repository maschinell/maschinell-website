/* =========================
    AFDD SERIES DATA
========================= */

const sSeries = [

{
    name:"Acti9 Active AFDD",

    image:"images/acti9-active-afdd.webp",

    description:
    "Advanced Arc Fault Detection Device designed to identify dangerous electrical arc faults and reduce fire risks.",

    rating:"6A – 40A",

    poles:"1P+N",

    capacity:"Arc Fault Detection",

    applications:"Residential Buildings, Offices, Schools",

    features:[

        "Arc Fault Detection",

        "Electrical Fire Prevention",

        "Continuous Circuit Monitoring",

        "Enhanced Electrical Safety"

    ]
},

{
    name:"Acti9 AFDD + MCB",

    image:"images/acti9-afdd+mcb.webp",

    description:
    "Integrated AFDD and MCB solution providing arc fault, overload and short circuit protection.",

    rating:"6A – 40A",

    poles:"1P+N",

    capacity:"Combined Protection",

    applications:"Homes, Commercial Buildings, Public Facilities",

    features:[

        "Arc Fault Protection",

        "Overload Protection",

        "Short Circuit Protection",

        "Compact Installation"

    ]
},

{
    name:"Acti9 AFDD + RCBO",

    image:"images/afdd-rcbo.webp",

    description:
    "Comprehensive protection solution combining AFDD, residual current protection and circuit protection in a single device.",

    rating:"6A – 40A",

    poles:"1P+N",

    capacity:"Integrated Safety Protection",

    applications:"Hospitals, Apartments, Critical Installations",

    features:[

        "Arc Fault Detection",

        "Earth Leakage Protection",

        "Electric Shock Protection",

        "Advanced Fire Prevention"

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