import { Route, Routes } from "react-router-dom";
import App from "./App";
import { CompositionPatternForm } from "./composition/CompositionPatternForm";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<CompositionPatternForm />} />
    </Routes>
  );
}
