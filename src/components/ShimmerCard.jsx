const ShimmerCard = () => {
    return (
      <div className="w-64 p-4 border border-gray-300 rounded-lg shadow animate-pulse">
        <div className="h-40 bg-gray-200 rounded-md mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
      </div>
    );
  };
  
  export default ShimmerCard;
  