import cl from "./modal.module.css"
import { useState } from 'react';

interface ModalProps {
  active: Boolean;
  setActive: Function;
}

const Modal = ({ active, setActive }: ModalProps) => {
  const [login, setLogin] = useState({ name: "", password: "" })
  const [reg, setReg] = useState({ name: "", password: "" })
  const [regName, setRegName] = useState("Регистрация")

  async function registerUser(e: Event) {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: reg.name,
        password: reg.password,
      })
    })
    alert("Вы зарегестрированы")
    return response.json()

  }

  async function logInUser(e: Event) {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: reg.name,
        password: reg.password,
      })
    })

    const data = await response.json()
    console.log(data)
  }


  return (
    <div className={active ? `${cl.modal} ${cl.active}` : cl.modal} onClick={() => setActive(false)}>
      <div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
        <form className={cl.logreg} onSubmit={logInUser}>
          <h1 className="text-black text-3xl">Вход</h1>
          <div className={cl.wrapper}>
            <h1 className="text-black text-lg">Логин</h1>
            <input
              type="text"
              className='bg-white rounded-lg border-solid border-2 border-black h-8 px-2 py-1 text-black'
              value={login.name}
              onChange={(e) => setLogin({ ...login, name: e.target.value })}
              maxLength={10}
            />
          </div>
          <div className={cl.wrapper}>
            <h1 className="text-black text-lg">Пароль</h1>
            <input
              type="text"
              className='bg-white rounded-lg border-solid border-2 border-black h-8 px-2 py-1 text-black'
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              maxLength={10}
            />
          </div>
          <button className="bg-black text-white px-2 py-1 rounded-lg">Войти</button>
        </form>
        <div className="h-full w-1 bg-lgray"></div>
        <form className={cl.logreg} onSubmit={registerUser}>
          <h1 className="text-black text-3xl">{regName}</h1>
          <div className={cl.wrapper}>
            <h1 className="text-black text-lg">Логин</h1>
            <input
              type="text"
              className='bg-white rounded-lg border-solid border-2 border-black h-8 px-2 py-1 text-black'
              value={reg.name}
              onChange={(e) => setReg({ ...reg, name: e.target.value })}
              maxLength={10}
            />
          </div>
          <div className={cl.wrapper}>
            <h1 className="text-black text-lg">Пароль</h1>
            <input
              type="text"
              className='bg-white rounded-lg border-solid border-2 border-black h-8 px-2 py-1 text-black'
              value={reg.password}
              onChange={(e) => setReg({ ...reg, password: e.target.value })}
              maxLength={10}
            />
          </div>
          <button className="bg-black text-white px-2 py-1 rounded-lg">Зарегестрироваться</button>
        </form>
      </div>
    </div>
  )
}

export default Modal