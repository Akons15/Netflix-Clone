import React, {useState} from 'react'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai';

const style = {
    wrapper: `flex justify-center mt-[20rem] lg:mt-10  w-screen h-full pb-5 text-white`,
    sectionCont: `flex flex-col items-center gap-5`,
    sectionTitle: `text-2xl lg:text-4xl font-semibold`,
    sectionQuestions: `flex justify-between items-center p-5 w-screen md:w-[30rem] lg:w-[50rem] h-[3rem] md:h-[5rem] bg-[#303030]`,
    sectionQuestionsTitle: `text-2xl font-semibold`,
    sectionAnswers: `flex flex-col gap-5 w-screen md:w-[30rem] lg:w-[50rem] h-full bg-[#303030] text-lg lg:text-2xl font-semibold p-5 `,
    sectionIcons: `text-3xl cursor-pointer `,
}

const Questions = () => {
    const [firstSec, setFirstSec] = useState(true)
    const [secondSec, setSecondSec] = useState(true)
    const [thirdSec, setThirdSec] = useState(true);
    

  return (
    <div className={style.wrapper}>
      <div className={style.sectionCont}>
      <h1 className={style.sectionTitle}>Frequently Asked Questions</h1>
          <div className='flex flex-col gap-1'>
              <div className={style.sectionQuestions} >
                  <h1 className={style.sectionQuestionsTitle}>What is Netflix</h1>
                  {firstSec ? 
                  <AiOutlinePlus className={style.sectionIcons} onClick={() => setFirstSec(!firstSec) }  /> :
                  <AiOutlineClose className={style.sectionIcons} onClick={() => setFirstSec(!firstSec)  } /> 
                  }
              </div>
              <div className={firstSec ? `hidden` : style.sectionAnswers}>
                  <p>Netflix is a streaming service that offers a wide variety 
                      of award-winning TV shows, movies, anime, documentaries, 
                      and more on thousands of internet-connected devices.
                  </p>
                  <p>You can watch as much as you want, whenever you want without 
                      a single commercial all for one low monthly price. 
                      There is always something new to discover and new TV 
                      shows and movies are added every week!</p>

              </div>
          </div>

          <div className='flex flex-col gap-1'>
              <div className={style.sectionQuestions}>
                  <h1 className={style.sectionQuestionsTitle}>How much Netflix cost?</h1>
                  {secondSec ? 
                  <AiOutlinePlus className={style.sectionIcons} onClick={() => setSecondSec(!secondSec) } /> :
                  <AiOutlineClose className={style.sectionIcons} onClick={() => setSecondSec(!secondSec) } /> 
                  }
              </div>
              <div className={secondSec ? `hidden` : `${style.sectionAnswers} h-[10rem]`}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, 
              or streaming device, all for one fixed monthly fee. 
              Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
              </div>
          </div>

          <div className='flex flex-col gap-1'>
              <div className={style.sectionQuestions} >
                  <h1 className={style.sectionQuestionsTitle}>Where can I watch?</h1>
                  {thirdSec ? 
                  <AiOutlinePlus className={style.sectionIcons} onClick={() => setThirdSec(!thirdSec) }  /> :
                  <AiOutlineClose className={style.sectionIcons} onClick={() => setThirdSec(!thirdSec)  } /> 
                  }
              </div>
              <div className={thirdSec ? `hidden` : style.sectionAnswers}>
                  <p>Watch anywhere, anytime. Sign in with your Netflix account to 
                      watch instantly on the web at netflix.com from your personal 
                      computer or on any internet-connected device that offers the 
                      Netflix app, including smart TVs, smartphones, tablets, 
                      streaming media players and game consoles.
                  </p>
                  <p>You can also download your favorite shows with the iOS, 
                      Android, or Windows 10 app. Use downloads to watch while 
                      you are on the go and without an internet connection. 
                      Take Netflix with you anywhere.</p>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Questions
