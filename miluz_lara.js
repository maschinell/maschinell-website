
//miluz lara data series

const sSeries = [

{
    name:"Miluz Lara Switches",

    image:"images/miluz-lara-switches.jpg",

    description:
    "Modern modular switches designed to deliver style, convenience and reliable everyday performance.",

    rating:"Modular Range",

    poles:"Multiple Configurations",

    capacity:"Residential & Commercial Applications",

    applications:"Homes, Apartments, Offices",

    features:[

        "Contemporary Design",

        "Smooth Switching Action",

        "Premium Finish",

        "Long Service Life"

    ]
},

{
    name:"Miluz Lara Sockets",

    image:"images/miluz-lara-sockets.jpg",

    description:
    "Durable and stylish socket solutions designed for safe and convenient power access.",

    rating:"6A – 16A",

    poles:"Multiple Configurations",

    capacity:"Power Connections",

    applications:"Residential Buildings, Offices, Retail Spaces",

    features:[

        "Safe Electrical Connections",

        "Reliable Performance",

        "Modern Styling",

        "Easy Installation"

    ]
},

{
    name:"Miluz Lara Fan Regulators",

    image:"images/miluz-lara-fan-regulator.webp",

    description:
    "Advanced fan speed regulators designed for smooth control and enhanced comfort.",

    rating:"Electronic Regulation",

    poles:"Modular Design",

    capacity:"Fan Speed Control",

    applications:"Homes, Hotels, Offices",

    features:[

        "Smooth Speed Control",

        "Silent Operation",

        "Energy Efficient",

        "Elegant Design"

    ]
},

{
    name:"Miluz Lara USB Chargers",

    image:"images/miluz-lara-usb.webp",

    description:
    "Integrated USB charging modules for smartphones, tablets and modern electronic devices.",

    rating:"USB Charging Modules",

    poles:"Modular Configuration",

    capacity:"Device Charging",

    applications:"Homes, Offices, Hospitality Projects",

    features:[

        "Fast Charging Support",

        "Integrated Design",

        "Space Saving Solution",

        "Modern Connectivity"

    ]
},

{
    name:"Miluz Lara Communication Modules",

    image:"images/miluz-lara-cm.jpg",

    description:
    "Communication outlets for data, telephone and television connectivity in modern installations.",

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