import {FC} from "react";
import {Layout} from "antd";

const {Content} = Layout;

export const DefaultLayout: FC = ({children}) => (
  <Layout>
    <Content>{children}</Content>
  </Layout>
);
