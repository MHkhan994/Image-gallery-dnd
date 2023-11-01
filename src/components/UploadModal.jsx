import { closeModal } from "../Hooks/ModalControl";

const UploadModal = ({ uploadedImages, setImages }) => {

    const uploadImage = () => {
        const reader = new FileReader()
        localStorage.setItem("Images", reader.result);
        setImages(pre => [...pre, ...uploadedImages])
        closeModal('upload_modal')
    }

    return (
        <div>
            <dialog id="upload_modal" className="modal min-h-[80vh]">
                <div className="modal-box w-8/12 max-w-5xl min-h-[80vh]">
                    <div className="grid grid-cols-2 gap-2">
                        {
                            uploadedImages.map((file, i) => {
                                return <img key={i} src={URL.createObjectURL(file)}></img>
                            })
                        }
                    </div>
                    <button onClick={uploadImage} className="bg-green-500 text-white py-2 px-3 mt-5">Upload</button>
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

export default UploadModal;