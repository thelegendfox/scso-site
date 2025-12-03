import fs from "node:fs";

type StatutesExport = Array<StatutesSection>;

type StatutesSection = {
  sectionName: string;
  statutes: Array<Statute>;
};
type Statute = {
  number: string;
  title: string;
  keyWords?: Array<string>;
  class?:
    | "Infraction"
    | "Misdemeanor"
    | "Felony"
    | Array<"Infraction" | "Misdemeanor" | "Felony">
    | undefined; // undefined because some of these things depend a LOT
  degree?: number | Array<number>;
  fine?: number | Array<number>; // First number is min, second max
  notes?: string;
};

/*
Regex to match (most) statutes:
([0-9]*\.[0-9]*\(?[0-9a-zA-Z\))(\s:\s)([a-zA-Z\s,\.;]*)(?=\s-)

([0-9]*\.[0-9]*\(?[0-9a-zA-Z\s,\.;]*\)*\)?)(?[\s:\s])
*/

const Infraction = "Infraction";
const Misdemeanor = "Misdemeanor";
const Felony = "Felony";

export const statutes: StatutesExport = [
  {
    sectionName: "Crimes Against People",
    statutes: [
      {
        number: "741.31",
        title: "Violation of an Injunction",
        keyWords: ["domestic", "restraining", "order", "court"],
        class: "Misdemeanor",
        degree: 1,
      },
      {
        number: "777.04",
        title: "Attempts, solicitation, and conspiracy",
        class: Misdemeanor,
        degree: [1, 2],
        notes:
          "This can be considered a Felony if the offense attempted, solicited, or conspired to is a Felony.",
      },
      {
        number: "782.071",
        title: "Vehicular Homicide",
        class: Felony,
        degree: 2,
      },
      {
        number: "782.04",
        title: "Murder",
        class: Felony,
        degree: [1, 2, 3],
      },
      {
        number: "782.051",
        title: "Attempted murder",
        class: Felony,
        degree: 1,
      },
      {
        number: "782.072",
        title: "Vessel homicide",
        class: Felony,
        degree: 1,
      },
      {
        number: "782.11",
        title: "Unnecessary killing to prevent unlawful act",
        class: Felony,
        degree: 2,
      },
      {
        number: "784.011",
        title: "Assault",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "784.021",
        title: "Aggravated Assault",
        class: Felony,
        degree: 2,
      },
      {
        number: "784.03",
        title: "Battery",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "784.03",
        title: "Felony Battery",
        class: Felony,
        degree: 3,
      },
      {
        number: "784.045",
        title: "Aggravated Battery",
        class: Felony,
        degree: 2,
      },
      {
        number: "784.041",
        title: "Domestic Battery by Strangulation",
        class: Felony,
        degree: 3,
      },
      {
        number: "784.05",
        title: "Culpable negligence",
        class: [Misdemeanor, Felony],
        degree: [1, 2, 3],
        notes:
          'The degree and class of such an offense depends on the following:\n- "Exposes another person to personal injury" => Second Degree Misdemeanor\n- "Inflicts actual personal injury on another" => First Degree Misdemeanor, "Stores or leaves a loaded firearm within the reach or easy access of a minor, if the minor obtains the firearm and uses it to inflict injury or death upon any person, including themself" => Third Degree Felony',
      },
      {
        number: "784.07",
        title:
          "Assault or battery of law enforcement officers, firefighters, emergency medical care providers, public transit employees or agents, or other specified officer",
        class: Felony,
        degree: [1, 2, 3],
        notes:
          "The degree of such an offense depends on the following:\n- Aggravated Battery/Assault => First Degree Felony\n- Felony Battery => Second Degree Felony\n- Battery/Assault => Third Degree Felony",
      },
      {
        number: "787.01",
        title: "Kidnapping",
        class: Felony,
        degree: 1,
      },
      {
        number: "787.02",
        title: "False Imprisonment",
        class: Felony,
        degree: 3,
      },

      {
        number: "836.12(2)(a)",
        title: "Threats",
        class: [Misdemeanor, Felony],
        degree: [1, 3],
        notes:
          "The degree and class of such an offense depends on the following:\n- First Offense => First Degree Misdemeanor\n- Second Offense or More => Third Degree Felony\nThis only includes law enforcement officers, state attorneys and their assistants, firefighters, judges, justices, judicial assistants, court clerks, clerk personnel, elected officials, or the family of any such person, with threats of serious bodily harm.",
      },
      {
        number: "836.12(3)",
        title: "Harassment",
        class: [Misdemeanor],
        degree: 1,
        notes:
          "This only includes law enforcement officers, state attorneys and their assistants, firefighters, judges, justices, judicial assistants, court clerks, clerk personnel, elected officials, or the family of any such person, with threats of serious bodily harm.",
      },
    ],
  },
  {
    sectionName: "Crimes Against Property",
    statutes: [
      {
        number: "806.01",
        title: "Arson",
        class: [Felony],
        degree: 1,
      },
      {
        number: "806.031",
        title: "Arson resulting in injury to another",
        class: [Misdemeanor, Felony],
        degree: [1, 2],
        notes:
          "The degree and class of such an offense depends on the following:\n- Any arson that results to any bodily harm to any person => First Degree Misdemeanor\n- Any arson that results in great bodily harm, permanent disability, or permanent disfigurement => Second Degree Felony",
      },
      {
        number: "806.101",
        title: "False alarms of fires",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "806.10",
        title: "Preventing or obstructing extinguishment of fire",
        class: Felony,
        degree: 3,
      },
      {
        number: "806.13",
        title: "Criminal mischief",
        class: [Misdemeanor, Felony],
        degree: [1, 2, 3],
        notes:
          "The degree and class of such an offense depends on the following:\n- $200 or less => Second Degree Misdemeanor\n- $200-$1,000 => First Degree Misdemeanor\n- $1,000+ => Third Degree Felony",
      },
      {
        number: "810.02",
        title: "Burglary",
        class: Felony,
        degree: 3,
      },
      {
        number: "810.02(3A)",
        title: "Occupied Burglary",
        class: Felony,
        degree: 2,
      },
      {
        number: "810.02(2B)",
        title: "Armed Burglary",
        class: Felony,
        degree: 1,
      },
      {
        number: "810.06",
        title: "Possession of burglary tools",
        class: Felony,
        degree: 3,
      },
      {
        number: "810.08",
        title: "Trespass in structure or conveyance",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "810.09",
        title: "Trespassing on property while armed",
        class: Felony,
        degree: 3,
      },
      {
        number: "812.014",
        title: "Theft",
        class: Misdemeanor,
        degree: 3,
      },
      {
        number: "812.014(4C)",
        title: "Grand Theft",
        class: Felony,
        degree: 1,
      },
      {
        number: "812.014(2)",
        title: "Grand Theft Auto",
        class: Felony,
        degree: 3,
      },
      {
        number: "812.13 ",
        title: "Robbery",
        class: Felony,
        degree: 3,
      },
      {
        number: "812.131",
        title: "Robbery by sudden snatching",
        class: Felony,
        degree: 3,
      },
      {
        number: "812.133",
        title: "Carjacking",
        class: Felony,
        degree: 3,
      },
      {
        number: "817.234",
        title: "False and fraudulent insurance claims",
        class: Felony,
        degree: 3,
      },
    ],
  },
  {
    sectionName: "Vehicle Code",
    statutes: [
      {
        number: "315.1515",
        title: "Prohibit U-turn",
        class: Infraction,
        fine: 100,
      },
      {
        number: "316.061",
        title: "Hit and Run resulting in no injuries",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "316.027",
        title: "Hit and Run resulting in injury",
        class: Felony,
        degree: 3,
      },
      {
        number: "316.220",
        title: "Headlamps on motor vehicles",
        class: Infraction,
        fine: 30,
      },
      {
        number: "316.646(4)",
        title: "Operating a vehicle without proper insurance",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "316.605",
        title: "Improper Display (Plate)",
        class: Misdemeanor,
        degree: 2,
        fine: 500,
      },
      {
        number: "316.614",
        title: "Lack of Safety Belt Usage",
        class: Infraction,
        fine: 50,
      },
      {
        number: "316.085(2)",
        title: "Improper change of lane",
        class: Infraction,
        fine: 150,
      },
      {
        number: "316.1935(1)",
        title: "Fleeing or attempting to elude a law enforcement officer",
        class: Felony,
        degree: 3,
      },
      {
        number: "316.1935(3A)",
        title:
          "Fleeing or attempting to elude a law enforcement officer with disregard of safety of others",
        class: Felony,
        degree: 2,
      },
      {
        number: "316.1935(4A)",
        title:
          "Fleeing or attempting to elude a law enforcement officer causing injury to person or property damage",
        class: Felony,
        degree: 1,
      },
      {
        number: "316.075(1C)",
        title: "Failure to stop at a steady red signal",
        class: Infraction,
        fine: 164, // why so specific? idk
      },
      {
        number: "316.075(1C)",
        title:
          "Failure to stop at a steady red signal before making right turn",
        class: Infraction,
        fine: 164,
      },
      {
        number: "316.123(2A)",
        title: "Failure to come to a complete stop at a stop sign",
        class: Infraction,
        fine: 164,
      },
      {
        number: "316.074(2)",
        title: "Obedience to and required traffic control devices",
        class: Infraction,
        fine: 500,
        notes:
          "This specificially includes driving from a roadway to another roadway to avoid obeying a traffic control device, e.g. driving into a parking lot to avoid a red light.",
      },
      {
        number: "316.0895",
        title: "Following too closely",
        class: Infraction,
        fine: 110,
        notes: "This does not apply to funeral processions.",
      },
      {
        number: "316.089",
        title: "Failure to Maintain Lanes",
        class: Infraction,
        fine: 100,
      },
      {
        number: "316.183",
        title: "Unlawful speed",
        class: Infraction,
        fine: [25, 250],
        notes:
          "Warnings shall be issued on 1-5 mph infractions. If an infraction of over 5 mph is viewed in a school zone or other reduced speed area, the fine is increased to $50. In any circumstance where the violation is 6+ mph over, the violation must result in a doubling of the fine.",
      },
      {
        number: "316.183(5)",
        title: "Impeding the flow of traffic",
        class: Infraction,
        fine: 30,
      },
      {
        number: "316.2015",
        title: "Unlawful for person to ride on exterior of vehicle",
        class: Infraction,
        fine: 100,
      },
      {
        number: "316.123(1)",
        title: "Too fast for conditions",
        class: Infraction,
        fine: 150,
      },
      {
        number: "316.191",
        title: "Racing on highways",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "316.192",
        title: "Reckless driving",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "316.1925",
        title: "Careless driving",
        class: Misdemeanor,
        degree: 1,
        fine: 50,
      },
      {
        number: "316.1936",
        title:
          "Possession of open containers of alcoholic beverage in vehicles",
        class: Misdemeanor,
        degree: 3,
      },
      {
        number: "316.193",
        title: "Driving under the influence [First - Second offense]",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "316.193(1-2)",
        title: "Driving under the influence [Third - Fourth offense]",
        class: Felony,
        degree: 3,
      },
      {
        number: "316.193(3)(C)(3)",
        title: "DUI Manslaughter",
        class: Felony,
        degree: 1,
      },
      {
        number: "316.1939(1E)",
        title: "Refusal to submit to testing",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "316.0875(1)",
        title: "Passing in no passing zone",
        class: Infraction,
        fine: 125,
      },
      {
        number: "316.084",
        title: "Improper Passing",
        class: Infraction,
        fine: 125,
      },
      {
        number: "316.0895(1)",
        title: "Following too closely",
        class: Infraction,
        fine: 60,
      },
      {
        number: "316.151",
        title: "Required position and method of turning at intersections",
        class: Infraction,
        fine: [25, 150],
        notes: "Unspecified fine amount.",
      },
      {
        number: "316.1515",
        title: "Limitations on turning around",
        class: Infraction,
        fine: [25, 150],
        notes: "Unspecified fine amount.",
      },
      {
        number: "316.195(1)",
        title: "Improper parking on two-way roadway",
        class: Infraction,
        fine: 30,
      },
      {
        number: "316.195(2)",
        title: "Improper parking against/flow curb or one way traffic",
        class: Infraction,
        fine: 60,
      },
      {
        number: "320.02(1)",
        title: "No motor vehicle registration",
        class: Misdemeanor,
        fine: 60,
      },
      {
        number: "320.061",
        title:
          "Unlawful to alter motor vehicle registration certificates, license plates, temporary license plates, mobile home stickers, or validation stickers or to obscure license plates",
        class: Infraction,
        fine: 100,
      },
      {
        number: "320.261",
        title: "Attaching registration license plate not assigned unlawful",
        class: Misdemeanor,
        degree: 2,
        fine: 60,
      },
      {
        number: "322.03",
        title: "No Valid Driver's License",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "322.03(1B)",
        title: "Having more than 1 Florida driver's license",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "322.03(4)",
        title: "Operating a motorcycle without a valid endorsement",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "322.065",
        title: "Driver's license expired for 6 months or less",
        class: Infraction,
        fine: 500,
      },
      {
        number: "322.03(5)",
        title: "Driver's license expired for 6 months or more",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "322.15(1)",
        title: "DL not carried, exhibited on demand", // driver's license
        class: Infraction,
        fine: 30,
      },
      {
        number: "322.34(1)",
        title:
          "Unknowingly operating a motor vehicle on DL suspended or revoked",
        class: Infraction,
        fine: 500,
      },
      {
        number: "322.34(2)",
        title: "Knowingly operating a motor vehicle on DL suspended or revoked",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "327.33",
        title: "Reckless or careless operation of vessel",
        class: Misdemeanor,
        degree: 1,
      },
    ],
  },
  {
    sectionName: "Possession of Deadly Weapons and Equipment",
    statutes: [
      {
        number: "790.09",
        title: "Manufacturing or selling metallic knuckles",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "790.10",
        title: "Improper exhibition of dangerous weapons or firearms",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "790.161",
        title:
          "Making, possessing, throwing, projecting, placing, or discharging any destructive device or attempt so to do",
        class: Felony,
        degree: 3,
      },
      {
        number: "790.151",
        title:
          "Using firearm while under the influence of alcoholic beverages, chemical substances, or controlled substances",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "790.15",
        title: "Discharging firearm in public or on residential property",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "790.065",
        title: "Sale and delivery of firearms",
        class: Felony,
        degree: 3,
      },
      {
        number: "790.053",
        title: "Open carrying of weapons",
        class: Misdemeanor,
        degree: 2,
        notes:
          'It is only illegal to open carry a firearm at: a "place of nuisance", police station, detention facility, courthouse (except for a judge, and except with the judge\'s approval), a polling place, a meeting place of a governing body, a school, a career center, a bar (or otherwise alcoholic-based facility), a sterile area or passenger terminal of an airport, or any place where the carrying of firearms is prohibited by federal law.',
      },
      {
        number: "790.163",
        title:
          "False report concerning planting a bomb, an explosive, or a weapon of mass destruction, or concerning the use of firearms in a violent manner",
        class: Felony,
        degree: 2,
      },
      {
        number: "790.17",
        title:
          "Furnishing weapons to minors under 18 years of age or persons of unsound mind and furnishing firearms to minors under 18 years of age",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "790.18",
        title: "Sale or transfer of arms to minors by dealers",
        class: Felony,
        degree: 2,
      },
      {
        number: "790.23",
        title:
          "Felons and delinquents; possession of firearms, ammunition, or electric weapons or devices",
        class: Felony,
        degree: 1,
      },
      {
        number: "790.233",
        title:
          "Possession of firearm or ammunition prohibited when person is subject to an injunction against committing acts of domestic violence, stalking, or cyberstalking;",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "790.27",
        title:
          "Alteration or removal of firearm serial number or possession, sale, or delivery of firearm with serial number altered or removed",
        class: Felony,
        degree: 3,
      },
    ],
  },
  {
    sectionName: "Crimes Against the State",
    statutes: [
      {
        number: "316.072(3)",
        title: "Failure to Comply with a Lawful Order",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "817.311",
        title: "Unlawful use of badges",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "817.312",
        title: "Unlawful use of uniforms, medals, or insignia",
        keyWords: ["stolen", "valor"],
        class: Felony,
        degree: 3,
      },
      {
        number: "817.5685",
        title:
          "Unlawful possession of the personal identification information of another person",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "837.05",
        title: "False reports to law enforcement authorities",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "837.055",
        title: "False information to law enforcement during investigation",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "838.015",
        title: "Bribery",
        class: Felony,
        degree: 2,
      },
      {
        number: "843.01",
        title: "Resisting officer with violence to his or her person",
        class: Felony,
        degree: 3,
      },
      {
        number: "843.02",
        title: "Resisting officer without violence to his or her person",
        class: Felony,
        degree: 1,
      },
      {
        number: "843.08",
        title: "False personation",
        keyWords: ["impersonation", "fake"],
        class: Felony,
        degree: 1,
      },
      {
        number: "843.081",
        title: "Prohibited use of certain lights",
        keyWords: ["impersonation", "fake"],
        class: Misdemeanor,
        degree: 1,
        fine: 150,
      },
      {
        number: "856.011",
        title: "Disorderly intoxication",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "859.01",
        title: "Poisoning food or water",
        class: Felony,
        degree: 1,
      },
      {
        number: "861.01",
        title: "Obstructing highway",
        class: Misdemeanor,
        degree: 1,
      },
      {
        number: "860.09",
        title: "Interfering with railroad tracks or equipment",
        class: Felony,
        degree: 3,
      },
      {
        number: "870.02",
        title: "Unlawful assemblies",
        class: Misdemeanor,
        degree: 2,
        notes:
          'This specifically mentions "coming together to commit a breach of the peace or to do any other unlawful act."',
      },
      {
        number: "870.03",
        title: "Riots and routs",
        class: Felony,
        degree: 3,
      },
      {
        number: "877.03",
        title: "Breach of the peace; disorderly conduct",
        class: Misdemeanor,
        degree: 2,
      },
      {
        number: "876.12",
        title: "Wearing mask, hood, or other device on public way",
        class: Misdemeanor,
        degree: 3,
        notes: "The person must be over 16.",
      },
    ],
  },
];
export default statutes;

fs.writeFile("./floridaStatutes.json", JSON.stringify(statutes), console.log);

/*},
{
number: "741.31",
title: "Violation of an Injunction",},
{
number: "777.04",
title: "Attempts, solicitation, and conspiracy",},
{
number: "782.071",
title: "Vehicular Homicide",},
{
number: "782.04",
title: "Murder",},
{
number: "782.051",
title: "Attempted murder",},
{
number: "782.072",
title: "Vessel homicide",},
{
number: "782.11",
title: "Unnecessary killing to prevent unlawful act",},
{
number: "784.011",
title: "Assault",},
{
number: "784.021",
title: "Aggravated Assault",},
{
number: "784.03",
title: "Battery",},
{
number: "784.03",
title: "Felony Battery",},
{
number: "784.045",
title: "Aggravated Battery",},
{
number: "784.041",
title: "Domestic Battery by Strangulation",},
{
number: "784.05",
title: "Culpable negligence",},
{
number: "784.07",
title: "Assault or battery of law enforcement officers, firefighters, emergency medical care providers, public transit employees or agents, or other specified officer",},
{
number: "787.01",
title: "Kidnapping",},
{
number: "787.02",
title: "False Imprisonment",

836.12(2)(a) : Threats{
number: "836.12(3)",
title: "Harassment",},
{
number: "806.01",
title: "Arson",},
{
number: "806.031",
title: "Arson resulting in injury to another",},
{
number: "806.101",
title: "False alarms of fires",},
{
number: "806.10",
title: "Preventing or obstructing extinguishment of fire",},
{
number: "806.13",
title: "Criminal mischief",},
{
number: "810.02",
title: "Burglary",},
{
number: "810.02(3A)",
title: "Occupied Burglary",},
{
number: "810.02(2B)",
title: "Armed Burglary",},
{
number: "810.06",
title: "Possession of burglary tools",},
{
number: "810.08",
title: "Trespass in structure or conveyance",},
{
number: "810.09",
title: "Trespassing on property while armed",},
{
number: "812.014",
title: "Theft",},
{
number: "812.014(4C)",
title: "Grand Theft",},
{
number: "812.014(2)",
title: "Grand Theft Auto",},
{
number: "812.13 ",
title: "Robbery",},
{
number: "812.131",
title: "Robbery by sudden snatching",},
{
number: "812.133",
title: "Carjacking",},
{
number: "817.234",
title: "False and fraudulent insurance claims",},
{
number: "316.061",
title: "Hit and Run resulting in no injuries",},
{
number: "316.027",
title: "Hit and Run resulting in injury",},
{
number: "316.220",
title: "Headlamps on motor vehicles",},
{
number: "316.646(4)",
title: "Operating a vehicle without proper insurance",},
{
number: "316.605",
title: "Improper Display (Plate)",},
{
number: "316.614",
title: "Lack of Safety Belt Usage",},
{
number: "316.085(2)",
title: "Improper change of lane",},
{
number: "316.1935(1)",
title: "Fleeing or attempting to elude a law enforcement officer",},
{
number: "316.1935(3A)",
title: "Fleeing or attempting to elude a law enforcement officer with disregard of safety of others",},
{
number: "316.1935(4A)",
title: "Fleeing or attempting to elude a law enforcement officer causing injury to person or property damage",},
{
number: "316.075(1C)",
title: "Failure to stop at a steady red signal",},
{
number: "316.075(1C)",
title: "Failure to stop at a steady red signal before making right turn",},
{
number: "316.123(2A)",
title: "Failure to come to a complete stop at a stop sign",},
{
number: "316.074(2)",
title: "Obedience to and required traffic control devices",},
{
number: "316.0895",
title: "Following too closely ",},
{
number: "316.089",
title: "Failure to Maintain Lanes",},
{
number: "316.183",
title: "Unlawful speed",},
{
number: "316.183(5)",
title: "Impeding the flow of traffic",},
{
number: "316.2015"
title: "Unlawful for person to ride on exterior of vehicle"},
{
number: "316.123(1)",
title: "Too fast for conditions",},
{
number: "316.191",
title: "Racing on highways",},
{
number: "316.192",
title: "Reckless driving",},
{
number: "316.1925",
title: "Careless driving",},
{
number: "316.193(3)(C)(3)",
title: "DUI Manslaughter",},
{
number: "316.1939(1E)",
title: "Refusal to submit to testing",},
{
number: "316.0875(1)",
title: "Passing in no passing zone",},
{
number: "316.084",
title: "Improper Passing",},
{
number: "316.0895(1)", 
title: "Following too closely"},
{
number: "320.02(1)",
title: "No motor vehicle registration",},
{
number: "320.061",
title: "Unlawful to alter motor vehicle registration certificates, license plates, temporary license plates, mobile home stickers, or validation stickers or to obscure license plates",},
{
number: "320.261",
title: "Attaching registration license plate not assigned unlawful",},
{
number: "322.03(4)",
title: "Operating a motorcycle without a valid endorsement",},
{
number: "322.15(1)",
title: "DL not carried, exhibited on demand", // driver's license},
{
number: "322.34(1)",
title: "Unknowingly operating a motor vehicle on DL suspended or revoked",},
{
number: "322.34(2)",
title: "Knowingly operating a motor vehicle on DL suspended or revoked",},
{
number: "327.33",
title: "Reckless or careless operation of vessel",},
{
number: "790.09",
title: "Manufacturing or selling metallic knuckles",},
{
number: "790.10",
title: "Improper exhibition of dangerous weapons or firearms",},
{
number: "790.161",
title: "Making, possessing, throwing, projecting, placing, or discharging any destructive device or attempt so to do",},
{
number: "790.151",
title: "Using firearm while under the influence of alcoholic beverages, chemical substances, or controlled substances",},
{
number: "790.15",
title: "Discharging firearm in public or on residential property",},
{
number: "790.065",
title: "Sale and delivery of firearms",},
{
number: "790.053",
title: "Open carrying of weapons",},
{
number: "790.163",
title: "False report concerning planting a bomb, an explosive, or a weapon of mass destruction, or concerning the use of firearms in a violent manner",},
{
number: "790.17",
title: "Furnishing weapons to minors under 18 years of age or persons of unsound mind and furnishing firearms to minors under 18 years of age"},
{
number: "790.18",
title: "Sale or transfer of arms to minors by dealers",},
{
number: "790.23",
title: "Felons and delinquents; possession of firearms, ammunition, or electric weapons or devices",},
{
number: "790.233",
title: "Possession of firearm or ammunition prohibited when person is subject to an injunction against committing acts of domestic violence, stalking, or cyberstalking;",},
{
number: "790.27",
title: "Alteration or removal of firearm serial number or possession, sale, or delivery of firearm with serial number altered or removed",},
{
number: "316.072(3)",
title: "Failure to Comply with a Lawful Order",},
{
number: "817.311",
title: "Unlawful use of badges",},
{
number: "817.312",
title: "Unlawful use of uniforms, medals, or insignia",},
{
number: "817.5685",
title: "Unlawful possession of the personal identification information of another person",},
{
number: "837.05",
title: "False reports to law enforcement authorities",},
{
number: "837.055",
title: "False information to law enforcement during investigation",},
{
number: "838.015",
title: "Bribery",},
{
number: "843.01",
title: "Resisting officer with violence to his or her person",},
{
number: "843.02",
title: "Resisting officer without violence to his or her person",},
{
number: "843.08",
title: "False personation",},
{
number: "843.081",
title: "Prohibited use of certain lights",},
{
number: "856.011",
title: "Disorderly intoxication",},
{
number: "859.01",
title: "Poisoning food or water",},
{
number: "861.01",
title: "Obstructing highway",},
{
number: "860.09",
title: "Interfering with railroad tracks or equipment",},
{
number: "870.02",
title: "Unlawful assemblies",},
{
number: "870.03",
title: "Riots and routs",},
{
number: "877.03",
title: "Breach of the peace; disorderly conduct",},
{
number: "876.12",
title: "Wearing mask, hood, or other device on public way",
}

*/
