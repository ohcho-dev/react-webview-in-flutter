import React, { Component, ReactNode } from "react";
import { useQueryErrorResetBoundary } from "react-query";
import { Outlet } from "react-router-dom";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import styled from "styled-components";

const ErrorSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 30%;
  }
`;

const FailSentence = styled.span`
  font-size: 1.6rem;
`;

const RetryButton = styled.button`
  width: 60%;
  height: 5rem;
  border: none;

  color: white;
  background-color: black;

  font-size: 1.6rem;
`;

interface Props {
  children?: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  // 에러 기록
  // public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   console.error("Uncaught error:", error, errorInfo);
  // }

  onResetErrorBoundary = () => {
    const { onReset } = this.props;
    onReset == null ? void 0 : onReset();
    this.reset();
  };

  reset() {
    this.setState({ hasError: false });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorSection>
          <img src="/images/icon-sad.svg" alt="sad icon" />
          <FailSentence>요청사항을 처리하는데 실패하였습니다.</FailSentence>
          <RetryButton onClick={this.onResetErrorBoundary}>
            다시 시도하기
          </RetryButton>
        </ErrorSection>
      );
    }

    return this.props.children;
  }
}

const Main: React.FC = () => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <LayoutMainPage>
      <ErrorBoundary onReset={reset}>
        <Outlet />
      </ErrorBoundary>
    </LayoutMainPage>
  );
};

export default Main;
