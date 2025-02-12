import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext);
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* SideBar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-400">
                {searchFilter.title !== "" && (
                  <span className="inline-flex item-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="cross-icon"
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                    />
                  </span>
                )}
                {searchFilter.location !== "" && (
                  <span className="inline-flex item-center gap-2.5 ml-3 bg-red-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="cross-icon"
                      onClick={(e) =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                    />
                  </span>
                )}
              </div>
            </>
          )}

        {/* Category Filter  */}
        <div className="max-lg:hidden">
          <h4 className="font-medium text-lg py-4">Search by categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex gap-3 cursor-pointer">
                <input className="scale-125" type="checkbox" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Location Filter  */}
        <div className="max-lg:hidden my-5">
          <h4 className="font-medium text-lg py-4">Search by location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index} className="flex gap-3 cursor-pointer">
                <input className="scale-125" type="checkbox" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
