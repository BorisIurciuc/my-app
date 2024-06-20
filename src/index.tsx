import ReactDOM from 'react-dom/client';
import './index.css';
import Lesson03 from './lessons/lesson03/Lesson03';
import Lesson07 from './lessons/lesson07/Lesson07';
import Homework03 from './homeworks/homework03/Homework03';
import Lesson04 from './lessons/lesson04/Lesson04';
import Homework04 from './homeworks/homework04/Homework04';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Lesson03 />
    <Lesson04 />
    <Lesson07 />
    <Homework03 />
    <Homework04 />
  </>
);
