// import React from 'react'
// import { Typography, List, ListItem, ListItemText, makeStyles } from '@mui/material'

// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ]

// const useStyles = makeStyles((theme: { spacing: (arg0: number, arg1: number) => any; }) => ({
//   listItem: {
//     padding: theme.spacing(1, 0),
//   },
//   total: {
//     fontWeight: 700,
//   },
//   title: {
//     marginTop: theme.spacing(2, 0),
//   },
// }));

// function ProductDetails() {
//   const classes = useStyles()
//   return (
//     <List disablePadding>
//       {products.map((product) => (
//         <ListItem className={classes.listItem} key={product.name}>
//           <ListItemText primary={product.name} secondary={product.desc} />
//           <Typography variant="body2">{product.price}</Typography>
//         </ListItem>
//       ))}
//       <ListItem className={classes.listItem}>
//         <ListItemText primary="Total" />
//         <Typography variant="subtitle1" className={classes.total}>
//           $34.06
//         </Typography>
//       </ListItem>
//     </List>
//   )
// }

// export default ProductDetails

import React from 'react'

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
]

export default function ProductDetails() {
  return (
    <div className="w-full max-w-md mx-auto">
      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.name} className="py-4 flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              {product.desc && <p className="mt-1 text-sm text-gray-500">{product.desc}</p>}
            </div>
            <p className="text-sm font-medium text-gray-900">{product.price}</p>
          </li>
        ))}
        <li className="py-4 flex justify-between">
          <h3 className="text-lg font-bold text-gray-900">Total</h3>
          <p className="text-lg font-bold text-gray-900">$34.06</p>
        </li>
      </ul>
    </div>
  )
}