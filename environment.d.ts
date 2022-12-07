export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PROD_QUICKNODE_API_KEY_URL: string;
      STAGING_QUICKNODE_API_KEY_URL: string;
      GOERLI_PRIVATE_KEY: string;
    }
  }
}