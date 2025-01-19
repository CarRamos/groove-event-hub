import { Loader2 } from "lucide-react";

interface LoadingProps {
  message?: string;
}

const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <Loader2 className="w-8 h-8 animate-spin text-gold mb-4" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
};

export default Loading;