
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage} from "./pages";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path={'/'} element={<MainLayout/>}>
           <Route index element={<Navigate to={'/movies'}/>}/>
           <Route path={'/movies'} element={<MoviesPage/>}/>
           <Route path={'/movies/:id'} element={<MovieDetailsPage/>}/>

       </Route>
     </Routes>
    </div>
  );
}

export default App;
