import React, { Component } from 'react';
import Message from './Message';
import { CSSTransitionGroup } from 'react-transition-group';
import '../css/spam.css';
import { Link } from "react-router-dom";

class Spam extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };

    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleSpamClick = this.handleSpamClick.bind(this);
  }

  componentWillMount() {
    let i = 0;

    this.newMessages = setInterval(() => {

      let newMessage = {
        id: i,
        title: randomTitle(),
        text: randomText(),
        sender: randomSender(),
        date: currentDate(),
        isSpam: Math.floor(Math.random() * 2),
        markedAsSpam: false,
        markedAsGood: false,
      };

      this.setState({
        messages: this.state.messages.concat([
          newMessage
        ])
      });

      i = i + 1;

      if (i == 5) clearInterval(this.newMessages);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.newMessages);
  }

  handleSpamClick(id) {
    let newMessages = this.state.messages.map(message => {
      if (message.id == id)
        message.markedAsSpam = true
      return message
    })

    this.setState({ messages: newMessages })
  }

  handleGoodClick(id) {
    let newMessages = this.state.messages.map(message => {
      if (message.id == id)
        message.markedAsGood = true
      return message
    })

    this.setState({ messages: newMessages })
  }

  render() {

    let messages = this.state.messages.map((message, i) => {
      return (
        <Message
          key={message.id}
          title={message.title}
          text={message.text}
          sender={message.sender}
          date={message.date}
          markedAsGood={message.markedAsGood}
          markedAsSpam={message.markedAsSpam}
          onSpamClick={() => this.handleSpamClick(message.id)}
          onGoodClick={() => this.handleGoodClick(message.id)}
        />
      )
    });

    return (
      /*
      -<Link title="Zadanie praktyczne o fałszywych informacjach i wyłudzeniach danych" to='/prawda-albo-falsz'>Prawda albo fałsz</Link>
      +<Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/jednoreki'>Jednoreki bandyta</Link>
      +
      */
     <div className="container">
     <div className="navall">
        <div className="navback">
        <Link title="Zadanie praktyczne o fałszywych informacjach i wyłudzeniach danych" to='/prawda-albo-falsz'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego zadania</div></Link>
      </div>
      <div className="navnext">
      <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/jednoreki'><div className="direction">Przejdź do nastęnego zadania <i className="fa fa-caret-square-o-right"></i></div></Link>
      </div>
      </div>
      <div className="spam-game">
        <header className="header">
          <h1 className="title">Skrzynka pocztowa</h1>
        </header>
        <div className="instruction">
                INSTRUKCJA: Sprawdź czy odróżniasz SPAM od innych wiadomości.
Co 3 sekundy będzie pojawiała się nowa wiadomość e-mail. Kliknij w nią, a następnie oceń czy jest SPAMem czy zwykłą wiadomością do Ciebie.
  
        </div>
        <div className="messages">
          <CSSTransitionGroup
            transitionName="animation"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {messages}
          </CSSTransitionGroup>
        </div>
      </div>
      <div className="navall">
        <div className="navback">
        <Link title="Zadanie praktyczne o fałszywych informacjach i wyłudzeniach danych" to='/prawda-albo-falsz'><div className="direction"><i className="fa fa-caret-square-o-left"></i> Wróć do poprzedniego zadania</div></Link>
      </div>
      <div className="navnext">
      <Link title="Zadanie praktyczne o krzykliwych nagłówkach w internecie" to='/jednoreki'><div className="direction">Przejdź do nastęnego zadania <i className="fa fa-caret-square-o-right"></i></div></Link>
      </div>
      </div>
      </div>
    );
  }
}

export default Spam;

function randomTitle() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < Math.floor(Math.random() * 10); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function randomSender() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < Math.floor(Math.random() * 5); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  text += "@";

  for (var i = 0; i < Math.floor(Math.random() * 5); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function randomText() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < Math.floor(Math.random() * 50) + 50; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function currentDate() {
  var date = "";
  var dateObject = new Date;

  date += dateObject.getHours() + ":" + dateObject.getMinutes() + " ";
  date += dateObject.getDay() + "-" + dateObject.getMonth() + "-" + dateObject.getFullYear();

  return date;
}