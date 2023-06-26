import Cookies from "js-cookie";
import { CHILD_ID_FIELD, USER_KEY } from "constants/localStorage";
import { getUserInfo } from "queries/common/auth/useAuthMe";
import { commonQueryKeys } from "queries/common/commonQueryKeys";
import { getCommonCodeList } from "queries/common/useCommonCodeList";
import { homeQueryKeys } from "queries/domain/home/homeQueryKeys";
import { getHomeData } from "queries/domain/home/useHomeData";
import { getChildrenList } from "queries/domain/my/child/useChildrenList";
import { myQueryKeys } from "queries/domain/my/myQueryKeys";
import { useQueries } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  childrenListState,
  commonCodeState,
  selectedChildInfoState,
  selectedHomeDataState,
} from "store/common";
import { ChildType } from "types/common";
import { AuthMeResponseType } from "types/apis/common/auth";
import { HomeDataResponseType } from "types/apis/home";
import { CommonCodeItemType } from "types/apis/common";

const useGetBaseDate = () => {
  const [selectedChild, setSelectedChild] = useRecoilState(selectedChildInfoState);
  const setSelectedHomeData = useSetRecoilState(selectedHomeDataState);
  const setCommonCodeList = useSetRecoilState(commonCodeState);
  const setChildrenList = useSetRecoilState(childrenListState);

  const getBaseData = useQueries([
    {
      queryKey: myQueryKeys.userInfo,
      queryFn: () => getUserInfo(),
      onSuccess: ({ last_selected_child, id }: AuthMeResponseType) => {
        window.localStorage.setItem(CHILD_ID_FIELD, last_selected_child.toString());
        window.localStorage.setItem(USER_KEY, id.toString());
      },
      enabled: !!Cookies.get("token"),
    },
    {
      queryKey: myQueryKeys.childrenList,
      queryFn: () => getChildrenList(),
      onSuccess: (data: ChildType[]) => {
        if (data.length) {
          const id = window.localStorage.getItem(CHILD_ID_FIELD) || data[0].id.toString();
          setSelectedChild(data.filter((child: ChildType) => child.id.toString() === id)[0]);
          setChildrenList(data);
        }
      },
      enabled: !!Cookies.get("token"),
    },
    {
      queryKey: homeQueryKeys.homeData,
      queryFn: () => getHomeData(),
      onSuccess: (data: HomeDataResponseType) => {
        if (data) {
          setSelectedHomeData(data);
        }
      },
      enabled: !!selectedChild && !!window.localStorage.getItem(CHILD_ID_FIELD),
    },
    {
      queryKey: commonQueryKeys.commonCodeList,
      queryFn: () => getCommonCodeList(),
      onSuccess: (commonCodeList: CommonCodeItemType[]) => {
        const codeObj: { [key: string]: string } = {};

        if (commonCodeList.length) {
          commonCodeList.map(
            (code: { name: string; label: string }) => (codeObj[code.name] = code.label),
          );
          setCommonCodeList(codeObj);
        }
      },
      enabled: !!Cookies.get("token"),
    },
  ]);
  return getBaseData;
};

export default useGetBaseDate;
