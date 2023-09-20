import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./uploadMusic.scoped.scss";
import songSchema from "src/schema/song.schema";
import axios from "src/utils/axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function UploadMusic({ formData, setPage }) {
  // const {
  //   register,
  //   handleSubmit,
  //   // getValues,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(songSchema),
  // });

  const [disabled, setDisabled] = useState(true);
  // console.log("get 2", getValues());

  const [uploadPercent, setUploadPercent] = useState(false);

  const uploadFile = async (ev) => {
    try {
      const file = ev.target.files[0];
      console.log("file", file);
      if (["mp3", "ogg"].includes(file?.name?.split(".").at(-1))) {
        formData.append("file", file);
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) =>
            setUploadPercent(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            ),
        };
        await axios.post("music/upload", formData, config);
        setDisabled(false);
        // toast.success("uploaded succesfully");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("!!فرمت مناسب نمی باشد");
    }
  };

  const nextPage = () => {
    setPage(1);
  };

  return (
    <section>
      <div className="upload">
        <h2>بارگذاری آهنگ</h2>
        <div className="upload__context">
          <div>
            <h3>کلیک کنید یا آهنگ خود را در این قسمت رها کنید</h3>
            <div className="upload__container">
              <label className="upload__btn">
                آپلود آهنگ
                <input hidden type="file" onChange={uploadFile} />
              </label>
              {/* <ErrorMessage
              errors={errors}
              name="songFile"
              render={({ message }) => (
                <p
                  style={{
                    fontSize: "12px",
                    color: "red",
                    // position: "absolute",
                  }}
                >
                  {message}
                </p>
              )}
            /> */}
              {uploadPercent && (
                <div>
                  <progress
                    className="upload__progress"
                    id="progress"
                    max="100"
                    value={uploadPercent}
                  />
                  <span className="upload__percent">% {uploadPercent} </span>
                </div>
              )}
            </div>
            <div className="upload__next-btn">
              <button onClick={nextPage} disabled={disabled}>
                مرحله بعد
              </button>
            </div>
          </div>
          <div className="upload__warning">
            <img src="/images/info-circle.svg" alt="#" />
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
