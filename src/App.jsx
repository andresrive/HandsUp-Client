import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../src/components/Navbar/Navbar.css"

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import IsPrivateUser from "./components/IsPrivate/isPrivateUser";
import IsPrivateCompany from "./components/IsPrivate/isPrivateCompany";
import IsPrivateForUsers from "./components/IsPrivate/isPrivateForUsers";
import IsPrivate from "./components/IsPrivate/IsPrivate";

import PlansPage from './pages/Plans/PlansPage';
import PlanCreatePage from './pages/Plans/PlanCreatePage';
import PlanDetailsPage from './pages/Plans/PlanDetailsPage';
import PlanEditPage from './pages/Plans/PlanEditPage';

import PacksPage from './pages/Packs/PacksPage';
import PacksCreatePage from './pages/Packs/PacksCreatePage';
import PacksDetailsPage from './pages/Packs/PacksDetailsPage';
import PacksEditPage from './pages/Packs/PacksEditPage';
import ProfileEditPage from "./pages/ProfilePage/ProfileEditPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route path="/profile/edit" element={<IsPrivate><ProfileEditPage /></IsPrivate>} />

        <Route path="/plans" element={<PlansPage />} />
        <Route path="/plans/:planId" element={<PlanDetailsPage />} />
        <Route path="/plans/create" element={<IsPrivateCompany><PlanCreatePage /></IsPrivateCompany>} />
        <Route path="/plans/:planId/edit" element={<IsPrivateUser><PlanEditPage /></IsPrivateUser>} /> {/*isUserId*/}

        <Route path="/packs" element={<PacksPage />} />
        <Route path="/packs/:packId" element={<PacksDetailsPage />} />
        <Route path="/packs/create" element={<IsPrivateForUsers><PacksCreatePage /></IsPrivateForUsers>} /> {/*isCompany*/}
        <Route path="/packs/:packId/edit" element={<IsPrivateForUsers><PacksEditPage /></IsPrivateForUsers>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
