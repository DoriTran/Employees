import "./Modal.scss";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClick} />;
};

const Overlay = (props) => {
    return (
        <div className="overlay">
            {!props.noCloseButton && <div className="close1" onClick={props.onCloseClick} />}
            {!props.noCloseButton && <div className="close2" onClick={props.onCloseClick} />}
            {props.children}
        </div>
    );
};

const portal = document.getElementById("root-portal");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onBackdropClick} />,
                portal
            )}
            {ReactDOM.createPortal(
                <Overlay noCloseButton={props.noCloseButton} onCloseClick={props.onCloseClick}>{props.children}</Overlay>, 
                portal
            )}
        </>
    );
};

export default Modal;
