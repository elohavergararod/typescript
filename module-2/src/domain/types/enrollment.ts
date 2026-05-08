import type { Student } from "./student.js";
import type { Course } from "./course.js";

export interface ActiveEnrollment {
  type: "ACTIVE";
  student: Student;
  courses: Course[];
  startDate: Date;
}

export interface SuspendedEnrollment {
  type: "SUSPENDED";
  student: Student;
  suspensionReason: string;
  suspensionDate: Date;
}

export interface CompletedEnrollment {
  type: "COMPLETED";
  student: Student;
  averageGrade: number;
  completionDate: Date;
}

export type EnrollmentStatus =
  | ActiveEnrollment
  | SuspendedEnrollment
  | CompletedEnrollment;
