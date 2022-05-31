import React, { useState } from 'react'
import DB from '../../DB'
import { Animation, BtnShow } from '../helpers'
import { Certificates } from './components/Certificates'
import './style.scss'

export function Studies () {
  const { studies } = DB
  const { certificates, title, inputPlaceholder } = studies

  const inititalToShow = window.innerWidth >= 768 ? 14 : 9

  const inititalState = studies.certificates.slice(0, inititalToShow)

  const [certificate, setCertificate] = useState(inititalState)
  const [input, setInput] = useState('')

  const validInput = input.trim()

  const total = certificate.length
  const minimum = inititalState.length
  const allTheCertificates = certificates.length

  const handleClick = () => (
    total === minimum ?
      setCertificate(certificates) :
      setCertificate(inititalState)
  )

  const handleInput = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }

  const certificateToShow = validInput.length > 1
    ? studies.certificates.filter(({name}) => {
        const normalizedName = name.trim().toLocaleLowerCase()
        return normalizedName.includes(validInput.toLocaleLowerCase())
      })
    : certificate

  return (
    <Animation id='Studies' className='section studies'>
      <div>
        <h2>{title}</h2>
        <input type='search' placeholder={inputPlaceholder} value={input} onChange={handleInput} />
      </div>
      <Certificates certificate={certificateToShow} />
      {
        validInput.length < 1 && 
        <BtnShow
          minimun={minimum}
          total={total}
          value={`${allTheCertificates}`}
          onClick={handleClick}
        />
      }
    </Animation>
  )
}
