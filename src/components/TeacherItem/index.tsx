import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/42505927?s=460&u=db4f2a4c909f412ab2787b8647130a015b50ce0e&v=4" alt="Vitor Rodrigues"/>
            <div>
              <strong>Vitor Rodrigues</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Entusiasta em matemática.
            <br /><br />
            Apaixonado por ensinar de uma maneira didática, intuitiva e compartilha todo seu conhecimento com os alunos.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;