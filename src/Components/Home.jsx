import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import pic1 from "../assets/Images/banner1.jpg"
import pic2 from "../assets/Images/banner2.jpg"
import pic3 from "../assets/Images/banner3.jpg"
import pic4 from "../assets/Images/banner4.jpg"
import pic5 from "../assets/Images/banner5.jpg"
import pic6 from "../assets/Images/banner6.jpg"
import pic7 from "../assets/Images/banner7.jpg"
import pic8 from "../assets/Images/banner8.jpg"
import pic9 from "../assets/Images/banner9.jpg"
import Products from './Products'
// import pic10 from "../assets/Images/banner10.jpg"

var item = [
  {
    pic: pic1
  },
  {
    pic: pic2
  },
  {
    pic: pic3
  },
  {
    pic: pic4
  },
  {
    pic: pic5
  },
  {
    pic: pic6
  },
  {
    pic: pic7
  },
  {
    pic: pic8
  },
  {
    pic: pic9
  }
]
function Item(props) {
  return(
    <Paper>
      <img src={props.item.pic} widht="100%" height="500px"/>
    </Paper>
  )
}

export default function Home() {
  return (
    <>
    <div className='container-fluid'>
    <Carousel>
      {
        item.map((item, i) => <Item key={i} item={item}/>)
      }
    </Carousel>
    <h5 className='background text-light text-center p-2 mt-1'>Latest Product</h5>
    <Products mc="All" sc="All" br="All"/>
    </div>
    </>
  )
}
