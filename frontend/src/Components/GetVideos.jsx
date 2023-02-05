import { Box } from "@mui/material";
import React from "react";
import style from "./Common.module.css";

const GetVideos = ({ videos }) => {
  return (
    <Box className={style.container}>
      {videos?.map((v) => {
        return (
          <Box className={style.card}>
            {v?.videos.map((video) => {
              return (
                <video preload="auto" width="320" height="240" controls>
                  <source src={`http://localhost:7600${video}`} />
                </video>
              );
            })}
            <Box
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              {v.name}
            </Box>
            <Box
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              {v.type}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default GetVideos;
