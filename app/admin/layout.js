export const metadata = {
  title: 'Interlab Admin Dashboard',
  description: 'Interlab Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
