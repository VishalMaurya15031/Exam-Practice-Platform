export type ExamItem = {
  name: string;
  href: string;
};

export type ExamCategory = {
  category: string;
  items: ExamItem[];
};

export const examsData: ExamCategory[] = [
  {
    category: "SSC Exams",
    items: [
      { name: "SSC CGL", href: "/exams/ssc-cgl" },
      { name: "SSC CHSL", href: "/exams/ssc-chsl" },
      { name: "SSC GD", href: "/exams/ssc-gd" },
      { name: "SSC MTS", href: "/exams/ssc-mts" },
      { name: "SSC JE", href: "/exams/ssc-je" },
    ]
  },
  {
    category: "Railway Exams",
    items: [
      { name: "RRB NTPC", href: "/exams/rrb-ntpc" },
      { name: "RRB Group D", href: "/exams/rrb-group-d" },
      { name: "RRB ALP", href: "/exams/rrb-alp" },
    ]
  },
  {
    category: "State Police",
    items: [
      { name: "UP Police SI", href: "/exams/up-police-si" },
      { name: "UP Police Constable", href: "/exams/up-police-constable" },
    ]
  },
  {
    category: "Defence & Para",
    items: [
      { name: "CRPF Constable", href: "/exams/crpf-constable" },
      { name: "SSB Head Constable", href: "/exams/ssb-head-constable" },
      { name: "SSB SI / ASI", href: "/exams/ssb-si-asi" },
    ]
  }
];
