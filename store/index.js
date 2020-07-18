function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
}

export const state = () => ({
    tab_is_hidden: true,
    formData: {
        name: "",
        phone_number: { type: Number },
        aadhar_number: { type: Number },
        password: "",
        about: "",
        contact: { whatsapp: "", instagram: "", facebook: "" },
        location_info: {
            lat: 0,
            lng: 0,
            locality: "",
            city: ""
        }
    },
    personalProfile: {},
    UsersProfile: {},
    tokenError: { exist: false, message: "" },
    currentPage: "",
    exploreContent: [],
    CategoryContent: [],
    favourites: [],
    rated: []
});

export const mutations = {
    hideTab(state) {
        state.tab_is_hidden = true;
    },
    showTab(state) {
        state.tab_is_hidden = false;
    },
    setDataForStepTwo(state, data) {
        state.formData.location_info.locality = data.street_name;
        state.formData.location_info.city = data.city;
        state.formData.location_info.lat = data.lat;
        state.formData.location_info.lng = data.lng;
        state.formData.category = data.category;
        state.formData.about = data.about;
        state.formData.services = data.tags;
    },
    setDataForStepOne(state, data) {
        state.formData.name = data.name;
        state.formData.phone_number = data.phone_number;
        state.formData.password = data.password;
        state.formData.aadhar_number = data.aadhar_number;
    },
    setDataForStepThree(state, data) {
        state.formData.contact.whatsapp = data.whatsapp_phone_number;
        state.formData.contact.instagram = data.instagram;
        state.formData.contact.facebook = data.facebook;
    },
    setPersonalProfile(state, data) {
        state.personalProfile = { ...data };
    },
    setTokenError(state, data) {
        state.tokenError.exist = true;
        state.tokenError.message = data;
    },
    setCurrentPage(state) {
        state.currentPage = this.$router.currentRoute.name;
    },
    setExploreContent(state, data) {
        state.exploreContent = data;
    },
    setCategoryContent(state, data) {
        state.CategoryContent = data;
    },
    setUsersProfile(state, data) {
        state.UsersProfile = data;
    },
    setFavourites(state, data) {
        state.favourites = data;
    },
    setRated(state, data) {
        state.rated = data.rated !== undefined ? data.rated : data;
    },
    unfav(state, data) {
        state.favourites = state.favourites.filter(x =>
            x.phone_number != data ? true : false
        );
    }
};

export const actions = {
    async getExploreContent({ commit }) {
        const data = await this.$axios.$get(
            "http://172.105.42.84/consumer/local/explore"
        );
        commit("setExploreContent", data);
    },
    async getCategoryContent({ commit }, category) {
        let token =
            localStorage.token !== undefined
                ? localStorage.getItem("token")
                : undefined;

        let CITY = token !== undefined ? parseJwt(token).city : "";
        const URL = `http://172.105.42.84/consumer/local/category/${category}`;
        let data =
            token !== undefined
                ? {
                      params: {
                          city: CITY
                      }
                  }
                : {};

        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                    "Origin, X-Requested-With, Content-Type, Accept ",
                "Content-type": "Application/json"
            }
        };

        const res = await this.$axios.$get(URL, data, config);
        commit("setCategoryContent", res);
    },
    async getPersonalProfile({ commit }) {
        const data = await this.$axios.$get(
            "http://172.105.42.84/consumer/user",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",

                    "Access-Control-Allow-Headers":
                        "Origin, X-Requested-With, Content-Type, Accept ",
                    "Content-type": "Application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        if (data.message == "Invalid Token") {
            localStorage.removeItem("token");
            commit("setTokenError", data.message);
        } else {
            commit("setPersonalProfile", data);
        }
    },
    async getUsersProfile({ commit }, phone_number) {
        const data = await this.$axios.$get(
            `http://172.105.42.84/consumer/user/${phone_number}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers":
                        "Origin, X-Requested-With, Content-Type, Accept ",
                    "Content-type": "Application/json"
                }
            }
        );

        commit("setUsersProfile", data);
    },
    async getFavourites({ commit }) {
        if (localStorage.token) {
            const data = await this.$axios.$get(
                "http://172.105.42.84/consumer/user/favourites",
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",

                        "Access-Control-Allow-Headers":
                            "Origin, X-Requested-With, Content-Type, Accept ",
                        "Content-type": "Application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            if (data.message === "Invalid Token") {
                localStorage.removeItem("token");
                commit("setTokenError", data.message);
            } else {
                commit("setFavourites", data);
            }
        }
    },
    setCurrentPage({ commit }) {
        commit("setCurrentPage");
    },
    setRated({ commit }, data) {
        commit("setRated", data);
    },
    async getRated({ commit }) {
        if (localStorage.token) {
            const data = await this.$axios.$get(
                "http://172.105.42.84/consumer/user/getRatedUsers",
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",

                        "Access-Control-Allow-Headers":
                            "Origin, X-Requested-With, Content-Type, Accept ",
                        "Content-type": "Application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            if (data.message === "Invalid Token") {
                localStorage.removeItem("token");
                commit("setTokenError", data.message);
            } else {
                commit("setRated", data);
            }
        }
    }
};

export const getters = {
    tabStatus: state => {
        return state.tab_is_hidden;
    },
    user: state => {
        return state.personalProfile;
    },
    getTokenError: state => {
        return state.tokenError;
    },
    getCurrentPage: state => {
        return state.currentPage;
    },
    getExploreContent: state => {
        let content = {};
        content["carousel"] = [];
        content["list"] = [];
        for (let i = 0; i < 3; i++) {
            if (state.exploreContent[i] != undefined)
                content.carousel.push(state.exploreContent[i]);
        }
        for (let i = 3; i < state.exploreContent.length; i++) {
            if (state.exploreContent[i] != undefined)
                content.list.push(state.exploreContent[i]);
        }
        return content;
    },
    getCategoryContent: state => {
        return state.CategoryContent;
    },
    getUsersProfile: state => {
        return state.UsersProfile;
    },
    getFavourites: state => {
        return state.favourites;
    },
    getRated: state => {
        return state.rated;
    }
};
