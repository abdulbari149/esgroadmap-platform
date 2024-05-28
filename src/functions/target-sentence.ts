import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type TargetSentenceData = TableData<
  Prisma.$TargetSentencePayload,
  typeof columns.TargetSentence
>

const getTargetSentenceData = async () => {
  const data = await prisma.targetSentence.findMany({})

  return transformTableData(data, columns.TargetSentence) as TargetSentenceData[]
}

export { getTargetSentenceData }
