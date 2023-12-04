import { Layout, Typography } from "antd";

import SearchInput from "../components/SearchInput/SearchInput";
import ShoppingList from "../components/ShoppingList/ShoppingList";

const Home = () => {
  const { Content, Footer } = Layout;
  const { Title } = Typography;

  return (
    <Layout style={{ minHeight: "90vh" }}>
      <Content>
        <Title>Shopping List</Title>
        <SearchInput />
        <ShoppingList />
      </Content>
      <Footer style={{ backgroundColor: "white" }}>by Ryan Boros</Footer>
    </Layout>
  );
};

export default Home;
