<template>
    <span>
        <p>{{ title }}</p>
        <button @click="emitTag">
            <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.59619 4.59619L13.7886 13.7886M13.7886 4.59619L4.59619 13.7886"
                    stroke="#2D2D2D"
                    stroke-width="2"
                />
            </svg>
        </button>
    </span>
</template>

<script>
export default {
    name: "tags",
    props: ["title"],
    methods: {
        emitTag() {
            this.$emit("remove-tag", this.title);
        }
    }
};
</script>

<style scoped>
span {
    padding: 0.3em 0.8em;
    width: max-content;
    display: grid;
    grid-auto-flow: column;
    margin: 0.3em;
    background-color: #e5e5e5;
    border: 1px solid #b4b4b4;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

p {
    margin-right: 0.5em;
    font-size: 0.8em;
    letter-spacing: 0.15em;
    line-height: 1.5em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Inter", sans-serif;
}

button {
    background-color: transparent;
    border: none;
}

button:hover svg path {
    stroke: red;
}

@media (min-width: 768px) {
}
</style>
