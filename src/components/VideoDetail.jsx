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
        pt: 3,
        pb: 5,
      }}
    >
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={4}
        sx={{
          maxWidth: "1800px",
          mx: "auto",
          px: { xs: 2, md: 3 },
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            flex: 0.72,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: "18px",
              overflow: "hidden",
              background: "#000",
              boxShadow: "0 10px 30px rgba(0,0,0,.45)",
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

          <Typography
            sx={{
              mt: 3,
              color: "#fff",
              fontWeight: 700,
              fontSize: {
                xs: "20px",
                md: "24px",
              },
              lineHeight: 1.4,
            }}
          >
            {title}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={3}
            mt={3}
          >
            <Link
              to={`/channel/${channelId}`}
              style={{ textDecoration: "none" }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Avatar
                  sx={{
                    bgcolor: "#ff0000",
                    width: 50,
                    height: 50,
                  }}
                >
                  {channelTitle.charAt(0)}
                </Avatar>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {channelTitle}

                    <CheckCircleIcon
                      sx={{
                        fontSize: 16,
                        ml: 1,
                        color: "#909090",
                      }}
                    />
                  </Typography>
                </Box>
              </Stack>
            </Link>

            <Stack direction="row" spacing={4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <VisibilityOutlinedIcon sx={{ color: "#909090" }} />
                <Typography color="#aaa">
                  {Number(viewCount).toLocaleString()}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <ThumbUpAltOutlinedIcon sx={{ color: "#909090" }} />
                <Typography color="#aaa">
                  {Number(likeCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Divider
            sx={{
              my: 3,
              bgcolor: "#303030",
            }}
          />

          <Box
            sx={{
              background: "#1d1d1d",
              borderRadius: "16px",
              p: 3,
            }}
          >
            <Typography
              sx={{
                color: "#ddd",
                lineHeight: 1.8,
                whiteSpace: "pre-line",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            flex: 0.28,
            minWidth: {
              lg: "380px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 22,
              mb: 2,
            }}
          >
            Recommended Videos
          </Typography>

          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
