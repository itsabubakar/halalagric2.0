const Products = () => {
    const showActive = (e) => {
        // console.log()
        const foo = e.target.parentElement.children
        for (let item of foo) {
            item.classList.remove('tab-active')
        }
        e.target.classList.add('tab-active')
    }
    return (
        <div className="my-10 flex flex-col items-center">
            <h2 className="text-center text-2xl mb-4">Our Products</h2>
            <div className="tabs gap-5">
                <a onClick={showActive} className={`tab tab-bordered`}>Tab 1</a>
                <a onClick={showActive} className="tab tab-bordered ">Tab 2</a>
                <a onClick={showActive} className="tab tab-bordered">Tab 3</a>
            </div>
        </div>
    )
}
export default Products