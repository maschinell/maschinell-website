/* =========================
UNICA SERIES DATA
========================= */
const sSeries = [

{
    name:"Unica Switches",

    image:"images/unica-switches.webp",

    description:
    "Premium modular switches designed for luxury homes, offices and modern commercial spaces.",

    rating:"Modular Range",

    poles:"Multiple Configurations",

    capacity:"Residential & Commercial Applications",

    applications:"Homes, Offices, Hotels",

    features:[

        "Premium Design",

        "Smooth Operation",

        "Modern Finishes",

        "Long Service Life"

    ]
},

{
    name:"Unica Sockets",

    image:"images/unica-sockets.webp",

    description:
    "Elegant and reliable socket solutions for modern electrical installations.",

    rating:"6A – 16A",

    poles:"Multiple Configurations",

    capacity:"Power Connections",

    applications:"Residential, Commercial & Hospitality",

    features:[

        "Safe Electrical Connections",

        "Durable Construction",

        "Premium Styling",

        "Easy Installation"

    ]
},

{
    name:"Unica USB Chargers",

    image:"images/unica-usb.webp",

    description:
    "Integrated USB charging modules for smartphones, tablets and modern electronic devices.",

    rating:"USB Charging Modules",

    poles:"Modular Configuration",

    capacity:"Device Charging",

    applications:"Homes, Offices, Hotels",

    features:[

        "Integrated USB Charging",

        "Space Saving Design",

        "Modern Connectivity",

        "Convenient Everyday Use"

    ]
},

{
    name:"Unica Fan Regulators & Dimmers",

    image:"images/unica-fan-regulator.webp",

    description:
    "Advanced fan speed regulators and dimmers designed for comfort and energy efficiency.",

    rating:"Electronic Control",

    poles:"Modular Design",

    capacity:"Fan & Lighting Control",

    applications:"Homes, Hotels, Commercial Spaces",

    features:[

        "Smooth Speed Control",

        "Lighting Dimming",

        "Energy Efficient",

        "Premium User Experience"

    ]
},

{
    name:"Unica Communication & Smart Solutions",

    image:"images/unica-ss.webp",

    description:
    "Communication modules and smart control solutions for connected homes and intelligent buildings.",

    rating:"Communication & Smart Modules",

    poles:"Multiple Options",

    capacity:"Voice, Data & Smart Control",

    applications:"Smart Homes, Offices, Commercial Buildings",

    features:[

        "Data & Telephone Outlets",

        "TV Connectivity",

        "Smart Home Integration",

        "Modern Building Solutions"

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