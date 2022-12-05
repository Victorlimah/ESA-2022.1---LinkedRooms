export type User = {
  email: string,
  name: string,
  role: number,
  code: string
}

export type TagDto = {
  name: string;
};

export type TagRoomsDto = {
  tagId: number;
  roomId: number;
};

export type RoomDto = {
  number: string;
  capacity: number;
  blockId: number;
};

export type TeacherDto = {
  name: string;
};

export type BlockDto = {
  name: string;
};

export type ScheduleDto = {
  schedule: string;
  day: string;
};

export type PeriodDto = {
  number: number;
};

export type CourseDto = {
  name: string;
};

export type DisciplineDto = {
  name: string;
  code: string;
  workload: number;
};

export type ClassGridDto = {
  periodId: number;
  courseId: number;
  disciplineId: number;
};

export type ClassDto = {
  teacherId: number;
  roomId: number;
  sheduleId: number;
  students: number;
  disciplineId: number;
  schoolYear: string;
};
