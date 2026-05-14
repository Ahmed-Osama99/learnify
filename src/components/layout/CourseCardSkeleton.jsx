const SkeletonBlock = ({ className }) => (
    <div className={`bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`} />
  );
  
  const CourseCardSkeleton = () => {
    return (
      <div className="h-[450px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
        
        <div className="animate-pulse">
          {/* Image */}
          <SkeletonBlock className="h-[180px] w-full rounded-none" />
  
          <div className="p-4">
            {/* Category */}
            <SkeletonBlock className="h-5 w-2/3" />
  
            {/* Title */}
            <SkeletonBlock className="mt-4 h-5 w-[90%]" />
            <SkeletonBlock className="mt-2 h-5 w-[70%]" />
  
            {/* Instructor */}
            <div className="my-3 flex items-center gap-2">
              <SkeletonBlock className="h-6 w-6 rounded-full" />
              <SkeletonBlock className="h-5 w-1/2" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseCardSkeleton;