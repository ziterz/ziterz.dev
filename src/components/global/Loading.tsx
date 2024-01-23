import { Skeleton, Card } from "@nextui-org/react";

export const CardSkeleton = () => {
  return (
    <Skeleton className="rounded-lg h-full">
      <div className="h-full rounded-lg bg-secondary"></div>
    </Skeleton>
  );
};

export const ContentSkeleton = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-8 w-full rounded-lg bg-secondary"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-8 w-full rounded-lg bg-secondary-300"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-lg">
          <div className="h-8 w-full rounded-lg bg-secondary-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-8 w-full rounded-lg bg-secondary-300"></div>
        </Skeleton>
      </div>
    </>
  );
};
