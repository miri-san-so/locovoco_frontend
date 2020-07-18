<template>
    <div class="container">
        <h1>Explore</h1>

        <div class="carousel">
            <div class="pad"></div>
            <div
                v-for="(content, i) in exploreContent.carousel"
                :key="content._id"
                class="carousel-card"
            >
                <!-- <nuxt-link
                    :to="'/u/' + content.phone_number"
                    v-if="content.phone_number !== undefined"
                > -->
                <Card :index="i" :content="content" :type="'card-big'" />
                <!-- </nuxt-link> -->
            </div>
            <div class="pad"></div>
        </div>

        <div class="list">
            <ul class="list-cards">
                <li
                    v-for="(content, i) in exploreContent.list"
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

        <div class="categories">
            <h1>Category</h1>
            <div>
                <span v-for="category in categories" :key="category">
                    <nuxt-link :to="'/category/' + category">
                        <p>
                            {{ category }}
                        </p>
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 1L7 7L1 13" stroke="black" />
                        </svg>
                    </nuxt-link>
                </span>
            </div>
            <nuxt-link to="/category" class="goto_category">
                <p>
                    View All Categories
                </p>
                <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 5.99767H16M16 5.99767L12.25 1M16 5.99767C14.75 7.72526 12.25 11.1434 12.25 10.9953"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </nuxt-link>
        </div>

        <footer></footer>
    </div>
</template>

<script>
import Card from "../../components/Card";

export default {
    head: {
        titleTemplate: "Explore - Local Vocal",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content:
                    "We help people with local solutions to their day to day needs"
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
                  style="color: yellow;"
                  xmlns="http://www.w3.org/2000/svg"
                ><circle cx="16" cy="16" r="15.0049" fill="currentColor" /></svg>`
            }
        ]
    },
    components: { Card },
    data() {
        return {
            categories: [
                "Household Work",
                "Tutors",
                "Tiffin Service",
                "Computer Service"
            ]
        };
    },
    computed: {
        exploreContent() {
            return this.$store.getters.getExploreContent;
        }
    },
    mounted() {
        this.$store.dispatch("getExploreContent");
        this.$store.dispatch("setCurrentPage");
        if (localStorage.token) {
            this.$store.dispatch("getRated");
        }
    }
};
</script>

<style scoped>
.pad {
    width: 1.25rem;
}

h1 {
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 3rem;
}

.container {
    padding: 2rem 1.25rem;
    display: flex;
    flex-direction: column;
}

.list {
    flex-grow: 1;
    margin-bottom: 4rem;
}

.list ul li {
    margin-bottom: 1rem;
}

a {
    color: unset;
    text-decoration: none;
}

.carousel {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    display: grid;
    grid-auto-flow: column;
    /* display: flex;
    justify-content: space-evenly; */
    position: relative;
    margin-left: -1.25rem;
    width: 100vw;
    margin-bottom: 3rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
}

.carousel::-webkit-scrollbar {
    width: 0 !important;
}

.carousel-card {
    width: max-content;
    margin-right: 1rem;
}

.categories h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
}
.categories div span a {
    padding: 1em 0.5em;
    display: flex;
    justify-content: space-between;
}

.categories .goto_category {
    width: fit-content;
    margin-left: 50%;
    transform: translateX(-50%);
    padding: 0.8em 3em;
    background-color: #181818;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
}

.categories .goto_category p {
    width: 100%;
    text-align: center;
}

.goto_category:hover svg {
    animation: point 400ms ease-in forwards;
}

.categories .goto_category svg {
    margin-left: 2em;
}

.categories div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    margin-bottom: 2rem;
}

.categories div span {
    font-family: "Inter", sans-serif;
    border-bottom: 1px solid #d1d1d1;
}

@media screen and (max-width: 481px) {
    .categories .goto_category {
        width: 100%;
    }
}

@media (min-width: 768px) {
    .list-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .carousel {
        width: calc(100vw - 1.04em);
    }
}

@media (min-width: 481px) and (max-width: 769px) {
    .carousel {
        width: calc(100vw - 1.04em);
    }
}

footer {
    height: 8rem;
}

@keyframes point {
    0% {
        transform: translateX(0%);
    }
    25% {
        transform: translateX(10%);
    }
    50% {
        transform: translateX(-5%);
    }
    75% {
        transform: translateX(5%);
    }
    100% {
        transform: translateX(0%);
    }
}
</style>
