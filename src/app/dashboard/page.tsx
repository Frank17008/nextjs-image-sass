"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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

  return (
    <div className="flex-1 flex flex-col">
      {/* 主要内容区域 */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">文件上传</h2>
          <input
            className="flex flex-1 justify-center mb-4"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => {
              const url = URL.createObjectURL(file.data);
              return (
                <div key={file.id} className="border rounded-lg p-4">
                  <img
                    src={url}
                    alt={file.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <p className="mt-2 text-sm text-gray-600">{file.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
