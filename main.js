import { songComponent } from './src/components'
import { getData } from './src/services'
import './style.css'

const container = document.getElementById('container');

getData(res => {


  res.map(
    item => 
      container.appendChild(
        songComponent(item)
      )
  
  )

})