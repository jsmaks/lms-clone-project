"use client";

import dynamic from "next/dynamic";
import { forwardRef, useMemo } from "react";

import "react-quill/dist/quill.snow.css";

interface EditorProps {
  value: string;
  //eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}
//eslint-disable-next-line no-unused-vars
const Editor = forwardRef(({ value, onChange }: EditorProps, ref) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    [],
  );

  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
});

Editor.displayName = "Editor";

export { Editor };
