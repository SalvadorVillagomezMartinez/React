import { useState } from "react";
import { AddCategory } from './components/AddCategory'
import { GifGrid} from './components/GifGrid'



export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['RedBull']);

    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
      

    }
    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory onNewCategory={(value) => addCategory(value)}/>        
                {categories.map(category =>(
                <GifGrid 
                    key={category} 
                    category = {category}
                />
                ))
                }
         </>
    );
}