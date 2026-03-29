import { Loader2 } from "lucide-react";

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <Loader2 className="w-16 h-16 text-white animate-spin mx-auto mb-4" />
      <p className="text-white text-xl font-semibold">Cargando Pokédex...</p>
    </div>
  </div>
);

export default Loading;
