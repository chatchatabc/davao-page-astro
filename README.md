# Welcome to [Davao Page Astro](https://davao.page)

Feel free to read the documentation if you have any problems or questions that you need to know about the project. The information here has been divided into multiple sections, in which explains all the necessary information that are needed for the project.

Any static assets, like images, can be placed in the `public/` directory.

# Tech Stack

Here lies all the tools and libraries that are used to develop and build the Davao Page website.

- Astro: https://astro.build
- TailwindCSS: https://tailwindcss.com
- CSS 3 Testing: https://css3test.com
- Astro-ImageTools: https://github.com/RafidMuhymin/astro-imagetools
- Astro-Compress: https://github.com/astro-community/astro-compress
- @astrojs/sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Astro-Robots-Txt: https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt
- NodeJS: https://nodejs.org/en/
- TypeScript and JavaScript

# Project Structure

Here lies the structure of the project in which shall also be explained alongside with their purposes.

- **public**
  - **`images:`** Used to store all the images that will be used for the development of Davao Page.
  - **`logo:`** Used to store the logo of the Davao Page, so that it will be separated from the main image folder.
  - **`_headers:`** Used to configure custom headers for the responses of Cloudflare Pages to the user's browser.
- **src**

  - **components**
    - **`Sections:`** Used to store reusable sections such as Hero Section, Features Section, etc.
    - **`Widgets:`** Used to store small reusable components such as cards, modal, etc.
  - **helpers**
    - **`commonUtils.ts:`** Used to store reusable functions / utilities to help with the development.
    - **`commonInterface.ts:`** Used to store reusable interfaces for TypeScript codes.
    - **`tailwindClasses.ts:`** Used to store customized component design for the Davao Page.
  - **layouts**
    - **`Layout.astro:`** Used as the main foundation template for generating the pages in Davao Page.
  - **pages**
    - **`entertainment:`** Contains all pages for entertainment, such as POI page and POI list.
    - **`hotels:`** Contains all pages for hotels, such as POI page and POI list.
    - **`news:`** Contains all pages for the news, such as POI page and POI list.
    - **`rent:`** Contains all pages for rent, such as POI page and POI list.
    - **`restaurants:`** Contains all pages for restaurant, such as POI page and POI list.
    - **`shopping:`** Contains all pages for shopping, such as POI page and POI list.
    - **`tourist-spot:`** Contains all pages for tourist-spot, such as POI page and POI list.
    - **`index.astro:`** Homepage of Davao Page
  - **`styles:`** Utilize to store independent css styles for a specific use case or component.

- **data**
  - **`boats.json:`** Used to store data of boats for Davao Page.
  - **`cars:`** Used to store data of cars for Davao Page.
  - **`catalogs:`** Used to store data of catalogs for Davao Page.
  - **`entertainments:`** Used to store data of entertainment for Davao Page.
  - **`hotels:`** Used to store data of hotels for Davao Page.
  - **`restaurants:`** Used to store data of restaurants for Davao Page.
  - **`shoppings:`** Used to store data of shoppings for Davao Page.
  - **`site_info:`** Used to store basic information of Davao Page.
  - **`sub_catalogs:`** Used to store data of sub catalogs for Davao Page.
  - **`tourist_spots:`** Used to store data of tourist-spots for Davao Page.

# Deployment

Here lies the tools and technologies that are essential for the deployment of Davao Page on Cloudflare.

- Cloudflare Pages: https://developers.cloudflare.com/pages/
- Headers: https://developers.cloudflare.com/pages/platform/headers/
- Wrangler: https://developers.cloudflare.com/workers/wrangler/commands/#pages

# 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                       | Action                                             |
| :---------------------------- | :------------------------------------------------- |
| `npm install`                 | Installs dependencies                              |
| `npm run dev`                 | Starts local dev server at `localhost:3000`        |
| `npm run build`               | Build your production site to `./dist/`            |
| `npm run preview`             | Preview your build locally, before deploying       |
| `npm run astro ...`           | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help`        | Get help using the Astro CLI                       |
| `wrangler pages publish dist` | Publish the dist folder to cloudflare pages        |
