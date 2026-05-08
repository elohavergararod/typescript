import type { EnrollmentStatus } from "./domain/types/index.js";

export function generateReport(status: EnrollmentStatus): string {
  switch (status.type) {
    case "ACTIVE": {
      const courseNames = status.courses.map((c) => c.name).join(", ");

      return (
        `[ACTIVE] ${status.student.name} ${status.student.lastName} ` +
        `is enrolled in ${status.courses.length} course(s): ${courseNames}.`
      );
    }

    case "SUSPENDED": {
      return (
        `[SUSPENDED] ${status.student.name} ${status.student.lastName} ` +
        `has a suspended enrollment. Reason: "${status.suspensionReason}".`
      );
    }

    case "COMPLETED": {
      return (
        `[COMPLETED] ${status.student.name} ${status.student.lastName} ` +
        `has completed their studies with an average grade of ${status.averageGrade.toFixed(2)}.`
      );
    }

    default: {
      const _exhaustive: never = status;
      throw new Error(
        `Unhandled enrollment status: ${JSON.stringify(_exhaustive)}`
      );
    }
  }
}