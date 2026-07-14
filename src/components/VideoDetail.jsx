import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Typography,
  Box,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { Videos, Loader } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    ).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box
      sx={{
        background: "#0f0f0f",
        minHeight: "100vh",
        py: 3,
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={4}
        sx={{
          maxWidth: "1700px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Left Section */}
        <Box flex={1}>
          {/* Video */}
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
              borderRadius: "18px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight="700"
            color="white"
            mt={3}
          >
            {title}
          </Typography>

          {/* Channel + Stats */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            mt={3}
            spacing={2}
          >
            <Link
              to={`/channel/${channelId}`}
              style={{ textDecoration: "none" }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: "#ff0000",
                    width: 48,
                    height: 48,
                  }}
                >
                  {channelTitle.charAt(0)}
                </Avatar>

                <Typography color="white" fontWeight={600}>
                  {channelTitle}

                  <CheckCircleIcon
                    sx={{
                      fontSize: 16,
                      color: "#aaa",
                      ml: 1,
                    }}
                  />
                </Typography>
              </Stack>
            </Link>

            <Stack direction="row" spacing={3}>
              <Stack direction="row" spacing={1} alignItems="center">
                <VisibilityOutlinedIcon sx={{ color: "#999" }} />

                <Typography color="#aaa">
                  {Number(viewCount).toLocaleString()}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <ThumbUpAltOutlinedIcon sx={{ color: "#999" }} />

                <Typography color="#aaa">
                  {Number(likeCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Divider sx={{ my: 3, bgcolor: "#2c2c2c" }} />

          {/* Description */}
          <Box
            sx={{
              background: "#1b1b1b",
              p: 3,
              borderRadius: "15px",
            }}
          >
            <Typography
              color="#ddd"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.8,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "380px",
            },
          }}
        >
          <Typography
            color="white"
            fontWeight="bold"
            fontSize={22}
            mb={2}
          >
            Related Videos
          </Typography>

          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
