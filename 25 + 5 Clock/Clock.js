import React, {useState, useEffect, useRef} from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function Timer() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [min, setMin] = useState(25);
  const latestMin = useRef(min);
  const [sec, setSec] = useState(60);
  const latestSec = useRef(sec);

//更新分秒
  useEffect(() =>{
    latestSec.current = sec;
  });

  useEffect(() =>{
    latestMin.current = min;
  });
  

  //秒针倒计时 
  useEffect(() =>{
    const secTime = setInterval(() => {
      if(latestSec.current === 0 && latestMin.current !== 0) {
        setSec(59)//让秒针从头开始循环
        return
      };
      if(latestSec.current === 0 && latestMin.current === 0) {
        clearInterval(secTime)//停止倒计时循环
        setSec(1)
      }
      setSec(s => s-1)
    }, 1000);
    return () => {
      clearInterval(secTime)
    }
  }, []);
  
  //分钟倒计时
  useEffect(() =>{
    const minTime = setInterval(() => {
      if(latestMin.current === 0) {
        clearInterval(minTime)
        return
      }
      setMin(s => s-1)
    }, 60000)
    return () => {
      clearInterval(minTime)
    }
  }, []);
 
  return(
    <>
      <div id="length">
        <div id="break-length">{breakLength}</div>
        <div id="session-length">{sessionLength}</div>
      </div>
      <div id="time-left">
        {min} : {sec}
      </div>
      <div id="contorl">
      </div>
    </>
  );
}

const clock = (
  <>
  <div id="clockName">Clock</div>
  <div id="label">
    <div id="break-label">Break Length</div>
    <div id="session-label">Session Length</div>
  </div>
    <Timer />
  </>
);

ReactDOM.render(clock, document.getElementById("app"));