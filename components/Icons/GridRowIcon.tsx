const GridRowIcon = ({ layout }: any) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2 16H0.8C0.4 16 0 15.6 0 15.2V9.8C0 9.4 0.4 9 0.8 9H15.2C15.6 9 16 9.4 16 9.8V15.2C16 15.6 15.6 16 15.2 16ZM15.2 7H0.8C0.4 7 0 6.6 0 6.2V0.8C0 0.4 0.4 0 0.8 0H15.2C15.6 0 16 0.4 16 0.8V6.2C16 6.6 15.6 7 15.2 7Z"
        fill={layout === "list-view" ? "#00AF9E" : "#95A0A6"}
      />
    </svg>
  );
};

export default GridRowIcon;
