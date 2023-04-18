import { Route, Routes } from "react-router-dom";
import App from "./App";
import { CompositionPatternForm } from "./composition/CompositionPatternForm";
import { Toggle } from "./compound/Toggle";
import { Counter } from "./container-presentation/Counter";

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<CompositionPatternForm />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/toggle" element={<Toggle />} />
    </Routes>
  );
}
