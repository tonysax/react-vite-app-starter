import reactLogo from '@assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLocalStorage } from './hooks/useLocalStorage'


async function getUserInfo() {
 

  const opts :  RequestInit = { method: 'GET', 
    headers: {  'x-content-type-options':'nosniff', 'Content-Type': 'application/json' /*,' Authorization': 'Bearer token123' */ }, 
    credentials: 'same-origin', 
    priority: 'high' };
  
  const response = await fetch('/.auth/me', opts);
    if (!response.ok) {
        throw new Error('Failed to get user info');
    }
    
    return await response.text();

 }



function App() {
    const [count, setCount] = useLocalStorage('count', 0)

  
        
    const incrementCount = () =>
        setCount((previousCount: number) => previousCount + 1);

   
    const [userauth, setUserAuth] = useLocalStorage('userauth', "notset111")
      

    /*
    
    )

   */


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

                        incrementCount();

                       

                    }}
                >
                    count is {count}
                </button>

                <button
                    onClick={() => {

                        setCount(0);
                       
                        getUserInfo().then(
        
                            (data) => {setUserAuth(data );}, 
                            (error) => {setUserAuth("error"); console.log(error);} 
                        );                    

                       

                    }}
                >
                    reset 
                </button>
                <p>

                   {userauth}
                    
                </p>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click twice on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
