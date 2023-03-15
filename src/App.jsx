import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../src/components/Navbar/Navbar.css"

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";


import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

import PlansPage from './pages/Plans/PlansPage';
import PlanCreatePage from './pages/Plans/PlanCreatePage';
import PlanDetailsPage from './pages/Plans/PlanDetailsPage';
import PlanEditPage from './pages/Plans/PlanEditPage';

import PacksPage from './pages/Packs/PacksPage';
import PacksCreatePage from './pages/Packs/PacksCreatePage';
import PacksDetailsPage from './pages/Packs/PacksDetailsPage';
import PacksEditPage from './pages/Packs/PacksEditPage';
import ProfileEditPage from "./pages/ProfilePage/ProfileEditPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/profile/edit" element={<IsPrivate><ProfileEditPage /></IsPrivate>} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />

        <Route path="/plans" element={<PlansPage />} />
        <Route path="/plans/create" element={<IsPrivate><PlanCreatePage /></IsPrivate>} />
        <Route path="/plans/:planId" element={<IsPrivate><PlanDetailsPage /></IsPrivate>} />
        <Route path="/plans/:planId/edit" element={<IsPrivate><PlanEditPage /></IsPrivate>} /> {/*isUserId*/}

        <Route path="/packs" element={<PacksPage />} />
        <Route path="/packs/create" element={<IsPrivate><PacksCreatePage /></IsPrivate>} /> {/*isCompany*/}
        <Route path="/packs/:packId" element={<IsPrivate><PacksDetailsPage /></IsPrivate>} />
        <Route path="/packs/:packId/edit" element={<IsPrivate><PacksEditPage /></IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;
