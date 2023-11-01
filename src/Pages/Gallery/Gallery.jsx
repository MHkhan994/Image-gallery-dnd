import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable'

import { FiUpload } from 'react-icons/fi'

import img1 from '../../assets/image-1.webp'
import img2 from '../../assets/image-2.webp'
import img3 from '../../assets/image-3.webp'
import img4 from '../../assets/image-4.webp'
import img5 from '../../assets/image-5.webp'
import img6 from '../../assets/image-6.webp'
import img7 from '../../assets/image-7.webp'
import img8 from '../../assets/image-8.webp'
import img9 from '../../assets/image-9.webp'
import img10 from '../../assets/image-10.jpeg'
import img11 from '../../assets/image-11.jpeg'
import SingleImage from './SingleImage'
import { useEffect, useRef, useState } from 'react'
import { openModal } from '../../Hooks/ModalControl'
import UploadModal from '../../components/UploadModal'

const Gallery = () => {

    const fileRef = useRef()

    const [images, setImages] = useState([img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11])
    const [uploadedImages, setUploadedImages] = useState([])

    const [selectedImgs, setSelectedImg] = useState([])

    useEffect(() => {
        // const localFiles = JSON.parse(localStorage.getItem("Images")) || [];
        // console.log(localFiles);
    }, [])

    console.log(selectedImgs);

    const handleDragOver = event => {
        const { active, over } = event
        setImages(items => {
            const updateImages = [...images];
            const activeIndex = items.indexOf(active.id);
            const overIndex = items.indexOf(over.id);
            [updateImages[activeIndex], updateImages[overIndex]] = [updateImages[overIndex], updateImages[activeIndex]]
            return updateImages;
        })
    }

    const handleUpaloadClick = () => {
        fileRef.current.click()
    }

    const handleImageUpload = (e) => {
        const images = e.target.files
        const imgArray = Array.from(images)
        setUploadedImages(imgArray)
        if (imgArray.length > 0) {
            openModal('upload_modal')
        }
    }


    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragOver}
        >
            <SortableContext
                items={images}
                strategy={rectSortingStrategy}
            >
                <div>
                    <div className="my-container py-2 flex justify-center gap-20 items-center">
                        <div>
                            <p>{selectedImgs.length} selected images</p>
                        </div>
                        <div>
                            <button onClick={handleDelete} className="red-btn">Delete</button>
                            <button onClick={() => setSelectedImg([])} className='pri-btn'>Deselect all</button>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-2 my-container pb-4'>
                        {
                            images.map((img, index) => {

                                const imgData = {
                                    img, index, selectedImgs, setSelectedImg
                                }

                                return <SingleImage
                                    key={typeof (img) === 'string' ? img : img.name}
                                    imgData={imgData}
                                >
                                </SingleImage>
                            })
                        }
                        {/* ========upload image======== */}
                        <div onClick={handleUpaloadClick} className='h-full w-full text-gray-600 cursor-pointer bg-gray-200 flex flex-col justify-center items-center'>
                            <input
                                onInputCapture={handleImageUpload}
                                ref={fileRef}
                                type="file"
                                accept="image/*"
                                multiple
                                className='hidden' />
                            <FiUpload></FiUpload>
                            <p className=' font-semibold'>Upload Image</p>
                        </div>
                    </div>
                </div>

                <UploadModal uploadedImages={uploadedImages} setImages={setImages}></UploadModal>

            </SortableContext>
        </DndContext>
    );
};

export default Gallery;