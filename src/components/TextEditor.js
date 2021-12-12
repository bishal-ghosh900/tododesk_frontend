import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Username from "./Username";

function TextEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  let date;
  let dateString;
  let timeString;
  let username;
  let loading;

  const zeroPad = (num, place) => String(num).padStart(place, "0");

  if (location.state) {
    if (!!location.state.date) {
      date = new Date(location.state.date);
      dateString =
        zeroPad(date.getDate(), 2) +
        "-" +
        zeroPad(date.getMonth() + 1, 2) +
        "-" +
        date.getFullYear();
      timeString =
        zeroPad(date.getHours(), 2) +
        ":" +
        zeroPad(date.getMinutes(), 2) +
        ":" +
        zeroPad(date.getSeconds(), 2);
    }

    username = location.state.username;
    loading = location.state.loading;
  }
  const [task, setTask] = useState(location.state?.todo || "");

  const handleUpdate = async () => {
    await toast.promise(
      axios.put(
        `${process.env.REACT_APP_URL}/todos/me/${location.state._id}`,
        {
          todo: task,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      ),
      {
        pending: "Saving the todo...",
        success: "Todo is saved...",
        error: "Something wrong happaned",
      },
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    );
  };
  const handleAdd = async () => {
    if (task !== "") {
      await toast.promise(
        axios.post(
          `${process.env.REACT_APP_URL}/todos/me`,
          {
            todo: task,
          },
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        ),
        {
          pending: "Saving the todo...",
          success: "Todo is saved.",
          error: "Something wrong happaned.",
        }
      );
    } else {
      toast.error("todo shouldn't be empty.");
    }

    navigate("/me", { replace: true });
  };

  return (
    <>
      {location.state ? (
        <div className="editor-div">
          <div className="editor-backbtn-div">
            <Username username={username} loading={loading} />
            {location.state.date && (
              <>
                <div>Date: {dateString}</div>
                <div>Time: {timeString}</div>
              </>
            )}
            <div className="btngrp">
              <button
                className="tickbtn"
                onClick={() =>
                  !!location.state.date ? handleUpdate() : handleAdd()
                }
              >
                &#10004;
              </button>
              {!!location.state.date && (
                <button
                  className="backbtn"
                  onClick={() => navigate("/me", { replace: true })}
                >
                  &#x1F824;
                </button>
              )}
            </div>
          </div>
          <textarea
            defaultValue={task || ""}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Write something here as your todo..."
            autoFocus={true}
          ></textarea>
        </div>
      ) : (
        <Navigate to={-1} />
      )}
    </>
  );
}

export default TextEditor;
