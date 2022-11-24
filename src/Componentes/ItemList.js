import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className='row'>
      {
        items.map((item) => {
          return <Item {...item} key={item.id} />
        })
      }
    </div >
  )
}

export default ItemList;