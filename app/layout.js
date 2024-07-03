import "@/app/_styles/globals.css"
import Header from  "@/app/_components/Header"
import Footer from "@/app/_components/Footer"

export const metadata = {
  title: {
    template: "%s",
    default: "Interlab"
  },
  description: "Клиника Interlab"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}