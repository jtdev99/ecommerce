import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

import { AppRoutes } from "./routes";

const App = () => {
    return (
        <>
            <AppRoutes />
            <ToastContainer />
        </>
    );
};

export default App;
