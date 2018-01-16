interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'WiLlwvzMZuwbywdSsUfze4eTqF00exhs',
    CLIENT_DOMAIN: 'svidlak.eu.auth0.com', // e.g., you.auth0.com
    AUDIENCE: 'http://localhost:3001',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid profile email'
  };