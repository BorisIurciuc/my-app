import ReactDOM from 'react-dom/client';
import './index.css';
// import Lesson09 from './lessons/lesson09/Lesson09';
import Homework09 from './homeworks/homework09/Homework09';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Homework09 />
    {/* <Lesson09 /> */}
  </>
);
