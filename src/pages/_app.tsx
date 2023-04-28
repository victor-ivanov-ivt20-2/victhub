import { type AppType } from "next/app";

import { api } from "~/utils/api";
import "~/styles/globals.css";
import MainLayout from "~/layouts/mainLayout";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default api.withTRPC(MyApp);
