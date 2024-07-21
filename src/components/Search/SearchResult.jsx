import React, { useState } from "react";
import { Modal } from "antd";
import "../../styles/SearchResult.scss";

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
        You selected: <strong>{result}</strong>
      </Modal>
    </>
  );
};
