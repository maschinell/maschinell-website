/* =========================
OPALE SERIES DATA
========================= */
const sSeries = [

{
    name:"Opale Switches",

    image:"images/opale-swtiches.webp",

    description:
    "Stylish modular switches designed for modern residential and commercial interiors.",

    rating:"Modular Range",

    poles:"Multiple Configurations",

    capacity:"Residential & Commercial Applications",

    applications:"Homes, Apartments, Offices",

    features:[

        "Contemporary Design",

        "Smooth Operation",

        "Long Service Life",

        "Premium Finish"

    ]
},

{
    name:"Opale Sockets",

    image:"images/oplae-sockets.webp",

    description:
    "Reliable and elegant socket solutions for safe and convenient power access.",

    rating:"6A – 16A",

    poles:"Multiple Configurations",

    capacity:"Power Connections",

    applications:"Residential Buildings, Offices, Retail Spaces",

    features:[

        "Safe Electrical Connections",

        "Durable Construction",

        "Modern Styling",

        "Easy Installation"

    ]
},

{
    name:"Opale Fan Regulators",

    image:"images/opale-fan-regulator.webp",

    description:
    "Efficient fan speed regulators designed for comfort and smooth control.",

    rating:"Electronic Regulation",

    poles:"Modular Design",

    capacity:"Fan Control",

    applications:"Homes, Hotels, Offices",

    features:[

        "Smooth Speed Control",

        "Silent Operation",

        "Energy Efficient",

        "Stylish Design"

    ]
},
{
    name:"Opale Modular Accessories",

    image:"images/oplae-ma.webp",

    description:
    "A range of modular electrical accessories designed to complement Opale switches and sockets for modern installations.",

    rating:"Modular Range",

    poles:"Multiple Configurations",

    capacity:"Residential & Commercial Applications",

    applications:"Homes, Apartments, Offices",

    features:[

        "Modular Design",

        "Easy Installation",

        "Reliable Performance",

        "Contemporary Styling"

    ]
},

{
    name:"Opale USB Chargers",

    image:"images/opale-usb.webp",

    description:
    "Integrated USB charging modules for modern homes and workspaces.",

    rating:"USB Charging Modules",

    poles:"Modular Configuration",

    capacity:"Mobile Device Charging",

    applications:"Homes, Offices, Hospitality Projects",

    features:[

        "Fast Charging Support",

        "Space Saving Design",

        "Modern Connectivity",

        "Easy Integration"

    ]
},

{
    name:"Opale Communication Modules",

    image:"images/opale-cm.webp",

    description:
    "Telephone, data and TV outlets designed for modern communication requirements.",

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