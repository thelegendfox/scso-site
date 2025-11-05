"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldDescription,
  FieldLabel,
  Field,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AlertCircleIcon } from "lucide-react";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  JSX,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import processCaseNum from "./util/processCaseNum";
import addToAllCaseNumsString from "./util/addToAllCaseNumsString";

export default function Home(): JSX.Element {
  const [caseNum, setCaseNum] = useState("");
  const [inputNum, setInputNum] = useState(""); // This is untouched, it's the raw value from the case number input.
  const [allCaseNumsString, setAllCaseNumsString] = useState("");

  // const [reportTypes, setReportTypes] = useState({
  //   incident: { on: false, number: 0 },
  //   arrest: { on: false, number: 0 },
  //   mva: { on: false, number: 0 },
  //   citation: { on: false, number: 0 },
  // });

  const [incidentReports, setIncidentReports] = useState(0);
  const [arrestReports, setArrestReports] = useState(0);
  const [mvaReports, setMvaReports] = useState(0);
  const [citationReports, setCitationReports] = useState(0);

  const [formAlertText, setFormAlertText] = useState({
    title: "",
    description: "",
  });
  const FormAlert = (): JSX.Element => {
    if (!formAlertText.title || !formAlertText.description)
      return <span className="hidden"></span>;
    else
      return (
        <Alert>
          <AlertCircleIcon />
          <AlertTitle>{formAlertText.title}</AlertTitle>
          <AlertDescription>
            <p>{formAlertText.description}</p>
          </AlertDescription>
        </Alert>
      );
  };

  /*
  function setReportTypesEasy(
    reportType: "incident" | "arrest" | "mva" | "citation",
    setOnOrOff?: "on" | "off" | "continue",
    setNum?: number,
  ): void {
    let relatedVariable;
    if (reportType === "incident") relatedVariable = reportTypes.incident;
    else if (reportType === "arrest") relatedVariable = reportTypes.arrest;
    else if (reportType === "mva") relatedVariable = reportTypes.mva;
    else if (reportType === "citation") relatedVariable = reportTypes.citation;
    else
      throw new Error(
        'reportType must be one of "incident" "arrest" "mva" "citation"',
      );

    if (setOnOrOff === "on") relatedVariable.on = true;
    else if (setOnOrOff === "off") relatedVariable.on = false;
    // otherwise, continue with the value it had earlier (e.g. if on, leave on)

    setReportTypes({
      relatedVariable,
    });
  }
*/

  return (
    <main className="flex flex-col w-full h-full px-8 py-16 align-top justify-center min-h-screen">
      <div className="mx-auto mb-auto transition-all w-[50%]">
        <form
          action=""
          className=""
          onSubmit={(e): void => {
            e.preventDefault();
            processCaseNum(
              caseNum,
              setFormAlertText,
              setCaseNum,
              setAllCaseNumsString,
              allCaseNumsString,
            );
          }}
        >
          <FieldGroup className="w-[50%] mx-auto">
            <FieldSet>
              <FieldLegend>Case Numbers</FieldLegend>
              <FieldDescription>
                Automatically generates a new case number based on type,
                previous case number, and year
              </FieldDescription>
              <FieldGroup>
                <FormAlert />

                <FieldLabel htmlFor="lastCaseNum" className="mb-0">
                  Last Case Number
                </FieldLabel>
                <div className="flex flex-col gap-2">
                  <Input
                    id="lastCaseNum"
                    placeholder="##-####-#"
                    className="mb-0"
                    autoComplete="off"
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                      setCaseNum(e.target.value);
                      setInputNum(e.target.value);
                    }}
                  />
                  <FieldDescription className="mt-0">
                    Copy-paste the complete last case number, or write in the
                    last one manually
                  </FieldDescription>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-muted-foreground text-sm mb-auto">
                    Next Case Number(s): {allCaseNumsString}
                  </p>
                  <Button
                    variant="outline"
                    className="cursor-pointer w-min h-8 mb-auto text-muted-foreground"
                    type="button"
                    onClick={(): void => {
                      setAllCaseNumsString("");
                      setCaseNum(inputNum);
                    }}
                  >
                    Clear case numbers
                  </Button>
                </div>
              </FieldGroup>
            </FieldSet>

            <div className="flex flex-row w-full">
              <div className="flex items-center gap-3">
                <ToggleGroup type="multiple" variant="outline" size="sm">
                  <ToggleGroupItem
                    value="incident"
                    id="ToggleGroupIncident"
                    aria-label="Toggle incident"
                    className="cursor-pointer data-state-on:bg-stone-800 data-state-on:font-bold"
                    onClick={(): void =>
                      setIncidentReports(incidentReports === 0 ? 1 : 0)
                    }
                  >
                    Incident
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="arrest"
                    id="ToggleGroupArrest"
                    aria-label="Toggle arrest"
                    className="cursor-pointer data-state-on:bg-stone-800 data-state-on:font-bold"
                    onClick={(): void =>
                      setArrestReports(arrestReports === 0 ? 1 : 0)
                    }
                  >
                    Arrest
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="mva"
                    aria-label="Toggle MVAs"
                    id="ToggleGroupMVA"
                    className="cursor-pointer data-state-on:bg-stone-800 data-state-on:font-bold"
                    onClick={(): void =>
                      setMvaReports(mvaReports === 0 ? 1 : 0)
                    }
                  >
                    MVA
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="citation"
                    aria-label="Toggle citations"
                    id="ToggleGroupCitation"
                    className="cursor-pointer data-state-on:bg-stone-800 data-state-on:font-bold"
                    onClick={(): void =>
                      setCitationReports(citationReports === 0 ? 1 : 0)
                    }
                  >
                    Citation
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <Field orientation="horizontal" className="ml-auto h-8">
                <Button
                  type="submit"
                  variant="outline"
                  className="cursor-pointer ml-auto h-8"
                >
                  Copy Case Number
                </Button>
              </Field>
            </div>
          </FieldGroup>
        </form>
      </div>
    </main>
  );
}
