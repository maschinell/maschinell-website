/* =========================
    MCCB SERIES DATA
========================= */

const sSeries = [

{
    name:"EasyPact CVS",

    image:"images/easypact-cvs.webp",

    description:
    "Economic MCCB solution for commercial and industrial applications.",

    rating:"16A – 630A & 800A – 1250A ",

    poles:"3P / 4P",

    capacity:"25kA – 50kA",

    applications:"Panels, Distribution Boards, OEMs",

    features:[

        "Thermal Magnetic Protection",

        "Compact Design",

        "Reliable Short Circuit Protection",

        "Suitable for Commercial Buildings"

    ]
},



{
    name:"Compact NSX",

    image:"images/compact-nsx.webp",

    description:
    "Advanced MCCB range with intelligent protection and monitoring.",

    rating:"100A – 630A",

    poles:"3P / 4P",

    capacity:"36kA – 150kA",

    applications:"Industrial Plants, Infrastructure",

    features:[

        "Electronic Trip Units",

        "Energy Monitoring",

        "Advanced Protection",

        "Communication Ready"

    ]
},



{
    name:"Compact NS",

    image:"images/compact-ns.webp",

    description:
    "Industrial MCCB range for heavy duty applications.",

    rating:"630A – 3200A",

    poles:"3P / 4P",

    capacity:"50kA – 150kA",

    applications:"Large Industries, Utilities",

    features:[

        "High Current Ratings",

        "Heavy Duty Performance",

        "Motor Protection",

        "Industrial Reliability"

    ]
},



{
    name:"EasyPact EZC",

    image:"images/easypact-ezc.webp",

    description:
    "Compact and cost effective MCCB range.",

    rating:"100A – 250A",

    poles:"3P / 4P",

    capacity:"25kA – 36kA",

    applications:"Panel Builders, Commercial Projects",

    features:[

        "Economic Solution",

        "Compact Footprint",

        "Easy Installation",

        "Reliable Protection"

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