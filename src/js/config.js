const appMachineName = import.meta.env.VITE_APP_MACHINE_NAME,
      dev = import.meta.env.DEV;

const debug = localStorage.getItem(`${appMachineName}.debug`) === 'true' || dev;

if (import.meta.env.DEV) {
  console.log('Available variables: %o', import.meta.env);
}

export const config = {
  debug,
  dev,
  prod: import.meta.env.PROD,
  mode: import.meta.env.MODE,
  basePath: import.meta.env.BASE_URL,
  appName: import.meta.env.VITE_APP_NAME,
  appMachineName,
  appVersion: import.meta.env.VITE_APP_VERSION,
};