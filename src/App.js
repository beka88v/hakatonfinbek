import Layout from "./components/Layout/Layout";
import AuthContextProvider from "./context/AuthContextProvider";
// import Register from "./components/register/Register";

function App() {
  return (
    <AuthContextProvider>
      <Layout />
      {/* <Register /> */}
    </AuthContextProvider>
  );
}

export default App;
