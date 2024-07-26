// src/components/SearchResult.jsx
import React, { useState, useEffect, useRef } from "react";
import { Modal } from "antd";
import "../../styles/SearchResult.scss";

export const SearchResult = ({ result }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef(null);

  const handleResultClick = () => {
    setModalVisible(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        footer={null}
        ref={modalRef}>
        You selected: <strong>{result}</strong>
      </Modal>
    </>
  );
};
