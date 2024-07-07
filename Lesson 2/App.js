import React from "react";
import ReactDOM from "react-dom/client"

const Header = ()=>{
    return(
        <div className="navbar">
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719878400&semt=sph" alt="" className="logo" />
            <div className="search">
            <input type="text" name="" id=""  className="inp-search"/>
            <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" alt="" className="search-icon" />
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3URjWpcZfPfzAHxrU_Xms2GzfUJmvWXGjuw&s" alt="" className="icon" />
        </div>
    ); 
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);

// const header = React.createElement("div",{className:"title"}, 
//                [React.createElement("h1",{},"Hey this is h1 Element"),
//                 React.createElement("h2",{},"Hey this is h2 element"),
//                 React.createElement("h3",{},"Hey this is h3 element")
//                ]);



//    const Header = ()=>{
    //     return(
    //         <div className="title">
    //             <h1>H1 Tag</h1>
    //             <h2>H2 Tag</h2>
    //             <h3>H3 Tag</h3>
    //         </div>
    //     );
    // }