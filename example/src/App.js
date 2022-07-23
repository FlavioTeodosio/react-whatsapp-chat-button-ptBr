import React from 'react';
import { ReactComponent as CompanyIcon } from './assets/crown.svg';

import { WhatsAppWidget } from 'react-whatsapp-chat-button-ptBr';
import 'react-whatsapp-chat-button-ptBr/dist/index.css';

const App = () => {
    return (
        <WhatsAppWidget
            message={`Olá! 👋🏼 \n\nComo posso ajudar?`}
            phoneNumber=""
        />
    );
};

export default App;
