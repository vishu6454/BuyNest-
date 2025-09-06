import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Deal from "./pages/Deal";
import Banner from "./pages/Banner";
import CategorySlider from "./pages/CategorySlider";
import Footer from "./pages/Footer";
import Sign from "./pages/Sign";
import CustomerReviews from "./components/CustomerReviews";
import { DarkModeProvider } from "./context/DarkModeContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import WishlistPage from "./pages/WishlistPage";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Account from "./pages/Account";
import Orders from "./pages/tabs/MyOrders";
import About from "./pages/Footerpage/About";
import Services from "./pages/Footerpage/ServicesPage";
import TermsOfService from "./pages/Footerpage/Terms";
import ContactUs from "./pages/Footerpage/Contact";
import BuyNestFAQ from "./pages/Footerpage/FAQ";
import ReturnsPage from "./pages/Footerpage/Returns";
import ShippingPage from "./pages/Footerpage/Shipping";
import CartCheckout from "./pages/CartCheckout";
import CartPayment from "./pages/Cartpayment";
import "./App.css";
{
  /* <------------------------------ men fashion ---------------------------------> */
}
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
{
  /* <------------------------------ women fashion ---------------------------------> */
}
import Womenproductlist from "./pages/women/Womenlist";
import WomenProductdetails from "./pages/women/Womenproduct";
{
  /* <------------------------------  kids fashion ---------------------------------> */
}
import KidsProductlist from "./pages/Kids/KidsList";
import KidsProductdetails from "./pages/Kids/KidsProduct";
/* <------------------------------  Air conditinor ---------------------------------> */
import AirconditionerList from "./pages/Airconditioners/AirconditionerList";
import AirconditionerPage from "./pages/Airconditioners/AirconditionerPage";
/* <------------------------------  Refrigerator ---------------------------------> */
import RefrigeratorList from "./pages/Refrigerator/RefrigeratorList";
import RefrigeratorPage from "./pages/Refrigerator/RefrigeratorPage";
{
  /* <------------------------------  Television ---------------------------------> */
}
import TelevisionList from "./pages/Television/TelevisionList";
import TelevisionPage from "./pages/Television/TelevisionPage";
{
  /* <------------------------------  seasonal-appliances ---------------------------------> */
}
import SeasonalAppliancesList from "./pages/SeasonalAppliances/SeasonalAppliancesList";
import SeasonalAppliancePage from "./pages/SeasonalAppliances/SeasonalAppliancePage";
/* <------------------------------  KitchenAppliances ---------------------------------> */
import KitchenApplianceList from "./pages/KitchenAppliance/KitchenApplianceList";
import KitchenAppliancePage from "./pages/KitchenAppliance/KitchenAppliancePage";
{
  /* <------------------------------  WashingMachine --------------------------------->  */
}
import WashingMachineList from "./pages/WashingMachine/WashingMachineList";
import WashingMachinePage from "./pages/WashingMachine/WashingMachinePage";
{
  /* <------------------------------Mobile LatestLaunches --------------------------------->  */
}
import LatestLaunchesList from "./pages/LatestLaunchesList/LatestLaunchesList";
import LatestLaunchesPage from "./pages/LatestLaunchesList/LatestLaunchesPage";
{
  /* <------------------------------Mobile Brand --------------------------------->  */
}
import MobileList from "./pages/Mobile/MobileList";
import MobilePage from "./pages/Mobile/MobilePage";
/* <------------------------------Laptops --------------------------------->  */
import LaptopList from "./pages/Leptop/LaptopList";
import LaptopPage from "./pages/Leptop/LaptopPage";
/* <-----------------------------Personal Care Appliances --------------------------------->  */
import PersonalCareList from "./pages/PersonalCare/PersonalCareList";
import PersonalCarePage from "./pages/PersonalCare/PersonalCarePage";
/* <------------------------------Tablets --------------------------------->  */
import TabletList from "./pages/Tablets/TabletList";
import TabletPage from "./pages/Tablets/TabletPage";
/* <------------------------------Computer Accessories --------------------------------->  */
import ComputerAccessoryList from "./pages/ComputerAccessories/ComputerAccessoryList";
import ComputerAccessoryPage from "./pages/ComputerAccessories/ComputerAccessoryPage";

/* <------------------------------Cameras --------------------------------->  */
import CameraList from "./pages/Camera/CameraList";
import CameraPage from "./pages/Camera/CameraPage";

/* <------------------------------Headphones & Speakers --------------------------------->  */
import HeadphonesList from "./pages/Headphones/HeadphonesList";
import HeadphonesPage from "./pages/Headphones/HeadphonesPage";
/* <------------------------------Smart Wearables --------------------------------->  */
import SmartWearableList from "./pages/SmartWearables/SmartWearableList";
import SmartWearablePage from "./pages/SmartWearables/SmartWearablePage";
/* <------------------------------Cases, Covers & More --------------------------------->  */
import CasesList from "./pages/CaseCover/CasesList";
import CasesPage from "./pages/CaseCover/CasesPage";
/* <------------------------------Powerbanks --------------------------------->  */
import PowerbankList from "./pages/Powerbanks/PowerbankList";
import PowerbankPage from "./pages/Powerbanks/PowerbankPage";
/* <------------------------------Smart Home Automation --------------------------------->  */
import SmartHomeList from "./pages/SmartHome/SmartHomeList";
import SmartHomePage from "./pages/SmartHome/SmartHomePage";
/* <------------------------------Kitchen Items --------------------------------->  */
import KitchenItemsList from "./pages/KitchenItems/KitchenItemsList";
import KitchenItemPage from "./pages/KitchenItems/KitchenItemPage";
/* <------------------------------Home Furnishings --------------------------------->  */
import HomeFurnishingsList from "./pages/HomeFurnishings/HomeFurnishingsList";
import HomeFurnishingsPage from "./pages/HomeFurnishings/HomeFurnishingsPage";
/* <------------------------------Home Improvement Tools --------------------------------->  */
import HomeImprovementToolsList from "./pages/HomeImprovementTools/HomeImprovementToolsList";
import HomeImprovementToolPage from "./pages/HomeImprovementTools/HomeImprovementToolPage";
/* <------------------------------Decor & Lighting --------------------------------->  */
import DecorLightingList from "./pages/DecorLighting/DecorLightingList";
import DecorLightingPage from "./pages/DecorLighting/DecorLightingPage";
/* <------------------------------Skin Care --------------------------------->  */
import SkinCareList from "./pages/SkinCare/SkinCareList";
import SkinCarePage from "./pages/SkinCare/SkinCarePage";
/* <------------------------------Hair Care --------------------------------->  */
import HairCareList from "./pages/Haircare/HairCareList";
import HairCarePage from "./pages/Haircare/HairCarePage";
/* <------------------------------Fragrance--------------------------------->  */
import FragranceList from "./pages/Fragrances/FragranceList";
import FragrancePage from "./pages/Fragrances/FragrancePage";
/* <------------------------------Toys --------------------------------->  */
import ToysList from "./pages/Toys/ToysList";
import ToyPage from "./pages/Toys/ToyPage";
/* <------------------------------Baby Care--------------------------------->  */
import BabyCareList from "./pages/BabyCare/BabyCareList";
import BabyCarePage from "./pages/BabyCare/BabyCarePage";
/* <------------------------------Stationery & School Supplies --------------------------------->  */
import StationeryList from "./pages/Stationery/StationeryList";
import StationeryPage from "./pages/Stationery/StationeryPage";
/* <------------------------------Food & Nutrition--------------------------------->  */
import NutritionList from "./pages/Nutrition/NutritionList";
import NutritionPage from "./pages/Nutrition/NutritionPage";
/* <------------------------------Household Supplies --------------------------------->  */
import HouseholdSuppliesList from "./pages/HouseholdSupplies/HouseholdSuppliesList";
import HouseholdSuppliesPage from "./pages/HouseholdSupplies/HouseholdSuppliesPage";
/* <------------------------------Sports --------------------------------->  */
import SportsList from "./pages/Sports/SportsList";
import SportsProduct from "./pages/Sports/SportsProduct";
/* <------------------------------Fitness --------------------------------->  */
import FitnessList from "./pages/Fitness/FitnessList";
import FitnessProduct from "./pages/Fitness/FitnessProduct";
/* <------------------------------Bedroom Furniture --------------------------------->  */
import BedroomFurnitureList from "./pages/BedroomFurniture/BedroomFurnitureList";
import BedroomFurniturePage from "./pages/BedroomFurniture/BedroomFurniturePage";
/* <------------------------------Living Room Furniture --------------------------------->  */
import LivingRoomFurnitureList from "./pages/LivingRoomFurniture/LivingRoomFurnitureList";
import LivingRoomFurniturePage from "./pages/LivingRoomFurniture/LivingRoomFurniturePage";
/* <------------------------------Dining & Kitchen --------------------------------->  */
import DiningKitchenList from "./pages/DiningKitchen/DiningKitchenList";
import DiningKitchenPage from "./pages/DiningKitchen/DiningKitchenPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster />
        <CartProvider>
          <WishlistProvider>
            <DarkModeProvider>
              <div className="app-container">
                <Navbar />
                <main className="main-content pt-15">
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <>
                            <Home />
                            <Deal />
                            <Banner />
                            <CategorySlider />
                          </>
                        }
                        exact
                      />
                      <Route path="/Sign" element={<Sign />} />
                      <Route path="/shop" element={<Shop />} />
                      {/* <------------------------------ men fashion ---------------------------------> */}
                      <Route
                        path="/productlisting"
                        element={<ProductListing />}
                      />
                      <Route
                        path="/product/:id"
                        element={
                          <>
                            <ProductDetails />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------ women fashion ---------------------------------> */}
                      <Route path="/women" element={<Womenproductlist />} />
                      <Route
                        path="/women/product/:id"
                        element={
                          <>
                            <WomenProductdetails />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------  kids fashion ---------------------------------> */}
                      <Route path="/kids" element={<KidsProductlist />} />
                      <Route
                        path="/kids/product/:id"
                        element={
                          <>
                            <KidsProductdetails />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------  Air conditinor ---------------------------------> */}
                      <Route
                        path="/airconditioners"
                        element={<AirconditionerList />}
                      />
                      <Route
                        path="/airconditioners/product/:id"
                        element={
                          <>
                            <AirconditionerPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------  Refrigerator ---------------------------------> */}
                      <Route
                        path="/refrigerators"
                        element={<RefrigeratorList />}
                      />
                      <Route
                        path="/refrigerators/product/:id"
                        element={
                          <>
                            <RefrigeratorPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------  Television ---------------------------------> */}
                      <Route path="/televisions" element={<TelevisionList />} />
                      <Route
                        path="/televisions/product/:id"
                        element={
                          <>
                            <TelevisionPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------  seasonal-appliances ---------------------------------> */}
                      <Route
                        path="/seasonal-appliances"
                        element={<SeasonalAppliancesList />}
                      />
                      <Route
                        path="/seasonal-appliances/product/:id"
                        element={
                          <>
                            <SeasonalAppliancePage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------  KitchenAppliances --------------------------------->  */}
                      <Route
                        path="/kitchenappliances"
                        element={<KitchenApplianceList />}
                      />
                      <Route
                        path="/kitchenappliances/product/:id"
                        element={
                          <>
                            <KitchenAppliancePage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------  WashingMachine --------------------------------->  */}
                      <Route
                        path="/washingmachines"
                        element={<WashingMachineList />}
                      />
                      <Route
                        path="/washingmachines/product/:id"
                        element={
                          <>
                            <WashingMachinePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Mobile LatestLaunches --------------------------------->  */}
                      <Route
                        path="/latest-launches"
                        element={<LatestLaunchesList />}
                      />
                      <Route
                        path="/latest-launches/product/:id"
                        element={
                          <>
                            <LatestLaunchesPage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Mobile Brand --------------------------------->  */}
                      <Route path="/mobiles" element={<MobileList />} />
                      <Route
                        path="/mobiles/product/:id"
                        element={
                          <>
                            <MobilePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Laptops --------------------------------->   */}
                      <Route path="/laptops" element={<LaptopList />} />
                      <Route
                        path="/laptops/product/:id"
                        element={
                          <>
                            <LaptopPage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <-----------------------------Personal Care Appliances --------------------------------->   */}
                      <Route
                        path="/personalcare"
                        element={<PersonalCareList />}
                      />
                      <Route
                        path="/personalcare/product/:id"
                        element={
                          <>
                            <PersonalCarePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Tablets --------------------------------->  */}
                      <Route path="/tablets" element={<TabletList />} />
                      <Route
                        path="/tablets/product/:id"
                        element={<TabletPage />}
                      />
                      {/* <------------------------------Computer Accessories --------------------------------->   */}
                      <Route
                        path="/computer-accessories"
                        element={<ComputerAccessoryList />}
                      />
                      <Route
                        path="/computer-accessories/product/:id"
                        element={
                          <>
                            <ComputerAccessoryPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                    
                      {/* <------------------------------Cameras --------------------------------->   */}
                      <Route path="/cameras" element={<CameraList />} />
                      <Route
                        path="/cameras/product/:id"
                        element={
                          <>
                            <CameraPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Headphones & Speakers --------------------------------->   */}
                      <Route path="/headphones" element={<HeadphonesList />} />
                      <Route
                        path="/headphones/product/:id"
                        element={
                          <>
                            <HeadphonesPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Smart Wearables --------------------------------->   */}
                      <Route
                        path="/smartwearables"
                        element={<SmartWearableList />}
                      />
                      <Route
                        path="/smartwearables/product/:id"
                        element={
                          <>
                            <SmartWearablePage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Cases, Covers & More --------------------------------->   */}
                      <Route path="/cases" element={<CasesList />} />
                      <Route
                        path="/cases/product/:id"
                        element={
                          <>
                            <CasesPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Powerbanks --------------------------------->   */}
                      <Route path="/powerbanks" element={<PowerbankList />} />
                      <Route
                        path="/powerbanks/product/:id"
                        element={
                          <>
                            <PowerbankPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Smart Home Automation --------------------------------->   */}
                      <Route path="/smarthome" element={<SmartHomeList />} />
                      <Route
                        path="/smarthome/product/:id"
                        element={
                          <>
                            <SmartHomePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Kitchen Items --------------------------------->   */}
                      <Route
                        path="/kitchenitems"
                        element={<KitchenItemsList />}
                      />
                      <Route
                        path="/kitchenitems/product/:id"
                        element={
                          <>
                            <KitchenItemPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Home Furnishings --------------------------------->   */}
                      <Route
                        path="/home-furnishings"
                        element={<HomeFurnishingsList />}
                      />
                      <Route
                        path="/home-furnishings/product/:id"
                        element={
                          <>
                            <HomeFurnishingsPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Home Improvement Tools --------------------------------->   */}
                      <Route
                        path="/home-improvement-tools"
                        element={<HomeImprovementToolsList />}
                      />
                      <Route
                        path="/home-improvement-tools/product/:id"
                        element={
                          <>
                            <HomeImprovementToolPage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Decor & Lighting --------------------------------->   */}
                      // In App.js, add these routes to your existing Routes
                      component
                      <Route
                        path="/decor-lighting"
                        element={<DecorLightingList />}
                      />
                      <Route
                        path="/decor-lighting/product/:id"
                        element={
                          <>
                            <DecorLightingPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Skin Care --------------------------------->   */}
                      <Route path="/skincare" element={<SkinCareList />} />
                      <Route
                        path="/skincare/product/:id"
                        element={
                          <>
                            <SkinCarePage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Hair Care --------------------------------->   */}
                      <Route path="/haircare" element={<HairCareList />} />
                      <Route
                        path="/haircare/product/:id"
                        element={
                          <>
                            <HairCarePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Fragrance--------------------------------->   */}
                      <Route path="/fragrances" element={<FragranceList />} />
                      <Route
                        path="/fragrances/product/:id"
                        element={
                          <>
                            <FragrancePage /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------toys--------------------------------->   */}
                      <Route path="/toys" element={<ToysList />} />
                      <Route
                        path="/toys/product/:id"
                        element={
                          <>
                            <ToyPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Baby Care--------------------------------->   */}
                      <Route path="/babycare" element={<BabyCareList />} />
                      <Route
                        path="/babycare/product/:id"
                        element={
                          <>
                            <BabyCarePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Stationery & School Supplies --------------------------------->   */}
                      <Route path="/stationery" element={<StationeryList />} />
                      <Route
                        path="/stationery/product/:id"
                        element={
                          <>
                            <StationeryPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Food & Nutrition--------------------------------->   */}
                      <Route path="/nutrition" element={<NutritionList />} />
                      <Route
                        path="/nutrition/product/:id"
                        element={
                          <>
                            <NutritionPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Household Supplies --------------------------------->   */}
                      <Route
                        path="/household-supplies"
                        element={<HouseholdSuppliesList />}
                      />
                      <Route
                        path="/household-supplies/product/:id"
                        element={
                          <>
                            <HouseholdSuppliesPage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Sports --------------------------------->   */}
                      <Route path="/sports" element={<SportsList />} />
                      <Route
                        path="/sports/product/:id"
                        element={
                          <>
                            <SportsProduct />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Fitness --------------------------------->   */}
                      <Route path="/fitness" element={<FitnessList />} />
                      <Route
                        path="/fitness/product/:id"
                        element={
                          <>
                            <FitnessProduct /> <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Bedroom Furniture --------------------------------->   */}
                      <Route
                        path="/bedroom-furniture"
                        element={<BedroomFurnitureList />}
                      />
                      <Route
                        path="/bedroom-furniture/product/:id"
                        element={
                          <>
                            <BedroomFurniturePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Living Room Furniture --------------------------------->   */}
                      <Route
                        path="/living-room-furniture"
                        element={<LivingRoomFurnitureList />}
                      />
                      <Route
                        path="/living-room-furniture/product/:id"
                        element={
                          <>
                            <LivingRoomFurniturePage />
                            <CustomerReviews />
                          </>
                        }
                      />
                      {/* <------------------------------Dining & Kitchen --------------------------------->   */}
                      <Route
                        path="/dining-kitchen"
                        element={<DiningKitchenList />}
                      />
                      <Route
                        path="/dining-kitchen/product/:id"
                        element={<><DiningKitchenPage /><CustomerReviews /></>}
                      />
                      {/* <------------------------------pages --------------------------------->   */}
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/payment" element={<Payment />} />
                      <Route path="/confirmation"element={<OrderConfirmation />}/>
                      <Route path="/wishlist" element={<WishlistPage />} />
                      <Route path="/account" element={<Account />} />
                      <Route path="/Orders" element={<Orders />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/Services" element={<Services />} />
                      <Route path="/terms" element={<TermsOfService />} />
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/FAQ" element={<BuyNestFAQ />} />
                      <Route path="/returns" element={<ReturnsPage />} />
                      <Route path="/Shipping" element={<ShippingPage />} />
                      <Route path="/Cartcheckout" element={<CartCheckout />} />
                      <Route path="/Cartpayment" element={<CartPayment />} />
                    </Routes>
                  </AnimatePresence>
                </main>
                <Footer />
              </div>
            </DarkModeProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
