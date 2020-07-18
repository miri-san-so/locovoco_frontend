<template>
    <div class="flex">
        <h1>Register</h1>
        <span class="chip">STEP 1 OF 3</span>

        <h3>Personal Info</h3>
        <span class="help-text info"
            >INFORMATION ABOUT YOUR SERVICES FOR THE CUSTOMERS TO VIEW AND
            DISCOVER YOU</span
        >

        <form @submit.prevent="next">
            <!-- Name -->
            <label for="name">Name</label>
            <input
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
                v-model="formData_step1.phone_number"
                type="number"
                name="phone_number"
                id="phone_number"
                size="10"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text"
                >YOUR PRIMARY PHONE NUMBER (NOT WHATSAPP NUMBER)</span
            >

            <!-- Aadhar Number -->
            <label for="aadhar_number">Aadhar Number</label>
            <input
                v-model="formData_step1.aadhar_number"
                type="number"
                name="aadhar_number"
                id="aadhar_number"
                size="11"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text"
                >YOUR AADHAR NUMBER (WILL NOT BE REVEALED TO OTHER USER)</span
            >

            <!-- Password -->
            <label for="pwd">Password</label>
            <input
                v-model="formData_step1.password"
                type="password"
                name="pwd"
                id="pwd"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text">YOUR PASSWORD</span>

            <span class="help-text">
                <ul>
                    <li>MINIMUM 8 CHARACTER</li>
                    <li>MINIMUM 1 UPPERCASE ALPHABET</li>
                    <li>MINIMUM 1 DIGIT</li>
                </ul></span
            >

            <button class="submit-btn" type="submit">PROCEED TO STEP 2</button>
        </form>
        <footer></footer>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "register_step_1",
    data() {
        return {
            formData_step1: {
                name: "",
                phone_number: { type: Number },
                password: "",
                aadhar_number: { type: Number }
            },
            error: {
                name: true,
                phone_number: true,
                password: true,
                aadhar_number: true
            }
        };
    },
    methods: {
        ...mapMutations(["setDataForStepOne"]),
        displayTab() {
            this.$store.commit("showTab");
        },
        hideTab() {
            this.$store.commit("hideTab");
        },
        next() {
            if (!this.error.name && !this.error.phn && !this.error.pwd) {
                this.setDataForStepOne(this.formData_step1);
                this.$emit("next-step", true);
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
                    let password = document.getElementById("pwd");
                    password.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    password.classList.add("shake");
                    setTimeout(() => {
                        password.classList.remove("shake");
                    }, 150);
                }
                if (this.error.aadhar_number) {
                    let aadhar_number = document.getElementById(
                        "aadhar_number"
                    );
                    aadhar_number.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    aadhar_number.classList.add("shake");
                    setTimeout(() => {
                        aadhar_number.classList.remove("shake");
                    }, 150);
                }
            }
        }
    },
    mounted() {
        let name = document.getElementById("name");
        name.addEventListener("keyup", () => {
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

        let pwd = document.getElementById("pwd");
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

        let aadhar_number = document.getElementById("aadhar_number");
        aadhar_number.addEventListener("keyup", e => {
            if (aadhar_number.value.length === 11 && /\d/g.test(phn.value)) {
                this.error.aadhar_number = false;
                aadhar_number.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.aadhar_number = true;
                aadhar_number.setAttribute(
                    "style",
                    "border-bottom: 1px solid #f00;"
                );
            }
        });
    }
};
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
    /* place-self: center; */
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
    font-size: 1.8rem;
    margin-top: 3rem;
}

form {
    display: flex;
    flex-direction: column;
}

input {
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

.info {
    margin-top: 1rem;
}

ul {
    list-style: none;
}

@media screen and (min-width: 600px) {
    div {
        width: 30vw;
    }
}
</style>
