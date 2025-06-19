// src/utils/mockUsers.ts
import type { User } from "../types";

const firstNames = [
  // Yoruba names
  "Adebayo",
  "Folake",
  "Olumide",
  "Bukola",
  "Tunde",
  "Kemi",
  "Segun",
  "Yemi",
  "Femi",
  "Bisi",
  "Adunni",
  "Kunle",
  "Toyin",
  "Dupe",
  "Lanre",
  "Shade",
  "Wale",
  "Funmi",
  "Dele",
  "Ronke",
  "Adebola",
  "Taiwo",
  "Kehinde",
  "Temitope",
  "Ayodeji",
  "Adedayo",
  "Olamide",
  "Bolaji",
  "Damilola",
  "Abimbola",

  // Igbo names
  "Chinedu",
  "Ngozi",
  "Emeka",
  "Adaeze",
  "Kelechi",
  "Chioma",
  "Ikechukwu",
  "Nneka",
  "Obinna",
  "Uchechi",
  "Chukwuma",
  "Chinwe",
  "Okechukwu",
  "Adaugo",
  "Chibueze",
  "Amaka",
  "Nnamdi",
  "Ifeoma",
  "Chidi",
  "Obioma",
  "Chiamaka",
  "Chukwuemeka",
  "Ifeanyi",
  "Chinyere",
  "Somtochukwu",
  "Oluchukwu",
  "Chimamanda",
  "Ebere",
  "Chidimma",
  "Kamsiyochi",

  // Hausa names
  "Ibrahim",
  "Aisha",
  "Musa",
  "Fatima",
  "Usman",
  "Hauwa",
  "Sani",
  "Zainab",
  "Ahmad",
  "Safiya",
  "Aliyu",
  "Hadiza",
  "Garba",
  "Rakiya",
  "Kabiru",
  "Amina",
  "Ismail",
  "Maryam",
  "Abdullahi",
  "Khadija",
  "Mohammed",
  "Halima",
  "Yusuf",
  "Nafisa",
  "Hassan",
  "Habiba",
  "Idris",
  "Jamila",
  "Bashir",
  "Zahra",

  // English/International names common in Nigeria
  "Michael",
  "Grace",
  "David",
  "Mary",
  "John",
  "Faith",
  "Peter",
  "Joy",
  "Paul",
  "Peace",
  "Daniel",
  "Love",
  "James",
  "Mercy",
  "Samuel",
  "Blessing",
  "Joseph",
  "Hope",
  "Benjamin",
  "Patience",
  "Victor",
  "Precious",
  "Emmanuel",
  "Gift",
  "Anthony",
  "Favour",
  "Philip",
  "Goodness",
  "Francis",
  "Rejoice",
];

const lastNames = [
  // Yoruba surnames
  "Adebayo",
  "Ogundimu",
  "Olaniyan",
  "Adeyemi",
  "Ogundipe",
  "Adebisi",
  "Oladele",
  "Adesanya",
  "Ogbonna",
  "Adeniyi",
  "Oyedepo",
  "Adeyeye",
  "Ogunleye",
  "Adebambo",
  "Ogunjobi",
  "Adeyinka",
  "Ogundiran",
  "Adeosun",
  "Ogunwale",
  "Adeoye",
  "Adetunji",
  "Olumuyiwa",
  "Adebanjo",
  "Oguntoyinbo",
  "Adedeji",
  "Ogunbiyi",
  "Adeleke",
  "Oguntimehin",
  "Adegbite",
  "Ogunmola",

  // Igbo surnames
  "Okafor",
  "Okonkwo",
  "Eze",
  "Okoro",
  "Nwankwo",
  "Igwe",
  "Okwu",
  "Nwosu",
  "Chukwu",
  "Obi",
  "Anyanwu",
  "Nwachukwu",
  "Okeke",
  "Onyeka",
  "Nwokolo",
  "Ikechukwu",
  "Nnaji",
  "Oguike",
  "Okorie",
  "Nwokoye",
  "Ugochukwu",
  "Ezeani",
  "Onwudiwe",
  "Nwagwu",
  "Emecheta",
  "Azubuike",
  "Okafoagu",
  "Chukwunyere",
  "Obiekezie",
  "Nwaogu",

  // Hausa surnames
  "Ibrahim",
  "Musa",
  "Aliyu",
  "Usman",
  "Garba",
  "Sani",
  "Ahmad",
  "Kabir",
  "Ismail",
  "Abdullahi",
  "Mohammed",
  "Hassan",
  "Yusuf",
  "Haruna",
  "Bello",
  "Shehu",
  "Bala",
  "Muktar",
  "Lawal",
  "Dahiru",
  "Babangida",
  "Adamu",
  "Mamman",
  "Tijjani",
  "Muhammed",
  "Auwal",
  "Danjuma",
  "Tanko",
  "Salisu",
  "Rabiu",

  // English/International surnames common in Nigeria
  "Williams",
  "Johnson",
  "Brown",
  "Davies",
  "Thompson",
  "Wilson",
  "Jackson",
  "Robinson",
  "Anderson",
  "Thomas",
  "Smith",
  "Jones",
  "Taylor",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Lewis",
  "Lee",
  "Walker",
];

const organizations = [
  "Lendsqr",
  "Irorun",
  "Lendstar",
  "Paystack",
  "Flutterwave",
  "Kuda Bank",
  "Carbon",
  "Fairmoney",
  "Branch",
  "PalmPay",
  "Opay",
  "Moniepoint",
  "Cowrywise",
  "PiggyVest",
  "Bamboo",
  "Risevest",
  "Interswitch",
  "SystemSpecs",
  "TeamApt",
  "Piggyvest",
  "Renmoney",
  "Quickteller",
  "Paga",
  "Etranzact",
];

const statuses: User["status"][] = [
  "Active",
  "Inactive",
  "Pending",
  "Blacklisted",
];

const educationLevels = [
  "SSCE",
  "WAEC",
  "NECO",
  "ND",
  "NCE",
  "HND",
  "B.Sc",
  "B.A",
  "B.Tech",
  "B.Eng",
  "M.Sc",
  "M.A",
  "MBA",
  "Ph.D",
];

const employmentSectors = [
  "FinTech",
  "Banking",
  "Healthcare",
  "Education",
  "Agriculture",
  "Oil & Gas",
  "Telecommunications",
  "Real Estate",
  "Manufacturing",
  "Retail",
  "Transportation",
  "Construction",
  "Entertainment",
  "Government",
  "NGO",
  "Consulting",
  "Technology",
  "Media",
  "Fashion",
  "Food & Beverage",
  "Insurance",
  "Aviation",
  "Maritime",
  "Mining",
  "Energy",
  "Hospitality",
  "Sports",
  "Arts",
];

const nigerianStates = [
  "Lagos",
  "Abuja",
  "Kano",
  "Ibadan",
  "Port Harcourt",
  "Benin City",
  "Maiduguri",
  "Zaria",
  "Aba",
  "Jos",
  "Ilorin",
  "Oyo",
  "Enugu",
  "Abeokuta",
  "Kaduna",
  "Warri",
  "Sokoto",
  "Calabar",
  "Akure",
  "Owerri",
  "Bauchi",
  "Katsina",
  "Gombe",
  "Minna",
  "Uyo",
  "Yenagoa",
  "Lokoja",
  "Osogbo",
  "Awka",
  "Asaba",
  "Makurdi",
  "Lafia",
  "Jalingo",
  "Yola",
  "Birnin Kebbi",
  "Dutse",
  "Damaturu",
  "Gusau",
];

const streetNames = [
  "Allen Avenue",
  "Victoria Island",
  "Ikoyi Road",
  "Lekki Phase 1",
  "Gbagada Estate",
  "Surulere Street",
  "Ikeja GRA",
  "Apapa Road",
  "Festac Town",
  "Magodo Estate",
  "Ojodu Berger",
  "Yaba College Road",
  "Maryland Estate",
  "Ogba Road",
  "Isolo Street",
  "Alaba Market Road",
  "Ojo Cantonment",
  "Badagry Road",
  "Ikorodu Road",
  "Agege Motor Road",
  "Independence Layout",
  "New Haven",
  "Trans Ekulu",
  "Awka Road",
  "Aba Road",
  "Port Harcourt Road",
  "Warri Street",
  "Sapele Road",
  "Benin-Ore Road",
  "Auchi Road",
  "Garki District",
  "Wuse Zone",
  "Maitama District",
  "Asokoro District",
  "Guzape District",
  "Jabi District",
];

const emailDomains = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "proton.com",
];
const companyDomains = [
  "company.com",
  "corp.ng",
  "bus.com.ng",
  "ente.ng",
  "firm.com",
  "group.ng",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePhoneNumber(): string {
  const prefixes = [
    "0701",
    "0702",
    "0703",
    "0704",
    "0705",
    "0706",
    "0708",
    "0709",
    "0801",
    "0802",
    "0803",
    "0804",
    "0805",
    "0806",
    "0807",
    "0808",
    "0809",
    "0810",
    "0811",
    "0812",
    "0813",
    "0814",
    "0815",
    "0816",
    "0817",
    "0818",
    "0819",
    "0901",
    "0902",
    "0903",
    "0904",
    "0905",
    "0906",
    "0907",
    "0908",
    "0909",
    "0915",
    "0916",
    "0917",
    "0918",
  ];

  const prefix = getRandomItem(prefixes).slice(0);
  const lineNumber = Math.floor(1000000 + Math.random() * 9000000).toString();

  return `${prefix}${lineNumber}`;
}

function generateBVN(): string {
  return `${Math.floor(10000000000 + Math.random() * 89999999999)}`;
}

function generateAccountNumber(): string {
  return `${Math.floor(1000000000 + Math.random() * 8999999999)}`;
}

function generateRealisticDate(): string {
  const year = 2019 + Math.floor(Math.random() * 6); // 2019-2024
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(year, month, day).toISOString().split("T")[0];
}

function generateAccountBalance(): string {
  const ranges = [
    { min: 0, max: 50000, weight: 30 }, // Low balance users
    { min: 50000, max: 200000, weight: 25 }, // Medium-low
    { min: 200000, max: 500000, weight: 20 }, // Medium
    { min: 500000, max: 1000000, weight: 15 }, // Medium-high
    { min: 1000000, max: 5000000, weight: 10 }, // High balance users
  ];

  const totalWeight = ranges.reduce((sum, range) => sum + range.weight, 0);
  let random = Math.random() * totalWeight;

  for (const range of ranges) {
    random -= range.weight;
    if (random <= 0) {
      const balance = range.min + Math.random() * (range.max - range.min);
      return `₦${balance.toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
  }

  return `₦${(Math.random() * 1000000).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function generateMonthlyIncome(employmentStatus: string): [string, string] {
  if (employmentStatus === "Unemployed") {
    return ["₦0.00", "₦0.00"];
  }

  const baseSalary = 80000 + Math.random() * 920000; // 80k to 1M base
  const minIncome = baseSalary;
  const maxIncome = baseSalary + Math.random() * baseSalary * 0.5; // up to 50% variation

  return [
    `₦${minIncome.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
    `₦${maxIncome.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
  ];
}

function generateLoanRepayment(): string {
  if (Math.random() > 0.6) return "₦0"; // 40% have loans
  const repayment = 10000 + Math.random() * 140000; // 10k to 150k
  return `₦${repayment.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;
}

function getMatchingGender(firstName: string): "Male" | "Female" {
  const femaleNames = [
    "Folake",
    "Bukola",
    "Kemi",
    "Yemi",
    "Bisi",
    "Adunni",
    "Toyin",
    "Dupe",
    "Shade",
    "Funmi",
    "Ronke",
    "Adebola",
    "Ngozi",
    "Adaeze",
    "Chioma",
    "Nneka",
    "Uchechi",
    "Chinwe",
    "Adaugo",
    "Amaka",
    "Ifeoma",
    "Obioma",
    "Chiamaka",
    "Chinyere",
    "Ebere",
    "Chidimma",
    "Aisha",
    "Fatima",
    "Hauwa",
    "Zainab",
    "Safiya",
    "Hadiza",
    "Rakiya",
    "Amina",
    "Maryam",
    "Khadija",
    "Halima",
    "Nafisa",
    "Habiba",
    "Jamila",
    "Zahra",
    "Grace",
    "Mary",
    "Faith",
    "Joy",
    "Peace",
    "Love",
    "Mercy",
    "Blessing",
    "Hope",
    "Patience",
    "Precious",
    "Gift",
    "Favour",
    "Goodness",
    "Rejoice",
  ];

  return femaleNames.includes(firstName) ? "Female" : "Male";
}

function generateUserName(
  firstName: string,
  lastName: string,
  index: number
): string {
  const patterns = [
    `${firstName.toLowerCase()}${lastName.toLowerCase()}${index}`,
    `${firstName.toLowerCase()}${lastName.toLowerCase()}${index}${Math.floor(
      Math.random() * 99
    )}`,
    `${firstName
      .toLowerCase()
      .substring(0, 3)}${lastName.toLowerCase()}${index}`,
    `${firstName.toLowerCase()}${lastName
      .toLowerCase()
      .substring(0, 3)}${index}`,
    `${firstName.toLowerCase()}_${lastName.toLowerCase()}${index}`,
    `${firstName
      .toLowerCase()
      .charAt(0)}${lastName.toLowerCase()}${index}${Math.floor(
      Math.random() * 999
    )}`,
  ];

  return getRandomItem(patterns).replace(/\s+/g, "");
}

export const generateMockUsers = (): User[] => {
  const users: User[] = [];

  for (let i = 1; i <= 500; i++) {
    const firstName = getRandomItem(firstNames);
    const lastName = getRandomItem(lastNames);
    const gender = getMatchingGender(firstName);
    const userName = generateUserName(firstName, lastName, i);
    const phoneNumber = generatePhoneNumber();
    const guarantorFirstName = getRandomItem(firstNames);
    const guarantorLastName = getRandomItem(lastNames);
    const guarantorGender = getMatchingGender(guarantorFirstName);
    const state = getRandomItem(nigerianStates);
    const streetName = getRandomItem(streetNames);
    const employmentStatus = Math.random() > 0.25 ? "Employed" : "Unemployed"; // 75% employed
    const educationLevel = getRandomItem(educationLevels);
    const sector =
      employmentStatus === "Employed" ? getRandomItem(employmentSectors) : "";
    const duration =
      employmentStatus === "Employed"
        ? `${Math.floor(Math.random() * 20) + 1} years`
        : "";

    users.push({
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}-${i}`,
      orgName: getRandomItem(organizations),
      userName,
      email: `${userName}@${getRandomItem(emailDomains)}`,
      phoneNumber,
      dateJoined: generateRealisticDate(),
      status: getRandomItem(statuses),
      profile: {
        firstName,
        lastName,
        phoneNumber,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
        gender,
        bvn: generateBVN(),
        address: `${
          Math.floor(Math.random() * 500) + 1
        } ${streetName}, ${state} State`,
        currency: "NGN",
      },
      guarantor: {
        firstName: guarantorFirstName,
        lastName: guarantorLastName,
        phoneNumber: generatePhoneNumber(),
        gender: guarantorGender,
        address: `${Math.floor(Math.random() * 500) + 1} ${getRandomItem(
          streetNames
        )}, ${getRandomItem(nigerianStates)} State`,
      },
      accountBalance: generateAccountBalance(),
      accountNumber: generateAccountNumber(),
      socials: {
        facebook: Math.random() > 0.4 ? `${firstName} ${lastName}` : "",
        instagram: Math.random() > 0.3 ? `@${userName}` : "",
        twitter: Math.random() > 0.5 ? `@${userName}` : "",
      },
      education: {
        level: educationLevel,
        employmentStatus,
        sector,
        duration,
        officeEmail:
          employmentStatus === "Employed"
            ? `${userName}@${getRandomItem(companyDomains)}`
            : "",
        monthlyIncome: generateMonthlyIncome(employmentStatus),
        loanRepayment: generateLoanRepayment(),
      },
    });
  }

  return users;
};
