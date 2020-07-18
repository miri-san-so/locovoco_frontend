<template>
    <div class="flex">
        <h1>Register</h1>
        <span class="chip">STEP 3 OF 3</span>

        <h3>Personal Info</h3>
        <span class="help-text info"
            >INFORMATION ABOUT YOUR SERVICES FOR THE CUSTOMERS TO VIEW AND
            DISCOVER YOU</span
        >

        <form @submit.prevent="next">
            <!-- Phone Number -->
            <label for="whatsapp_phone_number">WhatsApp Number</label>
            <input
                v-model="formData_step3.whatsapp_phone_number"
                type="number"
                name="whatsapp_phone_number"
                id="whatsapp_phone_number"
                size="10"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text">YOUR WHATSAPP NUMBER</span>

            <!-- Instagram -->
            <label for="instagram">Instagram</label>
            <input
                v-model="formData_step3.instagram"
                type="text"
                name="instagram"
                id="instagram"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text">YOUR INSTAGRAM HANDLE</span>

            <!-- facebook -->
            <label for="facebook">Facebook</label>
            <input
                v-model="formData_step3.facebook"
                type="text"
                name="facebook"
                id="facebook"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text">YOUR FACEBOOK HANDLE</span>

            <button class="submit-btn" type="submit">COMPLETE</button>
        </form>

        <footer></footer>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "register_step_3",
    data() {
        return {
            formData_step3: {
                whatsapp_phone_number: { type: String },
                instagram: "",
                facebook: ""
            },
            errors: {
                whatsapp_phone_number: true,
                instagram: true,
                facebook: true
            }
        };
    },
    methods: {
        ...mapMutations(["setDataForStepThree"]),
        displayTab() {
            this.$store.commit("showTab");
        },
        hideTab() {
            this.$store.commit("hideTab");
        },
        async next() {
            if (
                !this.errors.whatsapp_phone_number &&
                !this.errors.phn &&
                !this.errors.pwd
            ) {
                this.setDataForStepThree(this.formData_step3);
                this.$emit("next-step", true);

                try {
                    let x = this.$store.state.formData;
                    x["type"] = "BUSINESS";
                    console.log(x);
                    var data = JSON.stringify(x);

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

                    console.log(res);
                    if (res.token !== undefined) {
                        localStorage.setItem("token", res.token);
                        this.$emit("logged-in", true);
                        this.$router.push("/profile");
                    }

                    if (res.message !== undefined) {
                        this.message.exist = true;
                        this.message.text = res.message;
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
                if (this.errors.whatsapp_phone_number) {
                    let whatsapp_phone_number = document.getElementById(
                        "whatsapp_phone_number"
                    );
                    whatsapp_phone_number.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    whatsapp_phone_number.classList.add("shake");
                    setTimeout(() => {
                        whatsapp_phone_number.classList.remove("shake");
                    }, 150);
                }
                if (this.errors.instagram) {
                    let instagram = document.getElementById("instagram");
                    instagram.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    instagram.classList.add("shake");
                    setTimeout(() => {
                        instagram.classList.remove("shake");
                    }, 150);
                }
                if (this.errors.facebook) {
                    let facebook = document.getElementById("facebook");
                    facebook.setAttribute(
                        "style",
                        "border-bottom: 1px solid #ff0"
                    );
                    facebook.classList.add("shake");
                    setTimeout(() => {
                        facebook.classList.remove("shake");
                    }, 150);
                }
            }
        }
    },
    mounted() {
        let whatsapp_phone_number = document.getElementById(
            "whatsapp_phone_number"
        );
        whatsapp_phone_number.addEventListener("keyup", e => {
            if (
                whatsapp_phone_number.value.length === 8 ||
                (whatsapp_phone_number.value.length === 10 &&
                    /\d/g.test(whatsapp_phone_number.value))
            ) {
                this.errors.whatsapp_phone_number = false;
                whatsapp_phone_number.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.errors.whatsapp_phone_number = true;
                whatsapp_phone_number.setAttribute(
                    "style",
                    "border-bottom: 1px solid #f00;"
                );
            }
        });

        let instagram = document.getElementById("instagram");
        instagram.addEventListener("keyup", e => {
            if (
                instagram.value.length > 0 &&
                /^[a-zA-Z0-9._]+$/g.test(instagram.value)
            ) {
                this.errors.instagram = false;
                instagram.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.errors.instagram = true;
                instagram.setAttribute(
                    "style",
                    "border-bottom: 1px solid #f00;"
                );
            }
        });

        let facebook = document.getElementById("facebook");
        facebook.addEventListener("keyup", e => {
            if (facebook.value.length > 5) {
                this.errors.facebook = false;
                facebook.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.errors.facebook = true;
                facebook.setAttribute(
                    "style",
                    "border-bottom: 1px solid #f00;"
                );
            }
        });
    }
};
</script>

<style scoped>
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
    font-size: 1.8rem;
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

.chip {
    margin: 4rem 0;
    background-color: black;
    color: white;
    padding: 1rem;
    border-radius: 10rem;
    text-align: center;
    font-size: 0.7em;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.15em;
}

.info {
    margin-top: 1rem;
}

@media screen and (min-width: 600px) {
    div {
        width: 30vw;
    }
}
</style>
