import { Route, Routes } from "react-router-dom";
import Frontpage from "../pages/frontpage/frontpage";
import SortingPage from "../pages/sortingpage/sortingpage";
import RecycleStationPage from "../pages/recyclestationpage/recyclestationpage";
import OrderContainerPage from "../pages/ordercontainerpage.jsx/ordercontainerpage";
import ErrorPage from "../pages/pageNotFound/error404";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/sortering" element={<SortingPage/>} />
      <Route path="/genbrugsstaioner" element={<RecycleStationPage/>} />
      <Route path="/bestilbeholder" element={<OrderContainerPage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
};

export default AppRouter;
