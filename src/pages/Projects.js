import React from 'react'

export default function Projects() {
  return (
    <div className='project'>
        <h1 style={{color:'blue'}}>Projects</h1>
        <h2>Magic Note</h2>
        <ul>
          <li>designed to write your daily task,help to keep in track </li>
          <li>the whole site is developed using the Javascript and html,css</li>
          <li>you can update,delete,and create your task</li>
        </ul>
        <h2>techNotes</h2>
        <ul>
            <li>Designed and developed for a Tech repair shop for assigning notes to employees , it will cut down time and effort by 75% .</li>
            <li> Back-end implemented using Node.Js ,Express.Js, MongoDB and Front-end using React,Redux, Html ,CSS,JavaScript.</li>
            <li>Admin can add,can remove , can assign , can disable employees from using the app(all CRUD operations . Established authentication using JWT.</li>
        </ul>
        <h2>Anonymous-thought-sharing-App</h2>
        <ul>
            <li>Build for sharing thoughts , opinions and secrets anonymously.</li>
            <li>Achieved server side rendering through MVC model.</li>
            <li>Executed using Node.Js, Express.Js, MongoDB,EJS.</li>
            <li>Users can sign up , login(Google OAuth included) , express their thoughts without getting identified.</li>
        </ul>
    </div>
  )
}
