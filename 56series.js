/* =========================
    56 SERIES DATA
========================= */
const sSeries = [

{
    name:"56 Series Industrial Plugs",

    image:"images/56series-plug.webp",

    description:
    "Heavy-duty industrial plugs designed for safe and reliable power connections in demanding industrial and outdoor environments.",

    rating:"IP56 / IP66",

    poles:"2P, 3P, 4P & 5P",

    capacity:"Industrial Power Applications",

    applications:"Factories, Construction Sites, Workshops",

    features:[

        "Weatherproof Design",

        "Industrial Grade Construction",

        "Secure Connections",

        "Long Service Life"

    ]
},

{
    name:"56 Series Industrial Sockets",

    image:"images/56series-sockets.webp",

    description:
    "Industrial sockets engineered for dependable power distribution and protection in harsh operating conditions.",

    rating:"IP56 / IP66",

    poles:"Multiple Configurations",

    capacity:"Industrial & Commercial Installations",

    applications:"Warehouses, Manufacturing Plants, Utility Areas",

    features:[

        "Dust & Water Protection",

        "Safe Electrical Connections",

        "Durable Housing",

        "Reliable Operation"

    ]
},

{
    name:"56 Series Switched Socket Outlets",

    image:"images/56series-outlet.webp",

    description:
    "Switched socket outlets combining power connection and isolation functionality for improved safety and convenience.",

    rating:"Industrial Duty",

    poles:"Multiple Pole Options",

    capacity:"Power Control & Distribution",

    applications:"Factories, Workshops, Commercial Facilities",

    features:[

        "Integrated Switching",

        "Enhanced Safety",

        "Weather Resistant",

        "Industrial Reliability"

    ]
},

{
    name:"56 Series Weatherproof Electrical Solutions",

    image:"images/56series-weatherproof.webp",

    description:
    "Comprehensive weatherproof industrial electrical solutions designed for outdoor and harsh environmental applications.",

    rating:"IP56 / IP66 Protection",

    poles:"Various Configurations",

    capacity:"Industrial & Outdoor Applications",

    applications:"Outdoor Facilities, Utilities, Infrastructure Projects",

    features:[

        "Weatherproof Protection",

        "Industrial Durability",

        "Safe Power Distribution",

        "Long-Term Reliability"

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