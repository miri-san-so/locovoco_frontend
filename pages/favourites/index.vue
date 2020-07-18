<template>
    <div class="container">
        <h1>Favourites</h1>

        <div class="list" v-if="getFavourites.message === undefined">
            <ul class="list-cards">
                <li
                    class="info-card"
                    v-for="(content, i) in getFavourites"
                    :key="content._id"
                >
                    <FavouriteCard
                        @unfavourite-user="unfav"
                        :type="'list'"
                        :content="content"
                        :index="i"
                    />
                </li>
            </ul>
        </div>
        <footer></footer>
    </div>
</template>

<script>
import FavouriteCard from "../../components/FavouriteCard";

export default {
    head: {
        titleTemplate: "Favourites - Local Vocal",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Users Favourited Service"
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
                  style="color: #FF7A7A;"
                  xmlns="http://www.w3.org/2000/svg"
                ><circle cx="16" cy="16" r="15.0049" fill="currentColor" /></svg>`
            }
        ]
    },

    components: { FavouriteCard },
    computed: {
        getFavourites() {
            return this.$store.getters.getFavourites;
        }
    },
    methods: {
        unfav(data) {
            console.log(data);
        }
    },
    mounted() {
        this.$store.dispatch("getFavourites");
        this.$store.dispatch("setCurrentPage");
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

.container {
    padding: 2rem 1.25rem;
}

.info-card {
    margin-bottom: 1rem;
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
</style>
