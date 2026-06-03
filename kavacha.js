/* =========================
    KAVACHA SERIES DATA
========================= */
const sSeries = [

{
    name:"Kavacha Weatherproof Switches",

    image:"images/kavacha-switches.jpg",

    description:
    "Weatherproof switches designed to provide reliable operation and protection in outdoor and demanding environments.",

    rating:"IP Rated Protection",

    poles:"Multiple Configurations",

    capacity:"Residential, Commercial & Industrial Applications",

    applications:"Factories, Gardens, Utility Areas",

    features:[

        "Weatherproof Design",

        "Dust Protection",

        "Moisture Resistance",

        "Long Service Life"

    ]
},

{
    name:"Kavacha Weatherproof Sockets",

    image:"images/kavacha-sockets.jpg",

    description:
    "Durable weatherproof sockets engineered for safe power access in outdoor and industrial installations.",

    rating:"6A – 16A",

    poles:"Multiple Configurations",

    capacity:"Power Distribution",

    applications:"Workshops, Warehouses, Outdoor Facilities",

    features:[

        "Safe Power Connections",

        "IP Rated Construction",

        "Durable Housing",

        "Reliable Performance"

    ]
},

{
    name:"Kavacha Switched Socket Outlets",

    image:"images/kavacha-socket-outlet.jpg",

    description:
    "Weatherproof switched socket outlets combining convenience, safety and protection for demanding applications.",

    rating:"Industrial Grade",

    poles:"Multiple Options",

    capacity:"Power Access & Control",

    applications:"Factories, Utility Areas, Construction Sites",

    features:[

        "Integrated Switching",

        "Weather Resistant",

        "Enhanced Safety",

        "Easy Operation"

    ]
},

{
    name:"Kavacha Junction Boxes & Enclosures",

    image:"images/kavacha-jxn.png",

    description:
    "Protective junction boxes and enclosures designed to safeguard electrical connections in harsh environments.",

    rating:"IP Rated Enclosures",

    poles:"Multiple Sizes",

    capacity:"Cable & Connection Protection",

    applications:"Outdoor Installations, Industrial Facilities",

    features:[

        "Dust Resistant",

        "Water Resistant",

        "Robust Construction",

        "Electrical Protection"

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