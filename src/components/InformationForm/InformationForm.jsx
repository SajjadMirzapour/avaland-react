import "./informationForm.scoped.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import informationschema from "src/schema/information.shema";
import Input from "../Input";
import axios from "src/utils/axios";
import { toast } from "react-toastify";
import TextArea from "../TextArea/TextArea";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";

export default function InformationForm({ handleCancel, formData }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(informationschema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      formData.append("singerName", data.singerName);
      formData.append("songName", data.songName);
      formData.append("albumName", data.albumName);
      formData.append("songDuration", data.songDuration);

      toast.success("با موفقیت انحام شد");
      navigate("/");
      await axios.post("music/upload", formData);
    } catch (error) {
      toast.error("something is wrong");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__song-information">
        <div className="grid-item">
          <img
            className="grid-item__song-img"
            src="/images/upload-form.png"
            alt="#"
          />
          <div className="form__shade">
            <div>
              <img src="/images/camera.png" alt="#" />
              <label className="image-uploader-label">
                بارگذاری عکس
                <input {...register("songImage")} type="file" hidden />
              </label>
            </div>
            <ErrorMessage
              errors={errors}
              name="songImage"
              render={({ message }) => (
                <p
                  style={{
                    fontSize: "12px",
                    color: "red",
                    position: "absolute",
                  }}
                >
                  {message}
                </p>
              )}
            />
          </div>
        </div>
        <div className="grid-item">
          <div>
            <Input
              register={register}
              name="singerName"
              errors={errors}
              label="نام خواننده"
            />
          </div>
          <div className="grid-item">
            <Input
              register={register}
              name="songDuration"
              errors={errors}
              label="مدت زمان آهنگ"
            />
          </div>
        </div>
        <div className="grid-item">
          <div>
            <Input
              register={register}
              name="songName"
              errors={errors}
              label="نام آهنگ"
            />
          </div>
          <div>
            <Input
              register={register}
              name="albumName"
              errors={errors}
              label="نام آلبوم"
            />
          </div>
        </div>
      </div>
      <TextArea
        register={register}
        name="songLyrics"
        errors={errors}
        label="متن آهنگ"
      />
      <div className="form__btns">
        <input type="button" value="لغو" onClick={handleCancel} />
        <input type="submit" value="ذخیره اطلاعات" />
      </div>
    </form>
  );
}
