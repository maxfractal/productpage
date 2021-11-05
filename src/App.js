import React, {useState} from "react";
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import {items} from './static-data.js';

class Card extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            //TODO: Move container info to main content and then call card
            //
            <div className="container py-5">
                <div className="row justify-content-center">

                    <div className="col-12 col-lg-4">
                        <div className="testBox card testBox-shadow mx-auto my-5">
                            Lorem Ipsum

                        </div>
                        <img
                            src="https://dummyimage.com/288x400/000/fff"
                            className="card-img-top"
                            alt="Placeholder Image"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <hr/>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


/* Arrow function */
const App = () => {
    return (
        <div className="App">
            <Nav />
            <main className="App-content">
                <span>Cards</span>
            </main>
            <Card />
        </div>
    )
};

export default App;
//
// function App() {
//   const [active, setActiveTab] = useState('items');
//   return (
//       <div className="App">
//           <Nav
//               activeTab={activeTab}
//               setActiveTab={{setActiveTab}
//                   />
//       <header className="App-header">
//           <h3>Cards:</h3>
//             <Card/>
//           <ItemPage items={{items}}/>

        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
//       </header>
//     </div>
//   );
// }


