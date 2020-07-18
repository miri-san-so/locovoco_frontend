<template>
    <div class="parent">
        <div class="options" v-if="asService === null">
            <h1>User Type</h1>
            <div class="option">
                <button @click="asService = false">
                    Register as General User
                </button>
                <span class="help-text info"
                    >CREATE A PROFILE TO SAVE USERS AND EXPLORE OTHER
                    FEATURES</span
                >
            </div>
            <div class="option">
                <button @click="asService = true">
                    Register as Service User
                </button>
                <span class="help-text info"
                    >CREATE A PROFILE TO SAVE USERS AND EXPLORE OTHER
                    FEATURES</span
                >
            </div>
        </div>
        <register_step_1
            @next-step="
                showStep1 = false;
                showStep2 = true;
                showStep3 = false;
            "
            v-if="asService === true && showStep1 === true"
        />
        <register_step_2
            @next-step="
                showStep1 = false;
                showStep2 = false;
                showStep3 = true;
            "
            v-if="asService === true && showStep2 === true"
        />
        <register_step_3
            @next-step="
                showStep1 = false;
                showStep2 = false;
                showStep3 = true;
            "
            v-if="asService === true && showStep3 === true"
        />
        <register_general_user v-if="asService === false" />
    </div>
</template>

<script>
import register_step_1 from "../../components/register_steps/register_step_1";
import register_step_2 from "../../components/register_steps/register_step_2";
import register_step_3 from "../../components/register_steps/register_step_3";
import register_general_user from "../../components/register_steps/register_general_user";

export default {
    head: {
        titleTemplate: "Register - Local Vocal",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Register Yourself To Unlock Other Features"
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
                  style="color:blue"
                  xmlns="http://www.w3.org/2000/svg"
                ><rect width="24" height="24"  fill="currentColor" /></svg>`
            }
        ]
    },
    components: {
        register_step_1,
        register_step_2,
        register_step_3,
        register_general_user
    },
    data() {
        return {
            asService: null,
            showStep1: true,
            showStep2: false,
            showStep3: false
        };
    }
};
</script>

<style scoped>
h1 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 5rem;
}

.info {
    text-align: center;
}

.parent {
    /* padding: 2rem 1.25rem; */
    display: flex;
    flex-direction: column;
    width: 100vw;
}

.parent h1 {
    margin-top: 2rem;
}

@media (min-width: 600px) {
    .parent {
        width: auto;
        justify-content: center;
        align-items: center;
    }
}

.options,
.option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button {
    padding: 1.2rem;
    background-color: rgb(241, 241, 241);
    border: none;
    border-radius: 0.5em;
    /* border: 1px solid gray; */
}

span {
    margin: 1rem 0 2rem 0;
}

@media screen and (min-width: 600px) {
    h1 {
        text-align: center;
    }
    button {
        cursor: pointer;
        background-color: rgb(235, 235, 235);
    }
}
</style>
