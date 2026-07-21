import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Landing from "@/pages/Landing";
import Docs from "@/pages/Docs";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="docs" element={<Navigate to="/docs/introduction" replace />} />
        <Route path="docs/:slug" element={<Docs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
