import { forwardRef } from "react";
import "./deleteModal.scoped.scss";

function DeleteModal({ open, toggleDeleteModal }, ref) {
  return (
    <div>
      {open && (
        <div className="modal">
          <div className="modal-content" ref={ref}>
            <div className="modal-body">
              <div className="modal-body__head">
                <h4>آیا از حذف این آهنگ اطمینان دارید؟</h4>
              </div>
              <div className="modal-body__btns">
                <button className="modal-body__delete">حذف</button>
                <button
                  onClick={toggleDeleteModal}
                  className="modal-body__cancel"
                >
                  لغو
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default forwardRef(DeleteModal);
