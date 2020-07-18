<template>
    <div>
        <h1>Log In</h1>
        <form @submit.prevent="next">
            <label for="phone_number">Phone Number</label>
            <input
                v-model="formData.phone_number"
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

            <label for="pwd">Password</label>
            <input
                v-model="formData.password"
                type="password"
                name="pwd"
                id="pwd"
                @focusin="displayTab"
                @focusout="hideTab"
            />
            <span class="help-text">YOUR PASSWORD</span>

            <label for="type">Type Of User</label>
            <select name="type" id="type" v-model="formData.type">
                <option value=""></option>
                <option value="GENERAL">GENERAL</option>
                <option value="BUSINESS">BUSINESS</option>
            </select>

            <nuxt-link to="/register"
                >Don't Have an account? Register</nuxt-link
            >

            <NotificationChip
                v-if="message.exist"
                :text="message.text"
                :error="true"
            />

            <button class="submit-btn" type="submit">LOG IN</button>
        </form>
        <footer></footer>
    </div>
</template>

<script>
import NotificationChip from "./NotificationChip";

export default {
    name: "login",
    components: { NotificationChip },
    methods: {
        displayTab() {
            this.$store.commit("showTab");
        },
        hideTab() {
            this.$store.commit("hideTab");
        },
        async next() {
            if (
                !this.error.phone_number &&
                !this.error.type &&
                !this.error.pwd
            ) {
                console.log("Processing Login...");

                try {
                    var data = JSON.stringify(this.formData);

                    var config = {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    };
                    let res = await this.$axios.$post(
                        "http://172.105.42.84/producer/login",
                        data,
                        config,
                        { timeout: 3000 }
                    );

                    if (res.token !== undefined) {
                        console.log("Setting token");
                        localStorage.setItem("token", res.token);
                        this.$store.dispatch("getFavourites");
                        this.$store.dispatch("getPersonalProfile");
                        this.$emit("logged-in", res.token);
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
                if (this.error.phone_number) {
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
                if (this.error.type) {
                    let type = document.getElementById("type");
                    type.setAttribute("style", "border-bottom: 1px solid #ff0");
                    type.classList.add("shake");
                    setTimeout(() => {
                        type.classList.remove("shake");
                    }, 150);
                }
            }
        }
    },
    data() {
        return {
            formData: {
                phone_number: { type: Number },
                password: "",
                type: String
            },
            error: {
                phone_number: true,
                pwd: true,
                type: true
            },
            message: {
                exist: false,
                text: ""
            }
        };
    },
    mounted() {
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
                this.error.phone_number = false;
                phn.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.phone_number = true;
                phn.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        });

        let type = document.getElementById("type");
        type.addEventListener("change", e => {
            if (type.value.length > 0) {
                this.error.type = false;
                type.setAttribute(
                    "style",
                    "border-bottom: 1px solid rgb(111, 207, 151);"
                );
            } else {
                this.error.type = true;
                type.setAttribute("style", "border-bottom: 1px solid #f00;");
            }
        });
    }
};
</script>

<style scoped>
div {
    margin: 2rem 1.25em;
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

form {
    display: flex;
    flex-direction: column;
}

input,
select {
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 0.8em;
    margin-top: 1rem;
    font-size: 1.6rem;
    background-color: transparent;
}

input:focus,
select:focus {
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
    padding: 1rem;
    margin-top: 2rem;
}

@media screen and (min-width: 600px) {
    div {
        width: 30vw;
    }
    h1 {
        text-align: center;
    }
}
</style>
