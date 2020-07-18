<template>
    <div class="parent">
        <h1>Register</h1>

        <h3>Your Info</h3>
        <span class="help-text info">
            YOUR INFORMATION FOR CREATING YOUR PROFILE
        </span>

        <form @submit.prevent="register">
            <!-- Name -->
            <label for="name">Name</label>
            <input
                required
                type="text"
                name="name"
                id="name"
                @focusin="displayTab"
                @focusout="hideTab"
                v-model="formData_step1.name"
            />
            <span class="help-text">YOUR FULL NAME</span>

            <!-- Phone Number -->
            <label for="phone_number">Phone Number</label>
            <input
                required
                type="number"
                name="phone_number"
                id="phone_number"
                size="10"
                @focusin="displayTab"
                @focusout="hideTab"
                v-model="formData_step1.phone_number"
            />
            <span class="help-text">YOUR PRIMARY PHONE NUMBER</span>
            <span class="help-text"
                >THIS NUMBER WILL BE USED FOR YOUR LOGIN</span
            >

            <!-- City -->
            <label for="city">City</label>
            <select
                required
                ref="city"
                name="city"
                id="city"
                v-model="formData_step1.city"
            >
                <option value=""></option>
            </select>
            <span class="help-text">YOUR CITY</span>

            <!-- Password -->
            <label for="pwd">Password</label>
            <input
                required
                type="password"
                name="password"
                id="password"
                @focusin="displayTab"
                @focusout="hideTab"
                v-model="formData_step1.password"
            />
            <span class="help-text"
                >YOUR PASSWORD
                <ul style="margin-top: 1rem;">
                    <li>MINIMUM 8 CHARACTER</li>
                    <li>MINIMUM 1 UPPERCASE ALPHABET</li>
                    <li>MINIMUM 1 DIGIT</li>
                </ul></span
            >
            <NotificationChip
                v-if="message.exist"
                :text="message.text"
                :error="true"
            />
            <button class="submit-btn" type="submit">REGISTER</button>
        </form>

        <footer></footer>
    </div>
</template>

<script>
import NotificationChip from "../NotificationChip";

export default {
    name: "register_general_user",
    components: { NotificationChip },
    data() {
        return {
            formData_step1: {
                name: "",
                phone_number: { type: Number },
                password: "",
                city: "",
                type: "GENERAL"
            },
            error: {
                name: true,
                phn: true,
                pwd: true,
                city: true
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
            message: {
                exist: false,
                text: ""
            }
        };
    },
    methods: {
        displayTab() {
            this.$store.commit("showTab");
        },
        hideTab() {
            this.$store.commit("hideTab");
        },
        async register() {
            if (!this.error.name && !this.error.phn && !this.error.pwd) {
                try {
                    var data = JSON.stringify(this.formData_step1);

                    var config = {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    };
                    let res = await this.$axios.$post(
                        "http://172.105.42.84/producer/register",
                        data,
                        config,
                        { timeout: 3000 }
                    );

                    if (res.token !== undefined) {
                        localStorage.setItem("token", res.token);
                        this.$emit("logged-in", true);
                        this.$router.push("/profile");
                    }

                    if (res.error !== undefined) {
                        this.message.exist = true;
                        this.message.text = res.error;
                        setTimeout(() => {
                            this.message.exist = false;
                            this.message.text = "";
                        }, 2300);
                    }

                    if (res.message !== undefined) {
                        this.message.exist = true;
                        this.message.text = res.error;
                        setTimeout(() => {
                            this.message.exist = false;
                            this.message.text = "";
                        }, 2300);
                    }
                } catch (e) {
                    let date = new Date().toISOString();
                    console.error("[", date, "]", e);
                }
            } else {
                if (this.error.name) {
                    let name = document.getElementById("name");
                    name.setAttribute("style", "border-bottom: 1px solid #ff0");
                    name.classList.add("shake");
                    setTimeout(() => {
                        name.classList.remove("shake");
                    }, 150);
                }
                if (this.error.phn) {
                    let phone_number = document.getElementById("phone_number");
                    phone_number.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    phone_number.classList.add("shake");
                    setTimeout(() => {
                        phone_number.classList.remove("shake");
                    }, 150);
                }
                if (this.error.pwd) {
                    let password = document.getElementById("password");
                    password.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    password.classList.add("shake");
                    setTimeout(() => {
                        password.classList.remove("shake");
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
            }
        }
    },
    mounted() {
        // Adding Cities
        let optionList = this.$refs.city;
        this.cities.forEach(option =>
            optionList.add(new Option(option, option, false))
        );

        let name = document.getElementById("name");
        name.addEventListener("keyup", e => {
            if (name.value.length != 0 && /\w[ ]\w/g.test(name.value)) {
                this.error.name = false;
                name.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.name = true;
                name.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        });

        let pwd = document.getElementById("password");
        pwd.addEventListener("keyup", e => {
            if (
                /[A-Z]/g.test(pwd.value) &&
                /\d{1,}/g.test(pwd.value) &&
                pwd.value.length >= 8
            ) {
                this.error.pwd = false;
                pwd.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.pwd = true;
                pwd.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        });

        let phn = document.getElementById("phone_number");
        phn.addEventListener("keyup", e => {
            if (
                phn.value.length === 8 ||
                (phn.value.length === 10 && /\d/g.test(phn.value))
            ) {
                this.error.phn = false;
                phn.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.phn = true;
                phn.setAttribute("style", "border-bottom: 1px solid #f00;");
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
    }
};
</script>

<style scoped>
.parent {
    padding: 2rem 1.25em;
    display: flex;
    /* justify-content: center; */
    /* align-items: start; */
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
    align-self: flex-start;
}

h3 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    margin-top: 5rem;
    margin-bottom: 2rem;
    align-self: flex-start;
}

form {
    display: flex;
    flex-direction: column;
}

input,
select {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 0.8em;
    margin-top: 1rem;
    font-size: 1.6rem;
}

input:focus {
    outline: none;
    border-bottom-style: dashed;
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

.chip {
    margin: 2rem 0 1rem 0;
    background-color: black;
    color: white;
    padding: 1rem;
    text-align: center;
    font-size: 0.7em;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.15em;
}

.info {
    align-self: flex-start;
    margin-top: 1rem;
}
/* 
@media (min-width: 600px) {
    .parent {
        width: 30vw;
    }
    h1 {
        text-align: center;
    }
    .parent .info,
    .parent h1 {
        align-self: flex-start;
    }
} */

.shake {
    animation: shake_input 150ms linear 3 forwards;
}

@keyframes shake_input {
    0% {
        transform: translateX(-3%);
    }
    50% {
        transform: translateX(3%);
    }
    100% {
        transform: translateX(0%);
    }
}
</style>
