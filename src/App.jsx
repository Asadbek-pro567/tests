import React from 'react'
import './App.scss'
import Russian from '../src/assets/russian.png'
import English from '../src/assets/english.png'
import Uzbek from '../src/assets/uzbek.png'
import { useState } from 'react'

function App() {
  const [bool, setBool] = useState(false)
  const [count, setCount] = useState(1)

  const selec = document.getElementsByClassName('select')
  const optionText = document.getElementById('p-text')
  const spanImg = document.getElementById('span-img')
  const elUl = document.getElementsByTagName('ul')

  const sel = (e) => {
    e.preventDefault()
    setBool(!bool)
    if (bool == true) {
      elUl[0].style.display = 'block'
      spanImg.style.rotate = '180deg'
    }
    else {
      elUl[0].style.display = 'none'
      spanImg.style.rotate = '0deg'
    }
  }

  const text = (e) => {
    e.preventDefault()
    setBool(false)
    elUl[0].style.display = 'none'
    optionText.innerHTML = e.target.textContent
    spanImg.style.rotate = '0deg'
    console.log(e.target);
    const el = e.target.textContent
    if(el == 'English'){
      setCount(1)
    }else if(el == 'Russian'){
      setCount(2)
    }else{
      setCount(3)
    }
    
  }


  return (
    <div>
      <div className='select' onClick={sel}>
        <span id='span-img'><i class="bi bi-caret-down-fill"></i></span>
        <p id='p-text'>English</p>
        <img src={count == 1 ? English : count == 2 ? Russian : count == 3 ? Uzbek : ''} alt="" />
      </div>

      <ul>
        <li onClick={text}>
          <img src={English} alt="" />
          <p>
            English
          </p>
        </li>
        <li onClick={text}>
          <img src={Russian} alt="" />
          <p>
            Russian
          </p>
        </li>
        <li onClick={text}>
          <img src={Uzbek} alt="" />
          <p>
            Uzbek
          </p>
        </li>
      </ul>
    </div>
  )
}

export default App