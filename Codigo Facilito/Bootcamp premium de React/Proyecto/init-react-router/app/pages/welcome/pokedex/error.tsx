import { AlertCircle } from "lucide-react";

const Error = ({ msg }: { msg: string }) => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
      <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Error</h2>
      <p className="text-gray-600">{msg}</p>
    </div>
  </div>
);

export default Error;
