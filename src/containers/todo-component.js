import React from "react";
import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

export default function TodoComponent({ todos, EditTodo, DeleteTodo }) {
  const CreateTime = (time) => {
    const todoTime = new Date(time);

    const getYear = () => {
      return todoTime.getFullYear();
    };

    const getMonth = () => {
      const month = todoTime.getMonth() + 1;
      if (month < 10) return `0${month}`;
      else return month;
    };

    const getDay = () => {
      const day = todoTime.getDate();
      if (day < 10) return `0${day}`;
      else return day;
    };

    const getHour = () => {
      const hour = todoTime.getHours();
      if (hour < 10) return `0${hour}`;
      else return hour;
    };

    const getMinute = () => {
      const minute = todoTime.getMinutes();
      if (minute < 10) return `0${minute}`;
      else return minute;
    };

    return `${getHour()}:${getMinute()} ${getDay()}.${getMonth()}.${getYear()}`;
  };

  return (
    <div className="row mt-3">
      <div className="col">
        {todos?.length > 0
          ? todos?.map((item, index) => (
              <div
                key={item._id}
                className="border bg-light py-2 px-3 my-2 rounded d-flex justify-content-between align-items-center"
              >
                <h5>{item.text}</h5>
                <div className="details  ">
                  <div className=" d-flex justify-content-end align-items-center">
                    <img
                      src={editIcon}
                      style={{ width: "28px", cursor: "pointer" }}
                      className="img-fluid"
                      alt="edit"
                      onClick={() => EditTodo(item._id)}
                    />
                    <img
                      src={deleteIcon}
                      style={{ width: "28px", cursor: "pointer" }}
                      className="img-fluid"
                      alt="edit"
                      onClick={() => DeleteTodo(item._id)}
                    />
                  </div>
                  <div
                    className="time text-secondary"
                    style={{ fontSize: "16px" }}
                  >
                    {CreateTime(item.updatedAt)}
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
