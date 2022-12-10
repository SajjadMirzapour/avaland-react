import loginschema from "src/schema/login.schema";
import Input from "src/components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "src/hooks";

export default function SigiinForm({ setFormKey }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(loginschema) });
  const { mutateAsync, isLoading } = useLoginMutation();

  const onSubmit = async (data) => {
    mutateAsync(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-in">
      <div className="sign-in__info">
        <Input
          register={register}
          name="username"
          errors={errors}
          label="نام کاربری"
        />
      </div>
      <div className="sign-in__info">
        <Input
          register={register}
          name="password"
          errors={errors}
          label="رمز عبور"
          type="password"
          withEye
        />
      </div>
      <input
        type="submit"
        value="ورود"
        disabled={isLoading}
        className="sign-in__enter"
      />
      <div className="sign-in__account">
        <span>حساب کاربری ندارید؟</span>
        <button onClick={() => setFormKey(1)}>ثبت نام</button>
      </div>
      <div className="sign-in__restore">
        <button style={{ color: "white" }} onClick={() => setFormKey(2)}>
          بازیابی رمز عبور
        </button>
      </div>
    </form>
  );
}
