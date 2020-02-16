<h1 align="center" style="border-bottom: none;">$ Currency Exchange App</h1>

<h3 align="center">Using the Create React App (CRA)</h3>

<p align="center">
  <a href="https://twitter.com/epranka" title="follow on twitter">
    <img alt="twitter badge" src="https://badgen.net/badge/icon/twitter/00acee?icon=twitter&label" />
  </a>
  <a href="https://linkedin.com/in/epranka" title="connect on linkedin">
      <img alt="linkedin badge" src="https://badgen.net/badge/icon/linkedin/2867B2?label&icon=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDI0IDI0IgogICBoZWlnaHQ9IjI0IgogICB3aWR0aD0iMjQiPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTEwIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI%2BCiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ%2BCiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms%2BCiAgICA8L3JkZjpSREY%2BCiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzOCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiCiAgICAgaWQ9InBhdGg4MjEiCiAgICAgZD0iTSA4LDE5IEggNSBWIDggaCAzIHoiIC8%2BCiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICAgIGlkPSJwYXRoODE5IgogICAgIGQ9Im0gNi41LDYuNzMyIGMgLTAuOTY2LDAgLTEuNzUsLTAuNzkgLTEuNzUsLTEuNzY0IDAsLTAuOTc0IDAuNzg0LC0xLjc2NCAxLjc1LC0xLjc2NCAwLjk2NiwwIDEuNzUsMC43OSAxLjc1LDEuNzY0IDAsMC45NzQgLTAuNzgzLDEuNzY0IC0xLjc1LDEuNzY0IHoiIC8%2BCiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICAgIGlkPSJwYXRoMiIKICAgICBkPSJtIDIwLDE5IGggLTMgdiAtNS42MDQgYyAwLC0zLjM2OCAtNCwtMy4xMTMgLTQsMCBWIDE5IEggMTAgViA4IGggMyB2IDEuNzY1IGMgMS4zOTYsLTIuNTg2IDcsLTIuNzc3IDcsMi40NzYgeiIgLz4KPC9zdmc%2BCg%3D%3D" /></a> 
  <a href="https://dev.to/epranka" title="follow on dev.to">
    <img alt="dev.to badge" src="https://badgen.net/badge/icon/dev.to/232221?label&icon=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQiCiAgIHZlcnNpb249IjEuMSIKICAgaGVpZ2h0PSIyMzIxIgogICB3aWR0aD0iMjUwMCIKICAgdmlld0JveD0iMCAzMiA0NDcuOTk5OTk5OTk5OTk5OTQgNDQ4Ij4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMCI%2BCiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ%2BaW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU%2BPC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE%2BCiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8%2BCiAgPHBhdGgKICAgICBkPSJNIDcxLjgxNTI4MiwxOTguNDUwNDUgSCA5MS4xNjI1MiBjIDQuMzA0NDAzLDAgOC42MjAxMjMsMS42MDg3MyAxMi45MjQ1MSw0LjgyNTkzIDQuMjkzMzEsMy4yMTcyMSA2LjQ1NjM5LDguMDUzODYgNi40Njc0OSwxNC40ODgyNyB2IDc3LjI2ODUxIGMgMCw2LjQ0NTUxIC0yLjE1MjIyLDExLjI3MTQ5IC02LjQ1NjYxLDE0LjQ4ODY5IC00LjMwNDM5NywzLjIxNzIyIC04LjYxOTY5Nyw0LjgyNTUyIC0xMi45MjQwOSw0LjgyNTUyIEggNzEuODE1MjgyIFogTSAzNi43Njk4MzksMTY0LjEwNDI4IFYgMzQ3LjY2MjE5IEggODguMjQ0OTYgYyA0MC43Njk3NCwwLjA2NjYgNTMuNjQ5OTIsLTMxLjU1MDc5IDUzLjY0OTkyLC01Mi40MTgyMyBsIC0wLjAxMTMsLTc4LjY4ODQxIGMgLTAuMDExMSwtMjAuODc4NTQgLTEzLjIzNDc5LC01Mi40NTEyNyAtNTIuNTUxMjMsLTUyLjQ1MTI3IHogbSAyMzYuNDE5ODYxLDAuMDQ0MyA0Mi43NDQ2MSwxNjAuNjM4MTUgYyAxMS43NDgzNCwyNy4zMjQwNCAzNy45ODUyMSwzNC4xMTM0NyA1Mi42MjkwMywwIEwgNDExLjIzMDE2LDE2NC4xNDg2MSBIIDM3NS4wODY0NSBMIDM0Mi4yODE4NywyOTAuMzA3MTkgMzA5LjMyMjU1LDE2NC4xNDg2MSBaIG0gLTg5LjY5MzIzLC0wLjAxMTMgYyAtMTIuMzY5NiwwLjMxMDYzIC0yMi4xNjUzNSwxMC41ODM2MiAtMjEuODY1ODIsMjIuOTUzMjEgdiAxMzguNzk0NSBjIDAuMzEwNjMsMTIuMzgwNjkgMTAuNjA1NTYsMjIuMTY1MzYgMjIuOTg2MjUsMjEuODQzNjUgaCA2OC45ODEzMyB2IC0zMi44MDQxNSBoIC01OS4xMTkwOSB2IC00Mi42MTE2MiBoIDM2LjEzMjg1IHYgLTMyLjgwNDE2IGggLTM2LjEzMjg1IHYgLTQyLjYyMjQ5IGggNTkuMTA3NzkgbCAwLjAxMTMsLTMyLjc0ODk1IHoiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4xMDkzODA2IgogICAgIGlkPSJwYXRoMiIgLz4KPC9zdmc%2BCg%3D%3D" />
  </a>
  <a href="https://medium.com/@epranka" title="follow on medium">
      <img alt="medium badge" src="https://badgen.net/badge/icon/medium/black?label&icon=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8%2BCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzQiCiAgIHZlcnNpb249IjEuMSIKICAgY2xpcC1ydWxlPSJldmVub2RkIgogICBmaWxsLXJ1bGU9ImV2ZW5vZGQiCiAgIGhlaWdodD0iMjQiCiAgIHdpZHRoPSIyNCI%2BCiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTAiPgogICAgPHJkZjpSREY%2BCiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8%2BCiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU%2BCiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4IiAvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIKICAgICBpZD0icGF0aDIiCiAgICAgZD0iTTIuODQ2IDYuODg3Yy4wMy0uMjk1LS4wODMtLjU4Ni0uMzAzLS43ODRsLTIuMjQtMi43di0uNDAzaDYuOTU4bDUuMzc4IDExLjc5NSA0LjcyOC0xMS43OTVoNi42MzN2LjQwM2wtMS45MTYgMS44MzdjLS4xNjUuMTI2LS4yNDcuMzMzLS4yMTMuNTM4djEzLjQ5OGMtLjAzNC4yMDQuMDQ4LjQxMS4yMTMuNTM3bDEuODcxIDEuODM3di40MDNoLTkuNDEydi0uNDAzbDEuOTM5LTEuODgyYy4xOS0uMTkuMTktLjI0Ni4xOS0uNTM3di0xMC45MWwtNS4zODkgMTMuNjg4aC0uNzI4bC02LjI3NS0xMy42ODh2OS4xNzRjLS4wNTIuMzg1LjA3Ni43NzQuMzQ3IDEuMDUybDIuNTIxIDMuMDU4di40MDRoLTcuMTQ4di0uNDA0bDIuNTIxLTMuMDU4Yy4yNy0uMjc5LjM5LS42Ny4zMjUtMS4wNTJ2LTEwLjYwOHoiIC8%2BCjwvc3ZnPgo%3D" />  
  </a>
</p>

<br />

Currency exchange app created with the Create React App (CRA) and [exchangeratesapi.io](https://exchangeratesapi.io/) API.

Try it live on this [demo](https://rates.now.sh)

The main implementation is just about 100 lines.

![Currency Exchange App](https://i.ibb.co/8KWQbgT/image.png)

### The App Component

```jsx
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
```

### CSS

```css
h1 {
  font-weight: 300;
  color: #636363;
  margin-bottom: 3rem;
}

.currency-exchange-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.currency-exchange-paper {
  max-width: 350px;
  padding: 30px 30px 40px 30px;
}

.MuiInput-root {
  width: 100%;
}
```