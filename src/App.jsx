import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavBar from './components/navBar';
import Theme from './theme/theme'
import Details from './components/Details';
import SectionContextProvider from './context/SectionContextProvider';
import MapContextProvider from './context/MapContextProvider';
import Home from './pages/Home';
import AboutComponent from './components/AboutComponent';
import BackgroundComponent from './components/BackgroundComponent';
import ContactsComponent from './components/ContactsComponent';
import NewsComponent from './components/NewsComponent';
import Footer from './components/Footer';
import Map from './components/Map';
import AdminDashbord from './components/AdminDashbordComponent';
import SectionList from './components/SectionListComponent';
import AddSection from './components/AddSectionsComponent';
import NewsAdminComponent from './components/NewsAdminComponent';
import AddNewsComponent from './components/NewsAdminComponent/AddNewsComponent';
import AddBusinessComponent from './components/AddBusinessComponent';
import AddSocialNetworks from './components/AddBusinessComponent/AddSocialNetworks';
import AddPromotions from './components/AddBusinessComponent/AddPromotionsComponent';
import AddProducts from './components/AddBusinessComponent/AddProductsComponent';
import AddHours from './components/AddBusinessComponent/AddHoursComponent';
import AddImages from './components/AddBusinessComponent/AddImagesComponent';
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import MainContextProvider from './context/MainContextProvider';
import EstablishmentDashbord from './components/EstablishmentDashbordComponent';
import PrivateAdminRoute from './PrivateAdminRoute/Index';
import ContactsDetailsComponent from './components/ContactsComponent/ContactsDetailsComponent';
import NewsDetailsComponent from './components/NewsComponent/NewsDetailsComponent';
import MapInfo from './components/ContactsComponent/MapInfoComponent';
import ChutillosComponent from './components/ChutillosComponent';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='' element={
        <>
          <NavBar />
          <AdminDashbord />
          <Footer />
        </>
      } />
      <Route path='detailBusiness/:id' element={
        <>
          <NavBar />
          <BackgroundComponent>
            <Details />
          </BackgroundComponent>
          <Footer />
        </>
      } />
      <Route path='sections' element={
        <>
          <NavBar />
          <SectionList />
          <Footer />
        </>
      } />
      <Route path='addSections' element={<>
        <NavBar />
        <BackgroundComponent>
          <AddSection />
        </BackgroundComponent>
        <Footer />

      </>} />
      <Route path='addSections/:id' element={<>
        <NavBar />
        <BackgroundComponent>
          <AddSection />
        </BackgroundComponent>
        <Footer />

      </>} />
      <Route path='news' element={<>
        <NavBar />
        <BackgroundComponent>
          <NewsAdminComponent />
        </BackgroundComponent>
        <Footer />
      </>} />
      <Route path='addNews' element={<>
        <NavBar />
        <BackgroundComponent>
          <AddNewsComponent />
        </BackgroundComponent>
        <Footer />

      </>} />
      <Route path='addNews/:id' element={<>
        <NavBar />
        <BackgroundComponent>
          <AddNewsComponent />
        </BackgroundComponent>
        <Footer />

      </>} />
    </Routes>
  );
};



function App() {
  const queryClient = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <MainContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<>
                <SectionContextProvider>
                  <Home />
                </SectionContextProvider>
                <Footer />
              </>} />
              <Route path='/datails/:id' element={<>
                <NavBar />
                <BackgroundComponent>
                  <Details />
                </BackgroundComponent>
                <Footer />
              </>} />
              <Route path='/about' element={<>
                <NavBar />
                <AboutComponent />
                <Footer />
              </>} />
              <Route path='/chutillos' element={<>
                <NavBar />
                <ChutillosComponent />
                <Footer />
              </>} />
              <Route path='/contacts'>
                <Route path='' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <ContactsComponent />
                  </BackgroundComponent>
                  <MapInfo />
                  <Footer />
                </>} />
                <Route path='details' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <ContactsDetailsComponent />
                  </BackgroundComponent>
                  <Footer />
                </>} />
              </Route>
              <Route path='/news'>
                <Route path='' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <NewsComponent />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path='details' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <NewsDetailsComponent />
                  </BackgroundComponent>
                  <Footer />
                </>} />
              </Route>
              <Route path='/map' element={<>
                <MapContextProvider>
                  <NavBar />
                  <Map />
                </MapContextProvider>
              </>} />
              <Route path="/admin/*" element={
                <PrivateAdminRoute
                  redirectPath="/"
                >
                  <AdminRoutes />
                </PrivateAdminRoute>
              } />
              <Route path='/establishmentAdmin'>
                <Route path='' element={
                  <>
                    <NavBar />
                    <BackgroundComponent>
                      <AddBusinessComponent />
                    </BackgroundComponent>
                    <Footer />
                  </>
                } />
                <Route path='home' element={
                  <>
                    <NavBar />
                    <BackgroundComponent>
                      <EstablishmentDashbord />
                    </BackgroundComponent>
                    <Footer />
                  </>
                } />
                <Route path='socialNet' element={
                  <>
                    <NavBar />
                    <BackgroundComponent>
                      <AddSocialNetworks />
                    </BackgroundComponent>
                    <Footer />
                  </>
                } />
                <Route path='promotions' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddPromotions />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path='products' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddProducts />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path='openinghours' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddHours />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path='images' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddImages />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path=':id' element={
                  <>
                    <NavBar />
                    <BackgroundComponent>
                      <AddBusinessComponent />
                    </BackgroundComponent>
                    <Footer />
                  </>
                } />
                <Route path='socialNet/:id' element={
                  <>
                    <NavBar />
                    <BackgroundComponent>
                      <AddSocialNetworks />
                    </BackgroundComponent>
                    <Footer />
                  </>
                } />
                <Route path='promotions/:id' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddPromotions />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path='products/:id' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddProducts />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path='openinghours/:id' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddHours />
                  </BackgroundComponent>
                  <Footer />
                </>} />
                <Route path='images/:id' element={<>
                  <NavBar />
                  <BackgroundComponent>
                    <AddImages />
                  </BackgroundComponent>
                  <Footer />
                </>} />
              </Route>
              <Route path='/login' element={<>
                <NavBar />
                <BackgroundComponent>
                  <LoginComponent />
                </BackgroundComponent>
                <Footer />
              </>} />
              <Route path='/signup' element={<>
                <NavBar />
                <BackgroundComponent>
                  <SignupComponent />
                </BackgroundComponent>
                <Footer />
              </>} />
            </Routes>
          </BrowserRouter>
        </MainContextProvider>
      </QueryClientProvider>
    </Theme>
  );
}

export default App;