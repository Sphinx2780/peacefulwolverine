import { defineAstroPaperConfig } from "./src/types/config";

import { defineAstroPaperConfig } from "./src/types/config";
export default defineAstroPaperConfig({
  site: {
    url: "https://peacefulwolverine.com/",
    title: "Peaceful Wolverine",
    description: "The personal blog of writer Gordon Edgar — daily writing, short stories, and assorted ideas.",
    author: "Gordon Edgar",
    profile: "https://peacefulwolverine.com/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Regina",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      url: "https://github.com/Sphinx2780/peacefulwolverine/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "mail", url: "mailto:you@peacefulwolverine.com" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
