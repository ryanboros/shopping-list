import { Layout, Typography } from "antd";

import SearchInput from "../components/SearchInput/SearchInput";
import ShoppingList from "../components/ShoppingList/ShoppingList";

const Home = () => {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout>
      <Content>
        <Title>Shopping List</Title>
        <SearchInput />
        <ShoppingList />
      </Content>
    </Layout>
  );
};

export default Home;
