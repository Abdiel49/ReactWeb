import ImgCoca from '../assets/img/coca-cola.webp'
import { ButtonComponent } from './ButtonComponent'
import {useCalculator} from '../hooks/useCalculator'

export const ProductCard = ({title, detail, price, imageURL}) => {
  const {count, reset, restar, sumar, set} = useCalculator()

  function printValue () {
    console.log('count value', count)
  }
  return (
    <div className='product-card'>
      <img src={ImgCoca} alt="" className="product-image" />
      {/* <img src={imageURL} alt="" className="product-image" /> */}
      <div className='product-detail-container'>
        <p className='product-title'>{title}</p>
        <span className='product-detail'>{detail}</span>
        <p className='product-price'>{price}</p>

        <div className='product-actions'>
          <ButtonComponent label={'Quitar'} onClick={restar} />
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

        </div>
          <ButtonComponent label={'X'} onClick={reset} />
          <ButtonComponent label={'Imprimir'} onClick={printValue} />
      </div>
    </div>
  )
}
