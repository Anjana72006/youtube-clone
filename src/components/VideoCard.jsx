import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card
    sx={{
      width: "100%",
      background: "transparent",
      boxShadow: "none",
      borderRadius: "16px",
      overflow: "hidden",
      cursor: "pointer",
      transition: "all .3s ease",

      "&:hover": {
        transform: "translateY(-4px)",
      },

      "&:hover img": {
        transform: "scale(1.03)",
      },
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        component="img"
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          borderRadius: "16px",
          transition: "0.35s ease",
        }}
      />
    </Link>

    <CardContent
      sx={{
        display: "flex",
        gap: 2,
        px: 0.5,
        py: 2,
        background: "transparent",
      }}
    >
      <Avatar
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
          snippet?.channelTitle || "YouTube"
        )}`}
        sx={{
          width: 42,
          height: 42,
          mt: 0.2,
        }}
      />

      <Box sx={{ flex: 1 }}>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#f1f1f1",
              lineHeight: 1.45,

              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {snippet?.title || demoVideoTitle}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              color: "#b3b3b3",
              fontSize: "14px",
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}

            <CheckCircleIcon
              sx={{
                fontSize: 15,
                ml: 0.6,
                color: "#909090",
              }}
            />
          </Typography>
        </Link>

        <Typography
          sx={{
            color: "#909090",
            fontSize: "13px",
            mt: 0.5,
          }}
        >
          1.2M views • 3 months ago
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default VideoCard;
    
         
          
