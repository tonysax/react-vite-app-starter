import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLocalStorage } from './hooks/useLocalStorage'

async function getUserInfo() {
  const response = await fetch('/.auth/me');
  const payload = await response.json();
  const { clientPrincipal } = payload;
  return clientPrincipal;
}



function App() {
    const [count, setCount] = useLocalStorage('count', 0)

    const incrementCount = () =>
        setCount((previousCount: number) => previousCount + 1);

    let userinfo: string = "notset";

   
    getUserInfo().then((data) => {
        userinfo = data;
    });
   


    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button
                    onClick={() => {

                        incrementCount()




                    }}
                >
                    count is {count}
                </button>

                <p>

                    { userinfo }

                    
                </p>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
