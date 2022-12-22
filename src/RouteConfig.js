import ApplyClassPage from './pages/ApplyClassPage';
import {
  HomePage,
  NotePage,
  CoachingPage,
  ProgramPage,
  MyPage,
  DetailPage,
  ProgramDetailPage,
} from './pages/index';

export const RouterConfig = [
  {
    path: '/',
    element: <HomePage />,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/home',
    element: <HomePage />,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/note',
    element: <NotePage />,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/coaching',
    element: <CoachingPage />,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/program',
    element: <ProgramPage />,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/my',
    element: <MyPage />,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/home/detail',
    element: <DetailPage />,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },
  {
    path: '/program/coaching/:coachingid',
    element: <ProgramDetailPage />,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },
  {
    path: '/program/class/:classid',
    element: <ProgramDetailPage />,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },
  {
    path: '/program/class/apply-class/:classid',
    element: <ApplyClassPage />,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },
];
