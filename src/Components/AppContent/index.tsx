import { ReactElement } from "react";
import "./index.css";

export interface AppContentProps {
    children?: ReactElement[];
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
    return (
        <div className="app-content">
            <main>{children}</main>
        </div>
    );
};

export default AppContent;
