import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
const CookieCounter = props => {
  return /*#__PURE__*/(
    React.createElement("h3", null, "We have ",
    numCookies, " ", numCookies === 1 ? 'cookie' : 'cookies', "."));


};

const App = props => {
  const { club = "IEE" } = props;
  return /*#__PURE__*/(
    React.createElement("h1", null, " Hello ", club, " "));

};

ReactDOM.render( /*#__PURE__*/
React.createElement(App, { club: "Accelerate" }),
document.getElementById("root"));