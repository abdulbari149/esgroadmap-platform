import { Prisma } from '@prisma/client'

export type ReverseMap<T extends Record<keyof T, keyof any>> = {
  [P in T[keyof T]]: {
    [K in keyof T]: T[K] extends P ? K : never
  }[keyof T]
}

type ColumnNames<
  TObject extends Record<keyof TObject, keyof any>
> = TObject[keyof TObject]

// type ReverseColumnNames = ReverseMap<typeof columnNamesForPercentageTable>

type PrismaTables =
  | Prisma.$PercentageTablePayload
  | Prisma.$UniqueFactorsTablePayload
  | Prisma.$CompanyDataPayload
  | Prisma.$CompanyData2Payload
  | Prisma.$CompanyUniversePayload
  | Prisma.$TargetSentencePayload
  | Prisma.$RoadmapCarbonPayload
  | Prisma.$SentenceAllPayload
  | Prisma.$TestablePayload

export type TableData<
  PrismaModel extends PrismaTables,
  TColumnMap extends Record<keyof TColumnMap, keyof any>,
  Columns extends ColumnNames<TColumnMap> = ColumnNames<TColumnMap>,
  ReversedTColumMap extends ReverseMap<TColumnMap> = ReverseMap<TColumnMap>
> = {
  // @ts-ignore 
  [key in Columns]: PrismaModel['scalars'][ReversedTColumMap[key]]
}
