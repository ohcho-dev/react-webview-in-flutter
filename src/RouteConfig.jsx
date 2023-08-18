import DaycareResultPage from "pages/coaching/DaycareResultPage";
import LanguageExplanationPage from "pages/coaching/LanguageExplanationPage";
import React from "react";

/**
 * 메인메뉴
 */

const HomePage = React.lazy(() => import("./pages/home/HomePage"));
const RecordPage = React.lazy(() => import("./pages/record/RecordPage"));
const CoachingPage = React.lazy(() => import("./pages/coaching/CoachingPage"));
const NewCoachingPage = React.lazy(() => import("./pages/coaching/NewCoachingPage"));
const ProgramPage = React.lazy(() => import("./pages/program/ProgramListPage"));
const MyPage = React.lazy(() => import("./pages/my/Mypage"));
/**
 * 홈메뉴
 */
const ActivityDetail = React.lazy(() => import("./components/domain/home/ActivityDetail"));

/**
 * 기록메뉴
 */
const ExplanationRecord = React.lazy(() => import("./pages/record/ExplanationRecordPage"));
const StampReward = React.lazy(() => import("./pages/record/StampRewardPage"));
const RecordTaskList = React.lazy(() => import("./pages/record/RecordTaskListPage"));
const RecordDetailPage = React.lazy(() => import("./pages/record/RecordDetailPage"));
/**
 * 코칭메뉴
 */
const CoachingDetailPage = React.lazy(() => import("./pages/coaching/CoachingDetailPage"));
const ApplyCoachingPayment = React.lazy(() =>
  import("./components/domain/program/programDetailPage/ApplyCoachingPayment"),
);
const ResultPaper = React.lazy(() =>
  import("./components/domain/coaching/coachingDetailPage/ResultPaper"),
);

const Questionnaire = React.lazy(() => import("./pages/coaching/Questionnaire"));
const QuestionnaireForm = React.lazy(() =>
  import("./components/domain/coaching/questionnairePage/QuestionnaireForm"),
);
const QuestionnaireDetailPage = React.lazy(() => import("./pages/coaching/QuestionnireDetailPage"));
const VideoAssignmentPage = React.lazy(() => import("./pages/coaching/VideoAssignmentPage"));

const ContentListPage = React.lazy(() => import("./pages/coaching/ContentListPage"));
const ContentDetailPage = React.lazy(() => import("./pages/coaching/ContentDetailPage"));

/**
 * QnA 메뉴
 */
const QnaPage = React.lazy(() => import("./pages/coaching/QnaPage"));
const PreQuestionPage = React.lazy(() => import("./pages/coaching/PreQuestionPage"));
const QuestionFormPage = React.lazy(() => import("./pages/coaching/QuestionFormPage"));
const QuestionDetailPage = React.lazy(() => import("./pages/coaching/QuestionDetailPage"));

/**
 * 프로그램 메뉴
 */

const ApplyClassPage = React.lazy(() => import("./pages/program/ApplyClassPage"));
const ApplySuccessPage = React.lazy(() => import("./pages/program/ApplySuccessPage"));
const ApplyCoachingSuccess = React.lazy(() => import("./pages/program/ApplyCoachingSuccessPage"));
const ProgramDetailPage = React.lazy(() => import("./pages/program/ProgramDetailPage"));
const PaymentPage = React.lazy(() => import("./pages/program/PaymentPage"));
const PaymentSuccessPage = React.lazy(() => import("./pages/program/PaymentSuccessPage"));
const AccountPaymentSuccessPage = React.lazy(() =>
  import("./pages/program/AccountPaymentSuccessPage"),
);

/**
 * My 메뉴
 */
const AppliedProgramList = React.lazy(() => import("./pages/my/AppliedProgramListPage"));
const AlarmList = React.lazy(() => import("./pages/my/Alarm/AlarmListPage"));
const ManagementAlarm = React.lazy(() => import("./pages/my/Alarm/AlarmManagementPage"));
const ManagementChild = React.lazy(() => import("./pages/my/ChildManagement/ChildrenListpage"));
const CreateChild = React.lazy(() => import("./pages/my/ChildManagement/CreateChildPage"));
const UpdateChild = React.lazy(() => import("./pages/my/ChildManagement/UpdateChildPage"));
const Notice = React.lazy(() => import("./pages/my/Notice/NoticeListPage"));
const NoticeDetail = React.lazy(() => import("./pages/my/Notice/NoticeDetailPage"));
const Terms = React.lazy(() => import("./pages/my/TermsPage"));
const Privacy = React.lazy(() => import("./pages/my/PrivacyPage"));
const Sensitive = React.lazy(() => import("./pages/my/SensitivePage"));
const Stamp = React.lazy(() => import("./pages/my/Stamp"));
const Coupon = React.lazy(() => import("./pages/my/Coupon"));

export const RouterConfig = [
  {
    path: "/home",
    element: <HomePage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-right",
    },
  },
  {
    path: "/home/activity",
    element: <ActivityDetail />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/record",
    element: <RecordPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-right",
    },
  },
  {
    path: "/record/explanation",
    element: <ExplanationRecord />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/record/stamp-reward",
    element: <StampReward />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/record/record-task-list",
    element: <RecordTaskList />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching",
    element: <CoachingPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-right",
    },
  },
  {
    path: "/program",
    element: <ProgramPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-right",
    },
  },
  {
    path: "/my",
    element: <MyPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-right",
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
    path: "/program/coaching/:coachingid/payment",
    element: <ApplyCoachingPayment />,
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
    path: "/my/stamp",
    element: <Stamp />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/my/coupon",
    element: <Coupon />,
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
  {
    path: "/coaching/daycare/resultPaper/:id",
    element: <DaycareResultPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/daycare/resultPaper/languageDesc",
    element: <LanguageExplanationPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/record/:recordId",
    element: <RecordDetailPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/new-coaching",
    element: <NewCoachingPage />,
    sceneConfig: {
      enter: "from-fade",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/content-list",
    element: <ContentListPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/content/:contentId",
    element: <ContentDetailPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/qna",
    element: <QnaPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/qna/pre-question",
    element: <PreQuestionPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/qna/question-form",
    element: <QuestionFormPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/coaching/qna/question-detail/:id",
    element: <QuestionDetailPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program/payment/:id",
    element: <PaymentPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program/payment/success",
    element: <PaymentSuccessPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
  {
    path: "/program/payment/account/success",
    element: <AccountPaymentSuccessPage />,
    sceneConfig: {
      enter: "from-right",
      exit: "to-right",
    },
  },
];
