/* =========================
  WISER SERIES DATA
========================= */
const sSeries = [

{
    name:"Wiser Smart Home Automation",

    image:"images/wiser-smarthome.webp",

    description:
    "An intelligent home automation platform that enables seamless control of lighting, energy usage and connected devices for enhanced comfort and convenience.",

    rating:"Smart Living",

    poles:"Connected Ecosystem",

    capacity:"Whole Home Automation",

    applications:"Homes, Apartments, Villas",

    features:[

        "Smart Automation",

        "Remote Access",

        "Connected Living",

        "User-Friendly Control"

    ]
},

{
    name:"Wiser Smart Lighting Control",

    image:"images/wiser-lighting.webp",

    description:
    "Advanced smart lighting solutions that allow users to control, schedule and optimize lighting for improved comfort and energy efficiency.",

    rating:"Energy Efficient",

    poles:"Smart Control",

    capacity:"Residential Lighting",

    applications:"Homes, Hotels, Smart Buildings",

    features:[

        "Lighting Schedules",

        "Scene Control",

        "Remote Operation",

        "Energy Savings"

    ]
},

{
    name:"Wiser Energy Management",

    image:"images/wiser-energy.webp",

    description:
    "Intelligent energy management solutions that help monitor, analyze and optimize electricity consumption for improved efficiency.",

    rating:"Smart Monitoring",

    poles:"Connected System",

    capacity:"Energy Optimization",

    applications:"Homes, Residential Projects, Buildings",

    features:[

        "Energy Monitoring",

        "Consumption Insights",

        "Efficiency Optimization",

        "Cost Reduction"

    ]
},

{
    name:"Wiser Connected Devices",

    image:"images/wiser-connected.webp",

    description:
    "Connected home devices designed to work seamlessly within the Wiser ecosystem for enhanced automation and control.",

    rating:"Smart Connectivity",

    poles:"Integrated Platform",

    capacity:"Home Integration",

    applications:"Smart Homes, Apartments, Villas",

    features:[

        "Device Integration",

        "Remote Monitoring",

        "Smart Control",

        "Connected Ecosystem"

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