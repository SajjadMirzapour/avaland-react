import { forwardRef } from "react";
import InformationForm from "src/components/InformationForm/InformationForm";
import "./editMusic.scoped.scss";

function EditMusic({ open, toggleEditMusic }, ref) {
  return (
    <div>
      {open && (
        <div className="modal">
          <div className="modal-content" ref={ref}>
            <InformationForm toggleEditMusic={toggleEditMusic} />
          </div>
        </div>
      )}
    </div>
  );
}

export default forwardRef(EditMusic);
