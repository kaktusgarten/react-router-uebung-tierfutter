import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticlesInfo from "./components/articlesPage/AriclesInfo";
import Articles from "./components/articlesPage/articles";
import AdminLayout from "./layout/AdminLayout";
import AdminHomePage from "./pages/admin/AdminHomePage";
import SettingsPage from "./pages/admin/SettingsPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ArticleDetails from "./components/articlesPage/ArticleDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/articles" element={<ArticlesPage />}>
          <Route index element={<ArticlesInfo />} />
          <Route path="/articles/overview" element={<Articles />} />
          <Route
            path="/articles/article-details"
            element={<ArticleDetails />}
          />
        </Route>
        <Route path="*" element="Not found..."></Route>
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHomePage />} />
        <Route path="/admin/settings" element={<SettingsPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default App;
