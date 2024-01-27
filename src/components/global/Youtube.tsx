"use client";

import ReactPlayer from "react-player";

export default function Youtube({ url }: { url: string }) {
  return (
    <div className="w-full aspect-video">
      <ReactPlayer url={url} width="100%" height="100%" />
    </div>
  );
}
