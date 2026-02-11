import { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(errors);

  const handleSubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Agrega la logica para comunicarnos con un servicio externo
    const payload = {
      name,
      email,
      password,
    };

    console.log("payload", payload);
  };

  // Tarea
  /**
   *
   * Agregar validaciones adicionales a los demas inputs utilizando Typescript
   */
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const nextConfirmPassword = e.target.value;

    setConfirmPassword(nextConfirmPassword);

    if (nextConfirmPassword !== password) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          confirmPassword: "Las contrasenas no coinciden",
        };
      });
    } else {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          confirmPassword: "",
        };
      });
    }
  };

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
      <form className="px-8 pb-8 space-y-6" onSubmit={handleSubmitForm}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Controlled component
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
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
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={`w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400`}
          />
          {errors.confirmPassword.length && (
            <p className="text-red-500 text-left text-sm mt-1">
              {errors.confirmPassword}
            </p>
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

export default SignUpForm;
