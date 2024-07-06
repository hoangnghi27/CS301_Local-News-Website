import React, { useState } from "react";
import { Modal } from "antd"; // Assuming you're using Ant Design for modals

export const SearchResult = ({ result }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleResultClick = () => {
    setModalVisible(true);
  };

  return (
    <>
      <div
        className='search-result'
        onClick={handleResultClick}>
        {result}
      </div>
      <Modal
        title='Selected Result'
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}>
        You selected: {result}
      </Modal>
    </>
  );
};
