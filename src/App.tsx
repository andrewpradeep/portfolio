import "./App.css";
import AppContent from "./Components/AppContent";
import NavigationHeader from "./Components/NavigationHeader";
import ExperienceSection from "./Sections/Experience";
import IntroSection from "./Sections/Intro";

function App() {
    return (
        <>
            <div className="page">
                <NavigationHeader />
                <AppContent>
                    <IntroSection />
                    <ExperienceSection />
                </AppContent>
            </div>
        </>
    );
}

export default App;
