import { makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Thermometer from "react-thermometer-component";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Temperature() {
  const classes = useStyles();
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const handleCelcius = (event) => {
    let celcius = event.target.value;
    setCelcius(celcius);
    setFahrenheit(toFahrenheit(celcius !== "" ? celcius : 0));
  };

  const handleFahrenheit = (event) => {
    let fahrenheit = event.target.value;
    setFahrenheit(fahrenheit);
    setCelcius(toCelsius(fahrenheit !== "" ? fahrenheit : 0));
  };

  const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  return (
    <div className="animated fadeIn">
      <Container>
        <Row>
          <Col col xl="4" lg="4" md="4" sm="4">
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  label="Celcius:"
                  type="number"
                  value={celcius}
                  onChange={handleCelcius}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label="Fahrenheit:"
                  type="number"
                  value={fahrenheit}
                  onChange={handleFahrenheit}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </form>
          </Col>
          <Col col xl="8" lg="8" md="8" sm="8">
            <Row>
              <Col col xl="6" lg="6" md="6" sm="6">
                <h3>Celcius:</h3>
                <Thermometer
                  theme="light"
                  value={celcius}
                  max="500"
                  steps="3"
                  format="°C"
                  size="large"
                  height="300"
                />
              </Col>
              <Col col xl="6" lg="6" md="6" sm="6">
                <h3>Fahrenheit:</h3>
                <Thermometer
                  theme="light"
                  value={fahrenheit}
                  max="500"
                  steps="3"
                  format="°F"
                  size="large"
                  height="300"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
