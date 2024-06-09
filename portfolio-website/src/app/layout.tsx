import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: 'Portfolio',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>


  )
}