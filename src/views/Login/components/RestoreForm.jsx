import "./restoreForm.scoped.scss";
import restoreSchema from "src/schema/restore.schema";
import Input from "src/components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "src/hooks";

export default function SigiinForm({ setFormKey }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(restoreSchema) });
  const { mutateAsync, isLoading } = useLoginMutation();

  const onSubmit = async (data) => {
    mutateAsync(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="restore">
      <div className="restore__info">
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
          name="phoneNumber"
          errors={errors}
          label="شماره همراه"
          type="text"
        />
      </div>
      <input
        type="submit"
        value="ورود"
        disabled={isLoading}
        className="restore__enter"
      />
      <div className="restore__account">
        <span>حساب کاربری ندارید؟</span>
        <button onClick={() => setFormKey(1)}>ثبت نام</button>
      </div>
      <div className="restore__restore">
        <button style={{ color: "white" }} onClick={() => setFormKey(2)}>
          بازیابی رمز عبور
        </button>
      </div>
    </form>
  );
}
