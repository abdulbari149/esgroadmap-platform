import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type UnqiueFactorData = TableData<
  Prisma.$UniqueFactorsTablePayload,
  typeof columns.UniqueFactor
>

const getUniqueFactorTableData = async () => {
  const data = await prisma.uniqueFactorsTable.findMany({})
  return transformTableData(data, columns.UniqueFactor) as UnqiueFactorData[]
}

export { getUniqueFactorTableData }