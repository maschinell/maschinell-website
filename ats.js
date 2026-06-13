/* =========================
ATS SERIES DATA
========================= */
const sSeries = [
{
name:"TransferPacT",
image:"images/transferpact.webp",

description:
"Automatic Transfer Switch solution for seamless transfer between utility and generator power sources.",

rating:"32A – 3200A",

poles:"3P / 4P",

capacity:"Automatic Source Transfer",

applications:"Commercial Buildings, Industries, Data Centers",

features:[

    "Automatic Source Changeover",

    "Utility to Generator Transfer",

    "Reliable Power Continuity",

    "Compact Design"

]

},
{
name:"TransferPacT Active",
image:"images/transferpact-active.webp",

description:
"Advanced ATS solution with intelligent monitoring, communication and fast transfer capabilities.",

rating:"100A – 3200A",

poles:"3P / 4P",

capacity:"Advanced Transfer Control",

applications:"Critical Infrastructure, Hospitals, Data Centers",

features:[

    "Intelligent Monitoring",

    "Communication Ready",

    "Fast Source Transfer",

    "Advanced Diagnostics"

]

},
{
name:"Source Changeover Solutions",
image:"images/source_changeover.webp",

description:
"Manual and automatic source changeover solutions for industrial and commercial power systems.",

rating:"63A – 3200A",

poles:"3P / 4P",

capacity:"Source Switching Solutions",

applications:"Industries, Utilities, Commercial Facilities",

features:[

    "Manual & Automatic Options",

    "Generator Integration",

    "Safe Source Switching",

    "High Reliability"

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