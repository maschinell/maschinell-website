/* =========================
  OCCUPANCY SENSOR SERIES DATA
========================= */
const sSeries = [

{
    name:"Ceiling Mount Occupancy Sensors",

    image:"images/occupancy-sensor.webp",

    description:
    "Occupancy sensors designed to automatically control lighting and electrical loads based on room occupancy for improved energy efficiency.",

    rating:"Occupancy Detection",

    poles:"Ceiling Mounted",

    capacity:"Lighting Control",

    applications:"Offices, Meeting Rooms, Classrooms",

    features:[

        "Automatic Occupancy Detection",

        "Energy Savings",

        "Reliable Performance",

        "Lighting Automation"

    ]
},
{
    name:"Presence Detection Sensors",

    image:"images/occupancy-presence.jpg",

    description:
    "Advanced presence sensors capable of detecting occupant activity for enhanced comfort and efficient building management.",

    rating:"Presence Sensing",

    poles:"Smart Detection",

    capacity:"Automation Control",

    applications:"Offices, Healthcare Facilities, Smart Buildings",

    features:[

        "High Detection Accuracy",

        "Enhanced Comfort",

        "Automatic Control",

        "Smart Building Integration"

    ]
},

{
    name:"Lighting Control Occupancy Sensors",

    image:"images/occupancy-control.jpg",

    description:
    "Occupancy sensors designed to optimize lighting systems by automatically switching lights based on room usage.",

    rating:"Lighting Automation",

    poles:"Occupancy Control",

    capacity:"Energy Management",

    applications:"Schools, Hospitals, Offices",

    features:[

        "Automatic Lighting Control",

        "Reduced Energy Consumption",

        "Improved Efficiency",

        "Reliable Operation"

    ]
},

{
    name:"Smart Building Occupancy Solutions",

    image:"images/occupancy-building.jpg",

    description:
    "Integrated occupancy sensing solutions that support building automation, energy management and occupant comfort.",

    rating:"Building Automation",

    poles:"Integrated Solution",

    capacity:"Smart Building Control",

    applications:"Commercial Buildings, Hospitality Projects, Smart Facilities",

    features:[

        "Building Automation Integration",

        "Occupancy Analytics",

        "Energy Optimization",

        "Enhanced User Experience"

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