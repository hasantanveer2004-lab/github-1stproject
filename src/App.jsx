import { useState, useCallback, useEffect } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  // in  may false ak default value ha true b rakh saktay ha
  const [noAllowed, setNoAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  // "is useState may agar chahay tou koi password da 
  // saktay ha lakin hum koi password generate karwaya gay"
  const [password, setPassword] = useState("")

  // is ka baad hum ak password generator method banatay ha "useCallback" say
  const passwordGenerator = useCallback(() => {
    // is ka baad ak varable or string banatay ha or noAllowed
    // or charAllowed ko add kar datay ha
    let pword = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (noAllowed) {
      string += "0123456789"
    }
    if (charAllowed) {
      string += "!@#$%^&=()_+-*/"
    }
    console.log(string); 
    for (let i = 1; i <= length; i++) {
      // ab hum apna password banayaa gay
      // (Math.random() * string.length + 1) ya random number generate karnay ka formula ha

      let char = Math.floor(Math.random() * string.length)

      pword += string.charAt(char)
    }
    // value read karnay ka leyaa
    // dependency may "setpassword" dana ha tou dou nahi dana tou na dou
    setPassword(pword)
  }, [length, noAllowed, charAllowed, setPassword])

  // useEffect hook use hou raha ha
  useEffect(() => {
     passwordGenerator()
  }, [length, noAllowed, charAllowed, passwordGenerator])

  return (
    // w-full → Parent ki poori width le.
    // max-w-md → 448px se zyada na ho.
    // mx-auto → Box center mein aa jaye.
    // flex justify-center → Text box ke andar center ho.
    // bg-blue-800 → Blue background.
    // text-orange-500 → Orange text.
    // rounded-lg shadow-md → Rounded corners aur shadow.

    // mx-auto → Box (div) ko center karta hai.
    // justify-center → Box ke andar ke content ko center karta hai.
    // text-center → Sirf text alignment center karta hai.

    <div className="h-screen bg-blue-800 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg px-8 py-8 ">

        <h1 className="text-2xl font-bold text-center mb-4">Password Generator
        </h1>

        <div className="flex bg-gray-100 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Generated Password"
            value={password}
            className="flex-1 px-4 py-2 outline-none"
          />

          <button className="bg-blue-600 text-white px-4">
            Copy
          </button>
        </div>

        <div className='flex flex-nowrap justify-center items-center gap-2 mt-2'>
          <input type="range"
            min={6}
            max={50}
            value={length}
            className='cursor'
            onChange={(e) => {
              setLength(e.target.value)
            }} />

          <label className='whitespace-nowrap'>length : {length}</label>


          <input
            type="checkbox"
            onChange={() => setNoAllowed((prev) => !prev)}
          />
          <label>Numbers</label>

          <input
            type="checkbox"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Characters</label>

        </div>
      </div>
    </div>
    // <div className='bg-blue-600 w-full h-screen flex justify-center items-center'>
    //   <div className='w-full max-w-md bg-yellow-400  rounded-lg px-6 py-6'>
    //     <h1 className='font-bold text-2xl text-black text-center mb-3'>password</h1>
    //     <div className='flex bg-gray-100 rounded-lg overflow-hidden'>
    //       <input type="text"
    //       placeholder='password generator'
    //       className='flex-1 py-2 px-4 rounded-lg outline-none' />
    //       <button className='bg-blue-400 text-white px-4'>copy</button>
    //     </div>
    //     <div className='flex justify-center items-center gap-2 mt-3'>
    //       <input type="range"
    //       min={6}
    //       max={50}
    //       value={length}
    //       onChange={(e)=>{
    //         setLength(e.target.value)
    //       }} />
    //       <label> length:{length}</label>

    //       <input type="checkbox" 
    //       onChange={()=> setNoAllowed(prev = !prev)}
    //       />
    //       <label>numbers</label>

    //       <input type="checkbox"
    //       onChange={() => setCharAllowed(prev = !prev)} />
    //       <label>characters</label>
    //     </div>
    //   </div>
    // </div>

  );
}


export default App
