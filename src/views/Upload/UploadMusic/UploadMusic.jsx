import "./uploadMusic.scoped.scss";
import { useState } from "react";
import axios from "src/utils/axios";
import { toast } from "react-toastify";

export default function UploadMusic() {
  const [uploadPercent, setUploadPercent] = useState(0);

  const uploadFile = async (ev) => {
    const formData = new FormData();
    formData.append("file", ev.target.files[0]);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) =>
        setUploadPercent(
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        ),
    };
    try {
      await axios.post("music/upload", formData, config);
      toast.success("succesfully");
    } catch (error) {
      toast.error("something is wrong");
    }
  };

  return (
    <section>
      <div className="breadcrumb">
        <a href="#">بارگذاری آهنگ</a>
        <img src="/images/left-arrow-gray.png" alt="#" />
        <a href="#">دخیره اطلاعات</a>
      </div>
      <div className="upload">
        <h2>بارگذاری آهنگ</h2>
        <div className="upload__context">
          <div>
            <h3>کلیک کنید یا آهنگ خود را در این قسمت رها کنید</h3>
            <label className="upload__btn">
              آپلود آهنگ
              <input
                hidden
                id="music"
                name="music"
                type="file"
                onChange={uploadFile}
              />
            </label>
            {uploadPercent ? (
              <div>
                <progress
                  className="upload__progress"
                  id="progress"
                  max="100"
                  value={uploadPercent}
                />
                <span className="upload__percent">% {uploadPercent} </span>
              </div>
            ) : (
              ""
            )}
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
