import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type RoadmapCarbonData = TableData<
  Prisma.$RoadmapCarbonPayload,
  typeof columns.RoadmapCarbon
>

const getRoadmapCarbonData = async () => {
  const data = await prisma.roadmapCarbon.findMany({})

  return transformTableData(data, columns.RoadmapCarbon) as RoadmapCarbonData[]
}

export { getRoadmapCarbonData }
