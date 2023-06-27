import { useRecoilValue } from "recoil";
import { childrenListState } from "store/common";
import { CreateChildObjType } from "types/domain/my";

const useValidChildInfo = (childData: CreateChildObjType): [boolean, number] => {
  const childrenList = useRecoilValue(childrenListState);
  const validCheck = childrenList.find((child: any) => child.name === childData.name);

  if (childrenList.length >= 5) {
    return [false, 0];
  }
  if (!childData.name) {
    return [false, 1];
  }
  if (validCheck) {
    return [false, 2];
  }
  return [true, -1];
};

export default useValidChildInfo;
