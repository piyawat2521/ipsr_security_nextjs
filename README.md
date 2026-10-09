This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Local database and phpMyAdmin

Docker Desktop and Docker Compose are required. Copy `.env.example` to `.env` and replace both password placeholders with local development passwords. Then start MySQL and phpMyAdmin:

```bash
cp .env.example .env
docker compose up -d
```

Open [http://localhost:8080](http://localhost:8080) and sign in with the `MYSQL_USER` and `MYSQL_PASSWORD` values from `.env`. MySQL is also available to applications on the host at `127.0.0.1:3307`; containers in this Compose project can reach it at `mysql:3306`.

To stop the services without deleting database data, run `docker compose down`. To permanently remove the local database volume as well, run `docker compose down -v`.

Tailwind CSS 4 and Flowbite React are installed and configured. Flowbite React's generated setup is in `.flowbite-react/`, with its Tailwind integration in `app/globals.css` and Next.js plugin in `next.config.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
