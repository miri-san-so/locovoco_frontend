<template>
    <div class="flex">
        <div v-if="LoggedIn && tokenError.exist === false" class="profile">
            <h1>Profile</h1>
            <div class="info">
                <div :class="getGradientClass()">
                    <svg
                        width="31"
                        height="24"
                        viewBox="0 0 31 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="4.6279"
                            cy="4.46006"
                            r="4.228"
                            fill="black"
                        />
                        <circle
                            cx="26.3718"
                            cy="4.46006"
                            r="4.228"
                            fill="black"
                        />
                        <path
                            d="M5.23193 17.748C8.6546 20.768 17.3119 24.996 24.5599 17.748"
                            stroke="black"
                            stroke-width="3"
                        />
                    </svg>
                </div>
                <h2>{{ personalInfo.name || user.name }}</h2>
                <h3>{{ personalInfo.phone_number || user.phone_number }}</h3>
                <span class="city">{{ personalInfo.city || user.city }}</span>

                <button class="logout-btn" @click="logout">
                    <svg
                        width="10"
                        height="10"
                        viewBox="0 0 20 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M5.8 9H1V1H5.8" stroke="white" />
                        <path
                            class="arrow"
                            d="M4.19995 5.0001C8.03995 5.0001 8.99995 5.0001 8.99995 5.0001M8.99995 5.0001L7.39995 2.6001M8.99995 5.0001L7.39995 7.4001"
                            stroke="white"
                        />
                    </svg>

                    LOGOUT
                </button>
            </div>
        </div>
        <Login
            @logged-in="
                data => {
                    this.setUser(data);
                    this.LoggedIn = true;
                }
            "
            v-if="!LoggedIn || tokenError.exist"
        />

        <div class="help">
            <h3 class="need-help">
                Need Help? Contact us on
            </h3>
            <a href="mailto:support@locovoco.com" class="need-help"
                >support@locovoco.com</a
            >
        </div>

        <footer></footer>
    </div>
</template>

<script>
import Login from "../../components/login.vue";

import { mapGetters } from "vuex";

export default {
    head() {
        return {
            title: this.LoggedIn
                ? this.personalInfo.name || this.user.name
                : "Login",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    hid: "description",
                    name: "description",
                    content: `${this.user_name} on Local Vocal`
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
                  style="color: FF72C6;"
                  xmlns="http://www.w3.org/2000/svg"
                ><circle cx="16" cy="16" r="15.0049" fill="currentColor" /></svg>`
                }
            ]
        };
    },
    data() {
        return {
            LoggedIn: false,
            user: {},
            gradients: ["grad_1", "grad_2", "grad_3", "grad_4"]
        };
    },
    computed: {
        personalInfo() {
            return this.$store.getters.user;
        },
        tokenError() {
            return this.$store.getters.getTokenError;
        }
        // ...mapGetters({ personalInfo: "user" })
    },
    methods: {
        decodeJWT(token) {
            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(function(c) {
                        return (
                            "%" +
                            ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                        );
                    })
                    .join("")
            );

            return JSON.parse(jsonPayload);
        },
        setUser(data) {
            this.user = this.decodeJWT(data);
        },
        logout() {
            localStorage.removeItem("token");
            this.$router.push("/explore");
        },
        getGradientClass() {
            let gradient = this.gradients[
                Math.floor(Math.random() * this.gradients.length)
            ];
            return gradient + " icon";
        }
    },
    components: {
        Login
    },

    mounted() {
        this.$store.dispatch("setCurrentPage");

        if (localStorage.getItem("token")) {
            this.LoggedIn = true;
            this.$store.dispatch("getPersonalProfile");
            this.$store.dispatch("getFavourites");
            this.$store.dispatch("getRated");

            if (!localStorage.getItem("token")) {
                this.LoggedIn = false;
            }
        }
    }
};
</script>

<style scoped>
footer {
    height: 4rem;
}

.flex {
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
    height: 100%;
}

@media (min-width: 600px) {
    .flex {
        justify-content: center;
        align-items: center;
    }
}

.profile {
    padding: 2rem 1.25rem;
}

.profile h1 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 3rem;
}

.info {
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}

.info h2 {
    opacity: 0;
    animation: up 300ms ease-in forwards;
    animation-delay: 400ms;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
}

.info h3 {
    opacity: 0;
    animation: up 300ms ease-in forwards;
    animation-delay: 400ms;
    margin-top: 1em;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.15rem;
}

.city {
    opacity: 0;
    animation: up 300ms ease-in forwards;
    animation-delay: 700ms;
    transform-origin: left;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-weight: 700;
    margin-top: 2em;
    border: 1px solid #dddddd;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    font-size: 0.6em;
    user-select: none;
}

.icon {
    animation: scoop-in 400ms linear forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    position: relative;
    margin-bottom: 2rem;
    background-size: 200% 100%;
    background-position: left bottom;
    transition: all 2s ease;

    background-size: 200% 100%;
    background-position: left bottom;
    transition: all 2s ease;
}

.icon svg circle {
    fill: black;
    opacity: 0.7;
}

.icon svg path {
    stroke: black;
    opacity: 0.7;
}

.icon:hover {
    background-position: right bottom;
}

.icon:after {
    pointer-events: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: 300ms all ease;
    opacity: 0;
    content: "Profile Pic Coming Soon!";
    position: absolute;
    width: max-content;
    top: -2em;
    padding: 0.8em 1em;
    padding-bottom: 1.2em;
    background-color: rgb(22, 22, 22);
    color: white;
    font-size: 0.5em;
    font-weight: bold;
    clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 85%,
        53% 85%,
        49% 100%,
        44% 84%,
        0 84%
    );
}

.icon:hover::after {
    opacity: 1;
    top: -4em;
}

.logout-btn {
    opacity: 0;
    animation: up 300ms ease-in forwards;
    animation-delay: 1000ms;
    width: fit-content;
    border: none;
    margin-top: 2rem;
    font-size: 0.7em;
    letter-spacing: 0.05em;
    background-color: black;
    color: white;
    padding: 1.1em 3em;
    border-radius: 3em;
}

.logout-btn svg path {
    stroke: white;
}

.logout-btn svg {
    margin-right: 1em;
    transform: scale(3);
}

.arrow {
    transition: all 150ms ease;
}

button:hover .arrow {
    animation: out 300ms ease;
}

.need-help {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    color: #aeaeae;
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0;
    animation: up 300ms ease-in forwards;
    animation-delay: 2000ms;
}

.help {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@keyframes heartbeat {
    0% {
        transform: scale(0.75);
    }
    20% {
        transform: scale(1);
    }
    40% {
        transform: scale(0.75);
    }
    60% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(0.75);
    }
}

@keyframes out {
    0% {
        transform: translateX(0%);
    }
    50% {
        transform: translateX(20%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes scoop-in {
    0% {
        clip-path: circle(0% at 0 0px);
    }
    100% {
        clip-path: circle(150% at 0 0px);
    }
}

@keyframes up {
    0% {
        transform: translateY(10px);
        opacity: 0;
    }
    100% {
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>
