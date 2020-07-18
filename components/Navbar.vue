<template>
    <nav>
        <button @click="isOpen = !isOpen">
            <span class="hamburger">
                <svg
                    width="20"
                    height="10"
                    viewBox="0 0 20 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 1.5H14M0 8.5H20"
                        stroke="black"
                        stroke-width="3"
                    />
                </svg>
            </span>
        </button>
        <!-- Locovoco -->
        <nuxt-link to="/explore" class="bold">स्थानीय</nuxt-link>
        <transition name="slide-fade">
            <menu v-if="isOpen">
                <ul>
                    <li>
                        <button @click="isOpen = !isOpen">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="2.12109"
                                    y="0.184204"
                                    width="20"
                                    height="3"
                                    transform="rotate(45 2.12109 0.184204)"
                                    fill="black"
                                />
                                <rect
                                    width="20"
                                    height="3"
                                    transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.12158 16.8159)"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </li>
                    <li @click="isOpen = !isOpen">
                        <nuxt-link to="/explore">Explore</nuxt-link>
                    </li>
                    <li @click="isOpen = !isOpen">
                        <nuxt-link to="/favourites">Favourites</nuxt-link>
                    </li>
                    <li @click="isOpen = !isOpen">
                        <nuxt-link to="/search">Search</nuxt-link>
                    </li>
                    <li @click="isOpen = !isOpen">
                        <nuxt-link to="/profile">Profile</nuxt-link>
                    </li>
                </ul>
            </menu>
        </transition>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            isOpen: false
        };
    }
};
</script>

<style scoped>
nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 10vh;
    padding: 1.8rem 1.25rem;
}

a {
    color: black;
    text-decoration: none;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    font-size: 1.2em;
}

menu {
    background-color: white;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

button {
    background-color: transparent;
    padding: 0.5rem;
    padding-left: 0;
    border: none;
    cursor: pointer;
}

ul {
    margin-top: 1.5rem;
    list-style: none;
    padding-left: 1.25rem;
}

li {
    font-size: 1.8rem;
    margin-bottom: 3rem;
    font-family: "Inter", sans-serif;
}

a {
    color: #696969 !important;
    text-decoration: none;
}

li:first-child {
    margin-bottom: 5rem;
}

.slide-fade-enter-active {
    transition: all 0.4s ease;
}
.slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
    /* transition: all 0.5s ease-out; */
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
}

.bold {
    font-weight: 900;
    color: black !important;
}
</style>
