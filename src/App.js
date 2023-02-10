
import './index-sass/index.css';
import { useState } from 'react';
import mark from "./assets/images/avatar-mark-webber.webp"
import angela from "./assets/images/avatar-angela-gray.webp"
import jacob from "./assets/images/avatar-jacob-thompson.webp"
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp"
import kimberly from "./assets/images/avatar-kimberly-smith.webp"
import nathan from "./assets/images/avatar-nathan-peterson.webp"
import anna from "./assets/images/avatar-anna-kim.webp"
import chess from "./assets/images/image-chess.webp"

function App() {
  const [notifications, setNotifications] = useState(3);
  const [isNotification, setIsNotification] = useState(true);
  const [viewMsg, setViewMsg] = useState(false);

  function handleReadMsg() {
    setNotifications(0)
  }



  return (
    <main className="main">

      <header className="notifications-bar">
        <div className="notifications-bar__content">
          <h1>Notifications</h1>
          <span className={notifications ? 'show' : 'none'}>{notifications}</span>
        </div>

        <button type='button' onClick={handleReadMsg} className='read-msg' >Mark all as read</button>
      </header>

      <section className="notifications-container">
        <article className={notifications ? 'notifications-container__card' : 'notifications-container__card none'}>
            <img className="picture"src={mark} alt='mark-picture'/>
          <div className='notifications-container__card__content'>
            <p><strong className='name'>Mark Webber</strong> reacted to your recent post <span className='games'>My first tournament today!</span></p>
            <span  className='time'>1m ago</span>
          </div>
        </article>

        <article className={notifications ? 'notifications-container__card' : 'notifications-container__card none'}>
          <img className='picture' src={angela} alt="angela-picture"/>
          <div className='notifications-container__card__content'>
            <p><strong className='name'>Angela Gray</strong> followed you</p> <span className='time'>5m ago</span>
          </div>
        </article>

        <article className={notifications ? 'notifications-container__card' : 'notifications-container__card none'}>
          <img className='picture' src={jacob} alt="jacob-picture"/>
          <div className='notifications-container__card__content'>
            <p><strong className='name'>Jacob Thompson</strong> has joined your group <span className='group'>Chess Club</span></p> <span className='time'>1 day ago</span>
          </div>
  </article>

        <article className='notifications-container__card none'>
          <img className='picture' src={rizky} alt="rizky-picture"/>
          <div className='notifications-container__card__content'>
            <p><strong className='name'>Rizky Hasanuddin</strong> sent you a private message</p> <span className='time'>5 days ago</span> <button type='button' className='view-msg' onClick={() => setViewMsg(!viewMsg)}>View message</button>
            {viewMsg && (
              <article className='msg-box'>
                <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now
                  and I'm already having lots of fun and improving my game. 
                </p>
              </article>
            )}
          </div>
        </article>

        <article className='notifications-container__card none'>
          <img className='picture' src={kimberly} alt="kimberly-picture"/>
          <div className='notifications-container__card__content'>
            <p><strong className='name'>Kimberly Smith</strong> commented on your picture</p> <span className='time'>1 week ago</span>
          </div>
          <img className='chess' src={chess} alt="chess-game-picture" width='39px' height='39px'/>
        </article>

        <article className='notifications-container__card none'>
          <img className='picture' src={nathan} alt="nathan-picture"/>
          <div className='notifications-container__card__content'>
            <p><strong className='name'>Nathan Peterson</strong> reacted to your recent post <span className='games'>5 end-game strategies to increase your win rate</span></p> <span className='time'>2 weeks ago</span>
          </div>
        </article>

        <article className='notifications-container__card none'>
          <img className='picture' src={anna} alt="anna-picture"/>
          <div className='notifications-container__card__content'>
            <p><strong className='name'>Anna Kim</strong> left the group<span className='group'> Chess Club</span></p> <span className='time'>2 weeks ago</span>
          </div>
            </article>

      </section>
    </main>
  );
}

export default App;
