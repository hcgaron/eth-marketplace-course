import '@styles/globals.css'

const Noop = ({ children }: { children: JSX.Element }) => <>{children}</>

function MyApp({ Component, pageProps }: any) {

  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
