import { FC, PropsWithChildren } from "react";
import "./style.css";

interface IModal {
  active: boolean;

  onClose(): void;
}

const Modal: FC<PropsWithChildren<IModal>> = ({
  active,
  onClose,
  children,
}) => {
  return active ? (
    <div className={active ? "modal modalActive" : "modal"} onClick={onClose}>
      <div
        className={active ? "modalContent modalContentActive" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  ) : null;
};
export default Modal;
