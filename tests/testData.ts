export interface TestCase {
  id: string;
  name: string;
  type: 'positive' | 'negative' | 'ui';
  lengthType: 'S' | 'M' | 'L';
  input: string;
  expected: string;
  expectedType?: string;
}

export const testCases: TestCase[] = [
  {
    id: "Pos_Fun_0001",
    name: "Convert a daily greeting",
    type: "positive",
    lengthType: "S",
    input: "suba udhaeesanak",
    expected: "සුබ උදෑසනක්"
  },
  {
    id: "Pos_Fun_0002",
    name: "Convert a simple thank you",
    type: "positive",
    lengthType: "S",
    input: "bohooma sthuthi",
    expected: "බොහෝම ස්තුති"
  },
  {
    id: "Pos_Fun_0003",
    name: "Convert a simple apology",
    type: "positive",
    lengthType: "S",
    input: "samaavenna",
    expected: "සමාවෙන්න"
  },
  {
    id: "Pos_Fun_0004",
    name: "Convert a permission question",
    type: "positive",
    lengthType: "M",
    input: "mata poddak eLiyata yanna puLuvandha",
    expected: "මට පොඩ්ඩක් එළියට යන්න පුළුවන්ද"
  },
  {
    id: "Pos_Fun_0005",
    name: "Convert an instruction",
    type: "positive",
    lengthType: "S",
    input: "meeka balanna",
    expected: "මේක බලන්න"
  },
  {
    id: "Pos_Fun_0006",
    name: "Convert a negative instruction",
    type: "positive",
    lengthType: "S",
    input: "meeka karanna epaa",
    expected: "මේක කරන්න එපා"
  },
  {
    id: "Pos_Fun_0007",
    name: "Convert past tense activity",
    type: "positive",
    lengthType: "S",
    input: "mama iiyee panthi giyaa",
    expected: "මම ඊයේ පන්ති ගියා"
  },
  {
    id: "Pos_Fun_0008",
    name: "Convert present continuous",
    type: "positive",
    lengthType: "S",
    input: "eyaa dhaen aevidhinavaa",
    expected: "එයා දැන් ඇවිදිනවා"
  },
  {
    id: "Pos_Fun_0009",
    name: "Convert future plan",
    type: "positive",
    lengthType: "S",
    input: "Api adha rae yanne",
    expected: "අපි අද රැ යන්නෙ"
  },
  {
    id: "Pos_Fun_0010",
    name: "Convert compound sentence",
    type: "positive",
    lengthType: "M",
    input: "mama kanna giyaa, passe nidhaagaththaa",
    expected: "මම කන්න ගියා, පස්සෙ නිදාගත්තා"
  },
  {
    id: "Pos_Fun_0011",
    name: "Convert reason sentence",
    type: "positive",
    lengthType: "M",
    input: "traffic nisaa mama late unaa",
    expected: "traffic නිසා මම late උනා"
  },
  {
    id: "Pos_Fun_0012",
    name: "Convert question with time",
    type: "positive",
    lengthType: "M",
    input: "adha kohomadha 7.00ta enavadha?",
    expected: "අද කොහොමද 7.00ට එනවද?"
  },
  {
    id: "Pos_Fun_0013",
    name: "Convert plural people",
    type: "positive",
    lengthType: "M",
    input: "api okkoma yamu",
    expected: "අපි ඔක්කොම යමු"
  },
  {
    id: "Pos_Fun_0014",
    name: "Convert pronoun variation",
    type: "positive",
    lengthType: "M",
    input: "eyaa mata kiyuvahama",
    expected: "එයා මට කියුවහම"
  },
  {
    id: "Pos_Fun_0015",
    name: "Convert pronoun variation",
    type: "positive",
    lengthType: "M",
    input: "eyaa mata kiyuvahama",
    expected: "එයා මට කියුවහම"
  },
  {
    id: "Pos_Fun_0016",
    name: "Convert pronoun variation",
    type: "positive",
    lengthType: "M",
    input: "api Galle giyaama beach ekata yanava",
    expected: "අපි Galle ගියාම beach එකට යනව"
  },
  {
    id: "Pos_Fun_0017",
    name: "Convert instruction with currency",
    type: "positive",
    lengthType: "M",
    input: "Rs 1500k thiyenavanam dhenna",
    expected: "Rs 1500ක් තියෙනවනම් දෙන්න"
  },
  {
    id: "Pos_Fun_0018",
    name: "Convert short confirmation",
    type: "positive",
    lengthType: "S",
    input: "hari, mama ennam",
    expected: "හරි, මම එන්නම්"
  },
  {
    id: "Pos_Fun_0019",
    name: "Convert emphasis repetition",
    type: "positive",
    lengthType: "S",
    input: "epaa epaa, mata epaa",
    expected: "එපා එපා, මට එපා"
  },
  {
    id: "Pos_Fun_0020",
    name: "Convert instruction with brackets",
    type: "positive",
    lengthType: "S",
    input: "meka (urgent) vahaama karanna",
    expected: "මෙක (urgent) වහාම කරන්න"
  },
  {
    id: "Pos_Fun_0021",
    name: "Convert instruction with quotation marks",
    type: "positive",
    lengthType: "S",
    input: "\"report eka heta dhenna\" kiyala sir kivvaa",
    expected: "\"report එක හෙට දෙන්න\" කියල sir කිව්වා"
  },
  {
    id: "Pos_Fun_0022",
    name: "Convert input with extra spaces",
    type: "positive",
    lengthType: "S",
    input: "mama       dhaen enavaa",
    expected: "මම දැන් එනවා"
  },
  {
    id: "Pos_Fun_0023",
    name: "Convert future intention after past action",
    type: "positive",
    lengthType: "M",
    input: "mama gedhara gihin kiyannam",
    expected: "මම ගෙදර ගිහින් කියන්නම්"
  },
  {
    id: "Pos_Fun_0024",
    name: "Convert input with irregular spacing between words",
    type: "positive",
    lengthType: "S",
    input: "api heta yanava",
    expected: "අපි හෙට යනවා"
  },
  {
    id: "Neg_Fun_0025",
    name: "No spaces between words",
    type: "negative",
    lengthType: "S",
    input: "mamadanenawa",
    expected: "Incorrect or unreadable Sinhala output"
  },
  {
    id: "Neg_Fun_0026",
    name: "Special characters inside text",
    type: "negative",
    lengthType: "M",
    input: "mama ge$dhara ya#nawa",
    expected: "Incorrect Sinhala output due to symbols"
  },
  {
    id: "Neg_Fun_0027",
    name: "Heavy spelling mistakes",
    type: "negative",
    lengthType: "S",
    input: "mama gedhara ynw",
    expected: "Partially incorrect Sinhala output"
  },
  {
    id: "Neg_Fun_0028",
    name: "English-dominant mixed sentence",
    type: "negative",
    lengthType: "S",
    input: "please send me the file eka",
    expected: "Inconsistent or incorrect Sinhala conversion"
  },
  {
    id: "Neg_Fun_0029",
    name: "Unsupported special symbols inside words",
    type: "negative",
    lengthType: "M",
    input: "mama @gedhara #yanawa",
    expected: "Inconsistent or incorrect Sinhala conversion"
  },
  {
    id: "Neg_Fun_0030",
    name: "Excess repeated characters",
    type: "negative",
    lengthType: "M",
    input: "mama daaaaan eeeenawaa",
    expected: "Distorted or unnatural Sinhala output"
  },
  {
    id: "Neg_Fun_0031",
    name: "Random capitalization usage",
    type: "negative",
    lengthType: "M",
    input: "MaMa DaN EnAwA",
    expected: "Inconsistent or incorrect Sinhala output"
  },
  {
    id: "Neg_Fun_0032",
    name: "Long unpunctuated paragraph",
    type: "negative",
    lengthType: "L",
    input: "mama ada udeta nagitala gedhara wada karala passe bus eka gihin office giyaa eeta passe meeting thibba raa wenakota gedhara awilla bath kanna kalin rest una ita passe phone eka ring una mama answer kala ehema",
    expected: "Reduced accuracy or broken sentence structure"
  },
  {
    id: "Neg_Fun_0033",
    name: "Invalid phonetic input",
    type: "negative",
    lengthType: "L",
    input: "qwerty asdfgh",
    expected: "No meaningful Sinhala output"
  },
  {
    id: "Neg_Fun_0034",
    name: "Numeric-only input",
    type: "negative",
    lengthType: "L",
    input: "999999 12:00 2026-01-30",
    expected: "Not a meaningful Sinhala sentence"
  },
  {
    id: "Pos_UI_0035",
    name: "Real-time output updates while typingt",
    type: "ui",
    lengthType: "S",
    input: "mama dhaen enavaa",
    expected: "Sinhala output updates continuously as user types each character"
  }
];
