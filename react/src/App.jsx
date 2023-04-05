import CanvasModel from './canvas';
import Home from './pages/Home';
import Customizer from './pages/Customizer';

function App() {
  return (
    <div>
      <main className='app transition-all ease-in'>
        <Home/>
        <CanvasModel/>
        <Customizer/>
      </main>
      {/* <h1 className="head-text"></h1> */}
    </div>
  )
}

export default App
