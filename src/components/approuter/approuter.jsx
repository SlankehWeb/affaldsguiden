import { Route, Routes } from "react-router-dom";
import Frontpage from "../pages/frontpage/frontpage";
import SortingPage from "../pages/sortingpage/sortingpage";
import RecycleStationPage from "../pages/recyclestationpage/recyclestationpage";
import OrderContainerPage from "../pages/ordercontainerpage.jsx/ordercontainerpage";
import ErrorPage from "../pages/pageNotFound/error404";
import Login from "../pages/login/login";
import SortingDetails from "../pages/sortingpage/sortingdetails/sortingdetails";
import StationLocationDetail from "../pages/recyclestationpage/stationlocationdetail/stationlocationdetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/sortering" element={<SortingPage/>} />
      <Route path="/sortering/:id" element={<SortingDetails/>} />
      <Route path="/genbrugsstaioner" element={<RecycleStationPage/>} />
      <Route path="/genbrugsstaioner/:id" element={<StationLocationDetail/>} />
      <Route path="/bestilbeholder" element={<OrderContainerPage/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
};

export default AppRouter;
