import React from "react";

/**
 * 메인메뉴
 */

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CoachingPage = React.lazy(() => import("./pages/CoachingPage"));
const ProgramPage = React.lazy(() => import("./pages/ProgramPage"));
const MyPage = React.lazy(() => import("./pages/Mypage"));

/**
 * 코칭메뉴
 */

const CoachingDetailPage = React.lazy(() => import("./pages/CoachingDetailPage"));
const ResultPaper = React.lazy(() => import("./pages/CoachingDetailPage/components/ResultPaper"));

const Questionnaire = React.lazy(() => import("./pages/Questionnaire"));
const QuestionnaireForm = React.lazy(() =>
  import("./pages/Questionnaire/components/QuestionnaireForm"),
);
const QuestionnaireDetailPage = React.lazy(() => import("./pages/QuestionnireDetailPage"));
const VideoAssignmentPage = React.lazy(() => import("./pages/VideoAssignmentPage"));

/**
 * 프로그램 메뉴
 */

const ApplyClassPage = React.lazy(() => import("./pages/ApplyClassPage"));
const ApplySuccessPage = React.lazy(() =>
  import("./pages/ApplyClassPage/components/ApplySuccessPage"),
);
const ApplyCoachingSuccess = React.lazy(() =>
  import("./pages/ProgramDetailPage/components/ApplyCoachingSuccess"),
);
const ProgramDetailPage = React.lazy(() => import("./pages/ProgramDetailPage"));

/**
 * My 메뉴
 */
const AppliedProgramList = React.lazy(() => import("./pages/MypageDetailPage/AppliedProgramList"));
const ManagementAlarm = React.lazy(() => import("./pages/MypageDetailPage/ManagementAlarm"));
const ManagementChild = React.lazy(() => import("./pages/MypageDetailPage/ManagementChild"));
const CreateChild = React.lazy(() => import("./pages/MypageDetailPage/CreateChild"));
const UpdateChild = React.lazy(() => import("./pages/MypageDetailPage/UpdateChild"));
const Notice = React.lazy(() => import("./pages/MypageDetailPage/Notice"));
const NoticeDetail = React.lazy(() => import("./pages/MypageDetailPage/NoticeDetail"));
const Terms = React.lazy(() => import("./pages/MypageDetailPage/Terms"));
const Privacy = React.lazy(() => import("./pages/MypageDetailPage/Privacy"));
const Sensitive = React.lazy(() => import("./pages/MypageDetailPage/Sensitive"));
const AlarmList = React.lazy(() => import("./pages/MypageDetailPage/AlarmList"));

export const RouterConfig = [
  {
    path: "/home",
    element: <HomePage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-fade",
    },
  },
  // {
  //   path: "/note",
  //   element: <NotePage />,
  //   sceneConfig: {
  //     enter: "from-fade",
  //     exit: "to-fade",
  //   },
  // },
  {
    path: "/coaching",
    element: <CoachingPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-fade",
    },
  },
  {
    path: "/program",
    element: <ProgramPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-fade",
    },
  },
  {
    path: "/my",
    element: <MyPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-fade",
    },
  },
  {
    path: "/program/coaching/:coachingid",
    element: <ProgramDetailPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program/class/:classid",
    element: <ProgramDetailPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program/class/apply-class/:classid",
    element: <ApplyClassPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program/class/apply-class/success",
    element: <ApplySuccessPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program/class/apply-coaching/success",
    element: <ApplyCoachingSuccess />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
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
    path: "/my/notice",
    element: <Notice />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/notice/:noticeid",
    element: <NoticeDetail />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/management-alarm",
    element: <ManagementAlarm />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/management-child",
    element: <ManagementChild />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/management-child/:childid",
    element: <UpdateChild />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/management-child/register",
    element: <CreateChild />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/applied-program-list",
    element: <AppliedProgramList />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/result/:paperid",
    element: <ResultPaper />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },

  {
    path: "/my/terms",
    element: <Terms />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/privacy",
    element: <Privacy />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/sensitive",
    element: <Sensitive />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/alarm-list",
    element: <AlarmList />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
];
