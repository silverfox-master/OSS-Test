import React from 'react';
import ProductList from './components/product-list.component'
import Header from './components/header.component'
import Stats from '././components/stats.component'
import Grid from '@material-ui/core/Grid';
import DATA from './assets/Product.data.json'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
container:{
  display: 'flex',
  flexDirection: 'row',
  padding: '25px 50px 100px',
  
}
}));

function App() {
  const classes = useStyles();
  const [items, setItems] = React.useState(DATA.items);
  

  function handleClear(){
    setItems([])
  };

  function handleProductDelete (productId){
    const nextProducts = items.filter((product) => (
      product.id !== productId
    ));
    setItems(nextProducts);
  };

  

    
return (
  <div className={classes.container} >
    <Grid container spacing={3}>
      <Header/>
      <Grid item xs={9}> 
          <ProductList products={items}
                       handleDelete={handleProductDelete}
          />
      </Grid>
      <Grid item xs={3}> 
          <Stats onDeleteAll={handleClear}
                 items={items}
          />
      </Grid>
      </Grid>
    </div>
  );
}



export default App;
