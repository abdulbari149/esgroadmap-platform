import { HttpConflictError } from '@/errors'
import prisma from '@/lib/prisma'
import authorizer from '@/server/middleware/authorizer'
import authValidator, {
  EditProfileSchema,
} from '@/server/validators/auth.validator'
import handleError from '@/utils/handle-error'
import validate from '@/utils/validate'
import { HttpStatusCode } from 'axios'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const { user, payload } = await authorizer()
    const body = await validate<EditProfileSchema>(
      authValidator.editProfile,
      json,
    )
    return NextResponse.json(
      { data: null, error: null, success: true },
      { status: HttpStatusCode.Ok },
    )
  } catch (error) {
    return handleError(error)
  }
}
