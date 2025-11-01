import NavBar from "../components/NavBar";
import { AppProvider } from "./context";



function App(){
    return (
    <AppProvider>
    <NavBar />
    </AppProvider>
    );
}

export default App;