export { addContextProps };

async function addContextProps({ contextProps }: any) {
  if (contextProps.paths.includes(contextProps.url)) {
    return { pageProps: { activePath: contextProps.url } };
  }

  return { is404: true };
}
