/* =========================
SURGE PROTECTION SERIES DATA
========================= */
const sSeries = [

{
    name:"Acti9 iPRD",

    image:"images/acti9-iprd.jpg",

    description:
    "Advanced surge protection device designed to protect electrical installations against transient overvoltages caused by lightning and switching events.",

    rating:"Type 1 + Type 2 SPD",

    poles:"1P / 2P / 3P / 4P",

    capacity:"Up to 65kA",

    applications:"Commercial Buildings, Industrial Facilities, Infrastructure",

    features:[

        "Lightning Protection",

        "Transient Overvoltage Protection",

        "Visual Status Indicator",

        "High Discharge Capacity"

    ]
},

{
    name:"Acti9 iQuick PRD",

    image:"images/acti9-iquick-prd.jpg",

    description:
    "Plug-in surge protection solution designed for quick replacement and reduced downtime.",

    rating:"Type 2 SPD",

    poles:"1P / 2P / 3P / 4P",

    capacity:"Up to 40kA",

    applications:"Distribution Boards, Commercial Installations",

    features:[

        "Quick Replacement Cartridge",

        "Easy Maintenance",

        "Reliable Surge Protection",

        "Compact Design"

    ]
},

{
    name:"Easy9 SPD",

    image:"images/easy9-spd.jpg",

    description:
    "Cost-effective surge protection device for residential and light commercial applications.",

    rating:"Type 2 SPD",

    poles:"1P+N / 3P+N",

    capacity:"Up to 20kA",

    applications:"Homes, Apartments, Small Commercial Buildings",

    features:[

        "Affordable Protection",

        "Compact Construction",

        "Easy Installation",

        "Reliable Equipment Protection"

    ]
},

{
    name:"SurgeArrest Performance",

    image:"images/surgearrest.jpg",

    description:
    "High-performance surge protection solution for critical electrical and electronic equipment.",

    rating:"Premium Protection",

    poles:"Multiple Configurations",

    capacity:"Advanced Surge Handling",

    applications:"Data Centers, IT Infrastructure, Industrial Systems",

    features:[

        "Premium Protection",

        "Sensitive Equipment Safety",

        "High Reliability",

        "Enhanced Power Quality"

    ]
},

{
    name:"SurgeArrest Essential",

    image:"images/surgearrest-essential.jpg",

    description:
    "Reliable surge protection solution for everyday electrical installations.",

    rating:"Essential Protection",

    poles:"Multiple Configurations",

    capacity:"Standard Surge Protection",

    applications:"Residential and Commercial Installations",

    features:[

        "Basic Surge Protection",

        "Equipment Safety",

        "Cost Effective",

        "Easy Deployment"

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