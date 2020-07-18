<template>
    <div class="container">
        <div class="slow" v-if="isEmpty === false">
            <!-- <div class="help-link">
                <nuxt-link to="/category">category</nuxt-link>
            </div> -->
            <h1>{{ toTitleCase(category) }}</h1>
            <div class="list">
                <ul class="list-cards">
                    <li
                        class="info-card"
                        v-for="(content, i) in categoryContent"
                        :key="content._id"
                    >
                        <nuxt-link
                            :to="'/u/' + content.phone_number"
                            v-if="content.phone_number !== undefined"
                        >
                            <Card
                                :type="'list'"
                                :content="content"
                                :index="i"
                            />
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="slow" v-if="categoryContent.message !== undefined">
            <Message
                v-if="categoryContent.message !== undefined"
                :main_text="'Doesn’t Seem Anyone is Here'"
                :help_text="'Try Using Search Tab'"
                :init="categoryContent.message !== undefined ? true : false"
            />
        </div>
    </div>
</template>

<script>
import Card from "../../components/Card";
import Message from "../../components/Message";

export default {
    head() {
        return {
            title: this.category,
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    hid: "description",
                    name: "description",
                    content: `${this.category} on Local Vocal`
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
                  style="color:69FFB7"
                  xmlns="http://www.w3.org/2000/svg"
                ><rect width="24" height="24"  fill="currentColor" /></svg>`
                }
            ]
        };
    },
    components: { Card, Message },
    data() {
        return { isEmpty: false, category: "" };
    },
    methods: {
        toTitleCase(str) {
            return str.replace(/\w\S*/g, function(txt) {
                return (
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
            });
        }
    },
    computed: {
        categoryContent() {
            let data = this.$store.getters.getCategoryContent;
            this.isEmpty = data.message !== undefined ? true : false;
            this.category =
                data.message !== undefined
                    ? ""
                    : this.$router.currentRoute.params.specified;
            return data;
        }
    },
    created() {
        this.$store.dispatch(
            "getCategoryContent",
            this.$router.currentRoute.params.specified
        );
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

.slow {
    transition: all 400ms ease;
    animation: lol 400ms ease;
}

@keyframes lol {
    0% {
        overflow: 0;
    }
    100% {
        overflow: 1;
    }
}

a {
    color: unset;
    text-decoration: none;
}

.info-card {
    margin-bottom: 1rem;
}

.message {
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: "Inter", sans-serif;
    color: rgb(15, 15, 15);
    font-weight: 900;
    display: grid;
}

.message h3 {
    margin-bottom: 1rem;
}

.ufo {
    opacity: 0;
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    animation: flying 2000ms ease;
}

@media (min-width: 768px) {
    .ufo {
        animation: flying 4000ms ease;
    }
    .tree {
        transform: scale(1);
    }

    .tree-1 {
        left: 20%;
    }

    .tree-2 {
        left: 80%;
    }
}

#light {
    opacity: 0;
    animation: flash 500ms ease forwards;
    animation-delay: 300ms;
}

.tree {
    position: absolute;
    bottom: 0;
    transform: scale(0.7);
}

.tree-1 {
    left: 10%;
}

.tree-2 {
    left: 70%;
}

.bush {
    position: absolute;
    bottom: 8vh;
}

@keyframes flash {
    0% {
        opacity: 1;
    }
    10% {
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    30% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}

@keyframes flying {
    0% {
        opacity: 1;
        left: 0%;
        transform: translateX(-50%);
    }
    50% {
        left: 50%;
        transform: translateX(-50%);
    }
    95% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        left: 120%;
        transform: translateX(-50%);
    }
}

@media (min-width: 768px) {
    .list-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
    }
}

.help-link {
    font-size: 0.8em;
    display: flex;
    flex-direction: row;
}
</style>
