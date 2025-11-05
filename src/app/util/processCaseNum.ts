import { Dispatch, SetStateAction } from "react";
import addToAllCaseNumsString from "./addToAllCaseNumsString";

export default function processCaseNum(
  caseNum: string,
  setFormAlertText: Dispatch<
    SetStateAction<{ title: string; description: string }>
  >,
  setCaseNum: Function,
  setAllCaseNumsString: Function,
  allCaseNumsString: string,
): void {
  //
  const caseNumMatch = caseNum
    .trim()
    .match("(?<=[0-9]{2}-)[0-9]{4}(?=-[a-zA-Z])");

  if (!caseNumMatch) {
    setFormAlertText({
      title: "Could not match case number",
      description:
        "Please make sure the case number matches the proper format.",
    });
    return;
  }

  setFormAlertText({ title: "", description: "" });
  const BASE_10 = 10;

  const year = new Date().getFullYear().toString().slice(-2);
  const newCaseNum = (Number.parseInt(caseNumMatch[0], BASE_10) + 1)
    .toString()
    .padStart(4, "0");

  const caseType = "A"; // future: make interactable with the selects below

  const finalCaseNumber = `${year}-${newCaseNum}-${caseType}`;

  addToAllCaseNumsString(
    finalCaseNumber,
    setAllCaseNumsString,
    allCaseNumsString,
  );
  navigator.clipboard
    .writeText(finalCaseNumber)
    .then(() => {
      alert("Copied"); // future: add sonnet to display copied-to-clipboard
    })
    .catch((reason) => {
      setFormAlertText({
        title: "Could not copy case number to clipboard",
        description: `Your case number could not be copied to your clipboard. You can manually copy-paste it here: ${finalCaseNumber}
          Reason case number could not be copied: ${reason}`,
      });
    });

  setCaseNum(finalCaseNumber); // At bottom because it's too slow
}
