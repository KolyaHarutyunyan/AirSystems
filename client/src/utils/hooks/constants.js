const mode = ["local", "development", "production"][1];
let apiBase;
switch (mode) {
  case "local":
    apiBase = "http://192.168.0.102:8080/api";
    break;
  case "development":
    apiBase = "https://croill.eachbase.com/api";
    break;
  case "production":
    apiBase = "https://aurorabanquethall.com/api";
    break;
  default:
    break;
}

export const API_BASE = apiBase;

// const token = localStorage.getItem('access-token');
