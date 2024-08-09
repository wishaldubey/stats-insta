import React from "react";

interface UploadInputProps {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean; // Make multiple prop optional
}

export const UploadInput: React.FC<UploadInputProps> = ({
  onFileUpload,
  multiple = false,
}) => (
  <div>
    <input
      type="file"
      accept=".json"
      onChange={onFileUpload}
      multiple={multiple} // Add the multiple attribute
      style={{ display: "none" }}
      id="fileUpload"
    />
    <label
      htmlFor="fileUpload"
      style={{
        backgroundColor: "#00ff99",
        color: "#141414",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      Upload JSON File
    </label>
  </div>
);
