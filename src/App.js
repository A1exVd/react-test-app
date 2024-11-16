import Header from "./components/Header";
import SingInForm from "./components/SignInForm";
import Layout from "./components/Layout";
import SingUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <SingInForm />
      <SingUpForm />
      <Footer />
    </Layout>
  );
}

export default App;
