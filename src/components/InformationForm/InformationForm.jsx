import "./informationForm.scoped.scss";

export default function InformationForm({ toggleEditMusic }) {
  return (
    <form className="form" action="#">
      <div className="form__song-information">
        <div className="grid-item">
          <img
            className="grid-item__song-img"
            src="/images/upload-form.png"
            alt="#"
          />
          <div className="form__shade">
            <img src="/images/camera.png" alt="#" />
            <label className="image-uploader-label">
              بارگذاری عکس
              <input type="file" name="image-file" hidden />
            </label>
          </div>
        </div>
        <div className="grid-item">
          <div>
            <label htmlFor="singer-name">نام خواننده</label>
            <input id="singer-name" type="text" placeholder="اشارات" />
          </div>
          <div className="grid-item">
            <label htmlFor="song-duration">مدت زمان آهنگ</label>
            <input id="song-duration" type="text" placeholder="اشارات" />
          </div>
        </div>
        <div className="grid-item">
          <div>
            <label htmlFor="song-name">نام آهنگ</label>
            <input id="song-name" type="text" placeholder="اشارات" />
          </div>
          <div>
            <label htmlFor="album-name">نام آلبوم</label>
            <input id="album-name" type="text" placeholder="اشارات" />
          </div>
        </div>
      </div>
      <div className="form__song-lyrics">
        <label htmlFor="song-lyrics">متن آهنگ</label>
        <textarea id="song-lyrics" cols="30" rows="10" />
      </div>
      <div className="form__btns">
        <input type="button" value="لغو" onClick={toggleEditMusic} />
        <input type="submit" value="ذخیره اطلاعات" />
      </div>
    </form>
  );
}
