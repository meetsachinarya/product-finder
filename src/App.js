import { useEffect ,useState} from 'react';
import './App.css';
import Navbar from './Component/Navbar'
import catalogs from './data/Catalog.js'
import Catalogcard from './Component/Catalogcard.js';

function App() {
  const [showdata, setshowdata] = useState(false);

  

  useEffect(()=>{

    try {
      if(catalogs.length>0){
        setshowdata(true)
      }else{
        setshowdata(false)
      }
      

      console.log("success")
      
    } catch (error) {

      console.log("error")
      
    }

  },[])
  return (
    <div className="App">
      <Navbar title="Catalog Manager"/>
       {showdata ? 
       <div>
        {catalogs.map((item)=>{
        return <Catalogcard key ={item.id}
        title ={item.title}
        description ={item.description}
        /> 
        
        })}
       </div>
      :
    <div>
      no records founds
    </div>
    }
    </div>
  );

}
export default App;
