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
      <Filter filterData={filterData} />
      <Cards Course={Course} />
    </div>
  )
}

export default App