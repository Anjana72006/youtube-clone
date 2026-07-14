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
      maxWidth: "100%",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderRadius: "14px",
      overflow: "hidden",
      transition: "0.25s",
      cursor: "pointer",
      "&:hover": {
        transform: "scale(1.02)",
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
          height: 200,
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </Link>

    <CardContent
      sx={{
        display: "flex",
        gap: 1.5,
        px: 0,
        py: 1.5,
        backgroundColor: "#0f0f0f",
      }}
    >
      <Avatar
        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
          snippet?.channelTitle || "YouTube"
        )}`}
        sx={{
          width: 38,
          height: 38,
        }}
      />

      <Box>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#fff",
              fontWeight: 600,
              lineHeight: 1.4,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
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
            variant="body2"
            sx={{
              color: "#AAAAAA",
              mt: 0.8,
              display: "flex",
              alignItems: "center",
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}

            <CheckCircleIcon
              sx={{
                fontSize: 14,
                ml: 0.5,
                color: "#AAAAAA",
              }}
            />
          </Typography>
        </Link>

        <Typography
          variant="body2"
          sx={{
            color: "#AAAAAA",
            mt: 0.3,
          }}
        >
          1.2M views • 3 months ago
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default VideoCard;
