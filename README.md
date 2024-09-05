<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk, Supabase, and Next.js App Router Demo
  </h1>  
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a> 
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

[Clerk](https://clerk.com/) is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React or Next.js application.

[Supabase](https://supabase.com/) is an open-source, dedicated PostgreSQL database, trusted by millions of developers.

Integrating Supabase with Clerk gives you the benefits of using a Supabase database while leveraging Clerk's authentication, prebuilt components, and webhooks. To get the most out of Supabase with Clerk, you must implement custom [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security) (RLS) policies.

After following [the Clerk + Supabase integration guide](https://clerk.com/docs/integrations/databases/supabase), you will have learned how to:
  - Create RLS policies that restrict access to data based on the user's Clerk ID. This way, users can only access data that belongs to them.
  - Configure Supabase to accept JWTs from Clerk
  - Create a JWT template in Clerk to generate Supabase JWTs
  - Use the Supabase JWTs to authenticate Supabase queries in your Next.js app

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-supabase-nextjs&env=NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY,CLERK_JWT_KEY,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_KEY&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fdatabases%2Fintegrations%supabase&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fdatabases%2Fintegrations%supabase)

## Running the template

```bash
git clone https://github.com/clerk/clerk-supabase-nextjs
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-supabase-nextjs).

2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-supabase-nextjs) and create an application.

3. Set the required Clerk environment variables as shown in [the example `env.local.example` file](./.env.local.example).

4. `npm install` the required dependencies.

5. Follow [the Clerk + Supabase integration guide](https://clerk.com/docs/integrations/databases/supabase) to set up your Supabase database.

6. `npm run dev` to launch the development server.

## Learn more

To learn more about Clerk and Next.js, check out the following resources:

- [Quickstart: Get started with Next.js and Clerk](https://clerk.com/docs/quickstarts/nextjs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-supabase-nextjs)

- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-supabase-nextjs)
- [Next.js Documentation](https://nextjs.org/docs)

## Found an issue or want to leave feedback

Feel free to create a support thread on our [Discord](https://clerk.com/discord). Our support team will be happy to assist you in the `#support` channel.

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!

