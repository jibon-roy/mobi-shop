const Loading = () => {
  return (
    <div className="flex items-center z-50 justify-center h-screen bg-gray-100">
      <div className="w-64 bg-gray-300 rounded-full h-6">
        <span className="loading loading-ball loading-lg"></span>
      </div>
    </div>
  );
};

export default Loading;
