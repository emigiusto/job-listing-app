import React, {useState, useEffect} from 'react';
import JobBoardComponent from './assets/components/JobBoardComponent'
import data from './assets/data.json'

function App() {
  const [jobs,setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(()=>{
    setJobs(data);
  },[]);

  const filterFunc = ({role,level,tools,languages}
    ) => {
      if (filters.length === 0) {
          return true;
      }

      const tags = [level, role]

      if (languages){
          tags.push(...languages)
      }

      if (tools){
          tags.push(...tools)
      }

    return filters.every(filter => tags.includes(filter))
  }

  const handleTagClick = (tag) => {
    if(filters.includes(tag)){return}
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunc)

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
          <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg-img"></img>
      </header>
      <div className="container m-auto">
        {filters.length > 0 && (
            <div className="flex flex-wrap bg-white shadow-md -my-20 mb-16 mx-10 p-6 cursor-pointer rounded z-10 relative">
              {filters.map((filter) => 
                  <span 
                      onClick={()=> handleFilterClick(filter)}
                      className="text-teal-500 bg-teal-100 text-xs font-bold mr-4 p-2 mb-4 rounded hover:bg-teal-500 hover:text-white lg:mb-0 lg:text-sm">
                    ×  {filter}
                  </span>
                )}
              <button 
                  className="font-bold text-gray-700 ml-auto"
                  onClick={clearFilters}>
                    Clear
              </button>
            </div>
        )}  

        {jobs.lenght === 0 ? (
            <p>Jobs are fetching...</p>
            ) : (
            filteredJobs.map((job) => (
              <JobBoardComponent 
                handleTagClick={handleTagClick} 
                job={job} 
                key={job.id} 
              />
              ))
          )}
      </div>
    </div>
  );
}

export default App;
