// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
    site: "https://equibop.equicord.org",

    integrations: [
        starlight({
            plugins: [starlightLinksValidator()],

            title: "Equibop",
            description: "Equibop is a custom desktop client for Discord",
            logo: {
                src: "./src/assets/equibop.svg"
            },

            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/Equicord/Equibop" },
                { icon: "discord", label: "Discord", href: "https://equicord.org/discord" }
            ],

            editLink: {
                baseUrl: "https://github.com/Equicord/equibop.equicord.org/edit/main/"
            },

            lastUpdated: true,
            pagination: false,

            sidebar: [
                {
                    label: "Installing",
                    items: [
                        { label: "Windows", slug: "install/windows" },
                        { label: "macOS", slug: "install/mac" },
                        { label: "Linux", slug: "install/linux" }
                    ]
                },
                {
                    label: "Wiki",
                    items: [
                        { label: "Overview", slug: "wiki" },
                        {
                            label: "Linux",
                            autogenerate: { directory: "wiki/linux" }
                        }
                    ]
                }
            ]
        })
    ]
});
