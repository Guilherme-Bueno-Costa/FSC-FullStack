import {type FunctionComponent } from "react";

// Utilities
import { type Category } from "../../types/categoryTypes";

// Styles
import './CategoryItemStyle.css'

interface CategoryItemProps {
  category: Category;
}

// No componente abaixo, basicamente declaramos um const CategoryItem e como parâmetro passamos o objeto category e dizemos que ele é do tipo CategoryItemProps (portanto o {category} vai seguir o category definido na interface da props)
const CategoryItem = ({category}: CategoryItemProps) => {
    return (
        <>
        <div className="category-item" style={{backgroundImage: category.imageUrl}}>
            <div className="category-name">
                {category.displayName}
                <p>Explorar</p>
            </div>
        </div>
        </>
    )
}

export default CategoryItem;