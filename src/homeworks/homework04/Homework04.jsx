import LoginForm from "../../components/loginForm/LoginForm";
import Section from "../../components/section/Section";
import './homework04.css'

function Homework04() {
    return(
        <div className="conainerHW04">
            <h1>Homework04</h1>
            <LoginForm />
            <Section title={'first'}>
                <p>"Это способ передачи компоннеты в тегах"</p>
                <p>"можно передать столько данных сколько угодно"</p>
            </Section>
            
            <Section title={'second'}>
                <p>А здесь уже другие данные</p>
                <a href="https://anabin.kmk.org/anabin.html">ссылка</a>
            </Section>
            <Section/>
        </div>
    )
}
export default Homework04;