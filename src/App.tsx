import './css/App.css'
import Navbar from './components/Navbar/Navbar';
import MainInfo from './components/main_info/MainInfo';
import Slider from './components/news/Slider';
import Products from './components/products/Products';

function App() {


  return (
    <div className='main_wrapper flex flex-col items-center gap-2 w-full'>
      <Navbar />
      <MainInfo />
      <Slider />

      <Products />

    </div>
  )
}

export default App
