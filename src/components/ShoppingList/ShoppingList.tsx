import { List } from "antd";
import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import {
  ListItemType,
  removeListItem,
  toggleListItem,
} from "../../store/AppSlice";

import "./ShoppingList.css";

const ShoppingList = () => {
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
      renderItem={(item) => {
        return (
          <List.Item
            actions={[
              <DeleteTwoTone
                twoToneColor="#eb2f96"
                onClick={() => deleteItemHandler(item)}
              />,
            ]}
            className={"shopping-list-item"}
          >
            <>
              <CheckCircleTwoTone
                twoToneColor={item.checked ? "#52c41a" : "#ccc"}
                onClick={() => toggleCheckedItemHandler(item)}
              />
              <div
                className={`shopping-list-item-label ${
                  item.checked ? "checked" : ""
                }`}
              >
                {item.value}
              </div>
            </>
          </List.Item>
        );
      }}
    />
  );
};

export default ShoppingList;
