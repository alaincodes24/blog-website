import { FC, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { categories } from "../constants/articles";
import { setCategoryClasses } from "../constants/styles";
import { useAppSelector } from "../hooks/redux";
import SearchInput from "./SearchInput";

interface MobileNavProps {
  toggleNav: () => void;
  selectCategory: (category: string) => void;
}

const MobileNav: FC<MobileNavProps> = ({ toggleNav, selectCategory }) => {
  const { selectedCategory } = useAppSelector((state) => state.articles);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [publishersOpen, setPublisherOpen] = useState(false);

  const toggleCategories = () => {
    if (publishersOpen) setPublisherOpen(false);
    setCategoriesOpen(!categoriesOpen);
  };

  const togglePublishers = () => {
    if (categoriesOpen) setCategoriesOpen(false);
    setPublisherOpen(!publishersOpen);
  };

  return (
    <div className="flex flex-col items-center md:hidden">
      <div className="flex flex-col w-full">
        <div
          className="flex items-center justify-between py-2 border-b-2"
          onClick={toggleCategories}
        >
          <h3 className="text-lg font-bold">Categories</h3>
          <FiChevronDown
            className={`text-2xl transition-transform duration-100 ease-in ${
              categoriesOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {categoriesOpen &&
          categories.map((category, index) => (
            <nav
              key={index}
              className={setCategoryClasses(category, selectedCategory)}
              onClick={() => {
                selectCategory(category);
                toggleNav();
              }}
            >
              {category}
            </nav>
          ))}
      </div>

      <div className="flex justify-between w-full py-2 border-b-2" onClick={togglePublishers}>
        <h3 className="text-lg font-bold">Available publishers</h3>
        <FiChevronDown
          className={`text-2xl transition-transform duration-100 ease-in ${
            publishersOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div className="flex flex-col items-center w-full gap-3 mt-6">
        <SearchInput />
      </div>
    </div>
  );
};

export default MobileNav;
