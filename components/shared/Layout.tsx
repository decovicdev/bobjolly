import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  if (router.pathname === "/thankyou") {
    return <>{children}</>;
  }

  return (
    <Box
      minH="100vh"
      bgSize="100% auto"
      bgImage="url(/images/bg.jpg)"
      backgroundRepeat="repeat-x"
      bgColor="#eeeeee"
      backgroundPosition="center top"
    >
      <header>
        <Header />
      </header>
      <main>
        <Box
          minH="70vh"
          mt={{
            base: "8",
            md: "22",
          }}
        >
          {children}
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};
export default Layout;
