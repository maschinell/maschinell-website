/* =========================
PRATIKA  SERIES DATA
========================= */
const sSeries = [

{
    name:"PratiKa Industrial Plugs",

    image:"images/pratika-plug.webp",

    description:
    "Industrial plugs designed for safe, secure and reliable power connections in demanding industrial and commercial environments.",

    rating:"Industrial Grade",

    poles:"2P, 3P, 4P & 5P",

    capacity:"Industrial Power Distribution",

    applications:"Factories, Construction Sites, Workshops",

    features:[

        "Robust Construction",

        "Secure Connections",

        "Industrial Reliability",

        "Long Service Life"

    ]
},

{
    name:"PratiKa Industrial Sockets",

    image:"images/pratika-socket.webp",

    description:
    "Industrial sockets engineered to provide dependable electrical connectivity and operational safety in industrial installations.",

    rating:"Industrial Duty",

    poles:"Multiple Configurations",

    capacity:"Power Distribution Applications",

    applications:"Warehouses, Manufacturing Plants, Utility Areas",

    features:[

        "Reliable Connectivity",

        "Enhanced Safety",

        "Durable Design",

        "Easy Installation"

    ]
},

{
    name:"PratiKa Connectors & Couplers",

    image:"images/pratika-connector.webp",

    description:
    "Industrial connectors and couplers designed for quick, secure and efficient electrical connections across a wide range of applications.",

    rating:"Industrial Performance",

    poles:"Multiple Pole Options",

    capacity:"Industrial Connectivity",

    applications:"Infrastructure Projects, Construction Sites",

    features:[

        "Quick Connection",

        "Secure Locking",

        "Reliable Operation",

        "Industrial Durability"

    ]
},

{
    name:"PratiKa Appliance Inlets",

    image:"images/pratika-inlet.webp",

    description:
    "Appliance inlets designed to provide safe and reliable incoming power connections for industrial equipment and machinery.",

    rating:"Industrial Grade",

    poles:"Multiple Configurations",

    capacity:"Equipment Power Supply",

    applications:"Machines, Control Panels, Industrial Equipment",

    features:[

        "Safe Power Entry",

        "Durable Construction",

        "Reliable Performance",

        "Easy Integration"

    ]
},

{
    name:"PratiKa Panel Mounted Sockets",

    image:"images/pratika-mounted-socket.webp",

    description:
    "Panel mounted industrial sockets designed for electrical panels, distribution systems and industrial equipment installations.",

    rating:"Industrial Application",

    poles:"Various Configurations",

    capacity:"Panel Integration",

    applications:"Control Panels, Distribution Boards, Machinery",

    features:[

        "Panel Mount Design",

        "Secure Installation",

        "Industrial Reliability",

        "Space Efficient"

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