import './App.css'

import { Header, Footer, Blog, Possibility, Features, Gpt3 } from './containers/index'
import { Cta, Brand, Navbar} from './components/index'

function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Gpt3 />
      <Features />
      <Possibility/>
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
