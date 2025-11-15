const GridCols2Icon = ({ layout }: any) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0.8V15.2C16 15.6 15.6 16 15.2 16H9.8C9.4 16 9 15.6 9 15.2V0.8C9 0.4 9.4 0 9.8 0H15.2C15.6 0 16 0.4 16 0.8ZM7 0.8V15.2C7 15.6 6.6 16 6.2 16H0.8C0.4 16 0 15.6 0 15.2V0.8C0 0.4 0.4 0 0.8 0H6.2C6.6 0 7 0.4 7 0.8Z"
        fill={layout === "full-view" ? "#00AF9E" : "#95A0A6"}
      />
    </svg>
  );
};

export default GridCols2Icon;
