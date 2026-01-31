import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface DataForm {
  name: string;
  age: string;
  address: string;
  zipcode: string;
  phone: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataForm>();

  const handlerClearClick = () => {
    reset();
  };

  const handlerSubmitForm: SubmitHandler<DataForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handlerSubmitForm)}>
      <label>
        Name
        <input {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Age
        <input {...register("age", { required: true })} />
      </label>
      <br />
      <label>
        Address
        <input {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        Zipcode
        <input {...register("zipcode", { required: true })} />
      </label>
      <br />
      <label>
        Phone
        <input {...register("phone", { required: true })} />
      </label>
      <br />
      <div>
        <button type="button" onClick={handlerClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
