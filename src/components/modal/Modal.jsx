import React, { memo, useEffect, useState } from "react";
import "./modal.scss";
import { useDispatch } from "react-redux";
import { editUser } from "../../context/action";

const initialState = {
  name: "",
  username: "",
  profession: "",
  age: "",
  gender: "",
};

const Modal = ({ setShowModal, showModal, editData }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  console.log(formData);

  useEffect(() => {
    const { name, username, profession, age, gender } = editData;
    setFormData({ name, username, profession, age, gender });
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editUser(formData));
    setShowModal(false);
  };

  return (
    <>
      <div className="modal">
        <div
          onClick={() => setShowModal(false)}
          className={`${showModal ? "modal__overlay" : ""}`}
        ></div>
        <form
          onSubmit={handleUpdate}
          className={`modal__form ${showModal ? "show" : ""}`}
          action=""
        >
          <input
            value={formData?.name}
            name="name"
            onChange={handleChange}
            required
            type="text"
            placeholder="name"
          />
          <input
            value={formData?.username}
            name="username"
            onChange={handleChange}
            required
            type="text"
            placeholder="username"
          />
          <input
            value={formData?.profession}
            name="profession"
            onChange={handleChange}
            required
            type="text"
            placeholder="profession"
          />
          <input
            value={formData?.age}
            name="age"
            onChange={handleChange}
            required
            type="number"
            placeholder="age"
          />
          <select
            value={formData?.gender}
            name="gender"
            onChange={handleChange}
            required
            id=""
          >
            <option value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default memo(Modal);
