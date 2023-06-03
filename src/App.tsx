import Header from "./components/Header/Header";
import { GlobalStyles } from "./GlobalStyles";
import JobListing from "./components/JobListing/JobListing";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <JobListing />
    </>
  );
}

export default App;
