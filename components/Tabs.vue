<template>
    <nav>
        <!-- Explore Page -->
        <div>
            <nuxt-link to="/explore">
                <svg
                    v-if="currentPage === 'explore'"
                    ref="svg_explore"
                    width="31"
                    height="23"
                    viewBox="0 0 31 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.6637 10.8791L1.32437 15.5263L0 10.5587L22.5243 2.85453M24.6637 10.8791L25.1391 12.6624L29.1171 11.5911L26.0269 0L22.0489 1.07129L22.5243 2.85453M24.6637 10.8791L22.5243 2.85453M12.1272 22.4191L15.6095 13.4191L20.0869 22.4191"
                        stroke="black"
                        stroke-width="2"
                        stroke-linejoin="bevel"
                    />
                </svg>
                <svg
                    v-if="currentPage !== 'explore'"
                    ref="svg_explore"
                    width="31"
                    height="23"
                    viewBox="0 0 31 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.6637 10.8791L1.32437 15.5263L0 10.5587L22.5243 2.85453M24.6637 10.8791L25.1391 12.6624L29.1171 11.5911L26.0269 0L22.0489 1.07129L22.5243 2.85453M24.6637 10.8791L22.5243 2.85453M12.1272 22.4191L15.6095 13.4191L20.0869 22.4191"
                        stroke="#9C9C9C"
                        stroke-width="2"
                        stroke-linejoin="bevel"
                    />
                </svg>
            </nuxt-link>
        </div>

        <!-- Favourites Page -->
        <div>
            <nuxt-link to="/favourites">
                <svg
                    v-if="currentPage === 'favourites'"
                    ref="svg_favourite"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.682 9.68198L18.658 9.70595L18.6357 9.73149L10.9907 18.4899L3.24524 9.83321L3.22673 9.81252L3.20711 9.79289C3.02412 9.6099 2.56602 9.03762 2.1018 8.36648C1.87664 8.04097 1.66454 7.71299 1.49654 7.42252C1.3189 7.11537 1.22452 6.90765 1.19377 6.80628C0.97895 6.09812 0.942094 5.3479 1.08647 4.62209C1.23084 3.89628 1.55198 3.21728 2.02145 2.64523C2.49092 2.07318 3.09423 1.62574 3.77793 1.34254C4.46162 1.05935 5.20461 0.949135 5.94108 1.02167C6.67754 1.09421 7.38475 1.34725 8.00006 1.75839C8.61538 2.16953 9.1198 2.72607 9.46865 3.37872C9.81749 4.03136 10 4.75997 10 5.5H11H12C12 4.75997 12.1825 4.03136 12.5314 3.37872C12.8802 2.72607 13.3846 2.16953 13.9999 1.75839C14.6152 1.34725 15.3225 1.09421 16.0589 1.02167C16.7954 0.949135 17.5384 1.05935 18.2221 1.34254C18.9058 1.62574 19.5091 2.07318 19.9785 2.64523C20.448 3.21728 20.7692 3.89629 20.9135 4.62209C21.0579 5.3479 21.021 6.09812 20.8062 6.80628C20.779 6.89593 20.6933 7.08127 20.5207 7.36061C20.3575 7.6247 20.1486 7.92229 19.9202 8.22395C19.4597 8.83225 18.9617 9.40227 18.682 9.68198Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
                <svg
                    v-if="currentPage !== 'favourites'"
                    ref="svg_favourite"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.682 9.68198L18.658 9.70595L18.6357 9.73149L10.9907 18.4899L3.24524 9.83321L3.22673 9.81252L3.20711 9.79289C3.02412 9.6099 2.56602 9.03762 2.1018 8.36648C1.87664 8.04097 1.66454 7.71299 1.49654 7.42252C1.3189 7.11537 1.22452 6.90765 1.19377 6.80628C0.97895 6.09812 0.942094 5.3479 1.08647 4.62209C1.23084 3.89628 1.55198 3.21728 2.02145 2.64523C2.49092 2.07318 3.09423 1.62574 3.77793 1.34254C4.46162 1.05935 5.20461 0.949135 5.94108 1.02167C6.67754 1.09421 7.38475 1.34725 8.00006 1.75839C8.61538 2.16953 9.1198 2.72607 9.46865 3.37872C9.81749 4.03136 10 4.75997 10 5.5H11H12C12 4.75997 12.1825 4.03136 12.5314 3.37872C12.8802 2.72607 13.3846 2.16953 13.9999 1.75839C14.6152 1.34725 15.3225 1.09421 16.0589 1.02167C16.7954 0.949135 17.5384 1.05935 18.2221 1.34254C18.9058 1.62574 19.5091 2.07318 19.9785 2.64523C20.448 3.21728 20.7692 3.89629 20.9135 4.62209C21.0579 5.3479 21.021 6.09812 20.8062 6.80628C20.779 6.89593 20.6933 7.08127 20.5207 7.36061C20.3575 7.6247 20.1486 7.92229 19.9202 8.22395C19.4597 8.83225 18.9617 9.40227 18.682 9.68198Z"
                        stroke="#9C9C9C"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </nuxt-link>
        </div>

        <!-- Search Page -->
        <div>
            <nuxt-link to="/search">
                <svg
                    v-if="currentPage === 'search'"
                    ref="svg_search"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.5 14L22.1681 21.3864M14.761 14.7935C11.613 17.9415 6.50904 17.9415 3.36102 14.7935C0.212994 11.6455 0.212994 6.54151 3.36102 3.39349C6.50904 0.245465 11.613 0.245465 14.761 3.39349C17.909 6.54151 17.909 11.6455 14.761 14.7935Z"
                        stroke="#000000"
                        stroke-width="2"
                    />
                </svg>
                <svg
                    v-if="currentPage !== 'search'"
                    ref="svg_search"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.5 14L22.1681 21.3864M14.761 14.7935C11.613 17.9415 6.50904 17.9415 3.36102 14.7935C0.212994 11.6455 0.212994 6.54151 3.36102 3.39349C6.50904 0.245465 11.613 0.245465 14.761 3.39349C17.909 6.54151 17.909 11.6455 14.761 14.7935Z"
                        stroke="#9C9C9C"
                        stroke-width="2"
                    />
                </svg>
            </nuxt-link>
        </div>

        <!-- Profile Page -->
        <div>
            <nuxt-link to="/profile">
                <svg
                    v-if="currentPage === 'profile'"
                    ref="svg_profile"
                    width="27"
                    height="19"
                    viewBox="0 0 27 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.28516 14.5C8.11849 17 15.2852 20.5 21.2852 14.5M8.28516 3.5C8.28516 5.433 6.71815 7 4.78516 7C2.85216 7 1.28516 5.433 1.28516 3.5C1.28516 1.567 2.85216 0 4.78516 0C6.71815 0 8.28516 1.567 8.28516 3.5ZM26.2852 3.5C26.2852 5.433 24.7182 7 22.7852 7C20.8522 7 19.2852 5.433 19.2852 3.5C19.2852 1.567 20.8522 0 22.7852 0C24.7182 0 26.2852 1.567 26.2852 3.5Z"
                        stroke="#000000"
                        stroke-width="2"
                    />
                </svg>
                <svg
                    v-if="currentPage !== 'profile'"
                    ref="svg_profile"
                    width="27"
                    height="19"
                    viewBox="0 0 27 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.28516 14.5C8.11849 17 15.2852 20.5 21.2852 14.5M8.28516 3.5C8.28516 5.433 6.71815 7 4.78516 7C2.85216 7 1.28516 5.433 1.28516 3.5C1.28516 1.567 2.85216 0 4.78516 0C6.71815 0 8.28516 1.567 8.28516 3.5ZM26.2852 3.5C26.2852 5.433 24.7182 7 22.7852 7C20.8522 7 19.2852 5.433 19.2852 3.5C19.2852 1.567 20.8522 0 22.7852 0C24.7182 0 26.2852 1.567 26.2852 3.5Z"
                        stroke="#9C9C9C"
                        stroke-width="2"
                    />
                </svg>
            </nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Tabs",
    data() {
        return {
            page: ""
        };
    },
    methods: {
        setFocus() {
            let DISABLE = "#9C9C9C";
            switch (this.currentPage) {
                case "explore":
                    this.$refs.svg_explore.children[0].style.stroke = "black";
                    this.$refs.svg_favourite.children[0].style.stroke = DISABLE;
                    this.$refs.svg_search.children[0].style.stroke = DISABLE;
                    this.$refs.svg_profile.children[0].style.stroke = DISABLE;
                    break;

                case "favourites":
                    this.$refs.svg_explore.children[0].style.stroke = DISABLE;
                    this.$refs.svg_favourite.children[0].style.stroke = "black";
                    this.$refs.svg_search.children[0].style.stroke = DISABLE;
                    this.$refs.svg_profile.children[0].style.stroke = DISABLE;
                    break;

                case "search":
                    this.$refs.svg_explore.children[0].style.stroke = DISABLE;
                    this.$refs.svg_favourite.children[0].style.stroke = DISABLE;
                    this.$refs.svg_search.children[0].style.stroke = "black";
                    this.$refs.svg_profile.children[0].style.stroke = DISABLE;
                    break;

                case "profile":
                    this.$refs.svg_explore.children[0].style.stroke = DISABLE;
                    this.$refs.svg_favourite.children[0].style.stroke = DISABLE;
                    this.$refs.svg_search.children[0].style.stroke = DISABLE;
                    this.$refs.svg_profile.children[0].style.stroke = "black";
                    break;

                default:
                    break;
            }
        }
    },
    computed: {
        currentPage() {
            this.page = this.$store.getters.getCurrentPage;
            return this.$store.getters.getCurrentPage;
        }
    },
    mounted() {
        this.page = this.$store.getters.getCurrentPage;
    }
};
</script>

<style scoped>
nav {
    background-color: #ffffff;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    padding: 1em 1.2em;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

svg {
    transform: scale(0.8);
}

a:focus svg > path {
    stroke: black;
}

@media screen and (min-width: 600px) {
    nav {
        box-shadow: 0px -4px 15px rgba(0, 0, 0, 0.2);
        justify-content: space-evenly;
    }
}
</style>
