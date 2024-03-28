import { FC, useEffect, useRef, useState } from "react";
import "./style.css";
import Modal from "../../../../shared/ui/modal/modal";
import InputMask from "react-input-mask";
import Close from "../../../../shared/constans/icons/close-svg.svg";
import Success from "../../../../shared/constans/icons/success.svg";

interface ICartTotalCost {
  totalCost: number;
}

const CartTotalCost: FC<ICartTotalCost> = ({ totalCost }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalPaymentSuccess, setModalPaymentSuccess] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const modalClosing = () => setModalActive(false);
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

  return (
    <div className={"cartTotalCostBlock"}>
      <div className={"cartCostBlock"}>
        <div className={"totalCost"}>
          <p className={"totalCostTitle"}>итого</p>
          <p className={"totalCostPrice"}>₽ {totalCost}</p>
        </div>
        <button
          className={"totalCostButton"}
          onClick={() => setModalActive(true)}
        >
          Перейти к оформлению
        </button>
      </div>
      <Modal active={modalActive} onClose={modalClosing}>
        <button className={"payModalClose"} onClick={modalClosing}>
          <img className={"payModalImg"} src={Close} alt={"Закрыть"} />
        </button>
        <p className={"payFormTitle"}>Форма оплаты</p>
        <form className={"payForm"} name={"payForm"} action="">
          <InputMask
            mask="9999 9999 99 99"
            maskChar=" "
            className={"payFormInput"}
            placeholder="Номер карты"
            required
          />
          <InputMask
            mask=""
            maskChar=" "
            className={"payFormInput"}
            type="text"
            placeholder="Имя на карте"
            required
          />
          <div className={"payFormBottom"}>
            <InputMask
              mask="99/99"
              maskChar=" "
              className={"payFormInput"}
              placeholder="MM/YY"
              required
            />
            <InputMask
              mask="999"
              maskChar=" "
              className={"payFormInput"}
              placeholder="CVC"
              required
            />
          </div>
          <button
            className={"payFormButton totalCostButton"}
            onClick={() => {
              modalClosing();
              setModalPaymentSuccess(true);
            }}
          >
            Оплатить {totalCost} ₽
          </button>
        </form>
      </Modal>
      <Modal active={modalPaymentSuccess} onClose={modalPaymentSuccessClosing}>
        <button
          className={"payModalClose"}
          onClick={modalPaymentSuccessClosing}
        >
          <img className={"payModalImg"} src={Close} alt={"Закрыть"} />
        </button>
        <div className={"paymentSuccessBlock"}>
          <p className={"paymentSuccess"}>Оплата прошла успешно</p>
          <img className={"paymentSuccessImg"} src={Success} alt={"Успешно"} />
        </div>
      </Modal>
    </div>
  );
};
export default CartTotalCost;
