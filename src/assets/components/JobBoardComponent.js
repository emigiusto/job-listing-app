import React from 'react';

function JobBoardComponent({job}) {
    const tags = [job.level, job.role]
    if (job.languages){
        tags.push(...job.languages)
    }

    if (job.tools){
        tags.push(...job.tools)
    }

    return (
        <div className={`transition duration-500 transform hover:-translate-y-1 flex flex-col bg-white shadow-md mx-2 mb-20 p-6 rounded sm:flex-row sm:mb-4 sm:mx-12 ${
            job.featured ? 'border-l-4 border-teal-500 border-solid':''}`}>
            <div>
                <img className="-mt-16 mb-4 w-20 h-20 sm:my-0 sm:h-24 sm:w-24" src={`${job.logo}`} alt={job.company}></img>
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}

                    {job.isNew && (
                        <span className="text-xs bg-teal-500 text-teal-100 m-2 py-1 px-2 rounded-full">New</span>)}
                    {job.featured && (
                        <span className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full">Featured</span>)}
                </h3>
                <h2 className="font-bold text-xl my-2">
                    {job.position}
                </h2>
                <p className="text-gray-700">
                    {job.postedAt} • {job.contract} • {job.location}
                </p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
                {tags ? 
                    (tags.map((tag)=>
                        <span className="text-teal-500 bg-teal-100 text-xs font-bold mr-4 p-2 mb-2 rounded sm:mb-0 sm:text-sm sm:mb-0">{tag}</span>)) : ''}


            </div>
        
        </div>
    );
}

export default JobBoardComponent;