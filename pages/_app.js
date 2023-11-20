import '@/styles/globals.css'
import Layout  from "../Components/Layout.js"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout/>
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: gray;
          }
        `}
      </style>
    </>
  )
}
