import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { data } from '../../public/data'; // Import the data directly from data.js

export default function Home() {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]); // Changed the state name to 'jobs' instead of 'job'
  const [filteredJobs, setFilteredJobs] = useState([]); // New state to store the filtered jobs
  const [visibleItems, setVisibleItems] = useState(12); // State to keep track of visible items

  useEffect(() => {
    // Since you are now directly importing the data, no need for the fetch request
    setJobs(data);
    setFilteredJobs(data); // Initialize filteredJobs with the original data
  }, []);

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Show 3 more items on each click
  };

  // Function to handle the search when the user clicks the search button
  const handleSearch = () => {
    filterJobs();
  };

  // Function to filter jobs based on the search term
  const filterJobs = () => {
    // If the search term is empty, show all jobs from the original data
    if (search === '') {
      setFilteredJobs(jobs);
    } else {
      // Filter the jobs based on the search term from the original 'jobs' state
      const filteredJobs = jobs.filter(item =>
        item.company.toLowerCase().includes(search.toLowerCase()) ||
        item.position.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredJobs(filteredJobs);
    }
  };

  return (
    <div className="bg-color8 h-[100%] h-screen flex flex-col justify-start items-center">
      <SearchBar setSearch={setSearch} handleSearch={handleSearch} />
      <div className="w-[100vw] flex flex-col justify-start items-center mt-[96px]">
        {filteredJobs.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="w-[327px] h-[240px] bg-color10 mb-[49px]">
            <div
              className="w-[50px] h-[50px] rounded-xl absolute mt-[-25px] ml-[32px] flex justify-center items-center"
              style={{ backgroundColor: item.logoBackground }}
            >
              <img src={item.logo} alt="img" />
            </div>
            <div className="flex mt-[49px] ml-[32px] text-color7 mb-[16px] font-normal text-[16px]">
              <p>{item.postedAt}</p>
              <p>- {item.contract}</p>
            </div>
            <div className="ml-[32px]">
              <h1 className="mb-[17px] text-[20px] text-color4 font-bold">{item.position}</h1>
              <p className="mb-[44px] text-color7">{item.company}</p>
              <p className="text-[14px] text-color9 font-bold">{item.location}</p>
            </div>
          </div>
        ))}
        {visibleItems < filteredJobs.length && (
          <button onClick={handleLoadMore} className="text-color4 font-bold mt-4">
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
