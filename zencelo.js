
//zencelo data series
const sSeries = [

{
    name:"Zencelo Full-Flat Switches",

    image:"images/zencelo-switches.jpg",

    description:
    "Premium full-flat modular switches featuring minimalist aesthetics and smooth operation for modern interiors.",

    rating:"Premium Modular Range",

    poles:"Multiple Configurations",

    capacity:"Residential & Commercial Applications",

    applications:"Luxury Homes, Offices, Hotels",

    features:[

        "Full-Flat Design",

        "Premium Finish",

        "Smooth Operation",

        "Modern Aesthetics"

    ]
},

{
    name:"Zencelo Sockets",

    image:"images/zencelo-sockets.jpg",

    description:
    "Elegant socket solutions designed to provide safe, reliable and convenient power access.",

    rating:"6A – 16A",

    poles:"Multiple Configurations",

    capacity:"Power Connections",

    applications:"Homes, Apartments, Commercial Spaces",

    features:[

        "Safe Electrical Connections",

        "Contemporary Styling",

        "Durable Construction",

        "Easy Installation"

    ]
},

{
    name:"Zencelo USB Chargers",

    image:"images/zencelo-usb.jpg",

    description:
    "Integrated USB charging modules designed for modern lifestyles and connected spaces.",

    rating:"USB Charging Modules",

    poles:"Modular Configuration",

    capacity:"Mobile Device Charging",

    applications:"Homes, Hotels, Offices",

    features:[

        "Fast Charging Support",

        "Integrated Design",

        "Space Saving",

        "Modern Connectivity"

    ]
},

{
    name:"Zencelo Dimmers & Fan Regulators",

    image:"images/zencelo-fan-regulator.webp",

    description:
    "Advanced dimmers and fan regulators offering precise control, comfort and energy efficiency.",

    rating:"Electronic Control",

    poles:"Modular Design",

    capacity:"Lighting & Fan Control",

    applications:"Luxury Homes, Hospitality Projects",

    features:[

        "Lighting Dimming",

        "Fan Speed Control",

        "Energy Efficient",

        "Premium User Experience"

    ]
},

{
    name:"Zencelo Communication Modules",

    image:"images/zencelo-cm.jpg",

    description:
    "Data, telephone and TV outlets designed for modern communication and multimedia requirements.",

    rating:"Communication Modules",

    poles:"Multiple Options",

    capacity:"Voice, Data & TV Connectivity",

    applications:"Homes, Offices, Commercial Buildings",

    features:[

        "Data Connectivity",

        "Telephone Outlets",

        "TV Connections",

        "Modular Integration"

    ]
},


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