import React from 'react'

export default function Footer() {
    const currYear = new Date();
  return (
    <div className='foot'>
        <p>
        <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a class="footer-link" href="https://twitter.com/">Twitter</a>
        <a class="footer-link" href="https://www.appbrewery.co/">Website</a>
        Copyright &copy; {currYear.getFullYear()}
        </p>
    </div>
  )
}
