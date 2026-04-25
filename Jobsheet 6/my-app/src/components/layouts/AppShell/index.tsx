import Navbar from "../navbar";
import { useRouter } from "next/router";

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const {pathname} = useRouter();
  // const router = useRouter();
  // console.log(router);
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
        {children}
    </main>
  );
};

export default AppShell;
