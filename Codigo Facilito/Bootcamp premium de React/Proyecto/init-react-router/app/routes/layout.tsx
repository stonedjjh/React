//El ~ es un alia definido en tsconfig.json "~/*": ["./app/*"]
import Header from "~/components/header";
import Footer from "~/components/footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
