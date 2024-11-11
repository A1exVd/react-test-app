import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="font-roboto relative min-h-screen text-[var(--text-color)]">
      <Header />
      < SignUpForm />
      <Drawer />
      {/* <SignInForm /> */}
      <div className="h-[100rem]"></div>
      <Footer />
    </div>
  );
}

export default App;
