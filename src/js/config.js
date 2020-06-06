const debug = localStorage.getItem(`${process.env.VUE_APP_MACHINE_NAME}.debug`) === 'true' || (process.env.NODE_ENV === 'development');

if (process.env.NODE_ENV === 'development') {
  console.log('Available variables: %o', window.process.env);
}

export const config = {
  debug,
};