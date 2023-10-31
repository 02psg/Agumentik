import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div>
        <>
    <div className='bg-gradient h-100'>
      <nav className='nav'>
        <div className='first-section'>
          <div className="styled-text">
            <span className='text-blue'>Esa</span>  <span className='text-orange'>Link</span>
          </div>
          <div className='text-white text-capitalize letter-spacing' id="text-small">data integration</div>
        </div>
        <div className='second-section'>
          <div className='button'>facturation electronique 2024</div>
          <ul className='nav-items'>
            <li>expertize</li>
            <li>solution</li>
            <li>service</li>
            <li>blog</li>
          </ul>
        </div>
        <div className='third-section'>
          <a className='text-white text-capitalize connexion'>connexion tma</a>
          <div className='btn-bg-blur text-white'>obtenir une demo</div>
          <select className='dropdown text-white'>
            <option value="fr">fr</option>
            <option value="fr">En</option>
            <option value="fr">tr</option>
          </select>
        </div>
      </nav>

<div className='body-section'>
  <div className='left-part'>
    <div className='button'>ISO</div>
    <div className='heading-container'>
    <h1 className='body-heading'>La dématérialisation</h1>
    <h1 className='body-heading'>au service de votre business</h1>
    </div>
    <p className='text-white'>Esalink vous accompagne dans la digitalisation de vos flux B2B</p>
    <div className='flex'>
      <div className='btn-bg-blur text-white'>trouve votre solution EDI</div>
      <div className='btn-bg-blur text-white'>trouve votre solution EDI</div>
    </div>
  </div>
  <div className='right-part'></div>
</div>

      </div>
    </>
    </div>
  )
}

export default Header