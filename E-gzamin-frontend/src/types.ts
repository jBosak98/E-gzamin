type DesignateType = {
  id?:number,
  time:number,
  passReq:string,
  startDate:Date,
  endDate:Date,
  group_id:number,
  testTemplate_id:number,
}

type QuestionType = {
  id: number;
  content: string;
  answers?: Array<AnswerType>;
  courses?: Array<CourseType>;
};

type CourseType = {
  id: number;
  name: string;
};

type AnswerType = {
  id?: number;
  content: string;
  isCorrect: boolean;
  question?: number;
  createdAt:Date;
  removedAt?:Date | undefined;
};

type Member = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
};

type GroupType = {
  id: number;
  name: string;
  groupCode: string;
  members: Array<Member>;
};

type GroupMembers = {
  members: Array<Member>;
};

export type {DesignateType, QuestionType, CourseType, AnswerType, Member, GroupType, GroupMembers };
