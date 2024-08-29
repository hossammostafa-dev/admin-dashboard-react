import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashbard from "./components/pages/dashbard/Dashbard";
import Team from "./components/pages/team/Team";
import Contacts from "./components/pages/contacts/Contacts";
import Invoices from "./components/pages/invoices/Invoices";
import Form from "./components/pages/form/Form";
import Calender from "./components/pages/calender/Calender";
import Faq from "./components/pages/faq/Faq";
import Bar from "./components/pages/bar/Bar";
import Pie from "./components/pages/pie/Pie";
import Line from "./components/pages/line/Line";
import Geoagraphy from "./components/pages/geoagraphy/Geoagraphy";
import NotFound from "./components/pages/notFound/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashbard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geoagraphy />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
