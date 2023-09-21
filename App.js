import React from 'react';
import EwasteLocator from './components/EwasteLocator';
import EducationalContent from './components/EducationalContent';
import UserRegistration from './components/UserRegistration';

function App() {
    return (
        <div>
            <header>
                <h1>E-Waste Recycling Locator</h1>
            </header>
            <main>
                <EwasteLocator />
                <EducationalContent />
                <UserRegistration />
            </main>
            <footer>
                <!-- Footer content -->
            </footer>
        </div>
    );
}

export default App;
