import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable'

import { useState } from 'react';

import './app.css'
import Images from './Images';

import img1 from './assets/image-1.webp'
import img2 from './assets/image-2.webp'
import img3 from './assets/image-3.webp'
import img4 from './assets/image-4.webp'
import img5 from './assets/image-5.webp'
import img6 from './assets/image-6.webp'
import img7 from './assets/image-7.webp'
import img8 from './assets/image-8.webp'
import img9 from './assets/image-9.webp'
import img10 from './assets/image-10.jpeg'
import img11 from './assets/image-11.jpeg'
0
const App = () => {
  const [languages, setLanguages] = useState([img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11])


  const handleDragEnd = event => {
    const { active, over } = event
    const activeEl = document.querySelector(`[src="${active.id}"]`)
    const overEl = document.querySelector(`[src="${over.id}"]`)
    activeEl.classList.add('z-20')
    overEl.classList.add('z-10')
    if (active.id !== over.id) {
      setLanguages((items) => {
        // const updatedItems = [...items];
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex)
        // [updatedItems[activeIndex], updatedItems[overIndex]] = [updatedItems[overIndex], updatedItems[activeIndex]];
        // return updatedItems;
      });
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragOver={handleDragEnd}
    >
      <SortableContext
        items={languages}
        strategy={rectSortingStrategy}
      >
        <div className='grid grid-cols-4 gap-4'>
          {
            languages.map(lang => <Images key={lang} id={lang}></Images>)
          }
        </div>
      </SortableContext>
    </DndContext >
  );
};

export default App;
