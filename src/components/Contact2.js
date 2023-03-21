import React from 'react'
import './Contact.css'
const Contact2 = () => {
  return (
    <div className='contact'>
        <div className="contact-container">
            <form action="/">
                <input type="text" placeholder='Írd be a neved!' />
                <input type="email" placeholder='Írd be az emailed! ' />
                <label>Add meg a kilövésed dátumát</label>
                <input type="datetime-local" />
                <span>Üzenet</span>
                <textarea placeholder='Írd be egyéni igényeid....'  cols="50" rows="10"></textarea>
                <button>Beküldés</button>
            </form>
    </div>
</div>
  )
}

export default Contact2