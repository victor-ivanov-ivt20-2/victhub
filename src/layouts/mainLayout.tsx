import { type PropsWithChildren } from "react";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
const OpenSans = Open_Sans({ subsets: ["cyrillic", "latin"] });
const MainLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>VictHub</title>
      </Head>
      <main className={OpenSans.className}>{props.children}</main>
    </>
  );
};

export default MainLayout;
