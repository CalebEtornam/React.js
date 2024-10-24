import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './ShoeStoreComponents/Card';
import products from './db/data'
import Nav from './Navigation/Nav'
import Sidebar from './Sidebar/Sidebar'
import Recommended from'./Recommended/Recommended'
import Products from './Products/Products'

function App() {
  const [query, setQuery] = useState("")
  const [ seletedCategory, setSelectedCategory] = useState(null)
  
  function handleInput(event){
   setQuery(event.target.value)
  }
  
  function handleRadio(event){
    setSelectedCategory(event.target.value)
  }
  
  function handleClick(event){
    setSelectedCategory(event.target.value)
  }
  
  const filteredItems = products.filter((product) => { 
    return(product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)
    
  })
  
  function filteredFunction(query, selected, products){
  
    let filteredData = products
  
    if(query){
      filteredData = filteredItems
    }
  
    if(selected){
      filteredData = filteredData.filter(({category, newPrice, color, company}) => category === selected || 
       newPrice === selected || color === selected || company === selected ) 
    }
  
    return(
      filteredData.map(({title, newPrice, prevPrice, img}) =>(
        <Card
        title = {title}
        newPrice = {newPrice}
        prevPrice = {prevPrice}
        img={img}
        />
      ) ) 
    )
  }
  
  let results = filteredFunction(query, seletedCategory, products)

  return (
    <>
      <Nav handleInput={handleInput} />
      <Sidebar handleRadio={handleRadio}/>
      <Recommended handleClick={handleClick}/>
      <Products results={results}/>
    </>
  );
}

export default App;
