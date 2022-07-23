import React from 'react';
import { ReactComponent as CompanyIcon } from './assets/crown.svg';

import { WhatsAppChatButton } from 'react-whatsapp-chat-button-ptbr';
import 'react-whatsapp-chat-button-ptbr/dist/index.css';

const App = () => {
    return (
        <WhatsAppChatButton
            message={`Olá! 👋🏼 \n\nComo posso ajudar?`}
            phoneNumber=""
        />
    );
};

export default App;
