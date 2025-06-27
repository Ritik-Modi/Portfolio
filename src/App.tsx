import HomePage from '@/pages/HomePage.tsx';
import AboutPage from '@/pages/AboutPage.tsx';
import SkillPage from '@/pages/SkillPage';
import ProjectPage from '@/pages/ProjectPage';
import ServicePage from '@/pages/ServicePage';
import ResumePage from '@/pages/ResumePage';
import ContactPage from '@/pages/ContactPage';
import Layout from "@/layouts/Layout";
import { Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <Toaster />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
