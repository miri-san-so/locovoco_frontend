<template>
    <nuxt-link
        :to="'/u/' + content.phone_number"
        v-if="content.phone_number !== undefined"
    >
        <div
            :class="
                this.type == 'list' ? 'card' : 'card-big ' + getClass(index)
            "
        >
            <span class="avatar" :class="getClass(index)">
                <p>{{ giveAvatar(content.name) }}</p>
            </span>
            <div class="info">
                <h1>{{ content.name }}</h1>
                <ul v-if="this.type !== 'list'">
                    <div class="services-big">
                        <strong>
                            Can Help You With
                        </strong>
                        <li v-for="i in 2" :key="i">
                            {{ content.services[i - 1] }}
                        </li>
                        <p v-if="content.services.length > 3">And More...</p>
                    </div>
                    <div class="icon">
                        <svg
                            width="17"
                            height="12"
                            viewBox="0 0 17 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 5.99767H16M16 5.99767L12.25 1M16 5.99767C14.75 7.72526 12.25 11.1434 12.25 10.9953"
                                stroke="#271313"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </ul>
                <div class="services" v-if="this.type === 'list'">
                    <p>
                        {{ giveService(content.services) }}
                    </p>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: "Card",
    props: ["content", "index", "type"],
    data() {
        return {
            currentIndex: 0,
            isOpen: false
        };
    },
    methods: {
        giveAvatar(name) {
            if (name !== undefined) return name[0];
            else return "";
        },
        giveService(x) {
            let y = x
                .reduce((a, b) => {
                    return (a += b + ", ");
                }, "")
                .trim();

            if (this.type == "list") return y;
            else return x;
        },
        getClass(index) {
            if (index === 0 || index === 5) return " avatar_bg_1";
            if (index === 1 || index === 6) return " avatar_bg_2";
            if (index === 2 || index === 7) return " avatar_bg_3";
            if (index === 3 || index === 8) return " avatar_bg_4";
            if (index === 4 || index === 9) return " avatar_bg_5";
        }
    }
};
</script>

<style scoped>
.card-big {
    display: flex;
    border: 0.2em solid black;
    align-content: center;
    height: calc(80vw - 2.5rem);
    width: calc(80vw - 2.5rem);
    margin-bottom: 1rem;
    padding: 1em;
    border-radius: 2em;
    text-transform: capitalize;
}

.card-big .avatar {
    display: none;
}

.card-big .info h1 {
    font-size: 1.8em;
}

.services-big {
    display: flex;
    flex-direction: column;
}

@media (min-width: 481px) and (max-width: 769px) {
    .card-big {
        width: 40vw;
        height: 40vw;
    }

    .card-big .info h1 {
        font-size: 1.5em;
    }

    .info ul div li,
    p {
        font-size: 0.8em;
    }
}

ul {
    list-style: none;
    align-self: baseline;
}

li {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8em;
}

p {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8em;
}

strong {
    font-family: "Open Sans", sans-serif;
    margin-bottom: 0.5em;
}

.card-big:hover .icon {
    animation: point 400ms ease-in forwards;
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

@keyframes squeeze_jump {
    0% {
        transform: scaleX(0.5);
    }
    50% {
        transform: scaleX(1);
        transform: translateY(-15%);
    }
    100% {
        transform: translateY(0);
    }
}

.card {
    background-color: #fafafa;
    display: flex;
    align-content: center;
    height: 4rem;
    padding: 0.4em;
    border-radius: 0.4rem;
    margin-right: 1rem;
}

.card:hover span > p {
    animation: squeeze_jump 500ms ease;
}

.avatar {
    border-radius: 0.2rem;
    display: flex;
    margin-right: 0.6em;
    justify-content: center;
    align-items: center;
    width: 3rem;
    padding: 1.5em;
}

.avatar p {
    font-family: "Inter", sans-serif;

    font-weight: 600;

    text-transform: capitalize;
}

.info {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    width: 100%;
}

.info h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1em;
}

.info ul {
    display: grid;
    grid-auto-flow: column;
    height: 100%;
}

.info ul .icon {
    transform-origin: center;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0 0.3em 0.3em 0;
}

.services {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Open Sans", sans-serif;
    font-size: 0.75em;
}

.services p {
    display: contents;
}

/* for desktop */
@media screen and (min-width: 768px) {
    .card-big {
        width: 25vw;
        height: 25vw;
    }
    .card-big .info h1 {
        font-size: 2.3em;
    }
    .card {
        background-color: #ececec;
    }

    .info ul div li,
    p {
        font-size: 0.8em;
    }

    .info ul div li {
        margin-bottom: 0.25em;
    }
}
</style>
