//swtich-disconnectors data series
const sSeries = [

{
    name:"Compact INS",

    image:"images/compactins.jpg",

    description:
    "High-performance switch disconnector range designed for safe isolation and power distribution applications.",

    rating:"100A – 3200A",

    poles:"3P / 4P",

    capacity:"Industrial Isolation",

    applications:"Industrial Plants, Commercial Buildings, Infrastructure",

    features:[

        "Safe Circuit Isolation",

        "Load Switching Capability",

        "High Reliability",

        "Industrial Grade Design"

    ]
},

{
    name:"Compact INV",

    image:"images/compactinv.jpg",

    description:
    "Motorized switch disconnector solution for remote operation and critical power applications.",

    rating:"100A – 3200A",

    poles:"3P / 4P",

    capacity:"Remote Switching",

    applications:"Utilities, Data Centers, Critical Facilities",

    features:[

        "Motorized Operation",

        "Remote Control Capability",

        "Reliable Switching",

        "Enhanced Operational Safety"

    ]
},

{
    name:"EasyPact Switch Disconnectors",

    image:"images/easypact-switch.webp",

    description:
    "Cost-effective switch disconnector solution for industrial and commercial installations.",

    rating:"32A – 1600A",

    poles:"3P / 4P",

    capacity:"Load Isolation",

    applications:"Commercial Buildings, Distribution Panels, OEMs",

    features:[

        "Economic Solution",

        "Compact Design",

        "Safe Disconnection",

        "Easy Installation"

    ]
},

{
    name:"Acti9 Isolators",

    image:"images/acti9-isloator.jpg",

    description:
    "Modular isolators designed for residential and commercial electrical distribution systems.",

    rating:"20A – 125A",

    poles:"1P / 2P / 3P / 4P",

    capacity:"Modular Isolation",

    applications:"Residential Buildings, Offices, Retail Spaces",

    features:[

        "DIN Rail Mounting",

        "Compact Construction",

        "Reliable Isolation",

        "Easy Maintenance"

    ]
},

{
    name:"TeSys Safety Switches",

    image:"images/tesys-safety.webp",

    description:
    "Safety switch solutions for machine isolation and maintenance operations.",

    rating:"20A – 800A",

    poles:"3P / 4P",

    capacity:"Machine Isolation",

    applications:"Industrial Machinery, Manufacturing Facilities",

    features:[

        "Machine Safety Compliance",

        "Lockable Handle",

        "Safe Maintenance Isolation",

        "Industrial Durability"

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