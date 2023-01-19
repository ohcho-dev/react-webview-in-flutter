import ApplyClassPage from "./pages/ApplyClassPage";
import ApplySuccessPage from "./pages/ApplyClassPage/components/ApplySuccessPage";
import ApplyCoachingSuccess from "./pages/ProgramDetailPage/components/ApplyCoachingSuccess";
import CoachingDetailPage from "./pages/CoachingDetailPage";
import {
  HomePage,
  NotePage,
  CoachingPage,
  ProgramPage,
  MyPage,
  DetailPage,
  ProgramDetailPage,
} from "./pages/index";
import AppliedProgramList from "./pages/MypageDetailPage/AppliedProgramList";
import Inquiry from "./pages/MypageDetailPage/Inquiry";
import ManagementAlarm from "./pages/MypageDetailPage/ManagementAlarm";
import ManagementChild from "./pages/MypageDetailPage/ManagementChild";
import UpdateChild from "./pages/MypageDetailPage/UpdateChild";
import Notice, { NoticeDetail } from "./pages/MypageDetailPage/Notice";
import CreateChild from "./pages/MypageDetailPage/CreateChild";

import Questionnaire from "./pages/Questionnaire";
import QuestionnaireForm from "./pages/Questionnaire/components/QuestionnaireForm";
import QuestionnaireDetailPage from "./pages/QuestionnireDetailPage";
import VideoAssignmentPage from "./pages/VideoAssignmentPage";
import ResultPaper from "./pages/CoachingDetailPage/components/ResultPaper";
import Terms from "./pages/MypageDetailPage/Terms";
import Privacy from "./pages/MypageDetailPage/Privacy";
import Sensitive from "./pages/MypageDetailPage/Sensitive";

export const RouterConfig = [
  {
    path: "/",
    element: <HomePage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/home",
    element: <HomePage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/note",
    element: <NotePage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching",
    element: <CoachingPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program",
    element: <ProgramPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my",
    element: <MyPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/home/detail",
    element: <DetailPage />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/program/coaching/:coachingid",
    element: <ProgramDetailPage />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/program/class/:classid",
    element: <ProgramDetailPage />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/program/class/apply-class/:classid",
    element: <ApplyClassPage />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/program/class/apply-class/success",
    element: <ApplySuccessPage />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/program/class/apply-coaching/success",
    element: <ApplyCoachingSuccess />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/coaching/coaching-detail/:id",
    element: <CoachingDetailPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/questionnarie/:id",
    element: <Questionnaire />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/questionnarie/form/:order",
    element: <QuestionnaireForm />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/questionnarie/detail/:id",
    element: <QuestionnaireDetailPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/videoAssignment/:id",
    element: <VideoAssignmentPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/inquiry",
    element: <Inquiry />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/notice",
    element: <Notice />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/notice/:noticeid",
    element: <NoticeDetail />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/management-alarm",
    element: <ManagementAlarm />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/management-child",
    element: <ManagementChild />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/management-child/:childid",
    element: <UpdateChild />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/management-child/register",
    element: <CreateChild />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/applied-program-list",
    element: <AppliedProgramList />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/coaching/result/:paperid",
    element: <ResultPaper />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },

  {
    path: "/my/terms",
    element: <Terms />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/privacy",
    element: <Privacy />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
  {
    path: "/my/sensitive",
    element: <Sensitive />,
    sceneConfig: {
      enter: "from-bottom",
      exit: "to-bottom",
    },
  },
];
