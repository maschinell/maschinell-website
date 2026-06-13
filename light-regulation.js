/* =========================
    LIGHT REGULATION SENSOR SERIES DATA
========================= */
const sSeries = [

{
    name:"Daylight Sensors",

    image:"images/light-daylight.webp",

    description:
    "Daylight sensors designed to automatically adjust artificial lighting levels based on available natural daylight, improving comfort and energy efficiency.",

    rating:"Smart Lighting",

    poles:"Automatic Sensing",

    capacity:"Daylight Monitoring",

    applications:"Offices, Schools, Commercial Buildings",

    features:[

        "Daylight Detection",

        "Automatic Adjustment",

        "Energy Savings",

        "Enhanced Comfort"

    ]
},

{
    name:"Lux Sensors",

    image:"images/light-lux.webp",

    description:
    "Lux sensors measure ambient light levels and enable intelligent lighting control to maintain optimal illumination conditions.",

    rating:"Lighting Automation",

    poles:"Light Measurement",

    capacity:"Illumination Control",

    applications:"Smart Buildings, Retail Spaces, Offices",

    features:[

        "Accurate Light Measurement",

        "Automatic Control",

        "Improved Efficiency",

        "Reliable Operation"

    ]
},

{
    name:"Light Level Sensors",

    image:"images/light-lls.webp",

    description:
    "Light level sensors continuously monitor environmental lighting conditions and optimize artificial lighting usage.",

    rating:"Energy Efficient",

    poles:"Sensor Based Control",

    capacity:"Lighting Optimization",

    applications:"Commercial Facilities, Educational Institutions",

    features:[

        "Continuous Monitoring",

        "Lighting Optimization",

        "Reduced Energy Consumption",

        "Smart Integration"

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