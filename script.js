/* =====================================================
   EDUPATH
   UNIVERSITY & SCHOLARSHIP FINDER
===================================================== */


/* =====================================================
   UNIVERSITY DATA
   -----------------------------------------------------
   These are demonstration records for the prototype.
   Verify current information before publishing.
===================================================== */

const universities = [

    {
        name: "University of Rwanda",
        country: "Rwanda",
        city: "Kigali",
        fields: [
            "Engineering",
            "Medicine",
            "Computer Science",
            "Business"
        ],
        levels: [
            "Bachelor",
            "Master",
            "PhD"
        ],
        type: "Public University",
        website: "https://www.ur.ac.rw/"
    },

    {
        name: "Tsinghua University",
        country: "China",
        city: "Beijing",
        fields: [
            "Engineering",
            "Computer Science",
            "Biomedical Engineering"
        ],
        levels: [
            "Bachelor",
            "Master",
            "PhD"
        ],
        type: "Public University",
        website: "https://www.tsinghua.edu.cn/"
    },

    {
        name: "University of Cape Town",
        country: "South Africa",
        city: "Cape Town",
        fields: [
            "Medicine",
            "Engineering",
            "Business",
            "Computer Science"
        ],
        levels: [
            "Bachelor",
            "Master",
            "PhD"
        ],
        type: "Public University",
        website: "https://www.uct.ac.za/"
    },

    {
        name: "University of Nairobi",
        country: "Kenya",
        city: "Nairobi",
        fields: [
            "Engineering",
            "Medicine",
            "Business",
            "Science"
        ],
        levels: [
            "Bachelor",
            "Master",
            "PhD"
        ],
        type: "Public University",
        website: "https://www.uonbi.ac.ke/"
    },

    {
        name: "University of Oxford",
        country: "United Kingdom",
        city: "Oxford",
        fields: [
            "Medicine",
            "Computer Science",
            "Engineering",
            "Law"
        ],
        levels: [
            "Bachelor",
            "Master",
            "PhD"
        ],
        type: "Public University",
        website: "https://www.ox.ac.uk/"
    }

];


/* =====================================================
   SCHOLARSHIP DATA
   -----------------------------------------------------
   These are DEMONSTRATION records.
   Replace them with verified scholarship information
   and official application links before deployment.
===================================================== */

const scholarships = [

    {
        name: "Global Undergraduate Scholarship",
        provider: "Demo Scholarship Provider",
        country: "China",
        fields: [
            "Engineering",
            "Science",
            "Computer Science"
        ],
        level: "Bachelor",
        funding: "Fully Funded",
        deadline: "October 15, 2026",
        officialUrl: "#"
    },

    {
        name: "African Students Scholarship",
        provider: "Demo Scholarship Provider",
        country: "South Africa",
        fields: [
            "Engineering",
            "Business",
            "Technology"
        ],
        level: "Bachelor",
        funding: "Partial Funding",
        deadline: "November 30, 2026",
        officialUrl: "#"
    },

    {
        name: "International Excellence Scholarship",
        provider: "Demo University",
        country: "Canada",
        fields: [
            "Science",
            "Engineering",
            "Business"
        ],
        level: "Bachelor",
        funding: "Fully Funded",
        deadline: "December 10, 2026",
        officialUrl: "#"
    },

    {
        name: "Global Master's Scholarship",
        provider: "Demo Education Foundation",
        country: "United Kingdom",
        fields: [
            "Computer Science",
            "Engineering",
            "Research"
        ],
        level: "Master",
        funding: "Fully Funded",
        deadline: "January 20, 2027",
        officialUrl: "#"
    },

    {
        name: "Future Leaders Scholarship",
        provider: "Demo Foundation",
        country: "Canada",
        fields: [
            "Business",
            "Technology",
            "Science"
        ],
        level: "Bachelor",
        funding: "Partial Funding",
        deadline: "February 5, 2027",
        officialUrl: "#"
    }

];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const universitySearch =
    document.getElementById("universitySearch");

const universityCountry =
    document.getElementById("universityCountry");

const universityLevel =
    document.getElementById("universityLevel");

const universityResults =
    document.getElementById("universityResults");

const universityCount =
    document.getElementById("universityCount");

const universityNoResults =
    document.getElementById("universityNoResults");


const scholarshipSearch =
    document.getElementById("scholarshipSearch");

const scholarshipCountry =
    document.getElementById("scholarshipCountry");

const fundingType =
    document.getElementById("fundingType");

const scholarshipResults =
    document.getElementById("scholarshipResults");

const scholarshipCount =
    document.getElementById("scholarshipCount");

const scholarshipNoResults =
    document.getElementById("scholarshipNoResults");


/* =====================================================
   UNIVERSITY SEARCH
===================================================== */

function filterUniversities() {

    const search =
        universitySearch.value
            .trim()
            .toLowerCase();

    const country =
        universityCountry.value;

    const level =
        universityLevel.value;


    const filtered =
        universities.filter(function (university) {

            const searchableText = (

                university.name +
                " " +
                university.country +
                " " +
                university.city +
                " " +
                university.fields.join(" ") +
                " " +
                university.levels.join(" ")

            ).toLowerCase();


            const matchesSearch =
                search === "" ||
                searchableText.includes(search);


            const matchesCountry =
                country === "all" ||
                university.country === country;


            const matchesLevel =
                level === "all" ||
                university.levels.includes(level);


            return (
                matchesSearch &&
                matchesCountry &&
                matchesLevel
            );

        });


    displayUniversities(filtered);

}


/* =====================================================
   DISPLAY UNIVERSITIES
===================================================== */

function displayUniversities(list) {

    universityResults.innerHTML = "";


    universityCount.textContent =
        `Showing ${list.length} university` +
        `${list.length === 1 ? "" : "ies"}`;


    if (list.length === 0) {

        universityNoResults.style.display = "block";

        return;

    }


    universityNoResults.style.display = "none";


    list.forEach(function (university) {

        const card =
            document.createElement("article");

        card.className = "result-card";


        card.innerHTML = `

            <div class="card-top">

                <div class="card-icon">
                    🎓
                </div>

                <h3>
                    ${university.name}
                </h3>

                <p class="card-location">
                    📍 ${university.city},
                    ${university.country}
                </p>

            </div>


            <div class="card-body">

                <div class="tags">

                    ${university.fields
                        .slice(0, 3)
                        .map(function (field) {

                            return `
                                <span class="tag">
                                    ${field}
                                </span>
                            `;

                        })
                        .join("")}

                </div>


                <div class="card-details">

                    <div class="detail">

                        <span>
                            Type
                        </span>

                        <span>
                            ${university.type}
                        </span>

                    </div>


                    <div class="detail">

                        <span>
                            Degree levels
                        </span>

                        <span>
                            ${university.levels.join(", ")}
                        </span>

                    </div>

                </div>


                <a
                    class="card-link"
                    href="${university.website}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Official Website →
                </a>

            </div>

        `;


        universityResults.appendChild(card);

    });

}


/* =====================================================
   SCHOLARSHIP SEARCH
===================================================== */

function filterScholarships() {

    const search =
        scholarshipSearch.value
            .trim()
            .toLowerCase();

    const country =
        scholarshipCountry.value;

    const funding =
        fundingType.value;


    const filtered =
        scholarships.filter(function (scholarship) {

            const searchableText = (

                scholarship.name +
                " " +
                scholarship.provider +
                " " +
                scholarship.country +
                " " +
                scholarship.fields.join(" ") +
                " " +
                scholarship.level +
                " " +
                scholarship.funding

            ).toLowerCase();


            const matchesSearch =
                search === "" ||
                searchableText.includes(search);


            const matchesCountry =
                country === "all" ||
                scholarship.country === country;


            const matchesFunding =
                funding === "all" ||
                scholarship.funding === funding;


            return (
                matchesSearch &&
                matchesCountry &&
                matchesFunding
            );

        });


    displayScholarships(filtered);

}


/* =====================================================
   DISPLAY SCHOLARSHIPS
===================================================== */

function displayScholarships(list) {

    scholarshipResults.innerHTML = "";


    scholarshipCount.textContent =
        `Showing ${list.length} scholarship` +
        `${list.length === 1 ? "" : "s"}`;


    if (list.length === 0) {

        scholarshipNoResults.style.display =
            "block";

        return;

    }


    scholarshipNoResults.style.display =
        "none";


    list.forEach(function (scholarship) {

        const card =
            document.createElement("article");

        card.className = "result-card";


        const fundingClass =
            scholarship.funding === "Fully Funded"
                ? "tag funded"
                : "tag";


        card.innerHTML = `

            <div class="card-top">

                <div class="card-icon">
                    💰
                </div>

                <h3>
                    ${scholarship.name}
                </h3>

                <p class="card-location">
                    ${scholarship.provider}
                </p>

            </div>


            <div class="card-body">

                <div class="tags">

                    <span class="${fundingClass}">
                        ${scholarship.funding}
                    </span>

                    <span class="tag">
                        ${scholarship.level}
                    </span>

                </div>


                <div class="card-details">

                    <div class="detail">

                        <span>
                            Country
                        </span>

                        <span>
                            ${scholarship.country}
                        </span>

                    </div>


                    <div class="detail">

                        <span>
                            Fields
                        </span>

                        <span>
                            ${scholarship.fields
                                .slice(0, 2)
                                .join(", ")}
                        </span>

                    </div>


                    <div class="detail">

                        <span>
                            Deadline
                        </span>

                        <span>
                            ${scholarship.deadline}
                        </span>

                    </div>

                </div>


                <a
                    class="card-link"
                    href="${scholarship.officialUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Official Source →
                </a>

            </div>

        `;


        scholarshipResults.appendChild(card);

    });

}


/* =====================================================
   EVENT LISTENERS
===================================================== */

universitySearch.addEventListener(
    "input",
    filterUniversities
);

universityCountry.addEventListener(
    "change",
    filterUniversities
);

universityLevel.addEventListener(
    "change",
    filterUniversities
);


scholarshipSearch.addEventListener(
    "input",
    filterScholarships
);

scholarshipCountry.addEventListener(
    "change",
    filterScholarships
);

fundingType.addEventListener(
    "change",
    filterScholarships
);


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navigation =
    document.querySelector(".navigation");


mobileMenu.addEventListener(
    "click",
    function () {

        if (
            navigation.style.display ===
            "flex"
        ) {

            navigation.style.display =
                "none";

        } else {

            navigation.style.display =
                "flex";

            navigation.style.position =
                "absolute";

            navigation.style.top =
                "74px";

            navigation.style.left =
                "0";

            navigation.style.right =
                "0";

            navigation.style.background =
                "white";

            navigation.style.padding =
                "20px";

            navigation.style.flexDirection =
                "column";

            navigation.style.alignItems =
                "center";

            navigation.style.borderBottom =
                "1px solid #e5e7eb";

        }

    }
);


/* =====================================================
   INITIAL DISPLAY
===================================================== */

displayUniversities(universities);

displayScholarships(scholarships);

console.log(
    "EduPath loaded successfully."
);