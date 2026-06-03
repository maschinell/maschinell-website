
//mcb data series

const sSeries = [
{
name:"Acti9 iC60",
image:"images/acti9-ic60.jpg",

description:
"Premium miniature circuit breaker range for residential, commercial and industrial protection.",

rating:"0.5A – 63A",

poles:"1P / 2P / 3P / 4P",

capacity:"6kA – 15kA",

applications:"Buildings, Industries, OEM Panels",

features:[
    "Advanced Protection",
    "High Reliability",
    "Global Standard",
    "DIN Rail Mounting"
]

},
{
name:"Acti9 iK60",
image:"images/acti9-ik60.jpg",

description:
"Reliable and cost-effective MCB solution for commercial and residential installations.",

rating:"6A – 63A",

poles:"1P / 2P / 3P / 4P",

capacity:"6kA",

applications:"Commercial Buildings, Residential Projects",

features:[
    "Compact Design",
    "Reliable Protection",
    "Easy Installation",
    "Cost Effective"
]

},
{
name:"Easy9 MCB",
image:"images/easy9-mcb.jpg",

description:
"Economic miniature circuit breaker range for residential and light commercial applications.",

rating:"6A – 63A",

poles:"1P / 2P / 3P / 4P",

capacity:"6kA",

applications:"Homes, Shops, Small Buildings",

features:[
    "Affordable Solution",
    "Electrical Safety",
    "Compact Size",
    "Easy Maintenance"
]

},
{
name:"Multi9 C60",
image:"images/multi9-c60.jpg",

description:
"Proven MCB range for industrial and commercial electrical distribution systems.",

rating:"1A – 63A",

poles:"1P / 2P / 3P / 4P",

capacity:"10kA",

applications:"Industrial Panels, Commercial Installations",

features:[
    "Industrial Reliability",
    "High Performance",
    "Long Service Life",
    "Trusted Protection"
]

},
{
name:"DC MCB Solutions",
image:"images/dc-mcb.webp",

description:
"Specialized DC protection solutions for solar and renewable energy systems.",

rating:"2A – 63A",

poles:"1P / 2P / 4P",

capacity:"DC Protection",

applications:"Solar Plants, PV Systems, Renewable Energy",

features:[
    "DC Circuit Protection",
    "Solar Ready",
    "Reliable Switching",
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