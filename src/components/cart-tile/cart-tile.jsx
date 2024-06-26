import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cart-slice';
import './cart-tile.css';


export default function CartTile({cartItem})
{
    // 리덕스(store)의 함수를 사용하기 위해서 useDispatch()
    // 리덕스(store)의 데이터를 사용하기 위해선 useSelector()
    const dispatch = useDispatch();     // 리덕스의 함수를 사용하기 위해 useDispatch()
    function hRemoceFromCart(){
        dispatch(removeFromCart(cartItem.id));
    }


    return(
        <div className='tile-container'>
           <div className='flex-padding'>
               <img src={cartItem?.image} alt={cartItem.title} className='rounded-box'/>
               <div className='tile-content'>
                <h1 className='text-title'>{cartItem.title}</h1>
                <p className='text-price'>{Math.floor(cartItem.price * 1300).toLocaleString('ko-KR')} 원</p>
               </div>
           </div>
           <div>
                <button onClick={hRemoceFromCart} className='bold-red-bnt'>제거</button>
           </div>
        </div>
    )
}