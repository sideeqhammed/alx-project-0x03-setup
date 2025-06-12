import Header from "./Header";

import { FooterProps } from "@/interface";

const Layout: React.FC<FooterProps> = ({children}) => {
  return(
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout;