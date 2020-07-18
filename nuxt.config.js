export default {
    mode: "universal",

    /*
     ** Router for github deployment : https://github.com/nuxt/docs/blob/master/en/faq/github-pages.md
     */
    router: {
        base: "/"
    },
    /*
     ** Headers of the page
     */
    head: {
        title: "Locaaal",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "Locaaal",
                name: "Locaaal",
                content: "Platform for micro and small businesses"
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "~static/favicon.png" },
            {
                rel: "apple-touch-startup-image",
                href: "~static/launch-1125x2436.png",
                media:
                    "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            },
            {
                rel: "apple-touch-startup-image",
                href: "~static/launch-750x1334.png",
                media:
                    "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            },
            {
                rel: "apple-touch-startup-image",
                href: "~static/launch-1242x2208.png",
                media:
                    "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
            },
            {
                rel: "apple-touch-startup-image",
                href: "~static/launch-640x1136.png",
                media:
                    "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#69FFB7" },
    /*
     ** Global CSS
     */
    css: ["~/css/global.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [["@nuxtjs/pwa", { icon: true }]],
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/pwa", "@nuxtjs/axios"],

    icon: {
        iconSrc: "~static/icon.png"
    },

    manifest: {
        short_name: "Locaaal",
        name: "Locaaal",
        start_url: "/explore",
        theme_color: "#ffffff"
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};
