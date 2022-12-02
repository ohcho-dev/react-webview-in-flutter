import React, { ReactNode } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  MainTransitionGroup,
  MainTransitionWrapper,
} from "./MainTransitionStyles";

type MainTransitionProps = {
  transitionKey: string;
  children: ReactNode;
};

const MainTransition = ({ transitionKey, children }: MainTransitionProps) => {
  const timeout = 300;
  const classNames = "scale";
  return (
    <MainTransitionGroup timeout={timeout}>
      <TransitionGroup
        className="container"
        childFactory={(child) =>
          React.cloneElement(child, {
            classNames,
            timeout,
          })
        }
      >
        <CSSTransition key={transitionKey} timeout={timeout} unmountOnExit>
          <MainTransitionWrapper>{children}</MainTransitionWrapper>
        </CSSTransition>
      </TransitionGroup>
    </MainTransitionGroup>
  );
};

export default MainTransition;
