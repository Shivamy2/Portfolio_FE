export enum ESkills {
  HTML = "html",
  CSS = "css",
  STYLING = "tailwindcss/bootstrap/materialui",
  JS = "javascript",
  TS = "typescript",
  REACT = "react",
  REACT_SIDEWAYS = "redux/thunk/saga",
  SEO = "seo",
  AWS = "aws lambda/serverless/sqs",
  BE = "nodejs/expressjs",
  GRAPHQL = "graphql",
  DB_NO_SQL = "mongodb/mongoose",
  DB_SQL = "postgres/sequelize",
  STORYBOOK = "storybookjs",
  HOST = "git/github",
  TERMINAL = "terminal",
  SPRINGBOOT = "springboot",
  MOBILE = "flutter",
  AZURE = "azure",
  VALIDATIONS = "formik/react-forms/yup",
  JAVA = "java",
}

export enum ELiterals {
  LINK = "l",
  BOLD = "b",
  ITALIC = "i",
}
export interface IDescription {
  values: string;
  literals?: string[][];
}

export interface ISocialLinks {
  [social: string]: string;
}

export interface IHome {
  typewriterText: string;
  description: IDescription;
  socialLinks: ISocialLinks;
}

export interface IAbout {
  title: string;
  myIntroduction: IDescription;
  knowMeDescription: IDescription;
  skills: string[];
}

export interface IProjectDetails {
  _id: string;
  title: string;
  shortDescription: IDescription;
  longDescription?: IDescription;
  overview: IDescription;
  points: IDescription[];
  stackUsed: string[];
  imageUrl: string;
  pocUrl: string;
  hostedUrl: string;
}

export interface IProjects {
  title: string;
  introduction: IDescription;
  personalProjectsDetails: IProjectDetails[];
  professionalProjectsDetails: IProjectDetails[];
}

export interface IContact {
  title: string;
  introduction: IDescription;
  email?: string;
  name?: string;
  message?: string;
}

export interface ICertificateDetails {
  name: string;
  overview: IDescription;
  link: string;
  date: Date;
  skills: string[];
}
export interface ICertificates {
  title: string;
  shortDescription: IDescription;
  details: ICertificateDetails[];
}

export interface IExperienceDetails {
  employerName: string;
  employerLocation: string;
  position: string;
  joiningDate: string;
  endingDate: string;
  overview: IDescription;
  points: IDescription[];
  techStackLearned: string[];
}
export interface IExperience {
  title: string;
  introduction: string;
  companies: IExperienceDetails[];
}

export interface ITheme {
  primaryDark: string;
  primaryLight: string;
  onPrimary: string;
  secondaryDark: string;
  secondaryLight: string;
  onSecondary: string;
  hero: string;
}

export interface IEmployeeDetails {
  name: string;
  dpUrl: string;
  userCode: string;
  introduction: IDescription;
  home: IHome;
  about: IAbout;
  contact: IContact;
  projects: IProjects;
  experience: IExperience;
  certification: ICertificates;
  theme: ITheme;
}

export interface IMaster {
  headerOptions: string[];
  details: IEmployeeDetails[];
}

export interface SkillProjects {
  personal: IProjectDetails[];
  professional: IProjectDetails[];
}

export interface IMasterContext {
  currentProfile: IMaster;
}
