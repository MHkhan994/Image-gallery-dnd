import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SingleImage = ({ imgData }) => {

    const { img, index, selectedImgs, setSelectedImg } = imgData

    const {
        listeners,
        transform,
        setNodeRef,
        transition
    } = useSortable({ id: img })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const handleSelect = () => {
        console.log(img);
        setSelectedImg((items) => {
            if (items.includes(img)) {
                return items.filter((item) => item !== img);
            } else {
                return [...items, img];
            }
        });
    }

    return (
        <div className={`${index === 0 ? 'col-span-2 row-span-2' : ''} bg-gray-200 border img-container cursor-pointer overflow-hidden relative`} ref={setNodeRef} {...listeners} style={style}>
            {
                typeof (img) === 'string' ? <img src={img} alt={`image`} className="object-cover h-full w-full" /> :
                    <img src={URL.createObjectURL(img)}></img>
            }
            {
                selectedImgs.includes(img) && <input type="checkbox" defaultChecked={selectedImgs.includes(img)} className="h-5 w-5 absolute top-5 left-5" />
            }
            <div className="img-overlay p-5 absolute top-0 left-0 h-full w-full bg-[#00000062]">
                <input type="checkbox" onInputCapture={handleSelect} checked={selectedImgs.includes(img)} className="h-5 w-5" />
            </div>
        </div>
    );
};

export default SingleImage;