"use client";
import { FC } from "react";
import Hero from "./components/Hero";
import MoreNews from "./components/MoreNews";
import SnackBar from "./components/SnackBar";
import { unFoundArticlesMessage } from "./constants/articles";
import useArticlesFetch from "./hooks/useArticlesFetch";

const Home: FC = () => {
  const { isFetching, isError, data, error } = useArticlesFetch();

  if (!isFetching && isError && error)
    return (
      <div className="flex items-center justify-center flex-1 px-3">
        {"status" in error && (
          <SnackBar message={(error.data as { message: string }).message} variant="error" />
        )}
        {"error" in error && <SnackBar message={error.error} variant="error" />}
      </div>
    );

  if (!isFetching && data && data.length <= 0)
    return (
      <div className="flex items-center justify-center flex-1 px-3">
        <SnackBar message={unFoundArticlesMessage} variant="info" />
      </div>
    );

  return (
    <main className="flex flex-col flex-1 mb-12 text-yellow-950 bg-light min-h-screen h-full">
      <Hero />

      <div className="h-full flex-1">
        <MoreNews />
      </div>
    </main>
  );
};

export default Home;
