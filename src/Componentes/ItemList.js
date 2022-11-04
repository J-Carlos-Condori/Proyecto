import { Card, CardActions, CardContent, Button} from '@mui/material'
import React from 'react'

const ItemList = ({items}) => {
  return (
    <>
      {
        items.map(item=>{
          return(

            <>
              <Card>
                <CardContent>
                  <div>
                    <h4>{item.nombre}</h4>
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small">DETALLES</Button>
                </CardActions>
              </Card>
            </>

          )
        })
      }
    </>
  )
}

export default ItemList
