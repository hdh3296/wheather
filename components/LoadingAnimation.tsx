interface LoadingAnimationProps {
  message: string;
}

export default function LoadingAnimation({ message }: LoadingAnimationProps) {
  return (
    <div className="mt-12 text-center">
      <div className="inline-flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-pulse"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 animate-pulse">
        {message}
      </p>
    </div>
  );
}