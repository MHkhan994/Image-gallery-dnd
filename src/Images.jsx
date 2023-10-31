import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import './index.css'

const Images = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id })


    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: 999
    }

    return (
        <div className='bg-gray-200 img-container relative inline max-h-[200px] max-w-[200px] touch-none' ref={setNodeRef} style={style} {...listeners}>
            <img src={props.id} className='w-full h-full' alt="" />
            <div className='absolute img-overlay top-0 left-0 h-full w-full bg-[#00000052]'></div>
        </div>
    )
};

export default Images;