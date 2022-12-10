import signupSchema from "src/schema/signup.schema";
import Input from "src/components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "src/hooks";

export default function SignupForm({ setFormKey }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(signupSchema) });

  const { mutateAsync, isLoading } = useLoginMutation();

  const onSubmit = async (data) => {
    mutateAsync(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-up">
      <div className="sign-up__info">
        <Input
          register={register}
          name="username"
          errors={errors}
          label="نام کاربری"
        />
      </div>
      <div className="sign-up__info">
        <Input
          register={register}
          name="password"
          errors={errors}
          label="رمز عبور"
          type="password"
          withEye
        />
      </div>
      <div class="sign-up__info">
        <Input
          register={register}
          name="repeatPassword"
          errors={errors}
          label="تکرار رمز عبور"
          type="password"
          withEye
        />
      </div>
      <input
        type="submit"
        value="ورود"
        disabled={isLoading}
        className="sign-up__enter"
      />
      <div className="sign-up__account">
        <span>حساب کاربری ندارید؟</span>
        <button onClick={() => setFormKey(0)}>ورود</button>
      </div>
      <div className="sign-up__restore">
        <button style={{ color: "white" }} onClick={() => setFormKey(2)}>
          بازیابی رمز عبور
        </button>
      </div>
    </form>
  );
}
