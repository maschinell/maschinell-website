/* =========================
    WALL MOUNT SERIES DATA
========================= */
const sSeries = [

{
    name:"Wall Mount Motion Sensors",

    image:"images/wall-sensor.webp",

    description:
    "Wall-mounted motion sensors designed to automatically detect movement and control lighting systems for improved convenience and energy efficiency.",

    rating:"Smart Automation",

    poles:"Wall Mounted",

    capacity:"Lighting Control",

    applications:"Offices, Corridors, Commercial Buildings",

    features:[

        "Motion Detection",

        "Automatic Lighting Control",

        "Energy Saving",

        "Reliable Operation"

    ]
},

{
    name:"Wall Mount Presence Sensors",

    image:"images/wall-presence.webp",

    description:
    "High-sensitivity presence sensors designed to detect human activity and optimize lighting performance in occupied spaces.",

    rating:"Intelligent Sensing",

    poles:"Wall Mounted",

    capacity:"Presence Monitoring",

    applications:"Workspaces, Conference Rooms, Smart Buildings",

    features:[

        "Continuous Detection",

        "Lighting Optimization",

        "Enhanced Comfort",

        "Automation Integration"

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