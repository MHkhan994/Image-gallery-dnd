
const LoginModal = () => {
    return (
        <div>
            <dialog id="login_modal" className="modal min-h-[80vh]">
                <div className="modal-box w-8/12 max-w-5xl min-h-[80vh]">
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default LoginModal;