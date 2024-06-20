import ReactDOM from 'react-dom/client';
import './index.css';
import Lesson03 from './lessons/lesson03/Lesson03';
import Lesson04 from './lessons/lesson04/Lesson04';
import Lesson05 from './lessons/lesson05/Lesson05';
import Lesson07 from './lessons/lesson07/Lesson07';
import Homework03 from './homeworks/homework03/Homework03';
import Homework04 from './homeworks/homework04/Homework04';
import Homework05 from './homeworks/homework05/Homework05';
import Lesson06 from './lessons/lesson06/Lesson06';
import Homework06 from './homeworks/homework06/Homework06';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Lesson03 />
    <Lesson04 />
    <Lesson05 />
    <Lesson06 />
    <Lesson07 />
    <Homework03 />
    <Homework04 />
    <Homework05 />
    <Homework06 />
  </>
);
