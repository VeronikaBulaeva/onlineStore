import { FC, useEffect, useRef, useState } from "react";
import "./style.css";
import Modal from "../../../../shared/ui/modal/modal.tsx";
import Close from "../../../../shared/constans/icons/close-svg.svg";
import Success from "../../../../shared/constans/icons/success.svg";
import PayForm from "../payForm.tsx";

interface ICartTotalCost {
  totalCost: number;
}

const CartTotalCost: FC<ICartTotalCost> = ({ totalCost }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalPaymentSuccess, setModalPaymentSuccess] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const modalClosing = () => {
    setModalActive(false);
  };
  const modalPaymentSuccessClosing = () => {
    setModalPaymentSuccess(false);
  };
  const modalClosingTimeout = () => {
    timeout.current = setTimeout(modalPaymentSuccessClosing, 2000);
  };

  useEffect(() => {
    if (modalPaymentSuccess) {
      modalClosingTimeout();
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [modalPaymentSuccess]);

  const onSubmit = () => {
    modalClosing();
    setModalPaymentSuccess(true);
  };

  return (
    <>
      <div className="cartCostBlock">
        <div className="totalCost">
          <p className="totalCostTitle">итого</p>
          <p className="totalCostPrice">₽ {totalCost.toLocaleString()}</p>
        </div>
        <button
          className="totalCostButton"
          onClick={() => setModalActive(true)}
        >
          Перейти к оформлению
        </button>
      </div>
      <Modal active={modalActive} onClose={modalClosing}>
        <button className="payModalClose" onClick={modalClosing}>
          <img className="payModalImg" src={Close} alt="Закрыть" />
        </button>
        <p className="payFormTitle">Форма оплаты</p>
        <PayForm onSubmit={onSubmit} totalCost={totalCost} />
      </Modal>
      <Modal active={modalPaymentSuccess} onClose={modalPaymentSuccessClosing}>
        <button className="payModalClose" onClick={modalPaymentSuccessClosing}>
          <img className="payModalImg" src={Close} alt="Закрыть" />
        </button>
        <div className="paymentSuccessBlock">
          <p className="paymentSuccess">Оплата прошла успешно</p>
          <img className="paymentSuccessImg" src={Success} alt="Успешно" />
        </div>
      </Modal>
    </>
  );
};
export default CartTotalCost;
