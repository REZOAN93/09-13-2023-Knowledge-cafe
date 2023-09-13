import "./App.css";
import Header from "./Components/Header/Header";
import Knowledge from "./Knowledge/Knowledge";

function App() {
const [readingTime,setReadingTime]=useState(0)


const handleMarkAsRead=(time)=>{
console.log(time)

}
  return (
    <>
     <div className="container mx-auto">
      <Header></Header>
      <Knowledge handleMarkAsRead={handleMarkAsRead}></Knowledge>
      





     </div>
    </>
  );
}

export default App;
