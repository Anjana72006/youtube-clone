import React from "react";
import { Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(280px, 1fr))",
          md: "repeat(3, minmax(300px, 1fr))",
          lg: "repeat(4, minmax(320px, 1fr))",
        },
        gap: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        width: "100%",
        px: {
          xs: 1,
          sm: 2,
          md: 3,
        },
        py: 2,
        alignItems: "start",
      }}
    >
      {videos.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {item.id?.videoId && <VideoCard video={item} />}

          {item.id?.channelId && (
            <ChannelCard channelDetail={item} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Videos;
