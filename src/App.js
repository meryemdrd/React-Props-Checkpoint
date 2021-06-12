import Cv from './profile/Cv';
import './App.css';

function App() {
  return (
    <div  className="App" >
      <Cv fullName="Meriem" bio="I love Nabeul" profession="Manager" >
        <br></br>
           <img src="\meriemmpic.jpg" alt="Meriemm"/>
     </Cv> 
    </div>  
      );
}

export default App;
