import { useState } from 'react'
import './App.css'
import data from '../data.json';

function App() {
  const [time, setTime] = useState({
    currentTime : ['**','**','**','**','**','**'],
    previousTime : ['**','**','**','**','**','**'],
    period : '******',
  });

  const dailyClick = () => {
    setTime({
        currentTime : data.map((item) => item.timeframes.daily.current),
        previousTime : data.map((item) => item.timeframes.daily.previous),
        period : 'Yesterday',
    })
  };

  const weeklyClick = () => {
    setTime({
        currentTime : data.map((item) => item.timeframes.weekly.current),
        previousTime : data.map((item) => item.timeframes.weekly.previous),
        period : 'Last Week',
    })
  };

  const monthlyClick = () => {
    setTime({
        currentTime : data.map((item) => item.timeframes.monthly.current),
        previousTime : data.map((item) => item.timeframes.monthly.previous),
        period : 'Last Month',
    })
  };

//   console.log(time)

    // data.map((f) => {
    //     console.log(f.title)
    //     console.log(f.timeframes)
    //     console.log(f.timeframes.daily.current)
    // })

  return (
    <>
      <main>
        <div className="container">
          <div className="main">
              <section className="main-top">
                  <div className="main-top-inner">
                      <img src="/image-jeremy.png" />
                      <p>Report for</p>
                      <h2>Jeremy <br /> Robson</h2>
                  </div>
              </section>
              <section className="main-bottom">
                  <div className="main-bottom-inner">
                      <p onClick={dailyClick} className={`main-bottom-daily ${time.period.trim() === 'Yesterday' ? 'white' : ''}`}>Daily</p>
                      <p onClick={weeklyClick} className={`main-bottom-weekly ${time.period.trim() === 'Last Week' ? 'white' : ''}`}>Weekly</p>
                      <p onClick={monthlyClick} className={`main-bottom-monthly ${time.period.trim() === 'Last Month' ? 'white' : ''}`}>Monthly</p>
                  </div>
              </section>
          </div>
          {data.map((e, index) => (
            <div key={index} className="work">
              <section className={e.title.toLowerCase().replace(/ /g, '-')}></section>
              <section className="work-bottom">
                  <div className="weekly-wrapper">
                      <div className="weekly">
                          <div className="activity">
                              <p>{e.title}</p>
                              <img src="/icon-ellipsis.svg" />
                          </div>
                          <div className="timing">
                              <p className="current-time"><span className="work-time">{time.currentTime[index]}</span>hrs</p>
                              <p className="previous-time"><span className="duration">{time.period}</span> - <span className="work-time">{time.previousTime[index]}</span>hrs</p>
                          </div>
                      </div>
                  </div>
              </section>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App

// LEGEND.DEV coded this






























//Below is a more concise and professional way of writing the above code

// import { useState } from 'react';
// import './App.css';
// import data from '../data.json';

// function App() {
//   const [time, setTime] = useState({
//     currentTime: Array(6).fill('**'),
//     previousTime: Array(6).fill('**'),
//     period: '******',
//   });

//   const handleClick = (type, periodLabel) => {
//     setTime({
//       currentTime: data.map(item => item.timeframes[type].current),
//       previousTime: data.map(item => item.timeframes[type].previous),
//       period: periodLabel,
//     });
//   };

//   const isActive = (label) => time.period.trim() === label ? 'white' : '';

//   return (
//     <main>
//       <div className="container">
//         <div className="main">
//           <section className="main-top">
//             <div className="main-top-inner">
//               <img src="/image-jeremy.png" alt="Jeremy Robson" />
//               <p>Report for</p>
//               <h2>Jeremy <br /> Robson</h2>
//             </div>
//           </section>

//           <section className="main-bottom">
//             <div className="main-bottom-inner">
//               {['Yesterday', 'Last Week', 'Last Month'].map((label, index) => (
//                 <p
//                   key={index}
//                   onClick={() => handleClick(label.toLowerCase().replace(' ', ''), label)}
//                   className={`main-bottom-${label.toLowerCase().replace(' ', '-')}${isActive(label)}`}
//                 >
//                   {label.split(' ')[1]}
//                 </p>
//               ))}
//             </div>
//           </section>
//         </div>

//         {data.map((e, index) => (
//           <div key={index} className="work">
//             <section className={e.title.toLowerCase().replace(/ /g, '-')}></section>
//             <section className="work-bottom">
//               <div className="weekly-wrapper">
//                 <div className="weekly">
//                   <div className="activity">
//                     <p>{e.title}</p>
//                     <img src="/icon-ellipsis.svg" alt="Options" />
//                   </div>
//                   <div className="timing">
//                     <p className="current-time"><span className="work-time">{time.currentTime[index]}</span>hrs</p>
//                     <p className="previous-time"><span className="duration">{time.period}</span> - <span className="work-time">{time.previousTime[index]}</span>hrs</p>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// export default App;
