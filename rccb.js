/* =========================
RCCB / RCD SERIES DATA
========================= */
const sSeries = [
{
name:"Acti9 iID",
image:"images/acti9-ild.webp",

description:
"Advanced residual current circuit breaker designed to protect people and installations against earth leakage faults.",

rating:"25A – 125A",

poles:"2P / 4P",

capacity:"30mA – 300mA",

applications:"Commercial Buildings, Industries, Residential Projects",

features:[

    "Earth Leakage Protection",

    "Enhanced Electrical Safety",

    "Fast Fault Detection",

    "Reliable Performance"

]

},
{
name:"Easy9 RCCB",
image:"images/easy9-rccb.jpg",

description:
"Economic RCCB solution providing dependable protection against electric shock and leakage currents.",

rating:"25A – 100A",

poles:"2P / 4P",

capacity:"30mA – 300mA",

applications:"Homes, Offices, Small Commercial Installations",

features:[

    "Cost Effective Solution",

    "Easy Installation",

    "Reliable Earth Leakage Protection",

    "Compact Design"

]

},
{
name:"Acti9 RCCB Solutions",
image:"images/acti9-rccb.jpg",

description:
"Comprehensive residual current protection solutions for residential, commercial and industrial applications.",

rating:"25A – 125A",

poles:"2P / 4P",

capacity:"30mA – 500mA",

applications:"Commercial Facilities, Industrial Panels, Infrastructure",

features:[

    "High Reliability",

    "Wide Protection Range",

    "International Standards Compliance",

    "Long Service Life"

]

},
{
name:"Residual Current Protection Solutions",
image:"images/rcp-solution.webp",

description:
"Advanced protection devices designed to minimize electrical hazards caused by leakage currents.",

rating:"25A – 125A",

poles:"2P / 4P",

capacity:"30mA – 500mA",

applications:"Residential, Commercial and Industrial Installations",

features:[

    "Personnel Protection",

    "Fire Prevention Support",

    "Leakage Current Detection",

    "Enhanced Safety"

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