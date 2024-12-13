import ImgCoca from '../assets/img/coca-cola.webp'
import { ButtonComponent } from './ButtonComponent'
import {useCalculator} from '../hooks/useCalculator'
import ActionContainer from './ActionContainer'
import { useProducts } from '../context/AppContext'

export const ProductCard = ({id, title, detail, price, imageURL, }) => {
  const {count, reset, restar, sumar, set} = useCalculator()
  const { addProductToCart } = useProducts();

  function printValue () {
    if (count > 0) {
      addProductToCart({id, title, price}, count)
    }
  }
  return (
    <div className='product-card'>
      <img src={ImgCoca} alt="" className="product-image" />
      {/* <img src={imageURL} alt="" className="product-image" /> */}
      <div className='product-detail-container'>
        <p className='product-title'>{title}</p>
        <span className='product-detail'>{detail}</span>
        <p className='product-price'>{price}</p>

        <ActionContainer>
          
          <ButtonComponent label={'Quitar'} onClick={restar} >
            
          </ButtonComponent>
          <input
            type="text"
            id="amount"
            name="amount"
            size="10"
            value={count}
            onChange={(input) => {
              // console.log(input.target.value)
              set(+input.target.value);
            }}
          />
          <ButtonComponent label={'Añadir'} onClick={sumar} />

        </ActionContainer>

          <ButtonComponent label={'X'} onClick={reset} />
          <ButtonComponent label={'Añadir al carrito'} onClick={printValue} />
      </div>
    </div>
  )
}
