import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Landing from "@/pages/Landing";

/**
 * One page. Documentation lives at docs.horsie.dev, built from the horsie
 * repo — `/docs*` is redirected there at the edge by public/_redirects, so it
 * never reaches this router.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
