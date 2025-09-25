import { Route, Routes } from "react-router";
import {
  MainLayout,
  HomePage,
  AboutPage,
  ArticlesPage,
  ArticlesInfo,
  Articles,
  AdminLayout,
  AdminHomePage,
  SettingsPage,
  DashboardPage,
  ArticleDetails,
} from "./index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/articles" element={<ArticlesPage />}>
          <Route index element={<ArticlesInfo />} />
          <Route path="overview" element={<Articles />} />
          <Route path=":slug" element={<ArticleDetails />} />
        </Route>
        <Route path="*" element="Not found..."></Route>
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHomePage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
