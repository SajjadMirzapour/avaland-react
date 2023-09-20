import { useState } from "react";
import InformationForm from "../../components/InformationForm/InformationForm";
import UploadMusic from "./UploadMusic/UploadMusic";
import "./upload.scoped.scss";

export default function Upload() {
  const formData = new FormData();

  const [page, setPage] = useState(0);

  const cancelUpload = () => {
    setPage(0);
  };

  const componentsList = [
    <UploadMusic formData={formData} setPage={setPage} />,
    <InformationForm
      formData={formData}
      setPage={setPage}
      handleCancel={cancelUpload}
    />,
  ];

  return (
    <>
      <div className="breadcrumb">
        {page >= 0 && <span>بارگذاری آهنگ</span>}
        {page === 1 && (
          <>
            <img src="/images/left-arrow-gray.png" alt="#" />
            <span>دخیره اطلاعات</span>}
          </>
        )}
      </div>
      {componentsList[page]}
    </>
  );
}
