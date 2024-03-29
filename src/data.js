export const API_KEY = "AIzaSyBpSjysrds3pHecmPNfQBefKMu_pdPE7Ck";

export const converter = (value) => {
  if (value >= 1000000) return Math.floor(value / 1000000) + "M";
  else if (value >= 1000) return Math.floor(value / 1000) + "k";
  else return value;
};
