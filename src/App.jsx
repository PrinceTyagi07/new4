import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { apiUrl, filterData } from './data'
import { toast } from 'react-toastify'
const App = () => {

  const [Course, setCourse] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourse(output.data)
    }
    catch (error) {
      toast.error("Something went Wrong");
    }
  }
  useEffect(() => {

    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-bgDark2 flex flex-col gap-4 items-center" >
        <div>

          <Filter filterData={filterData} />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">

          <Cards Course={Course} />
        </div>
      </div>

    </div>
  )
}

export default App