import { NextResponse } from "next/server";
import { z } from "zod";
import { ApiError } from "./api-error";
import { logEvent } from "./logger";

type ApiErrorBody = {
  code: string;
  message: string;
};

export function createSuccessResponse<T>(data: T, status = 200): NextResponse {
  return NextResponse.json({ success: true, data }, { status });
}

export function createErrorResponse(error: ApiErrorBody, status = 400): NextResponse {
  return NextResponse.json({ success: false, error }, { status });
}

export async function handleApiError(
  error: unknown,
  event = "api.unexpected_error",
): Promise<NextResponse> {
  if (error instanceof ApiError) {
    return createErrorResponse({ code: error.code, message: error.message }, error.status);
  }

  if (error instanceof z.ZodError) {
    return createErrorResponse(
      { code: "VALIDATION_ERROR", message: "Request validation failed." },
      400,
    );
  }

  logEvent(event, { error }, "error");
  return createErrorResponse(
    { code: "INTERNAL_ERROR", message: "An unexpected error occurred." },
    500,
  );
}

export type JsonBodyResult<T> =
  { success: true; data: T } | { success: false; response: NextResponse };

export async function parseJsonBody<T>(
  request: Request,
  schema: z.ZodType<T>,
): Promise<JsonBodyResult<T>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return {
      success: false,
      response: createErrorResponse(
        { code: "INVALID_JSON", message: "Request body must be valid JSON." },
        400,
      ),
    };
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return {
      success: false,
      response: createErrorResponse(
        { code: "VALIDATION_ERROR", message: "Request validation failed." },
        400,
      ),
    };
  }

  return { success: true, data: result.data };
}
