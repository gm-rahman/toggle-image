import Button from "./components/Button"
import Title from "./components/Title"
import Pagination from "./components/Pagination"
import Simage from "./components/Simage"
import { sculptureList } from "./assets/data.js"
import { useState } from "react"

function App() {
   const [index, setIndex] = useState(0)
   const [showMore, setShowMore] = useState(false)
   const hasNext = index < sculptureList.length - 1

   const handleNext = () => {
      if (hasNext) {
         setIndex(index + 1)
      } else {
         setIndex(0)
      }
   }

   const handleDetails = () => {
      setShowMore(!showMore)
   }
   const sculpture = sculptureList[index]
   return (
      <>
         <Button onClick={handleNext}>Next</Button>
         <Title title={sculpture.name} />
         <Pagination index={index + 1} length={sculptureList.length} />
         <Button onClick={handleDetails}>
            {" "}
            {showMore ? "Hide details" : "Show details"}
         </Button>
         {showMore && <p>{sculpture.description}</p>}
         <Simage url={sculpture.url} alt={sculpture.alt} />
      </>
   )
}
export default App
