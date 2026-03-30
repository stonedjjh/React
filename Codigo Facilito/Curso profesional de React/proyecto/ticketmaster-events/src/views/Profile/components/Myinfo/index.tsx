import { useForm, type SubmitHandler } from "react-hook-form";

import styles from "./Myinfo.module.css";
import { useEffect } from "react";

const USER_DATA = "userData";

//Como estamos usando typescript necesitamos tipar lo que tendria el formulario
interface MiFormulario {
  name: string;
  email: string;
  age: number;
}
//Se agregara un formulario para la información del usuario
const Myinfo = () => {
  //Se especifica la estrutura que dentra el form
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<MiFormulario>();

  /*
  const onHandleSubmitForm = (data:MiFormulario):void => {
  es una forma tambien valida de hacer esto 
  */

  const onHandleSubmitForm: SubmitHandler<MiFormulario> = (data) => {
    //Almacenamos la informacion en el local storage
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
    } catch (error) {
      console.error("Ha ocurrido un error");
    }
  };

  useEffect(() => {
    try {
      // 1. Obtenemos el string del storage (puede ser null)
      const storedData = localStorage.getItem(USER_DATA);

      // 2. Parseamos solo si existe, de lo contrario usamos un objeto vacío
      const userData: MiFormulario = storedData ? JSON.parse(storedData) : {};

      setValue("name", userData?.name);
      setValue("email", userData?.email);
      setValue("age", userData?.age);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onHandleSubmitForm)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          {...register("name", {
            required: true,
            minLength: 1,
            maxLength: 120,
          })}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          {...register("email", { required: true })}
        />
      </label>
      <label className={styles.label}>
        Age
        <input
          className={styles.input}
          {...register("age", {
            required: true,
            min: 1,
            max: 120,
            valueAsNumber: true,
          })}
          type="number"
        />
      </label>
      <button type="submit" className={styles.button}>
        Save
      </button>
    </form>
  );
};

export default Myinfo;
