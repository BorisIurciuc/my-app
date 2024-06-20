import './productCard.css'

function ProductCard(){
    const productData = {
        cardTitle: "Ferrari 296 GTB",
        cardImage:'https://cdn.motor1.com/images/mgl/OkpwL/s1/ferrari-296-gtb.jpg',
        cardDescription: "Откройте новую эру скорости с Ferrari 296 GTB",
        availability: true,
        thereIs: "Спешите, на складе несколько экземпляров",
        thereNot: "Товара нет на складе"
        }

    return (
        <div className="containerProduct">
            <h1>Наши предложения</h1>
            <div className={productData.availability ? 'containerProductYes' : 'containerProductNo'}>
                <h2>{productData.cardTitle}</h2>
                <img src={productData.cardImage} className='imgProduct' alt="ferrari"/>
                <h4>{productData.cardDescription}</h4>
                <p className='descriptionProd'>
                    Позвольте себе ощутить неподдельный восторг от вождения с Ferrari 296 GTB — автомобилем, 
                    который воплощает в себе сочетание роскоши, инноваций и невероятной динамики.
                    <br />Инновации и мощь
                    <br />Ferrari 296 GTB оснащен революционным V6-двигателем с турбонаддувом и гибридной системой, 
                    которые вместе вырабатывают ошеломляющие 830 лошадиных сил. Благодаря этому автомобиль 
                    разгоняется до 100 км/ч всего за 2,9 секунды, обеспечивая максимальное удовольствие от вождения.
                    <br /><b><span>Ваше будущее начинается сейчас.</span></b>
                </p >
            </div>
            <div className='availability'>
                <b><p className={productData.availability ? 'textBlack' : 'textRed'}>
                    {productData.availability ? productData.thereIs : productData.thereNot}
                </p></b>
            </div>
        </div>
    )
}

export default ProductCard
