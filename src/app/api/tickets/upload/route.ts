import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import { pipeline } from 'stream'
import { promisify } from 'util'
import { extname } from 'path'
import env from '@/config/env.config'
import handleError from '@/utils/handle-error'
const pump = promisify(pipeline)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const files = formData.getAll('files') as File[]
    const documents = []
    for (const file of files) {
      const fileName = `${Date.now()}${extname(file.name)}`
      const relativeFilePath = `tickets/${fileName}`
      const stream = file.stream()
      await pump(
        stream as any,
        fs.createWriteStream(`public/${relativeFilePath}`),
      )

      documents.push({
        url: `${env.API_BASE_URL.replace('/api', '')}/${relativeFilePath}`,
        size: file.size,
        name: file.name,
      })
    }

    return NextResponse.json({
      error: null,
      success: true,
      data: documents,
    })
  } catch (e) {
    console.log(e)
    return handleError(e)
  }
}
