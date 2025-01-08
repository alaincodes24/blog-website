# Daily Brief blog website

## Project Setup

To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a .env file in the root directory and add the following environment variables:

```sh
NEXT_PUBLIC_BASE_URL=https://newsapi.org/v2
NEXT_PUBLIC_API_KEY=your_newsapi_key
```
- NEXT_PUBLIC_BASE_URL: The base URL for the NewsAPI.
- NEXT_PUBLIC_API_KEY: Your personal API key from NewsAPI.

4. Run the development server:
```sh
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main Technologies Used

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and generating static websites.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/): A toolset for efficient Redux development.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [NewsAPI](https://newsapi.org/): A simple HTTP REST API for searching and retrieving live articles from all over the web.

## Using NewsAPI

This app uses NewsAPI to fetch news articles. To set up NewsAPI:

1. Sign up at [NewsAPI](https://newsapi.org/) and get your API key.
2. Add your API key to the `.env`file as shown in the Project Setup section.

The API integration is handled in the `apiSlice` using Redux toolkit query

