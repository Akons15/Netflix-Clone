import Main from "../components/home/Main";
import Questions from "../components/home/Questions";
import Top from "../components/home/Top";


export default function Home() {
  return (
   <div className='bg-black overflow-hidden'>
     <Top />
     <div className='w-screen h-2 bg-[#404040] mt-[12rem]' />
     <Main  />
     <Questions />
   </div>
  )
}
