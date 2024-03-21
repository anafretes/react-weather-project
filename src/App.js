import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Built by Ana Fretes with{" "}
          <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">
            SheCodes
          </a>
          . This is{" "}
          <a
            href="https://github.com/anafretes/react-weather-project"
            target="_blank"
            rel="noreferrer">
            open-source
          </a>{" "}
          code. Hosted on{" "}
          <a
            href="https://week6-react-weather.netlify.app/"
            target="_blank"
            rel="noreferrer">
            Netlify
          </a>
          {/* <a
            href="https://react-weather-app-sc.netlify.app/"
            target="_blank"
            rel="noreferrer">
            Netlify
          </a> */}
          .
        </footer>
      </div>
    </div>
  );
}
