<template>
    <div class="flex">
        <h1>Register</h1>
        <span class="chip">STEP 2 OF 3</span>

        <h3>Business & Location Info</h3>
        <span class="help-text info">
            INFORMATION ABOUT YOUR SERVICES FOR THE CUSTOMERS TO VIEW AND
            DISCOVER YOU
        </span>

        <form @submit.prevent="next">
            <!-- Lat, Long -->
            <label>Your Position</label>
            <span class="help-text info"
                >YOUR POSITION FOR PEOPLE NEARBY TO FIND YOU [optional]</span
            >
            <div v-if="geoExist" class="location-span">
                <span class="location"
                    >LAT : {{ this.formData_step2.lat }}
                </span>
                <span class="location"
                    >LNG : {{ this.formData_step2.lng }}
                </span>
            </div>

            <button type="button" class="loc-btn" @click="getLocation">
                GET YOUR LOCATION
            </button>

            <!-- Street Name -->
            <label for="street_name">Locality Name</label>
            <input
                required
                v-model="formData_step2.street_name"
                type="text"
                name="street_name"
                id="street_name"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text">YOUR LOCALITY NAME [ YOUR LOCALITY ]</span>

            <!-- City -->
            <label for="city">City</label>
            <select
                required
                ref="city"
                name="city"
                id="city"
                v-model="formData_step2.city"
            >
                <option value=""></option>
            </select>
            <span class="help-text">YOUR CITY</span>

            <!-- Category -->
            <label for="category">Category</label>
            <select
                required
                ref="category"
                name="category"
                id="category"
                v-model="formData_step2.category"
            >
                <option value=""></option>
            </select>
            <span class="help-text">CATEGORY OF YOUR WORK</span>

            <!-- About -->
            <label for="about">About Your Work</label>
            <textarea
                required
                v-model="formData_step2.about"
                type="text"
                name="about"
                id="about"
                @focusin="displayTab"
                @focusout="hideTab"
                maxlength="200"
            />
            <span class="help-text"
                >DESCRIPTION ABOUT YOUR WORK [ MAX 200 WORDS ]
            </span>

            <label for="tags">Tags</label>
            <div class="add-tag">
                <input
                    type="text"
                    @focusin="displayTab"
                    @focusout="hideTab"
                    id="tags"
                />
                <input
                    type="button"
                    @click="addTag"
                    value="+"
                    class="add-tag-btn"
                />
            </div>
            <span class="help-text">TAGS THAT WILL HELP PEOPLE FIND YOU</span>
            <span class="help-text">ADD ATLEAST THREE TAGS</span>

            <span class="tags-list" ref="tags">
                <Tags
                    v-for="(tag, i) in formData_step2.tags"
                    :key="i"
                    @remove-tag="removeTag"
                    :title="tag"
                />
            </span>

            <button class="submit-btn" type="submit">PROCEED TO STEP 3</button>
        </form>

        <!-- Footer for giving more height -->
        <footer></footer>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import Tags from "./tags";

export default {
    name: "register_step_1",
    components: { Tags },
    data() {
        return {
            geoExist: false,
            error: {
                city: true,
                category: true,
                about: true,
                tags: true,
                street_name: true
            },
            formData_step2: {
                lat: 0,
                lng: 0,
                street_name: "",
                city: "",
                category: "",
                about: "",
                tags: []
            },
            cities: [
                "Mumbai",
                "Delhi",
                "Bangalore",
                "Hyderabad",
                "Ahmedabad",
                "Chennai",
                "Kolkata",
                "Surat",
                "Pune",
                "Jaipur",
                "Visakhapatnam",
                "Nagpur",
                "Lucknow",
                "Kanpur",
                "Thane",
                "Bhopal",
                "Indore",
                "Pimpri-Chinchwad",
                "Patna",
                "Vadodara",
                "Ghaziabad",
                "Ludhiana",
                "Agra",
                "Nashik",
                "Faridabad",
                "Meerut",
                "Rajkot",
                "Kalyan-Dombivli",
                "Vasai-Virar",
                "Varanasi",
                "Srinagar",
                "Aurangabad",
                "Dhanbad",
                "Amritsar",
                "Navi Mumbai",
                "Allahabad",
                "Howrah",
                "Ranchi",
                "Gwalior",
                "Jabalpur",
                "Coimbatore",
                "Vijayawada",
                "Jodhpur",
                "Madurai",
                "Raipur",
                "Chandigarh",
                "Guwahati",
                "Solapur",
                "Hubli–Dharwad",
                "Mysore",
                "Tiruchirappalli",
                "Bareilly",
                "Aligarh",
                "Tiruppur",
                "Gurgaon",
                "Moradabad",
                "Jalandhar",
                "Bhubaneswar",
                "Salem",
                "Warangal",
                "Mira-Bhayandar",
                "Jalgaon",
                "Kota",
                "Guntur",
                "Bhiwandi",
                "Saharanpur",
                "Gorakhpur",
                "Bikaner",
                "Amravati",
                "Noida",
                "Jamshedpur",
                "Bhilai",
                "Cuttack",
                "Firozabad",
                "Kochi",
                "Nellore",
                "Bhavnagar",
                "Dehradun",
                "Durgapur",
                "Asansol",
                "Rourkela",
                "Nanded",
                "Kolhapur",
                "Ajmer",
                "Akola",
                "Gulbarga",
                "Jamnagar",
                "Ujjain",
                "Loni",
                "Siliguri",
                "Jhansi",
                "Ulhasnagar",
                "Jammu",
                "Sangli-Miraj & Kupwad",
                "Mangalore",
                "Erode",
                "Belgaum",
                "Ambattur",
                "Tirunelveli",
                "Malegaon",
                "Gaya",
                "Thiruvananthapuram",
                "Udaipur",
                "Kakinada",
                "Davanagere",
                "Kozhikode",
                "Maheshtala",
                "Rajpur Sonarpur",
                "Rajahmundry",
                "Bokaro",
                "South Dumdum",
                "Bellary",
                "Patiala",
                "Gopalpur",
                "Agartala",
                "Bhagalpur",
                "Muzaffarnagar",
                "Bhatpara",
                "Panihati",
                "Latur",
                "Dhule",
                "Tirupati",
                "Rohtak",
                "Sagar",
                "Korba",
                "Bhilwara",
                "Berhampur",
                "Muzaffarpur",
                "Ahmednagar",
                "Mathura",
                "Kollam",
                "Avadi",
                "Kadapa",
                "Kamarhati",
                "Sambalpur",
                "Bilaspur",
                "Shahjahanpur",
                "Satara",
                "Bijapur",
                "Kurnool",
                "Rampur",
                "Shimoga",
                "Chandrapur",
                "Junagadh",
                "Thrissur",
                "Alwar",
                "Bardhaman",
                "Kulti",
                "Nizamabad",
                "Parbhani",
                "Tumkur",
                "Khammam",
                "Ozhukarai",
                "Bihar Sharif",
                "Panipat",
                "Darbhanga",
                "Bally",
                "Aizawl",
                "Dewas",
                "Ichalkaranji",
                "Karnal",
                "Bathinda",
                "Jalna",
                "Eluru",
                "Barasat",
                "Kirari Suleman Nagar",
                "Purnia",
                "Satna",
                "Mau",
                "Sonipat",
                "Farrukhabad",
                "Durg",
                "Imphal",
                "Ratlam",
                "Hapur",
                "Arrah",
                "Anantapur",
                "Karimnagar",
                "Etawah",
                "Ambarnath",
                "North Dumdum",
                "Bharatpur",
                "Begusarai",
                "New Delhi",
                "Gandhidham",
                "Baranagar",
                "Tiruvottiyur",
                "Pondicherry",
                "Sikar",
                "Thoothukudi",
                "Rewa",
                "Mirzapur",
                "Raichur",
                "Pali",
                "Ramagundam",
                "Silchar",
                "Haridwar",
                "Vijayanagaram",
                "Tenali",
                "Nagercoil",
                "Sri Ganganagar",
                "Karawal Nagar",
                "Mango",
                "Thanjavur",
                "Bulandshahr",
                "Uluberia",
                "Katni",
                "Sambhal",
                "Singrauli",
                "Nadiad",
                "Secunderabad",
                "Naihati",
                "Yamunanagar",
                "Bidhannagar",
                "Pallavaram",
                "Bidar",
                "Munger",
                "Panchkula",
                "Burhanpur",
                "Raurkela Industrial Township",
                "Kharagpur",
                "Dindigul",
                "Gandhinagar",
                "Hospet",
                "Nangloi Jat",
                "Malda",
                "Ongole",
                "Deoghar",
                "Chapra",
                "Haldia",
                "Khandwa",
                "Nandyal",
                "Morena",
                "Amroha",
                "Anand",
                "Bhind",
                "Bhalswa Jahangir Pur",
                "Madhyamgram",
                "Bhiwani",
                "Berhampore",
                "Ambala",
                "Morbi",
                "Fatehpur",
                "Raebareli",
                "Mahaboobnagar",
                "Chittoor",
                "Bhusawal",
                "Orai",
                "Bahraich",
                "Vellore",
                "Mehsana",
                "Raiganj",
                "Sirsa",
                "Danapur",
                "Serampore",
                "Sultan Pur Majra",
                "Guna",
                "Jaunpur",
                "Panvel",
                "Shivpuri",
                "Surendranagar Dudhrej",
                "Unnao",
                "Chinsurah",
                "Alappuzha",
                "Kottayam",
                "Machilipatnam",
                "Shimla",
                "Adoni",
                "Udupi",
                "Katihar",
                "Proddatur",
                "Saharsa",
                "Dibrugarh",
                "Jorhat",
                "Hindupur",
                "Nagaon",
                "Sasaram",
                "Hajipur",
                "Bhimavaram",
                "Kumbakonam",
                "Bongaigaon",
                "Dehri",
                "Madanapalle",
                "Siwan",
                "Bettiah",
                "Tinsukia",
                "Guntakal",
                "Srikakulam",
                "Motihari",
                "Dharmavaram",
                "Gudivada",
                "Phagwara",
                "Narasaraopet",
                "Suryapet",
                "Miryalaguda",
                "Tadipatri",
                "Karaikudi",
                "Kishanganj",
                "Jamalpur",
                "Ballia",
                "Kavali",
                "Tadepalligudem",
                "Amaravati",
                "Buxar",
                "Tezpur",
                "Jehanabad",
                "Aurangabad",
                "Gangtok"
            ],
            categories: [
                "Household Work",
                "Tutors",
                "Tiffin Service",
                "Computer Service"
            ]
        };
    },
    methods: {
        ...mapMutations(["setDataForStepTwo"]),
        displayTab() {
            this.$store.commit("showTab");
        },
        hideTab() {
            this.$store.commit("hideTab");
        },
        next() {
            if (
                !this.error.category &&
                !this.error.city &&
                !this.error.about &&
                !this.error.street_name &&
                !this.error.tags
            ) {
                this.setDataForStepTwo(this.formData_step2);
                this.$emit("next-step", true);
            } else {
                if (this.error.category) {
                    let category = document.getElementById("category");
                    category.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    category.classList.add("shake");
                    setTimeout(() => {
                        category.classList.remove("shake");
                    }, 150);
                }
                if (this.error.about) {
                    let about = document.getElementById("about");
                    about.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    about.classList.add("shake");
                    setTimeout(() => {
                        about.classList.remove("shake");
                    }, 150);
                }
                if (this.error.city) {
                    let city = document.getElementById("city");
                    city.setAttribute("style", "border-bottom: 1px solid #ff0");
                    city.classList.add("shake");
                    setTimeout(() => {
                        city.classList.remove("shake");
                    }, 150);
                }
                if (this.error.street_name) {
                    let street_name = document.getElementById("street_name");
                    street_name.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    street_name.classList.add("shake");
                    setTimeout(() => {
                        street_name.classList.remove("shake");
                    }, 150);
                }
                if (this.error.tags) {
                    let tags = document.getElementById("tags");
                    tags.setAttribute("style", "border-bottom: 1px solid #ff0");
                    tags.classList.add("shake");
                    setTimeout(() => {
                        tags.classList.remove("shake");
                    }, 150);
                }
            }
        },
        existInTags(x) {
            let exist = true;
            if (this.formData_step2.tags.length === 0) return false;

            for (let i = 0; i < this.formData_step2.tags.length; i++) {
                if (this.formData_step2.tags[i] == x) {
                    exist = true;
                    break;
                } else {
                    exist = false;
                }
            }

            return exist;
        },
        addTag() {
            let data = document.getElementById("tags").value;
            document.getElementById("tags").value = "";
            data = data.toLowerCase();
            if (this.existInTags(data) === false)
                this.formData_step2.tags.push(data);
            if (this.formData_step2.tags.length > 2) this.error.tags = false;

            let tags = document.getElementById("tags");

            if (this.formData_step2.tags.length > 2) {
                this.error.tags = false;
                tags.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.tags = true;
                tags.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        },
        removeTag(data) {
            this.formData_step2.tags = this.formData_step2.tags.filter(
                x => x != data
            );
        },
        getLocation() {
            if (navigator.geolocation != {}) {
                navigator.geolocation.getCurrentPosition(data => {
                    let lat = data.coords.latitude;
                    let long = data.coords.longitude;
                    this.formData_step2.lat = lat;
                    this.formData_step2.lng = long;
                });
            } else {
                this.geoExist = false;
                alert(
                    "Your Browser Does Not support Geo Location, skip these field"
                );
                // Add notification "Your Browser doesnt support geolocation"
            }
        }
    },
    mounted() {
        // Adding Cities
        let optionList = this.$refs.city;
        this.cities.forEach(option =>
            optionList.add(new Option(option, option, false))
        );

        // Adding categories
        optionList = this.$refs.category;
        this.categories.forEach(option =>
            optionList.add(new Option(option, option, false))
        );

        let street_name = document.getElementById("street_name");
        street_name.addEventListener("keyup", e => {
            if (street_name.value.trim().length > 0) {
                this.error.street_name = false;
                street_name.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.street_name = true;
                street_name.setAttribute(
                    "style",
                    "border-bottom: 1px solid #f00;"
                );
            }
        });

        let city = document.getElementById("city");
        city.addEventListener("change", e => {
            if (city.value != "") {
                this.error.city = false;
                city.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.city = true;
                city.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        });

        let category = document.getElementById("category");
        category.addEventListener("change", e => {
            if (category.value.length > 0) {
                this.error.category = false;
                category.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.category = true;
                category.setAttribute(
                    "style",
                    "border-bottom: 1px solid #f00;"
                );
            }
        });

        let about = document.getElementById("about");
        about.addEventListener("keyup", e => {
            if (about.value.length != 0 && about.value.length > 30) {
                this.error.about = false;
                about.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.about = true;
                about.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        });

        let tags = document.getElementById("tags");
        tags.addEventListener("focus", e => {
            if (this.formData_step2.tags.length > 2) {
                this.error.tags = false;
                tags.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.tags = true;
                tags.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        });

        tags.addEventListener("keydown", e => {
            if (tags.value.length > 22) {
                tags.value = tags.value.substr(0, 18);
            }
        });
    },
    created() {
        if (navigator.geolocation) {
            this.geoExist = true;
        }
    }
};
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.25rem;
}

footer {
    height: 8rem;
}

label {
    margin-top: 3rem;
    font-family: "Inter", sans-serif;
    font-size: 1.3rem;
}

h1 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 3rem;
}

h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    margin-top: 3rem;
    font-size: 1.8rem;
}

form {
    display: flex;
    flex-direction: column;
}

input,
select,
textarea {
    width: inherit;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 0.8em;
    margin-top: 1rem;
    font-size: 1.6rem;
    background-color: transparent;
}

input:focus,
textarea:focus {
    outline: none;
    border-bottom-style: dashed;
}

select:focus {
    outline: none;
}

textarea {
    font-family: "Open Sans", sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: gray;
    resize: vertical;
    height: 6rem;
    padding-bottom: 0.3rem;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
}

span {
    margin-bottom: 1rem;
}

a {
    width: max-content;
    font-size: 0.7rem;
}

button {
    margin-top: 2rem;
}

.info {
    margin-top: 1rem;
}

.add-tag {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template: repeat(1, 1fr) / repeat(5, 1fr);
    column-gap: 0.6em;
}

.add-tag-btn {
    padding: 0.3em 0.5em;
    font-size: 1.3em;
    border: 1px solid black;
    background-color: #ffffff;
}

.add-tag input {
    grid-column: 1 / 6;
}

.add-tag input[type="button"] {
    grid-column: 6;
    background-color: transparent;
    min-width: 1em;
}

.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0em 1em;
}

.location-span {
    display: flex;
    margin-top: 1.5rem;
}

.location {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8em;
    color: gray;
    font-weight: bolder;
    padding: 0.3em 0.5rem;
    border: 1px solid #c3c3c3;
    background-color: #fafafa;
    flex-grow: 1;
    margin-right: 0.3rem;
    border-radius: 0.3em;
}

.loc-btn {
    padding: 0.7rem 0;
    background-color: #0099ff;
    color: white;
    font-weight: bold;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 2rem;
    margin-top: 1em !important;
    margin-bottom: 3rem;
}

input[type="button"] {
    cursor: pointer;
}

@media screen and (min-width: 600px) {
    div {
        width: 30vw;
    }
}
</style>
