import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type TargetSentenceData = TableData<
  Prisma.$SentenceAllViewPayload,
  typeof columns.TargetSentenceView
>

const getSentenceAllCompanyData = async () => {
  const data = await prisma.sentenceAllView.findMany({
    select: {
      id: true,
      Company: true,
      DocURL: true,
      Target_sentence: true,
      SentenceTargetYear: true,
      Country: true,
      sector_code__1__NAICS_: true,
      sector_name__1__NAICS_: true,
      upload_date: true,
    },
  })

  return transformTableData(
    data,
    columns.TargetSentenceView,
  ) as TargetSentenceData[]
}

const getSentenceCarbonData = async () => {
  const data = await prisma.sentenceCarbonView.findMany({
    select: {
      id: true,
      Company: true,
      DocURL: true,
      Target_sentence: true,
      SentenceTargetYear: true,
      Country: true,
      sector_code__1__NAICS_: true,
      sector_name__1__NAICS_: true,
      upload_date: true,
    },
    take: 20,
  })

  return transformTableData(
    data,
    columns.TargetSentenceView,
  ) as TargetSentenceData[]
}

const getSentenceGenderData = async () => {
  const data = await prisma.sentenceGenderView.findMany({
    select: {
      id: true,
      Company: true,
      DocURL: true,
      Target_sentence: true,
      SentenceTargetYear: true,
      Country: true,
      sector_code__1__NAICS_: true,
      sector_name__1__NAICS_: true,
      upload_date: true,
    },
  })

  return transformTableData(
    data,
    columns.TargetSentenceView,
  ) as TargetSentenceData[]
}

const getSentenceWaterData = async () => {
  const data = await prisma.sentenceWaterView.findMany({
    select: {
      id: true,
      Company: true,
      DocURL: true,
      Target_sentence: true,
      SentenceTargetYear: true,
      Country: true,
      sector_code__1__NAICS_: true,
      sector_name__1__NAICS_: true,
      upload_date: true,
    },
  })

  return transformTableData(
    data,
    columns.TargetSentenceView,
  ) as TargetSentenceData[]
}

const getSentenceWasteData = async () => {
  const data = await prisma.sentenceWasteView.findMany({
    select: {
      id: true,
      Company: true,
      DocURL: true,
      Target_sentence: true,
      SentenceTargetYear: true,
      Country: true,
      sector_code__1__NAICS_: true,
      sector_name__1__NAICS_: true,
      upload_date: true,
    },
  })

  return transformTableData(
    data,
    columns.TargetSentenceView,
  ) as TargetSentenceData[]
}

const getSentenceSupplierData = async () => {
  const data = await prisma.sentenceSuppliersView.findMany({
    select: {
      id: true,
      Company: true,
      DocURL: true,
      Target_sentence: true,
      SentenceTargetYear: true,
      Country: true,
      sector_code__1__NAICS_: true,
      sector_name__1__NAICS_: true,
      upload_date: true,
    },
  })

  return transformTableData(
    data,
    columns.TargetSentenceView,
  ) as TargetSentenceData[]
}

const getSentenceRenewablesData = async () => {
  const data = await prisma.sentenceRenewablesView.findMany({
    select: {
      id: true,
      Company: true,
      DocURL: true,
      Target_sentence: true,
      SentenceTargetYear: true,
      Country: true,
      sector_code__1__NAICS_: true,
      sector_name__1__NAICS_: true,
      upload_date: true,
    },
  })

  return transformTableData(
    data,
    columns.TargetSentenceView,
  ) as TargetSentenceData[]
}

export type TargetTables =
  | 'carbon_reduction'
  | 'gender_diversity'
  | 'waste_&_recycling'
  | 'supply_chain'
  | 'water_management'
  | 'renewables'
  | 'all_company'

const targets: Record<TargetTables, () => Promise<TargetSentenceData[]>> = {
  "waste_&_recycling": getSentenceWasteData,
  carbon_reduction: getSentenceCarbonData,
  gender_diversity: getSentenceGenderData,
  renewables: getSentenceRenewablesData,
  supply_chain: getSentenceSupplierData,
  water_management: getSentenceWaterData,
  all_company: getSentenceAllCompanyData,
}

export default targets;