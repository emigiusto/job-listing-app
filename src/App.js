import React, {useState, useEffect} from 'react';
import JobBoardComponent from './assets/components/JobBoardComponent'
import data from './assets/data.json'

function App() {
  const [jobs,setJobs] = useState([])

  useEffect(()=>{
    setJobs(data);
  },[])


  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
          <img src="/images/bg-header-desktop.svg" alt="bg-img"></img>
      </header>
      {
        jobs.lenght === 0 ? (<p>Jobs are fetching...</p>)
        : jobs.map(job => <JobBoardComponent job={job} key={job.id} />)
      }
    </div>
  );
}

export default App;
