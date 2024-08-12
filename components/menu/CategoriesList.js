export default function CategoriesList({categories}) {
    return (<div className="filter-list">
        <div className="form-label">
            دسته بندی
        </div>
        <ul>
            {categories.map(category => (<li key={category.id} className="my-2 cursor-pointer filter-list-active">{category.name}</li>))}
            
          
        </ul>
    </div>)
}