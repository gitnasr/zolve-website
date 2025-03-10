import 'nextra-theme-docs/style.css'

import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'

import Image from 'next/image'
import Link from 'next/link'
import { getPageMap } from 'nextra/page-map'
import React from 'react'

export const metadata = {

}

const banner = <Banner storageKey="v2.0">Zolve 2.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<Image src="/logo.png" alt="Logo" width={36} height={36} />}
    projectLink='https://github.com/gitnasr/zolve'

  />
)
const footer = <Footer>Made with ❤️ By <Link href="https://github.com/gitnasr" target='_blank' >NASR</Link></Footer>
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning

    >
      <Head

      >
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          darkMode={true}
          editLink={null}
          docsRepositoryBase='https://github.com/gitnasr/zolve'

        >
          {children}
        </Layout>
      </body>
    </html>
  )
}