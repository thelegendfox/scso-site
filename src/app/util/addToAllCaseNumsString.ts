export default function addToAllCaseNumsString(
  nextCaseNum: string,
  setAllCaseNumsString: Function,
  allCaseNumsString: string,
): string | undefined {
  if (allCaseNumsString === "") {
    setAllCaseNumsString(nextCaseNum);
  } else {
    setAllCaseNumsString(`${allCaseNumsString}, ${nextCaseNum}`);
  }

  return allCaseNumsString;
}
