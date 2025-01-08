# Blog Website

A simple news blog website built with Next.js and Tailwind CSS.

## Demo

[Live Demo](https://blog-website-navy-tau.vercel.app/)

## Tech Stack

- Next.js
- Tailwind CSS
- NewsAPI

## Project Structure

```
BLOG-WEBSITE/
├── .next/
├── app/
│   ├── article/[id]/
│   ├── components/
│   ├── constants/
│   ├── features/
│   ├── helpers/
│   ├── hooks/
│   ├── store/
│   ├── types/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── StoreProvider.tsx
├── public/
├── .env
├── .gitignore
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/alaincodes24/blog-website.git
cd blog-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Home page with article listings
- Article detail page
- About page
- Responsive design
- API response caching

## License

This project is open source and available under the MIT License.