<template>
    <span id="chip" :class="error ? 'red chip' : 'green chip'">{{ text }}</span>
</template>

<script>
export default {
    name: "NotificationChip",
    props: ["text", "error"],
    mounted() {
        setTimeout(() => {
            document.getElementById("chip").classList.add("dissappear");
            setTimeout(() => {}, 300);
        }, 2000);
    }
};
</script>

<style scoped>
.chip {
    width: 100%;
    opacity: 0;
    animation: up 300ms ease-in-out forwards;
    font-size: 0.8rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(28, 29, 32);
    padding: 0.8rem 1rem;
    color: white;
    border-radius: 0.2rem;
    margin-top: 1rem;
}

.dissappear {
    animation: dissapear 300ms ease-out forwards;
}

.red {
    border-left: 5px solid rgb(255, 93, 93);
}

.green {
    border-left: 5px solid rgb(0, 255, 149);
}

@keyframes dissapear {
    0% {
        opacity: 1;
    }
    100% {
        transform: translateY(-10%);
        opacity: 0;
    }
}

@keyframes up {
    0% {
        transform: translateX(-49px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
