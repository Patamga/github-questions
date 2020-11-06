import React from 'react'
// import { Switch, Route, useParams, Link } from 'react-router-dom'
// import Task1 from './Microtasks/Tasks/task1'
// import Task2 from './Microtasks/Tasks/task2'
// import Task3 from './Microtasks/Tasks/task3'
// import Task4 from './Microtasks/Tasks/task4'
// import Task5 from './Microtasks/Tasks/task5'
// import Task6 from './Microtasks/Tasks/task6'
// import Task7 from './Microtasks/Tasks/task7'
// import Task8 from './Microtasks/Tasks/task8'
// import Task9 from './Microtasks/Tasks/task9'
// import TaskMenu from './Microtasks/Tasks/taskMenu'
// import WithOutClassnameModul from './Microtasks/miccrotask2/withOutClassnameModul'
// import WithClassnameModul from './Microtasks/miccrotask2/withClassnameModul'
// import MenuComponent from './Microtasks/miccrotask2/menu'
// import Microtask3 from './Microtasks/microtask3/microtack3'
// import Description from './Microtasks/microtask3/desc'
// import Microtask4t1 from './Microtasks/microtask4/task-1'
// import Microtask4t2 from './Microtasks/microtask4/task-2'
// import Menu3 from './Microtasks/microtask3/menu3'
// import Menu4 from './Microtasks/microtask4/menu4'
// import Menu5 from './Microtasks/microtask5/menu5'
// import Desc5 from './Microtasks/microtask5/desc5'
// import Brewery from './BreweryClassComponents/index'
// import Calendar from './Calendar'
// import Microtask5 from './Microtasks/microtask5/Timer/timerClock'
// import CalendarSmool from './Calendar/calendarSmall'

const Dummy = () => {
  // const params = useParams()

  return (
    <div className="w-full h-full flex flex-col bg-gray-100">
      <div className="flex items-center justify-center h-12 w-full bg-teal-700 text-white font-thin   ">
        MICROTASKS
      </div>
      <div className="flex flex-col w-full h-full md:flex-row">
        {/* <div className="flex flex-col w-screen h-auto  bg-white md:h-screen p-2 widthLeftBar ">
          <div className="flex flex-col text-sm bz"> */}
            {/* <div className="flex h-full logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="42px"
                viewBox="0 0 48 48"
              >
                <path
                  d="M3,20H45a0,0,0,0,1,0,0V40a4,4,0,0,1-4,4H7a4,4,0,0,1-4-4V20A0,0,0,0,1,3,20Z"
                  fill="#f0f0f1"
                />
                <path d="M41,6H7a4,4,0,0,0-4,4V20H45V10A4,4,0,0,0,41,6Z" fill="#ec5044" />
                <path d="M14,13a2,2,0,0,1-2-2V3a2,2,0,0,1,4,0v8A2,2,0,0,1,14,13Z" fill="#495660" />
                <path d="M34,13a2,2,0,0,1-2-2V3a2,2,0,0,1,4,0v8A2,2,0,0,1,34,13Z" fill="#495660" />
                <path
                  d="M21.39,38.5A2,2,0,0,1,20,37.9l-5.39-5.53a2,2,0,0,1,2.87-2.79l4,4.12L30.63,25A2,2,0,0,1,33.37,28L22.76,38A2,2,0,0,1,21.39,38.5Z"
                  fill="#495660"
                />
              </svg>
              <div className="flex pl-8 ">
                {/* <Link className=" text-blue-600 text-2xl" to="/calendar/">
                  Calendar
                </Link> */}
              {/* </div>
            </div> */}
            {/* <CalendarSmool /> */}
            {/* <h1>CALENDAR</h1>
            <Link className="link" to="/calendar/">
              task
            </Link>
            <h1>MICROTASK 1</h1>
            <TaskMenu params={params} />
            <h1>MICROTASK 2</h1>
            <MenuComponent params={params} />
            <h1>MICROTASK 3</h1>
            <Menu3 />
            <h1>MICROTASK 4</h1>
            <Menu4 />
            <h1>MICROTASK 5</h1>
            <Menu5 />
            <h1>BREWERY - CLASS COMPONENT</h1>
            <Link className="link" to="/brewery/">
              task
            </Link> */}
          {/* </div>
        </div> */}
        {/* <div className=" w-full  h-full bg-gray-300">
          <Switch>
            <Route exact path="/microtasks/task1" component={() => <Task1 />} />
            <Route exact path="/microtasks/task2" component={() => <Task2 />} />
            <Route exact path="/microtasks/task3" component={() => <Task3 />} />
            <Route exact path="/microtasks/task4" component={() => <Task4 />} />
            <Route exact path="/microtasks/task5" component={() => <Task5 />} />
            <Route exact path="/microtasks/task6" component={() => <Task6 />} />
            <Route exact path="/microtasks/task7" component={() => <Task7 />} />
            <Route exact path="/microtasks/task8" component={() => <Task8 />} />
            <Route exact path="/microtasks/task9" component={() => <Task9 />} />
            <Route
              exact
              path="/microtasks/microtask2_1"
              component={() => <WithOutClassnameModul />}
            />
            <Route exact path="/microtasks/microtask2_2" component={() => <WithClassnameModul />} />
            <Route exact path="/microtasks/microtask3" component={() => <Microtask3 />} />
            <Route exact path="/microtasks/microtask3/desc" component={() => <Description />} />
            <Route exact path="/microtasks/microtask4-1" component={() => <Microtask4t1 />} />
            <Route exact path="/microtasks/microtask4-2" component={() => <Microtask4t2 />} />
            <Route exact path="/microtasks/microtask5" component={() => <Microtask5 />} />
            <Route exact path="/microtasks/microtask5/desc5" component={() => <Desc5 />} />
            <Route exact path="/brewery/" component={() => <Brewery />} />
            <Route exact path="/calendar/" component={() => <Calendar />} />
          </Switch>
        </div> */}
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
