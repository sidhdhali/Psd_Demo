import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Header />
      <Main />
      <div className="flex justify-center">
        <h1 className="text-red-400 text-center">PSD</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
