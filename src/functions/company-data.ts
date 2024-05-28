import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type CompanyData = TableData<
  Prisma.$CompanyDataPayload,
  typeof columns.CompanyData
>

const getCompanyData = async () => {
  const data = await prisma.companyData.findMany({})

  return transformTableData(data, columns.CompanyData) as CompanyData[]
}

export { getCompanyData }
