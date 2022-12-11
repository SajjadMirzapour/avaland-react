import "./login.scoped.scss";
import { useState } from "react";
import SignInForm from "./components/SigninForm";
import SignUpForm from "./components/SignupForm";
import RestoreForm from "./components/RestoreForm";

const MAPPED_COMPONENTS = [SignInForm, SignUpForm, RestoreForm];

export default function Login() {
  const googleLogin = () => console.log("hi");

  const [formKey, setFormKey] = useState(0);
  const getComponent = () => {
    const Component = MAPPED_COMPONENTS[formKey];
    return <Component setFormKey={setFormKey} />;
  };

  return (
    <div className="login-container">
      <div className="information-container">
        <div className="information-container__logo">
          <img src="images/logo.png" alt="#" />
        </div>

        {/* {formKey === 0 && <SignInForm setFormKey={setFormKey} />}
        {formKey === 1 && <SignUpForm setFormKey={setFormKey} />} */}

        {getComponent()}
        <div className="google-account">
          <button onClick={googleLogin}>
            <img src="images/logo-google.png" alt="#" />
            <span>ورود با حساب گوگل</span>
          </button>
          <div>
            <img src="images/login-dott.png" alt="#" />
            <span>لورم ایپسوم متن ساختگی با تولید سادگی</span>
          </div>
          <div>
            <img src="images/login-dott.png" alt="#" />
            <span>
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </span>
          </div>
        </div>
      </div>
      <div className="message-welcome">
        <div className="message-welcome__context">
          <h1>به آوا لند خوش آمدید</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
    </div>
  );
}
