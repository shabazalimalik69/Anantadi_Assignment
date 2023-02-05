import React, { useState } from "react";
import axios from "axios";
import { FormControl, Input, Button, TextField, Box } from "@mui/material";
import style from "./Common.module.css";

const UploadVideo = ({ getVideos }) => {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    for (let key in videos) {
      data.append("videos", videos[key]);
    }
    data.append("name", name);
    data.append("type", type);
    axios
      .post(`http://localhost:7600/uploadVideo`, data)
      .then((res) => {
        getVideos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <h1
        style={{
          width: "20%",
          display: "flex",
          margin: "auto",
          border: "none",
        }}
      >
        Upload Videos
      </h1>
      <Box className={style.uploadVideo}>
        <form noValidate autoComplete="off">
          <FormControl>
            <TextField
              placeholder="Video Name"
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <TextField
              placeholder="Video Type"
              type="text"
              name="type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <Input
              type="file"
              name="videos"
              id="videos"
              multiple
              className="form-control"
              accept=".mp4, .mkv"
              onChange={(e) => {
                setVideos(e.target.files);
              }}
            />
          </FormControl>
          <br />
          <br />
          <FormControl>
            <Button
              style={{ display: "flex", margin: "auto", border: "1px solid" }}
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary mt-2"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default UploadVideo;
