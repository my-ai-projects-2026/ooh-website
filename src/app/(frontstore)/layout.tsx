
import Footer from "@/components/layouts/Footer"
import Header from "@/components/layouts/Header"
import { getBusinessInfo } from "@/lib/actions/info.action"
import { client } from "@/sanity/lib/client"

import { BUSINESS_ADDRESS } from "@/sanity/lib/queries/info"

import { ReactNode } from "react"

const AppLayout = async ({children} : {children: ReactNode}) => {
  
  return (
    <div className="antialiased overflow-hidden">
      <Header />
      <main>
         {children}
      </main>
      <Footer />
    </div>
  )
}
export default AppLayout