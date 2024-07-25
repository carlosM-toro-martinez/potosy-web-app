import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/navBar";
import Theme from "./theme/theme";
import Details from "./components/Details";
import SectionContextProvider from "./context/SectionContextProvider";
import MapContextProvider from "./context/MapContextProvider";
import Home from "./pages/Home";
import ContactsComponent from "./components/ContactsComponent";
import NewsComponent from "./components/NewsComponent";
import Footer from "./components/Footer";
import Map from "./components/Map";
import AdminDashbord from "./components/AdminDashbordComponent";
import SectionList from "./components/SectionListComponent";
import AddSection from "./components/AddSectionsComponent";
import NewsAdminComponent from "./components/NewsAdminComponent";
import AddNewsComponent from "./components/NewsAdminComponent/AddNewsComponent";
import AddBusinessComponent from "./components/AddBusinessComponent";
import AddSocialNetworks from "./components/AddBusinessComponent/AddSocialNetworks";
import AddPromotions from "./components/AddBusinessComponent/AddPromotionsComponent";
import AddProducts from "./components/AddBusinessComponent/AddProductsComponent";
import AddHours from "./components/AddBusinessComponent/AddHoursComponent";
import AddImages from "./components/AddBusinessComponent/AddImagesComponent";
import LoginComponent from "./components/LoginComponent";
import SignupComponent from "./components/SignupComponent";
import MainContextProvider from "./context/MainContextProvider";
import EstablishmentDashbord from "./components/EstablishmentDashbordComponent";
import PrivateAdminRoute from "./PrivateAdminRoute/Index";
import ContactsDetailsComponent from "./components/ContactsComponent/ContactsDetailsComponent";
import NewsDetailsComponent from "./components/NewsComponent/NewsDetailsComponent";
import ChutillosComponent from "./components/ChutillosComponent";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import TouristRouterComponent from "./components/TouristRoutersComponent";
import ImageTextComponent from "./components/ImageTextComponent";
import ImageTextLeft from "./components/ImageTextLeft";
import AdminControlComponent from "./components/AdminControlComponent";
import AddAdminComponent from "./components/AdminControlComponent/AddAdminComponent";
import Section from "./pages/Section";
import AboutUs from "./components/AboutUsComponent";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <NavBar />
            <AdminDashbord />
            <Footer />
          </>
        }
      />
      <Route
        path="detailBusiness/:id"
        element={
          <>
            <NavBar />
            <Details />
            <Footer />
          </>
        }
      />
      <Route
        path="sections"
        element={
          <>
            <NavBar />
            <SectionList />
            <Footer />
          </>
        }
      />
      <Route
        path="addSections"
        element={
          <>
            <NavBar />
            <AddSection />
            <Footer />
          </>
        }
      />
      <Route
        path="addSections/:id"
        element={
          <>
            <NavBar />
            <AddSection />
            <Footer />
          </>
        }
      />
      <Route
        path="news"
        element={
          <>
            <NavBar />
            <NewsAdminComponent />
            <Footer />
          </>
        }
      />
      <Route
        path="addNews"
        element={
          <>
            <NavBar />
            <AddNewsComponent />
            <Footer />
          </>
        }
      />
      <Route
        path="addNews/:id"
        element={
          <>
            <NavBar />
            <AddNewsComponent />
            <Footer />
          </>
        }
      />
      <Route
        path="admins"
        element={
          <>
            <NavBar />
            <AdminControlComponent />
            <Footer />
          </>
        }
      />
      <Route
        path="addAdmins"
        element={
          <>
            <NavBar />
            <AddAdminComponent />
            <Footer />
          </>
        }
      />
      <Route
        path="addAdmins/:id"
        element={
          <>
            <NavBar />
            <AddAdminComponent />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

function App() {
  const queryClient = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <MainContextProvider>
          <SectionContextProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                      <ImageTextComponent />
                      <ImageTextLeft />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <NavBar />
                      <AboutUs />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/section/:id"
                  element={
                    <>
                      <Section />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/datails/:id"
                  element={
                    <>
                      <NavBar />
                      <Details />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/chutillos"
                  element={
                    <>
                      <NavBar />
                      <ChutillosComponent />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/routes"
                  element={
                    <>
                      <NavBar />
                      <TouristRouterComponent />
                      <Footer />
                    </>
                  }
                />
                {/* <Route path="/contacts">
                  <Route
                    path=""
                    element={
                      <>
                        <NavBar />
                        <ContactsComponent />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="details"
                    element={
                      <>
                        <NavBar />
                        <ContactsDetailsComponent />
                        <Footer />
                      </>
                    }
                  />
                </Route> */}
                <Route path="/news">
                  <Route
                    path=""
                    element={
                      <>
                        <NavBar />
                        <NewsComponent />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="details"
                    element={
                      <>
                        <NavBar />
                        <NewsDetailsComponent />
                        <Footer />
                      </>
                    }
                  />
                </Route>
                <Route
                  path="/map"
                  element={
                    <>
                      <MapContextProvider>
                        <NavBar />
                        <Map />
                      </MapContextProvider>
                    </>
                  }
                />
                <Route
                  path="/admin/*"
                  element={
                    <PrivateAdminRoute redirectPath="/">
                      <AdminRoutes />
                    </PrivateAdminRoute>
                  }
                />
                <Route path="/establishmentAdmin">
                  <Route
                    path=""
                    element={
                      <>
                        <NavBar />
                        <AddBusinessComponent />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="home"
                    element={
                      <>
                        <NavBar />
                        <EstablishmentDashbord />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="socialNet"
                    element={
                      <>
                        <NavBar />
                        <AddSocialNetworks />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="promotions"
                    element={
                      <>
                        <NavBar />
                        <AddPromotions />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="products"
                    element={
                      <>
                        <NavBar />
                        <AddProducts />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="openinghours"
                    element={
                      <>
                        <NavBar />
                        <AddHours />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="images"
                    element={
                      <>
                        <NavBar />
                        <AddImages />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path=":id"
                    element={
                      <>
                        <NavBar />
                        <AddBusinessComponent />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="socialNet/:id"
                    element={
                      <>
                        <NavBar />
                        <AddSocialNetworks />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="promotions/:id"
                    element={
                      <>
                        <NavBar />
                        <AddPromotions />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="products/:id"
                    element={
                      <>
                        <NavBar />
                        <AddProducts />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="openinghours/:id"
                    element={
                      <>
                        <NavBar />
                        <AddHours />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="images/:id"
                    element={
                      <>
                        <NavBar />
                        <AddImages />
                        <Footer />
                      </>
                    }
                  />
                </Route>
                <Route
                  path="/login"
                  element={
                    <>
                      <NavBar />
                      <LoginComponent />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <>
                      <NavBar />
                      <SignupComponent />
                      <Footer />
                    </>
                  }
                />
              </Routes>
            </BrowserRouter>
          </SectionContextProvider>
        </MainContextProvider>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;
