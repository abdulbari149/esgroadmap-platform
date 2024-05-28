import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type CompanyUniverseData = TableData<
  Prisma.$CompanyUniversePayload,
  typeof columns.CompanyUniverse
>

const getCompanyUniverseTableData = async () => {
  const data = await prisma.companyUniverse.findMany({})
  return transformTableData(
    data,
    columns.CompanyUniverse,
  ) as CompanyUniverseData[]
}

export { getCompanyUniverseTableData }
