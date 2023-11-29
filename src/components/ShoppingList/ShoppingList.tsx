import { List } from "antd";

import { useAppSelector } from "../../hooks/ReduxHooks";

const ShoppingList = () => {
  const { shoppingListItems } = useAppSelector((state) => state.app);

  return (
    <List
      className="demo-shopping-list"
      dataSource={shoppingListItems}
      itemLayout="horizontal"
      renderItem={(item) => {
        return <List.Item>{item}</List.Item>;
      }}
    />
  );
};

export default ShoppingList;
