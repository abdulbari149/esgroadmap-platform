import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type SentenceAllData = TableData<
  Prisma.$SentenceAllPayload,
  typeof columns.SentenceAll
>

const getSentenceAllData = async () => {
  const data = await prisma.sentenceAll.findMany({})

  return transformTableData(data, columns.SentenceAll) as SentenceAllData[]
}

export { getSentenceAllData }
