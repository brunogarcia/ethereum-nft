export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOERLI_PRIVATE_KEY: string;
    }
  }
}