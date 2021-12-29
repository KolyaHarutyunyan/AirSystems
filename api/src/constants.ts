export const COMPANY_EMAIL = 'eachbase@gmail.com';
export const MONGO_DUPLICATE_KEY = 11000;
export const PORT = 8007;

const mode = ['local', 'development', 'production'][1];
export const BASE_URL = {
  local: `http://localhost:${PORT}/api`,
  development: 'https://socal.eachbase.com/api',
  production: 'https://socal.com/api,',
}[mode];

export const DOMAIN_NAME = {
  local: 'http://localhost:3000',
  development: 'https://socal.eachbase.com',
  production: 'https://socal.com',
}[mode];
