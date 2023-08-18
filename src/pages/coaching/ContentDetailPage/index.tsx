import EmptyBox from "components/common/EmptyBox";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import {
  ColorLight1,
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightSlate2,
  ContentsBase1626Regular,
  TextLg1826Semibold,
  TextSm1420Bold,
} from "lds-common/src/constants/tokens/global";
import { useParams } from "react-router-dom";
import * as S from "./ContentDetailPage.styled";
import { useState } from "react";
import Text from "components/common/Text";
import ActivityLevelSwitch from "components/domain/coaching/newCoachingPage/ActivityLevelSwitch";
import usePlayContentsInfo from "queries/domain/coaching/usePlayContentsInfo";
import { ContentInfoHeader } from "components/domain/coaching/newCoachingPage/ContentHeader";

import { useCallback } from "react";
import type { RemirrorJSON } from "remirror";
import { OnChangeJSON } from "@remirror/react";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";

const STORAGE_KEY = "remirror-editor-content";

const ContentDetailPage = () => {
  const { coachingId, contentId } = useParams();
  const [toggle, setToggle] = useState<boolean>(true);
  const { data: playContentsInfo } = usePlayContentsInfo(coachingId, contentId);

  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    // Store the JSON in localstorage
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
  }, []);
  return (
    <LayoutDetailPage>
      <EmptyBox height="0.8rem" backgroundColor={ColorLight1} />
      {playContentsInfo && (
        <>
          <ContentInfoHeader data={playContentsInfo} />
          <div style={{ margin: "0.6rem 2.2rem" }}>
            {playContentsInfo?.image && (
              <img src={playContentsInfo.image} style={{ width: "100%" }} />
            )}
          </div>
          <EmptyBox height="4" backgroundColor={ColorLight1} />
          <div
            className="remirror-contents"
            dangerouslySetInnerHTML={{ __html: playContentsInfo.content }}
          />
        </>
      )}
      <EmptyBox height="2.4rem" backgroundColor={ColorLight1} />
      <EmptyBox height="1rem" backgroundColor={ColorLightSlate2} />
      <EmptyBox height="3.2rem" backgroundColor={ColorLight1} />
      <S.ActivityWrapper>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          우리 아이를 위한 확장 활동
        </Text>

        <EmptyBox height="1.2rem" backgroundColor={ColorLight1} />
        <ActivityLevelSwitch toggle={toggle} handleToggle={() => setToggle(prev => !prev)} />

        <S.ActivityList>
          {toggle && playContentsInfo && (
            <>
              {JSON.parse(playContentsInfo.sub_content_hard).map((item: string, index: number) => (
                <div key={index + item}>
                  <S.ActivityItemIndex>
                    <Text variant={TextSm1420Bold} color={ColorLightBlack6}>
                      {(index + 1).toString()}
                    </Text>
                  </S.ActivityItemIndex>
                  <S.ActivityItem>
                    <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
                      {item}
                    </Text>
                  </S.ActivityItem>
                </div>
              ))}
            </>
          )}
          {!toggle && playContentsInfo && (
            <>
              {JSON.parse(playContentsInfo.sub_content_easy).map((item: string, index: number) => (
                <div key={index + item}>
                  <S.ActivityItemIndex>
                    <Text variant={TextSm1420Bold} color={ColorLightBlack6}>
                      {(index + 1).toString()}
                    </Text>
                  </S.ActivityItemIndex>
                  <S.ActivityItem>
                    <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
                      {item}
                    </Text>
                  </S.ActivityItem>
                </div>
              ))}
            </>
          )}
          {/* {LIST_ITEM.map(item => (
            <div key={item.id + item.content}>
              <S.ActivityItemIndex>
                <Text variant={TextSm1420Bold} color={ColorLightBlack6}>
                  {item.id.toString()}
                </Text>
              </S.ActivityItemIndex>
              <S.ActivityItem>
                <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
                  {item.content}
                </Text>
              </S.ActivityItem>
            </div>
          ))} */}
        </S.ActivityList>
      </S.ActivityWrapper>
    </LayoutDetailPage>
  );
};

export default ContentDetailPage;
