import { IconTypes } from "./IconTypes";

export const AddPhotoSVG: React.FC<IconTypes> = ({
  color,
  height,
  width,
  className
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={color}
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
    </svg>
  );
};