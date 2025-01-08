import { FC } from "react";
import { setMoreNewsSectionTitle } from "../helpers/articles";
import { useAppSelector } from "../hooks/redux";
import useArticlesFetch from "../hooks/useArticlesFetch";
import CenterContent from "./CenterContent";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

const MoreNews: FC = () => {
  const { selectedCategory, selectedPublisher, searchKeyword } = useAppSelector(
    (state) => state.articles
  );
  const { isFetching, data } = useArticlesFetch();

  return (
    <section className="mt-6 md:mt-10">
      <CenterContent>
        <h3 className="mb-6 text-xl font-bold sm:text-2xl">
          {setMoreNewsSectionTitle(selectedPublisher?.name, selectedCategory, searchKeyword)}
        </h3>
        <div className="flex gap-16">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {isFetching
              ? Array(6)
                  .fill(0)
                  .map((_item, index) => <NewsCardSkeleton key={index} />)
              : data?.slice(4).map((article, index) => <NewsCard article={article} key={index} />)}
          </div>
        </div>
      </CenterContent>
    </section>
  );
};

export default MoreNews;
