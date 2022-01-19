import { MainNavBar } from "@eachbase/fragments";
import { Footer } from "@eachbase/fragments";
import { Routers } from "./root/routers";
import { AppStyled } from "./styles";

function App() {
    return (
        <AppStyled>
            <div className="layout">
                <MainNavBar />
                <Routers />
                <Footer />
            </div>
        </AppStyled>
    );
}

export default App;
