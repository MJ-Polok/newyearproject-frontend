import Media from "react-media";
import Ui from "./ui/Ui";
import ForLargePage from "./components/ForLargePage.jsx";
import ForSmallPage from "./components/ForSmallPage";


function App() {

  return (
    <div>
      <ForSmallPage />
      <Media query="(min-width: 600px )">
        {matches => {
          return matches ? <ForLargePage /> : <Ui />;
        }}
      </Media>
    </div>
  );
}

export default App;