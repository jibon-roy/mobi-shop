const Loading = ({ progress }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-64 bg-gray-300 rounded-full h-6">
        <div
          className="bg-primary-red h-6 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
