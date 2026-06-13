/* =========================
    ACB SERIES DATA
========================= */

const sSeries = [
{
name:"Masterpact MTZ",
image:"images/masterpactmtz.webp",

description:
"Premium intelligent Air Circuit Breaker with advanced protection, monitoring and communication capabilities.",

rating:"630A – 6300A",

poles:"3P / 4P",

capacity:"42kA – 150kA",

applications:"Data Centers, Industries, Critical Infrastructure",

features:[

    "Digital Trip Units",

    "Energy Monitoring",

    "EcoStruxure Ready",

    "Advanced Communication"

]

},
{
name:"Masterpact NW",
image:"images/masterpactnw.webp",

description:
"Industrial Air Circuit Breaker designed for high-performance power distribution systems.",

rating:"800A – 6300A",

poles:"3P / 4P",

capacity:"42kA – 150kA",

applications:"Industrial Plants, Utilities, Infrastructure",

features:[

    "High Breaking Capacity",

    "Reliable Protection",

    "Industrial Grade Performance",

    "Long Service Life"

]

},
{
name:"EasyPact MVS",
image:"images/easypactmvs.webp",

description:
"Economical Air Circuit Breaker solution for commercial and industrial power distribution.",

rating:"800A – 4000A",

poles:"3P / 4P",

capacity:"50kA – 100kA",

applications:"Commercial Buildings, OEM Panels, Industries",

features:[

    "Cost Effective Solution",

    "Easy Installation",

    "Reliable Protection",

    "Compact Design"

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