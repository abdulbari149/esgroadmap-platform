import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type PercentageData = TableData<
  Prisma.$PercentageTablePayload,
  typeof columns.Percentage
>

const getPercentageTableData = async () => {
  const data = await prisma.percentageTable.findMany({})

  return transformTableData(data, columns.CompanyUniverse) as PercentageData[]
}

export { getPercentageTableData }
