import { type PropsWithChildren } from "react";
import Head from "next/head";

const AdminLayout = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default AdminLayout;
