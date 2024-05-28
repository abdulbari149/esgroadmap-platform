import columns from '@/constants/columns'
import prisma from '@/lib/prisma'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'

export type CompanyData2 = TableData<
  Prisma.$CompanyData2Payload,
  typeof columns.CompanyData2
>

const getCompanyData2 = async () => {
  const data = await prisma.companyData2.findMany({})

  return transformTableData(data, columns.CompanyData2) as CompanyData2[]
}

export { getCompanyData2 }
