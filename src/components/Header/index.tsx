import { Component } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';

interface HeaderProps {
  openModal: () => void;
}

export default function Header({ openModal }: HeaderProps) {

  const Logo = require("../../assets/logo.svg") as string;

  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}

