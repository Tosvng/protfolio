import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-1KNE2482DX");
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category,
    action,
  });
};
