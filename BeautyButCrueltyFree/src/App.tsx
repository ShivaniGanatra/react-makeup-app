import "./App.css";

import Nav from "./containers/Nav/Nav";
import Dashboard from "./containers/Dashboard/Dashboard";
import Aside from "./containers/Aside/Aside";

const App = () => {
    return (
        <div>
            <Nav />
            <main className="main">
                <Aside />
                <Dashboard />
            </main>
        </div>
    );
};

export default App;
