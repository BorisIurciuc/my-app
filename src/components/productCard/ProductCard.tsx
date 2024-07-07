import styles from './productCard.module.css'

interface IProductData {
    cardImage: string;
    availability: true;
    thereIs: string;
    thereNot: string;
}

const productData: IProductData = {
    cardImage:'https://cdn.motor1.com/images/mgl/OkpwL/s1/ferrari-296-gtb.jpg',
    availability: true,
    thereIs: "Спешите, на складе несколько экземпляров",
    thereNot: "Товара нет на складе"
    }

function ProductCard(){

    

    return (
        <div className={styles.containerProduct}>
            <h1>Наши предложения</h1>
            <h4>Ferrari 296 GTB</h4>
            <>
                <img src={productData.cardImage} alt="ferrari" 
                className={productData.availability ? styles.imgProductYes :  styles.imgProductNo}/>
            </>
            <h4>Откройте новую эру скорости с Ferrari 296 GTB</h4>
            <p>
                Позвольте себе ощутить неподдельный восторг от вождения с Ferrari 296 GTB — автомобилем, 
                который воплощает в себе сочетание роскоши, инноваций и невероятной динамики.
                <br />Инновации и мощь
                <br />Ferrari 296 GTB оснащен революционным V6-двигателем с турбонаддувом и гибридной системой, 
                которые вместе вырабатывают ошеломляющие 830 лошадиных сил. Благодаря этому автомобиль 
                разгоняется до 100 км/ч всего за 2,9 секунды, обеспечивая максимальное удовольствие от вождения.
                <br /><b><span>Ваше будущее начинается сейчас.</span></b>
            </p >
            <div className={styles.availability}>
                <b>
                    <p className={productData.availability ? styles.textBlack : styles.textRed}>
                    {productData.availability ? productData.thereIs : productData.thereNot}
                    </p>
                </b>
            </div>
        </div>
    )
}

export default ProductCard
