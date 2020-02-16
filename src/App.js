import React, { useState, useEffect } from "react";
import "./App.css";
import fetch from "unfetch";
import useSWR from "swr";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Select,
  MenuItem
} from "@material-ui/core";

const API_URL = "https://api.exchangeratesapi.io";

const fetcher = async path => {
  const res = await fetch(API_URL + path);
  const json = await res.json();
  return json;
};

function App() {
  const { data: currencies } = useSWR("/latest?base=EUR", fetcher);

  const [fromValue, setFromValue] = useState(1);
  const [toValue, setToValue] = useState(1);

  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("EUR");

  const handleFromCurrencyChange = e => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = e => {
    setToCurrency(e.target.value);
  };

  const handleFromValueChange = e => {
    setFromValue(parseFloat(e.target.value));
  };

  const handleToValueChange = e => {
    setToValue(parseFloat(e.target.value));
  };

  const convertFromTo = () => {
    const fromRate =
      fromCurrency === "EUR" ? 1 : currencies.rates[fromCurrency];
    const valueInEur = fromValue / fromRate;
    const toRate = toCurrency === "EUR" ? 1 : currencies.rates[toCurrency];
    setToValue(valueInEur * toRate);
  };

  const convertToFrom = () => {
    const toRate = toCurrency === "EUR" ? 1 : currencies.rates[toCurrency];
    const valueInEur = toValue / toRate;
    const fromRate =
      fromCurrency === "EUR" ? 1 : currencies.rates[fromCurrency];
    setFromValue(valueInEur * fromRate);
  };

  useEffect(() => {
    convertFromTo();
  }, [fromValue, toCurrency]);

  useEffect(() => {
    convertToFrom();
  }, [toValue, fromCurrency]);

  if (!currencies) {
    return null;
  }

  return (
    <Container className="currency-exchange-container" fixed>
      <h1>Currency exchange</h1>
      <Paper
        className="currency-exchange-paper"
        variant="outlined"
        elavation={1}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              type="number"
              value={fromValue}
              onChange={handleFromValueChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              value={toValue}
              onChange={handleToValueChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Select value={fromCurrency} onChange={handleFromCurrencyChange}>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              {Object.keys(currencies.rates).map((rate, key) => (
                <MenuItem key={key} value={rate}>
                  {rate}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select value={toCurrency} onChange={handleToCurrencyChange}>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              {Object.keys(currencies.rates).map((rate, key) => (
                <MenuItem key={key} value={rate}>
                  {rate}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
