import "./App.css";
import AppContent from "./Components/AppContent";
import NavigationHeader from "./Components/NavigationHeader";
import ConclusionSection from "./Sections/Conclusion";
import ExperienceSection from "./Sections/Experience";
import IntroSection from "./Sections/Intro";
import ProjectSection from "./Sections/Projects";

function App() {
    return (
        <>
            <div className="page">
                <NavigationHeader />
                <AppContent>
                    <IntroSection />
                    <ExperienceSection />
                    <ProjectSection />
                    <ConclusionSection />
                </AppContent>
            </div>
        </>
    );
}

export default App;
