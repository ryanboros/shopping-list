import { List, Typography } from "antd";
import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import {
  ListItemType,
  removeListItem,
  toggleListItem,
} from "../../store/AppSlice";

import "./ShoppingList.css";

const ShoppingList = () => {
  const { Text } = Typography;

  const { shoppingListItems } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const toggleCheckedItemHandler = (value: ListItemType) => {
    const idx = shoppingListItems.indexOf(value);

    dispatch(toggleListItem(idx));
  };

  const deleteItemHandler = (value: ListItemType) => {
    const idx = shoppingListItems.indexOf(value);

    dispatch(removeListItem(idx));
  };

  return (
    <List
      className="shopping-list-container"
      dataSource={shoppingListItems}
      itemLayout="horizontal"
      size="large"
      renderItem={(item) => {
        const textProps = {
          // strong: item.checked ? false : true,
          delete: item.checked ? true : false,
          disabled: item.checked ? true : false,
        };

        return (
          <List.Item
            actions={[
              <DeleteTwoTone
                onClick={() => deleteItemHandler(item)}
                style={{ fontSize: "20px" }}
                twoToneColor="#eb2f96"
              />,
            ]}
            className={"shopping-list-item"}
          >
            <>
              <CheckCircleTwoTone
                onClick={() => toggleCheckedItemHandler(item)}
                style={{ fontSize: "20px" }}
                twoToneColor={item.checked ? "#52c41a" : "#ccc"}
              />
              <Text {...textProps}>{item.value}</Text>
            </>
          </List.Item>
        );
      }}
    />
  );
};

export default ShoppingList;
