import { Link } from "react-router-dom";
import { openModal } from "../../Hooks/ModalControl";
import LoginModal from "../../components/LoginModal";

const Navbar = () => {
    return (
        <div className="shadow-md">
            <div className="my-container h-14 border-b flex justify-between items-center">
                <h1 className="italic font-bold text-2xl text-indigo-600">DnD Gallery</h1>
                <button onClick={() => openModal('login_modal')} className="pri-btn">
                    login
                </button>
            </div>
            <LoginModal></LoginModal>
        </div>
    );
};

export default Navbar;