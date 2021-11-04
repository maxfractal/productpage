import React from 'react';


const Nav = () => (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#">Super Products</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <button>Items</button></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><button>Cart</button></a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

<nav className="App-nav">
    <ul>
        <li className="App-nav-item">
            <button>
                Items
            </button>
        </li>
        <li className="App-nav-item">
            <button>
                Cart
            </button>
        </li>
    </ul>

</nav>
    </React.Fragment>
)

// const Nav = ( {activeTab, onTabChange} ) => {
//
//     const itemClass = tabName =>
//         `App-nav-item ${
//             activeTab === tabName ? 'selected' : ''
//         }`;
//
//     return (
//         <nav className="App-nav">
//             <ul>
//                 <li className={itemClass('items')}>
//                     <button onClick={() => onTabChange('items')}>
//                         Items
//                     </button>
//                 </li>
//                 <li className={itemClass('cart')}>
//                     <button onClick={() => onTabChange('cart')}>
//                         Cart
//                     </button>
//                 </li>
//             </ul>
//
//         </nav>
//     );
//
// };

export default Nav;