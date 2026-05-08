import type { Student, Course } from "../domain/types/index.js";

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  data: T;
  errors?: string[];
}

const DB: Record<string, unknown[]> = {
  "/students": [
    {
      id: "STU-001",
      name: "Laura",
      lastName: "García Pérez",
      email: "laura@uni.es",
      birthDate: new Date("2002-03-15"),
      enrollmentYear: 2020,
    },
    {
      id: "STU-002",
      name: "Carlos",
      lastName: "Martínez López",
      email: "carlos@uni.es",
      birthDate: new Date("2001-07-22"),
      enrollmentYear: 2019,
    },
  ] as Student[],

  "/courses": [
    { id: "CRS-101", name: "Calculus I", credits: 6, department: "Mathematics" },
    { id: "CRS-102", name: "Programming", credits: 6, department: "Computer Science" },
    { id: "CRS-103", name: "Physics I", credits: 6, department: "Physics" },
  ] as Course[],
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Simulates an API call and returns a strongly typed promise.
 * @param endpoint - Resource path (e.g. "/students")
 */
export async function fetchResource<T>(
  endpoint: string
): Promise<ApiResponse<T>> {
  await delay(100);

  const resource = DB[endpoint];

  if (!resource) {
    return {
      statusCode: 404,
      success: false,
      data: [] as unknown as T,
      errors: [`Endpoint "${endpoint}" not found.`],
    };
  }

  return {
    statusCode: 200,
    success: true,
    data: resource as T,
  };
}