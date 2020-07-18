<template>
    <div>
        <div class="message" v-if="init == true">
            <h3>{{ main_text }}</h3>
            <span class="help-text"> {{ help_text }} </span>

            <svg
                class="ufo"
                width="116"
                height="102"
                viewBox="0 0 116 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Group 162">
                    <g id="Group 161">
                        <path
                            id="Ellipse 40"
                            d="M77.7143 21.0801C77.7143 15.6485 75.0051 10.4393 70.1827 6.59855C65.3604 2.75781 58.8198 0.600098 52 0.600098C45.1801 0.600097 38.6396 2.75781 33.8172 6.59855C28.9948 10.4393 26.2856 15.6485 26.2856 21.0801L52 21.0801H77.7143Z"
                            fill="#ADC0E8"
                        />
                        <path
                            id="Vector 52"
                            d="M77 21C70 6.5 59.5 3.83333 52 0.5C70.5 0.5 79.1667 15.1667 77.5 21H77Z"
                            fill="url(#paint0_linear)"
                        />
                        <path
                            id="Ellipse 41"
                            d="M88 31.3198C87.9999 41.5598 16 41.5598 16 31.3198C16 27.9065 16 26.1998 26.2857 21.0798H77.7144C88.0001 26.1998 88 27.9065 88 31.3198Z"
                            fill="#121418"
                        />
                    </g>
                    <circle
                        id="Ellipse 42"
                        cx="28.5"
                        cy="25.5"
                        r="1.5"
                        fill="#656E7E"
                    />
                    <circle
                        id="Ellipse 46"
                        r="1.5"
                        transform="matrix(-1 0 0 1 76.5 25.5)"
                        fill="#656E7E"
                    />
                    <circle
                        id="Ellipse 44"
                        cx="52.5"
                        cy="25.5"
                        r="1.5"
                        fill="#656E7E"
                    />
                    <circle
                        id="Ellipse 45"
                        cx="40.5"
                        cy="25.5"
                        r="1.5"
                        fill="#656E7E"
                    />
                    <circle
                        id="Ellipse 47"
                        r="1.5"
                        transform="matrix(-1 0 0 1 64.5 25.5)"
                        fill="#656E7E"
                    />
                    <path
                        id="light"
                        d="M79 44C61 47 43 46 28 44C27.5 44.6667 22.8 51.9 0 83.5C51 116.5 93.3333 98 115.5 83.5C107.167 74.1667 88.2 54.8 79 44Z"
                        fill="url(#paint1_linear)"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="74.5"
                        y1="5"
                        x2="62.5"
                        y2="16.5"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop offset="0.0001" stop-color="#9BB3E5" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear"
                        x1="57.75"
                        y1="42"
                        x2="57.75"
                        y2="101.944"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#323D53" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div class="bg">
                <svg
                    class="tree tree-1"
                    width="44"
                    height="296"
                    viewBox="0 0 44 296"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        class="tree-1-branch-1"
                        d="M0 0L23 296H0V0Z"
                        fill="#121418"
                    />
                    <path
                        class="tree-1-branch-2"
                        d="M43.5806 70.418L9.58057 127.918L11.0121 146.761L43.5806 70.418Z"
                        fill="#121418"
                    />
                </svg>
                <svg
                    class="bush"
                    width="80"
                    height="55"
                    viewBox="0 0 80 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M77.583 26.615C83.6708 34.843 76.837 42.7133 72.6591 45.6199C72.6591 52.7665 68.7109 55.8968 58.4155 54.7788H27.3053C25.1896 55.2287 20.958 54.8317 20.958 49.6445C16.2579 59.9295 1.70997 49.1973 7.97681 43.1605C-0.304322 40.7011 -4.78059 28.6273 7.97681 25.2735C1.93383 17.2244 10.6626 7.16297 20.958 9.17523C22.9724 1.34965 33.7154 -1.10975 42.2204 4.92705C47.3681 -2.22774 62.1398 -2.22774 64.8256 9.17523C72.2115 6.04501 84.7451 14.7649 77.583 26.615Z"
                        fill="#57FFA4"
                    />
                    <path d="M40 20L37 55H40V20Z" fill="#1B6647" />
                    <path d="M40 39V35.25L59 24L40 39Z" fill="#1B6647" />
                </svg>

                <svg
                    class="tree tree-2"
                    width="82"
                    height="358"
                    viewBox="0 0 82 358"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        class="tree-2-branch-1"
                        d="M33.4429 0L60.4429 358H33.4429V0Z"
                        fill="#121418"
                    />
                    <path
                        class="tree-2-branch-2"
                        d="M81.0234 127.418L47.0234 184.918L48.4549 203.761L81.0234 127.418Z"
                        fill="#121418"
                    />
                    <path
                        class="tree-2-branch-3"
                        d="M0.443008 197.418L33.4429 254L33.4429 276L0.443008 197.418Z"
                        fill="#121418"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["main_text", "help_text", "init"],
    mounted() {
        console.log(this.main_text);
    }
};
</script>

<style>
.message {
    margin-top: 5%;
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
    .bush {
        transform: scale(1);
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
    transform: scale(0.8);
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
    50% {
        display: none;
    }
    100% {
        opacity: 0;
        display: none;
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
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
        left: 80%;
        transform: translateX(-50%);
    }
}
</style>
