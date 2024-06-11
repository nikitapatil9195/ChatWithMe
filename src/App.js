import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import LoginForm from "./components/LoginForm";

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
           height="100vh"
           projectID="997ba1c1-a10e-4d7e-8cf5-efdc2cdd34ab"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}       
        />
    );
}

export default App;