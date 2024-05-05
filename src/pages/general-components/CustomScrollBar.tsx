const CustomScrollbar = () => {
  return (
    <div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 4px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #4CAF50;
            border-radius: 2px;
          }

          ::-webkit-scrollbar-track {
            background-color: #d1d5db;
          }
        `}
      </style>
    </div>
  );
};

export default CustomScrollbar;
