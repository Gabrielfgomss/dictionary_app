function SkeletonComponent() {
  return (
    <>
      <div className="flex justify-between animate-pulse">
        <div className="flex flex-col gap-2">
          <div className="h-10 bg-gray-300 rounded-full w-40" />
          <div className="h-5 bg-gray-300 rounded-full w-20" />
        </div>
        <div className="rounded-full w-16 h-16 bg-gray-300" />
      </div>
      <div className="flex flex-col divide-y animate-pulse">
        <div className="flex pb-10">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded" />
            <div className="space-y-3">
              <div className="h-2 bg-gray-300 rounded ml-10" />
              <div className="h-2 bg-gray-300 rounded ml-10" />
            </div>
            <div className="h-2 w-2/3 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="flex pt-10">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded" />
            <div className="space-y-3">
              <div className="h-2 bg-gray-300 rounded ml-10" />
              <div className="h-2 bg-gray-300 rounded ml-10" />
            </div>
            <div className="h-2 w-2/3 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="flex pt-10">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-300 rounded" />
            <div className="space-y-3">
              <div className="h-2 bg-gray-300 rounded ml-10" />
              <div className="h-2 bg-gray-300 rounded ml-10" />
            </div>
            <div className="h-2 w-2/3 bg-gray-300 rounded" />
          </div>
        </div>

      </div>
    </>
  );
}

export default SkeletonComponent;
