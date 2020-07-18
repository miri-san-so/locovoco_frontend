<template>
    <div class="container">
        <div v-if="isEmpty === true">
            <h1 v-if="users_profile.message">{{ users_profile.message }}</h1>
            <Message
                v-if="users_profile.message !== undefined"
                :main_text="'Doesn’t Seem Anyone is Here'"
                :help_text="'Try Using Search Tab'"
                :init="users_profile.message !== undefined ? true : false"
            />
        </div>

        <div
            class="wrapper"
            v-if="isEmpty === false || users_profile.message === undefined"
        >
            <div class="one">
                <div class="basic-info">
                    <!-- Icon / Profile Pic -->
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
                    <!-- Name -->
                    <h1>
                        {{ users_profile.name }}
                    </h1>

                    <!-- Category Info -->
                    <span class="category-info">
                        <p>
                            Category
                        </p>
                        <nuxt-link :to="'/category/' + users_profile.category">
                            {{ users_profile.category }}
                        </nuxt-link>
                    </span>

                    <!-- Favourites and Rating -->
                    <div
                        v-if="
                            users_profile.favourited > 0 ||
                                rating !== NaN ||
                                rating > 0
                        "
                        class="fav-and-rating-info"
                    >
                        <div class="fav" v-if="users_profile.favourited > 0">
                            <p>{{ users_profile.favourited }}</p>
                            <svg
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.46865 2.37872C8.81749 3.03136 9 3.75997 9 4.5C9 3.75997 9.18251 3.03136 9.53135 2.37872C9.8802 1.72607 10.3846 1.16953 10.9999 0.758388C11.6152 0.34725 12.3225 0.0942055 13.0589 0.0216699C13.7954 -0.0508657 14.5384 0.0593462 15.2221 0.342543C15.9058 0.62574 16.5091 1.07318 16.9785 1.64523C17.448 2.21728 17.7692 2.89628 17.9135 3.62209C18.0579 4.3479 18.0211 5.09812 17.8062 5.80628C17.5914 6.51445 16.3871 7.97688 15.8638 8.50016L9 16.3636L2.04545 8.59091C1.63636 8.18182 0.408588 6.51445 0.193769 5.80628C-0.0210502 5.09812 -0.0579062 4.3479 0.0864664 3.62209C0.230839 2.89628 0.551983 2.21728 1.02145 1.64523C1.49092 1.07318 2.09423 0.62574 2.77793 0.342543C3.46162 0.0593462 4.20461 -0.0508657 4.94108 0.0216699C5.67754 0.0942055 6.38475 0.34725 7.00007 0.758388C7.61538 1.16953 8.1198 1.72607 8.46865 2.37872Z"
                                    fill="#FF0000"
                                />
                            </svg>
                        </div>
                        <div class="rating" v-if="rating > 0">
                            <p>
                                {{ rating }}
                            </p>

                            <svg
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                                    fill="#F8C100"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="about-and-services">
                    <!-- About -->
                    <div class="about">
                        <h2>ABOUT ME</h2>
                        <p>{{ users_profile.about }}</p>
                    </div>

                    <!-- Services -->
                    <div class="services">
                        <h2>Services I Provide</h2>

                        <!-- Chip Style -->

                        <div>
                            <span
                                class="chip"
                                v-for="(service, i) in users_profile.services"
                                :key="i"
                            >
                                {{ service }}
                            </span>
                        </div>

                        <!-- List Style -->

                        <!-- <ul>
                    <li v-for="(service, i) in users_profile.services" :key="i">
                        {{ service }}
                    </li>
                </ul> -->
                    </div>
                </div>
            </div>

            <div class="two">
                <!-- Contact -->
                <div class="get-in-touch">
                    <h2>GEt IN ToUch</h2>
                    <span v-if="users_profile.phone_number">
                        <p>Phone Number</p>
                        <a :href="'tel:' + users_profile.phone_number">{{
                            users_profile.phone_number
                        }}</a>
                    </span>
                    <span v-if="contact.whatsapp">
                        <p>Whatsapp</p>
                        <a
                            :href="
                                `https://wa.me/${contact.whatsapp}?text=Hey%20I%20found%20you%20on%20Sthaneey.in`
                            "
                            target="_blank"
                            >{{ contact.whatsapp }}</a
                        >
                    </span>
                    <span v-if="contact.instagram">
                        <p>Instagram</p>
                        <a
                            :href="
                                `https://www.instagram.com/${contact.instagram}/`
                            "
                            target="_blank"
                            >{{ contact.instagram }}</a
                        >
                    </span>
                    <span v-if="contact.facebook">
                        <p>Facebook</p>
                        <a
                            :href="
                                `https://www.facebook.com/${contact.facebook}/`
                            "
                            target="_blank"
                            >{{ contact.facebook }}</a
                        >
                    </span>
                </div>

                <!-- Favouriting and Rating -->
                <div class="actions" v-if="hasToken !== false">
                    <button
                        class="fav-btn"
                        :class="
                            computedAlreadyFavourited || alreadyFavourited
                                ? 'already-fav'
                                : ''
                        "
                        @click="addToFavourite"
                    >
                        <p>
                            {{
                                alreadyFavourited || computedAlreadyFavourited
                                    ? "ALREADY IN FAVOURITES"
                                    : "ADD TO FAVOURITE"
                            }}
                        </p>
                        <svg
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.46865 2.37872C8.81749 3.03136 9 3.75997 9 4.5C9 3.75997 9.18251 3.03136 9.53135 2.37872C9.8802 1.72607 10.3846 1.16953 10.9999 0.758388C11.6152 0.34725 12.3225 0.0942055 13.0589 0.0216699C13.7954 -0.0508657 14.5384 0.0593462 15.2221 0.342543C15.9058 0.62574 16.5091 1.07318 16.9785 1.64523C17.448 2.21728 17.7692 2.89628 17.9135 3.62209C18.0579 4.3479 18.0211 5.09812 17.8062 5.80628C17.5914 6.51445 16.3871 7.97688 15.8638 8.50016L9 16.3636L2.04545 8.59091C1.63636 8.18182 0.408588 6.51445 0.193769 5.80628C-0.0210502 5.09812 -0.0579062 4.3479 0.0864664 3.62209C0.230839 2.89628 0.551983 2.21728 1.02145 1.64523C1.49092 1.07318 2.09423 0.62574 2.77793 0.342543C3.46162 0.0593462 4.20461 -0.0508657 4.94108 0.0216699C5.67754 0.0942055 6.38475 0.34725 7.00007 0.758388C7.61538 1.16953 8.1198 1.72607 8.46865 2.37872Z"
                                fill="#FF0000"
                                :class="
                                    computedAlreadyFavourited ||
                                    alreadyFavourited
                                        ? 'already-fav-svg'
                                        : ''
                                "
                            />
                        </svg>
                    </button>

                    <div v-if="getAlreadyRated === false" class="rating-action">
                        <div class="stars">
                            <!-- Star 1 -->
                            <svg
                                @click="starit"
                                ref="star_1"
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                                    fill="none"
                                    stroke="#F8C100"
                                />
                            </svg>
                            <!-- Star 2 -->
                            <svg
                                @click="starit"
                                ref="star_2"
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                                    fill="none"
                                    stroke="#F8C100"
                                />
                            </svg>
                            <!-- Star 3 -->
                            <svg
                                @click="starit"
                                ref="star_3"
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                                    fill="none"
                                    stroke="#F8C100"
                                />
                            </svg>
                            <!-- Star 4 -->
                            <svg
                                @click="starit"
                                ref="star_4"
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                                    fill="none"
                                    stroke="#F8C100"
                                />
                            </svg>
                            <!-- Star 5 -->
                            <svg
                                @click="starit"
                                ref="star_5"
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54894 0.927049C9.8483 0.0057385 11.1517 0.0057404 11.4511 0.927051L13.0819 5.9463C13.2158 6.35833 13.5997 6.63729 14.033 6.63729H19.3105C20.2792 6.63729 20.682 7.8769 19.8983 8.4463L15.6287 11.5484C15.2782 11.803 15.1315 12.2544 15.2654 12.6664L16.8963 17.6857C17.1956 18.607 16.1411 19.3731 15.3574 18.8037L11.0878 15.7016C10.7373 15.447 10.2627 15.447 9.91221 15.7016L5.64258 18.8037C4.85887 19.3731 3.80439 18.607 4.10374 17.6857L5.7346 12.6664C5.86847 12.2544 5.72181 11.803 5.37132 11.5484L1.10169 8.4463C0.317977 7.8769 0.720754 6.63729 1.68948 6.63729H6.96703C7.40026 6.63729 7.78421 6.35833 7.91809 5.9463L9.54894 0.927049Z"
                                    fill="none"
                                    stroke="#F8C100"
                                />
                            </svg>
                        </div>
                        <button @click="addRating">SUBMIT</button>
                        <span class="help-text info-text"
                            >RATE THEM IF YOU HAVE USED THEIR SERVICES</span
                        >
                    </div>

                    <div class="alreadyRated" v-if="getAlreadyRated">
                        <h3>
                            {{
                                currently_rated
                                    ? "USER HAS BEEN RATED"
                                    : "You Have Already Rated This User"
                            }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <footer></footer>
    </div>
</template>

<script>
import Message from "../../components/Message";
export default {
    data() {
        return {
            phone_number: this.$route.params.id,
            contact: {},
            rating: 0,
            isEmpty: true,
            gradients: ["grad_1", "grad_2", "grad_3", "grad_4"],
            favs: [],
            alreadyFavourited: false,
            hasToken: false,
            count_rating: 0,
            alreadyRated: false,
            currently_rated: false,
            ratedUsers: [],
            user_name: ""
        };
    },
    head() {
        return {
            title: this.user_name,
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
                  viewBox="0 0 24 24"
                  fill="none"
                  style="color:pink"
                  xmlns="http://www.w3.org/2000/svg"
                ><rect width="24" height="24"  fill="currentColor" /></svg>`
                }
            ]
        };
    },
    components: { Message },
    methods: {
        InArray(array, number) {
            let existsInArray = false;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == number) {
                    existsInArray = true;
                    break;
                }
            }

            return existsInArray;
        },
        getGradientClass() {
            let gradient = this.gradients[
                Math.floor(Math.random() * this.gradients.length)
            ];
            return gradient + " icon";
        },
        starit(event) {
            let path =
                event.path || (event.composedPath && event.composedPath());

            if (path[0].toString() == "[object SVGPathElement]") {
                if (path[0].getAttribute("fill") == "none") {
                    path[0].setAttribute("fill", "#ffd337");
                    this.count_rating++;
                } else {
                    path[0].setAttribute("fill", "none");
                    this.count_rating--;
                }
            }
            if (path[0].toString() == "[object SVGSVGElement]") {
                if (path[0].children[0].getAttribute("fill") == "none") {
                    path[0].children[0].setAttribute("fill", "#ffd337");
                    this.count_rating++;
                } else {
                    path[0].children[0].setAttribute("fill", "none");
                    this.count_rating--;
                }
            }
        },
        async addToFavourite() {
            if (localStorage.token) {
                const config = {
                    headers: {
                        "Access-Control-Allow-Origin": "*",

                        "Access-Control-Allow-Headers":
                            "Origin, X-Requested-With, Content-Type, Accept ",
                        "Content-type": "Application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                };

                const URL = "http://172.105.42.84/producer/action/favourite";

                let data = await this.$axios.$post(
                    URL,
                    { phone_number: this.phone_number },
                    config
                );

                if (data.message == "Invalid Token") {
                    localStorage.removeItem("token");
                } else {
                    this.$store.dispatch("getFavourites");
                    this.alreadyFavourited = true;
                    if (this.InArray(this.favs, this.phone_number) == false)
                        this.favs = [...this.favs, this.phone_number];
                }
            }
        },
        async addRating() {
            if (localStorage.token && this.count_rating > 0) {
                const config = {
                    headers: {
                        "Access-Control-Allow-Origin": "*",

                        "Access-Control-Allow-Headers":
                            "Origin, X-Requested-With, Content-Type, Accept ",
                        "Content-type": "Application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                };

                const URL = "http://172.105.42.84/producer/action/rate";

                let data = await this.$axios.$post(
                    URL,
                    {
                        phone_number: this.phone_number,
                        rate: this.count_rating
                    },
                    config
                );

                if (data.message == "Invalid Token") {
                    return localStorage.removeItem("token");
                } else if (data.message == "Already Rated") {
                    this.currently_rated = false;
                    this.alreadyRated = true;
                    return;
                } else {
                    this.$store.dispatch("setRated", data);
                    this.alreadyRated = true;
                    this.currently_rated = true;
                }
            }
        }
    },
    computed: {
        users_profile() {
            let x = this.$store.getters.getUsersProfile;
            this.rating = Number(
                (x.total_rating / x.number_of_rating).toFixed(2)
            );
            this.contact = { ...x.contact };
            this.user_name = x.name;
            if (x.message !== undefined) this.isEmpty = true;

            return x;
        },
        computedAlreadyFavourited() {
            return this.alreadyFavourited;
        },
        getAlreadyRated() {
            if (this.ratedUsers.length != 0) {
                for (let i = 0; i < this.ratedUsers.length; i++) {
                    if (this.phone_number == this.ratedUsers[i]) {
                        this.alreadyRated = true;
                        break;
                    }
                }
            }
            return this.alreadyRated;
        }
    },
    async created() {
        this.favs = await this.$store.getters.getFavourites;
        let fav_num = [];
        if (this.favs && this.favs.length !== 0) {
            for (let i = 0; i < this.favs.length; i++) {
                fav_num.push(this.favs[i]);
            }
        }
        this.favs = fav_num;
    },
    async mounted() {
        this.hasToken = localStorage.token ? true : false;

        this.$store.dispatch("getUsersProfile", this.phone_number);
        this.$store.dispatch("setCurrentPage");

        this.ratedUsers = this.$store.getters.getRated;

        if (this.ratedUsers.length != 0) {
            for (let i = 0; i < this.ratedUsers.length; i++) {
                if (this.phone_number == this.ratedUsers[i]) {
                    this.alreadyRated = true;
                    break;
                }
            }
        }

        if (this.favs.length == 0) {
            await this.$store.dispatch("getFavourites");
            this.favs = await this.$store.getters.getFavourites;
        }

        for (let i = 0; i < this.favs.length; i++) {
            if (
                this.phone_number == this.favs[i].phone_number ||
                this.phone_number == this.favs[i]
            ) {
                this.alreadyFavourited = true;
                break;
            }
        }
    }
};
</script>

<style scoped>
.one {
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
}

.about-and-services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.two {
    margin-top: 3rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
}

.container {
    padding: 0rem 1.25em 2rem 1.25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 3rem;
}

.basic-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

.category-info {
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 0.25em;
    font-weight: 800;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.category-info a {
    margin-top: 1em;
    font-weight: 400;
    color: #ffffff;
    font-size: 0.75em;
    text-align: center;
    text-decoration: none;
    background-color: #000000;
    padding: 0.5em 1em;
    border-radius: 2em;
    width: fit-content;
}

.fav-and-rating-info {
    display: grid;
    margin-top: 2rem;
    grid-auto-flow: column;
    gap: 3em;
}

.fav,
.rating {
    display: flex;
    justify-content: center;
    align-items: center;
}

.fav p,
.rating p {
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
    font-size: 1em;
    margin-right: 0.5em;
}

.fav svg,
.rating svg {
    transform: scale(0.8);
}

.about,
.services,
.get-in-touch {
    margin-top: 5rem;
    font-family: "Open Sans", sans-serif;
}

@media (min-width: 768px) {
    .about h2,
    .services h2,
    .get-in-touch h2 {
        width: 100%;
        text-align: center;
    }

    .about p {
        text-align: center;
    }

    .services ul {
        align-items: center;
    }
}

h2 {
    font-weight: 800;
    font-size: 1em;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

.about p {
    letter-spacing: 0;
    margin-top: 2em;
}

.services {
    width: 100%;
}

/* List Style Services */

.services ul {
    margin-top: 2em;
    list-style-type: disc;
    padding-left: 2em;
}

.services ul li {
    margin-bottom: 2em;
}

/* Chip Style Services */

.services div {
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
}

.services div .chip {
    text-align: center;
    width: max-content;
    background-color: #e5e5e5;
    color: #000;
    font-weight: 800;
    text-transform: uppercase;
    padding: 0.8em 1.5em;
    border-radius: 1.5em;
    margin: 1em 0.5em;
}

.get-in-touch {
    width: 100%;
}

.get-in-touch span {
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
}

.get-in-touch span a {
    color: #000000;
}

.actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}

.actions {
    width: 100%;
    margin-top: 5rem;
    padding: 0 2rem;
}

.actions button {
    border: none;
    width: 100%;
    color: white;
    border-radius: 2rem;
    display: flex;
    justify-content: space-evenly;
    display: grid;
    grid-auto-flow: column;
    gap: 1em;
    align-items: center;
    text-align: right;

    background: #ff002f;
    color: white;
    font-weight: 400 !important;
    letter-spacing: 0.15em !important;

    transition: all 300ms ease-in-out;
}

.already-fav {
    background-color: #e5e5e5 !important;
    border: 1px solid #cecece !important;
    color: black !important;
}

.already-fav-svg {
    fill: #ffb8b8 !important;
}

.actions button svg {
    transform: scale(0.9);
}

.actions button svg path {
    fill: #ffffff;
}

.actions button:hover svg {
    animation: heartbeat 500ms ease-out;
}

footer {
    height: 8rem;
}

.slow {
    transition: all 1s ease;
}

.rating-action {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}

.rating-action h3 {
    font-family: "Inter", sans-serif;
}

.rating-action button {
    margin-top: 1rem;
    background: rgb(236, 195, 14);
    color: rgb(36, 13, 0);
    font-weight: 800;
    width: max-content;
    padding: 1em 2em;
    text-align: center;
    border-radius: 0.5em;
}

.stars {
    margin: 1rem 0 1rem 0;
    width: 50%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.alreadyRated {
    width: max-content;
    margin-top: 2rem;
    border-radius: 2rem;
    background-color: #e5e5e5;
    border: 1px solid #cecece;
    color: black;
    padding: 0.7rem 2rem;
}

.alreadyRated h3 {
    width: 100%;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 0.7em;
    font-weight: 400 !important;
    letter-spacing: 0.15em !important;
}

/* Decreasing Font size for Mobile */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }
    .one {
        height: max-content;
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
    .two {
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
    .about {
        margin-top: 5rem;
    }
    .container {
        padding-top: 2rem;
    }
    .services div {
        justify-content: start;
    }
    .get-in-touch {
        margin-top: 5rem;
    }
    .two {
        margin-top: 0;
    }
    .actions button {
        width: max-content;
        padding: 1rem;
    }

    .actions button p {
        display: none;
    }
    .actions button:hover p {
        display: inherit;
    }
    .actions button:hover svg {
        display: none;
    }

    .rating-action {
        width: 100%;
    }

    .rating-action button {
        margin-top: 1rem;
        background: rgb(236, 195, 14);
        color: rgb(36, 13, 0);
        font-weight: 800;
        width: max-content;
        padding: 1em 2em;
        text-align: center;
        border-radius: 0.5em;
    }
}

/* Adjusting Width of wrapper for Desktop */

@media (min-width: 768px) {
    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .about {
        margin-top: 0;
    }
    .actions button {
        font-size: 0.7em;
        width: max-content;
        font-weight: 600;
        padding: 1rem 2rem;
    }
}

.info-text {
    text-align: center;
    margin-top: 2rem;
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
</style>
