import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <div>
            <div id="header">
                <h1>FullStack Engineer</h1>
                <h3>My name is Luke Robinson, native to Florida and want to create software that improves the lives of everyone</h3>
            </div>
            <div id="midBar">
                <div>
                    <h2>Languages</h2>
                    <p>The languages I'm currently fluent in are HTML,CSS,Javascript,React,Express,SQL,PostgreSQL,Sequelize,Mongoose. I am most comfortable in Frontend</p>
                    <Link to ='/work'>Work</Link>
                </div>
                <div>
                    <h2>Languages I'm learning</h2>
                    <ul>
                        <li>Python</li>
                        <li>Ruby</li>
                        <li>Typescript</li>
                        <li>DJango</li>
                    </ul>
                </div>
                <div>
                    <h2>About Me</h2>
                    <p>I am a young and hardworking fullstack developer. I strive in a workplace
                        where I can utilize my creative thinking and problem solving skills.
                        Coming from an imigrant family it has taught me the fundamentals on 
                        putting my all towards what im passionate about. I strive to be at the top
                        while bringing people along with me.
                    </p>
                    <Link to ='/about'>About</Link>
                </div>

            </div>
        </div>
    )
}
export default Home