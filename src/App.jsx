import s from './App.module.css';

let tg = window.Telegram.WebApp;

function close(){
    tg.close();
}


function App() {
    return (
        <div className={s.App}>
            <div className={s.btn}>asd</div>
            <div className={s.btn}>asd</div>
            <div className={s.btn}></div>
            <div className={s.btn}></div>
            <div className={s.btn} onClick={close}>Close</div>
        </div>
    );
}

export default App;
