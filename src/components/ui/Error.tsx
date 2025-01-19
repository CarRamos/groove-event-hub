import { AlertCircle } from "lucide-react";
import { Button } from "./button";

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <AlertCircle className="w-12 h-12 text-destructive mb-4" />
      <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
      <p className="text-muted-foreground mb-6">{message}</p>
      <Button onClick={() => window.location.reload()}>Try Again</Button>
    </div>
  );
};

export default Error;