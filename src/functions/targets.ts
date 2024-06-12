import columns from '@/constants/columns'
import { TableData } from '@/types/function'
import transformTableData from '@/utils/transform-table-data'
import { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma'

export type SentenceCarbonData = TableData<
  Prisma.$SentenceCarbonViewPayload,
  typeof columns.TargetSentenceView
>

const getSentenceCarbonData = async () => {
  const data = await prisma.sentenceCarbonView.findMany({
    select: {
      id: true,
      Company: true,
      Source_link: true,
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
  ) as SentenceCarbonData[]
}

export type SentenceGenderData = TableData<
  Prisma.$SentenceGenderViewPayload,
  typeof columns.TargetSentenceView
>

const getSentenceGenderData = async () => {
  const data = await prisma.sentenceGenderView.findMany({
    select: {
      id: true,
      Company: true,
      Source_link: true,
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
  ) as SentenceGenderData[]
}

export type SentenceWaterData = TableData<
  Prisma.$SentenceWaterViewPayload,
  typeof columns.TargetSentenceView
>

const getSentenceWaterData = async () => {
  const data = await prisma.sentenceWaterView.findMany({
    select: {
      id: true,
      Company: true,
      Source_link: true,
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
  ) as SentenceWaterData[]
}

export type SentenceWasteData = TableData<
  Prisma.$SentenceWasteViewPayload,
  typeof columns.TargetSentenceView
>

const getSentenceWasteData = async () => {
  const data = await prisma.sentenceWasteView.findMany({
    select: {
      id: true,
      Company: true,
      Source_link: true,
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
  ) as SentenceWasteData[]
}

export type SentenceSupplierData = TableData<
  Prisma.$SentenceSuppliersViewPayload,
  typeof columns.TargetSentenceView
>

const getSentenceSupplierData = async () => {
  const data = await prisma.sentenceSuppliersView.findMany({
    select: {
      id: true,
      Company: true,
      Source_link: true,
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
  ) as SentenceSupplierData[]
}

export type SentenceRenewableData = TableData<
  Prisma.$SentenceRenewablesViewPayload,
  typeof columns.TargetSentenceView
>

const getSentenceRenewablesData = async () => {
  const data = await prisma.sentenceRenewablesView.findMany({
    select: {
      id: true,
      Company: true,
      Source_link: true,
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
  ) as SentenceRenewableData[]
}


export {
  getSentenceGenderData,
  getSentenceWasteData,
  getSentenceSupplierData,
  getSentenceWaterData,
  getSentenceCarbonData,
  getSentenceRenewablesData
}
