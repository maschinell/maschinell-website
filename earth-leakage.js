/* =========================
EARTH LEAKAGE SERIES DATA
========================= */
const sSeries = [

{
    name:"Acti9 Vigi",

    image:"images/acti9-vigi.webp",

    description:
    "Residual current protection solution designed to detect earth leakage faults and improve electrical safety.",

    rating:"25A – 125A",

    poles:"2P / 4P",

    capacity:"30mA – 3000mA",

    applications:"Commercial Buildings, Residential Installations",

    features:[

        "Earth Leakage Detection",

        "Personnel Protection",

        "Electrical Safety Compliance",

        "Easy Integration with Acti9 Devices"

    ]
},

{
    name:"Vigi Modules",

    image:"images/vigi-module.jpg",

    description:
    "Add-on earth leakage protection modules for Schneider circuit breakers.",

    rating:"Up to 630A",

    poles:"2P / 3P / 4P",

    capacity:"30mA – 3000mA",

    applications:"Distribution Boards, Industrial Panels",

    features:[

        "Modular Installation",

        "Reliable Earth Fault Protection",

        "Wide Compatibility",

        "Flexible Configuration"

    ]
},

{
    name:"Vigirex Earth Leakage Relays",

    image:"images/vigirex-earth.jpg",

    description:
    "Advanced earth leakage relays for continuous monitoring and protection of electrical systems.",

    rating:"Custom System Ratings",

    poles:"System Monitoring",

    capacity:"Adjustable Leakage Settings",

    applications:"Industrial Facilities, Utilities, Critical Infrastructure",

    features:[

        "Continuous Monitoring",

        "Adjustable Sensitivity",

        "Remote Signalling",

        "Advanced Earth Fault Detection"

    ]
},

{
    name:"PowerLogic Earth Leakage Monitoring",

    image:"images/earth-leakage-mointoring.jpg",

    description:
    "Intelligent monitoring solution for leakage current analysis and preventive maintenance.",

    rating:"System Wide Monitoring",

    poles:"Multi-Circuit Monitoring",

    capacity:"Real-Time Analysis",

    applications:"Data Centers, Hospitals, Commercial Buildings",

    features:[

        "Leakage Current Monitoring",

        "Predictive Maintenance",

        "Power Quality Analysis",

        "Enhanced System Reliability"

    ]
},

{
    name:"Core Balance Current Transformers (CBCT)",

    image:"images/cbct.jpg",

    description:
    "Current transformers designed to work with earth leakage relays for accurate earth fault detection and monitoring.",

    rating:"Various System Ratings",

    poles:"System Monitoring",

    capacity:"Earth Leakage Sensing",

    applications:"Industrial Plants, Utilities, Critical Infrastructure",

    features:[

        "High Accuracy Detection",

        "Compatible with Vigirex Relays",

        "Reliable Earth Fault Sensing",

        "Industrial Grade Construction"

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