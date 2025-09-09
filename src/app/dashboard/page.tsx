"use client";

import { useState } from "react";
import Uppy from "@uppy/core";
import AwsS3, { type AwsBody } from "@uppy/aws-s3";
import { useUppyState } from "./useUppyState";
type Meta = { license: string };

export default function DashboardPage() {
  const [uppy] = useState(() => {
    const uppy = new Uppy<Meta, AwsBody>();
    uppy.use(AwsS3, {
      //   shouldUseMultipart: (file) => (file.size ?? 0) > 1024 * 1024 * 10,
      endpoint: "http://localhost:3000/api/upload",
      getUploadParameters: async (file) => {
        // const res = await fetch("/api/get-upload-params");
        // const { uploadParams } = await res.json();
        return { url: "" };
      },
    });
    return uppy;
  });
  const files = useUppyState(uppy, (state) => Object.values(state.files));

  console.info("files", files);

  return (
    <div className="width-screen h-screen flex items-center justify-center">
      <input
        className="flex flex-1 justify-center"
        type="file"
        multiple
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (!files) return;
          if (files.length > 0) {
            Array.from(files).forEach((file: File) => {
              uppy.addFile({ data: file, name: file.name });
            });
          }
        }}
      />
      {files.map((file) => {
        const url = URL.createObjectURL(file.data);
        return (
          <div key={file.id}>
            <img src={url} alt={file.name} />
          </div>
        );
      })}
    </div>
  );
}
