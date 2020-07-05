const debug = localStorage.getItem(`${import.meta.env.VITE_MACHINE_NAME}.debug`) === 'true' || (import.meta.env.MODE === 'development');

if (import.meta.env.MODE === 'development') {
  console.log('Available variables: %o', import.meta.env);
}

export const config = {
  debug,
};