# Strapi Next Starter

Boilerplate for Next website with Strapi backend with multi-language support.

Next:

- Tailwind
- Next-Seo
- Next-Intl

Strapi:

- Multi-language support
- Postgres
- Cloudinary

## Getting started

### Strapi

Copy the .env.example as .env and add the secrets you will need a Postgres database to store the data. Secrets prefixed with `CL_` refer to Cloudinary for uploading media, you can obtain them by

### Next

Copy the .env.example as .env and add the `NEXT_PUBLIC_API_ENDPOINT` variable which should be the endpoint of the Strapi API `http://localhost:1337` in development.

### Run in development

Run `npm i` in the root directory and then both in the `client` and `strapi` folder.

`npm run start` will start both the back- and frontend.

## Deploy

The Next app can be deployed to vercel.com and the Strapi application to Heroku using the Heroku Postgres database.
