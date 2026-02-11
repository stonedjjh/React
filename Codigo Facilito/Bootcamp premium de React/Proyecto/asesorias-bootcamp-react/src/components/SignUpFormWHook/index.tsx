import { useForm, type SubmitHandler } from "react-hook-form";

type SignUpForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpFormWHooks = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpForm>();

  const password = watch("password");

  const onSubmit: SubmitHandler<SignUpForm> = (data: SignUpForm) =>
    console.log(data);

  return (
    <div className="w-[420px] bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01] duration-500">
      <div className="px-8 pt-8 pb-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Crear Cuenta
        </h2>
        <p className="text-gray-500 text-center mt-2 text-sm">
          Ingresa tus datos para comenzar
        </p>
      </div>
      <form className="px-8 pb-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej. Juan Pérez"
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
            {...register("name", {
              required: true,
              minLength: {
                value: 3,
                message: "El valor debe de ser un nombre real",
              },
              maxLength: 150,
            })}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="tucorreo@ejemplo.com"
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
            {...register("email", {
              required: "El email es obligatorio",
            })}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
            {...register("password", {
              required: "El password es requerido",
              minLength: {
                value: 1,
                message: "El password es invalido",
              },
              maxLength: {
                value: 16,
                message: "El password no deberia de ser mayor a 16 caracteres",
              },
            })}
          />
        </div>

        <div className="relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="••••••••"
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
            {...register("confirmPassword", {
              required: "Por favor confirma tu contrasena",
              validate: (value) =>
                value === password || "Las contrasenas no coinciden",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-200"
        >
          Registrarse
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          ¿Ya tienes cuenta?{" "}
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline transition-colors duration-200"
          >
            Inicia Sesión
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpFormWHooks;
