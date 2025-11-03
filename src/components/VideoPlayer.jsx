// src/components/VideoPlayer.jsx
import React from "react";

// Trả về URL embed của YouTube nếu là link YouTube, ngược lại trả null
function toYouTubeEmbed(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "");
    // youtu.be/<id>
    if (host.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    // youtube.com/watch?v=<id>
    if (host.includes("youtube.com")) {
      if (u.pathname === "/watch" && u.searchParams.get("v")) {
        return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
      }
      // đã là /embed/<id> rồi
      if (u.pathname.startsWith("/embed/")) {
        return url;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export default function VideoPlayer({ src, poster, title = "Video" }) {
  const embed = typeof src === "string" ? toYouTubeEmbed(src) : null;

  // YouTube iframe
  if (embed) {
    return (
      <div className="w-full rounded-xl overflow-hidden shadow-sm">
        <div className="aspect-video">
          <iframe
            className="w-full h-full border-0"
            src={embed}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  // File local / đường dẫn trực tiếp
  return (
    <video
      className="w-full rounded-xl shadow-sm"
      src={src}
      poster={poster}
      controls
      playsInline
    >
      Trình duyệt của bạn không hỗ trợ video HTML5.
    </video>
  );
}
