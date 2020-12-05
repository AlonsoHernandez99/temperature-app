import "./App.css";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature";
import { Card, CardContent, Container } from "@material-ui/core";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Container>
        <Card>
          <CardContent>
            <Temperature></Temperature>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
