import React, { useState } from "react";
import "./filterSearchComponent.scss";
import { Input, Button, Dropdown, Menu, Checkbox, Tag } from "antd";
import { DownOutlined, CloseOutlined,SearchOutlined } from "@ant-design/icons";

const FilterSearchComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = {
    status: ["All", "Active", "Upcoming", "Past"],
    level: ["Easy", "Medium", "Hard"],
  };

  const handleMenuClick = ({ key }) => {
    setSelectedFilters((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const removeFilter = (filter) => {
    setSelectedFilters((prev) => prev.filter((item) => item !== filter));
  };

  const menu = (
    <Menu>
      <Menu.ItemGroup title="Status">
        {filters.status.map((status) => (
          <Menu.Item key={status} onClick={handleMenuClick}>
            <Checkbox checked={selectedFilters.includes(status)}>
              {status}
            </Checkbox>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Level">
        {filters.level.map((level) => (
          <Menu.Item key={level} onClick={handleMenuClick}>
            <Checkbox checked={selectedFilters.includes(level)}>
              {level}
            </Checkbox>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div className="searchFilter_Container">
      <h1>Explore Challanges</h1>
      <div className="searchBarFilterFlex uni_padding">
        <Input placeholder="Search" className="searchInput"
         prefix={<SearchOutlined />} />
        <Dropdown menu={menu} trigger={["click"]}>
          <Button
            type="primary"
            
           
            className="dropDownBtn"
          >
            Filter
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="chipContainer uni_padding">
        {selectedFilters.map((filter) => (
          <Tag
            key={filter}
            closable
            onClose={() => removeFilter(filter)}
            closeIcon={<CloseOutlined />}
            className="chip"
          >
            {filter}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default FilterSearchComponent;
