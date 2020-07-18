<template>
    <div class="container">
        <h1>Search</h1>

        <form @submit.prevent="next">
            <!-- <label for="city">City</label> -->

            <select required ref="city" name="city" id="city" v-model="city">
                <option value="">Select City</option>
            </select>

            <!-- Category -->
            <!-- <label for="category">Category</label> -->
            <div class="flex">
                <select
                    required
                    ref="category"
                    name="category"
                    id="category"
                    v-model="category"
                >
                    <option value="">Select Category</option>
                </select>
                <button type="button" @click="show_add_tags = !show_add_tags">
                    <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.4 1H1L5.76667 7.32157V13.2353L7.5 14V7.32157L11.4 1Z"
                            fill="white"
                            stroke="white"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <div v-if="show_add_tags" class="add-tag">
                <h3>Add Tags By Pressing</h3>
                <div class="one">
                    <input
                        type="text"
                        @focusin="displayTab"
                        @focusout="hideTab"
                        id="tags"
                        placeholder="keywords"
                    />
                    <input
                        type="button"
                        @click="addTag"
                        value="+"
                        class="add-tag-btn"
                    />
                </div>
                <span class="tags-list" ref="tags">
                    <Tags
                        v-for="(tag, i) in tags"
                        :key="i"
                        @remove-tag="removeTag"
                        :title="tag"
                    />
                </span>
            </div>

            <button class="search" type="submit">SEARCH</button>
        </form>

        <div class="list" v-if="searchResults.length > 0">
            <ul class="list-cards">
                <li
                    class="info-card"
                    v-for="(content, i) in searchResults"
                    :key="content._id"
                >
                    <nuxt-link
                        :to="'/u/' + content.phone_number"
                        v-if="content.phone_number !== undefined"
                    >
                        <Card :type="'list'" :content="content" :index="i" />
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <div class="isEmpty" v-if="isEmpty">
            <h2>Can't Find {{ category }} in {{ city }}</h2>
        </div>
        <footer></footer>
    </div>
</template>

<script>
import Tags from "../../components/register_steps/tags";
import Card from "../../components/Card";

export default {
    components: { Tags, Card },
    head: {
        titleTemplate: "Search - Local Vocal",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Search Users on Local Vocal"
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/svg+xml",
                href: `data:image/svg+xml,
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  style="color: 6FFF97;"
                  xmlns="http://www.w3.org/2000/svg"
                ><circle cx="16" cy="16" r="15.0049" fill="currentColor" /></svg>`
            }
        ]
    },
    data() {
        return {
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
                "Food",
                "Computer Service",
                "Electrician"
            ],
            city: "",
            category: "",
            tags: [],
            show_add_tags: false,
            contents: [],
            isEmpty: false
        };
    },
    methods: {
        displayTab() {
            this.$store.commit("showTab");
        },
        hideTab() {
            this.$store.commit("hideTab");
        },
        existInTags(x) {
            let exist = true;
            if (this.tags.length === 0) return false;

            for (let i = 0; i < this.tags.length; i++) {
                if (this.tags[i] == x) {
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
            if (
                this.existInTags(data) === false &&
                data.replace(/[ ]/g, "") !== ""
            )
                this.tags.push(data);

            let tags = document.getElementById("tags");
        },
        removeTag(data) {
            this.tags = this.tags.filter(x => x != data);
        },
        async next() {
            let params = {
                city: this.city,
                category: this.category,
                tags: this.tags
            };

            let x = await this.$axios.$get(
                "http://172.105.42.84/consumer/local/tags",
                {
                    params
                }
            );
            this.contents = x;
            console.log(this.contents);
            if (
                this.contents.message == "No services found" ||
                this.contents.length <= 0
            ) {
                this.isEmpty = true;
            } else this.isEmpty = false;
        }
    },
    mounted() {
        this.$store.dispatch("setCurrentPage");

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
    },
    computed: {
        searchResults() {
            return this.contents;
        }
    }
};
</script>

<style scoped>
h1 {
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 3rem;
}

a {
    color: unset;
    text-decoration: none;
}

.list {
    margin-top: 3rem;
}

.info-card {
    margin-bottom: 1rem;
}

.container {
    padding: 2rem 1.25rem;
    display: flex;
    flex-direction: column;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.flex {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    grid-gap: 1em;
    gap: 1em;
}

.flex button {
    padding: 0.3em 0.8em;
    font-size: 1.3em;
    border: 1px solid #000000;
    background-color: #000000;
    margin-bottom: 1rem;
    border: none;
    position: relative;
    display: inline-block;
}

input,
select,
textarea {
    width: inherit;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 0.8em;
    font-size: 1.3rem;
    background-color: #ececec;
    padding: 1em 0.4em;
}

input {
    padding: 0.4em 0.5em;
    border: 1px solid #000000;
}
select {
    color: #616263;
    background-color: #ececec;
    border: 1px solid #e3e3e3;
    outline: none;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    overflow: hidden;
    position: relative;
    border-radius: 3px;
    margin-bottom: 1em;
    width: 100%;
}

option:hover {
    background-color: #e5e5e5;
}

.add-tag {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.add-tag h3 {
    font-family: "Inter", sans-serif;
    font-size: 1em;
    margin: 1em 0;
    position: relative;
    width: max-content;
}

.add-tag h3::after {
    content: "+";
    position: absolute;
    top: 50%;
    right: -2rem;
    border: 1px solid black;
    padding: 0.1em 0.3em;
    text-align: center;
    display: flex;
    transform: translateY(-50%);
}

.add-tag-btn {
    padding: 0.3em 0.5em;
    font-size: 1.3em;
    border: 1px solid black;
    background-color: #ffffff;
}

.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0em 1em;
}

input[type="button"] {
    cursor: pointer;
}

.one {
    display: flex;
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    gap: 1em;
}

.search {
    display: flex;
    text-align: center;
    background-color: black;
    color: white;
    letter-spacing: 0.15em;
    font-size: 0.8em;
    width: max-content;
    padding: 0.9em 2em;
    border: none;
    margin-top: 1em;
    border-radius: 2rem;
}

footer {
    height: 8rem;
}

@media (min-width: 768px) {
    .list-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
    }
}

.isEmpty {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}

.isEmpty h2 {
    font-family: "Inter", sans-serif;
    font-size: 2em;
}
</style>
