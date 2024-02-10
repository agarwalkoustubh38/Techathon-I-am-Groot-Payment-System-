import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../layouts/Sidebar";
import DropDown from "../../components/DropDown";
import SideBarTreeData from "../../assets/data/SideBarTreeData";
import person_profile from "../../assets/images/person_profile.png";
import edit_sign from "../../assets/images/edit_sign.png";
const UserDetails = () => {
  const navigate = useNavigate();

  const options_for_role = [
    { label: "Allocation", value: "allocation" },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];
  const options_for_security = [
    { label: "MPPCL-xyz-xyzs-xuasdf", value: "MPPCL-xyz-xyzs-xuasdf " },

    { label: "Vegetable", value: "vegetable" },

    { label: "Meat", value: "meat" },
  ];
  const [name, setName] = useState("Name");
  const [role, setRole] = React.useState("fruit");
  const [security, setSecurity] = React.useState("fruit");
  const [userName, setUserName] = React.useState("username");
  const [isEdit, setIsEdit] = React.useState(false);
  const handleChange1 = (event) => {
    setRole(event.target.value);
  };
  const handleChange2 = (event) => {
    setSecurity(event.target.value);
  };

  const handleEdit = (event) => {
    if (isEdit) {
      if (event.key === "Enter") {
        setName(event.target.value);
        setIsEdit(false);
      }
    } else {
      setIsEdit(true);
    }
  };

  return (
    <>
      <div className="MainDiv">
        <Sidebar SideBarTreeData={SideBarTreeData} />
        <div className="PersonProfile">
          <img className="PersonProfileImage" src={person_profile}></img>
          <p> Hello , {name}</p>
          <div className="MiddleComponent">
            <div className="ProfileOption">
              <label className="LabelClass">Name</label>
              <div className="DesignBtn ProfileOption">
                {isEdit ? (
                  <input name="inputName" onKeyDown={handleEdit}></input>
                ) : (
                  <div>{name}</div>
                )}
                <img
                  src={edit_sign}
                  type="button"
                  className="EditSign"
                  onClick={handleEdit}
                  alt=""
                />
              </div>
            </div>
            <div className="ProfileOption">
              <label className="LabelClass">Username</label>
              <div className="DesignBtn">{userName}</div>
            </div>
            <div className="ProfileOption">
              <label className="LabelClass">Role</label>

              <DropDown
                options={options_for_role}
                value={role}
                onChange={handleChange1}
              />
            </div>
            <div className="ProfileOption">
              <label className="LabelClass">Security</label>

              <DropDown
                options={options_for_security}
                value={security}
                onChange={handleChange2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
