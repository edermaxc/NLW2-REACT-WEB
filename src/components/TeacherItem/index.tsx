import React from 'react'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
        <header>
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHnsh2PFLuVpA/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=E789fdq4PypR1h-EvQW-AwRaOXSGACX-CCC9GxQvCWQ" alt="Eder Colin"/>
          <div>
            <strong>Eder Colin</strong>
            <span>Química</span>
          </div>
        </header>
        <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br/><br/>
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
        <footer>
          <p>
            Preço/Hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsAppIcon} alt="WhatsApp"/>
            Entrar em contato
          </button>
        </footer>
      </article>

    );
}

export default TeacherItem;

