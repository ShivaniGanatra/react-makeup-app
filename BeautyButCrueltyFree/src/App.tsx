import "./App.css";

import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";

const App = () => {
    return (
        <div>
            <Nav />
            <Aside />
            <Dashboard />
        </div>
    );
};

export default App;
