const heading = React.createElement("div",{id:"parent"}, [React.createElement("div",{id:"child"},
    React.createElement("h1",{},"I am Abhijit"),React.createElement("h2",{},"I am Abhijit"))]);
    

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);