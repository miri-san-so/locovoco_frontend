<template>
    <div class="categories">
        <h1>Category</h1>
        <button @click="goback" class="back_button">
            <p>
                GO BACK
            </p>
        </button>
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

        <footer>
            <span class="help-text info-text">
                CANT FIND WHAT YOU ARE LOOKING FOR? MAYBE TRY SEARCH TAB IF YOU
                HAVEN'T YET
            </span>
        </footer>
    </div>
</template>

<script>
export default {
    head: {
        titleTemplate: "Category - Local Vocal",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Find Users Based on Category"
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
                  style="color:750077"
                  xmlns="http://www.w3.org/2000/svg"
                ><rect width="24" height="24"  fill="currentColor" /></svg>`
            }
        ]
    },
    data() {
        return {
            categories: [
                "Household Work",
                "Tutors",
                "Tiffin Service",
                "Computer Service",
                "Electrician",
                "Clothing"
            ]
        };
    },
    methods: {
        goback: () => {
            globalThis.$nuxt.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.categories {
    padding: 2rem 1.25rem;
}

.categories h1 {
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 3rem;
}
.categories div span a {
    text-decoration: none;
    color: black;
    font-size: 1em;
    width: 100%;
    padding: 1em 0.5em;
    display: flex;
    justify-content: space-between;
}

@media (max-width: 481px) {
    .categories button.back_button {
        width: 100%;
    }
}

.categories button.back_button {
    border-radius: 3em;
    border: none;
    text-decoration: none;
    padding: 0.8em 4em;
    background-color: #181818;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 3rem;
}

.categories .back_button p {
    width: 100%;
    text-align: center;
    font-size: 1rem;
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

.info-text {
    text-align: center;
}

footer {
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
