import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App() {
  const[progress,setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_APIKEY;
  //9c01c0f4be674f598a933a407a2dfb68
  //5fe4a78e65244fff872dcb29a9ad354a
  //e8fc9e610b2f42b396d256d79db2fd21 ajay
  const pageSize = 9;

  const toggleProgress=(progress)=>{
    setProgress(progress)
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Routes>
      <Route path='/' element={<News  key="general" heading="Top-Headlines" category="general" apiKey={apiKey} country="in" pageSize={pageSize} toggleProgress={toggleProgress} />}/>

      <Route path='business' element={<News  key="business" heading="Top-Headlines-Business" category="business" apiKey={apiKey} country="in" pageSize={pageSize} toggleProgress={toggleProgress} />}/>

      <Route path='entertainment' element={<News  key="entertainment" heading="Top-Headlines-Entertainment" category="entertainment" apiKey={apiKey} country="in" pageSize={pageSize} toggleProgress={toggleProgress} />}/>
      
      <Route path='health' element={<News  key="health" heading="Top-Headlines-Health-" category="health" apiKey={apiKey} country="in" pageSize={pageSize} toggleProgress={toggleProgress} />}/>

      <Route path='science' element={<News  key="science" heading="Top-Headlines-science" category="science" apiKey={apiKey} country="in" pageSize={pageSize} toggleProgress={toggleProgress} />}/>
      
      <Route path='sports' element={<News  key="sports" heading="Top-Headlines-Sports" category="sports" apiKey={apiKey} country="in" pageSize={pageSize} toggleProgress={toggleProgress} />}/>
      
      <Route path='technology' element={<News  key="technology" heading="Top-Headlines-Technology" category="technology" apiKey={apiKey} country="in" pageSize={pageSize} toggleProgress={toggleProgress} />}/>
            
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
