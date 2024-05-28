'use client'

import DataTable from '@/components/data-table'
import { UnqiueFactorData } from '@/functions/unique-factor'
import calculateWidthBasedOnWordLength from '@/utils/calculate-width'
import { Column } from 'primereact/column'
import React, { useMemo } from 'react'

type Props = {
  data: UnqiueFactorData[]
}

const Table = ({ data }: Props) => {
  const columns = useMemo(() => {
    return Object.keys(data[0])
      .sort((a, b) => a.localeCompare(b))
      .map((key) => {
        const hasSpaces = key.includes(' ')

        const width = `${calculateWidthBasedOnWordLength(
          key,
          hasSpaces ? 2 : 1,
        )}px`

        return {
          header: () => {
            return (
              <div
                style={{
                  width: width,
                  textAlign: 'center',
                }}
              >
                {key}
              </div>
            )
          },
          field: key,
          body: (row: any) => {
            if (row[key] === null) {
              return 'N/A'
            }

            if (row[key] instanceof Date) {
              return <span>{row[key].toLocaleDateString()}</span>
            }

            return <span>{row[key]}</span>
          },
          headerStyle: { paddingLeft: 0, paddingRight: 0 },
          bodyStyle: { paddingLeft: 0, paddingRight: 0 },
          headerClassName: 'text-[14px] px-2 text-center py-2 font-semibold',
          bodyClassName: 'text-[14px] px-2 py-2 text-center',
        } as React.ComponentProps<typeof Column>
      })
  }, [data])

  return <DataTable<UnqiueFactorData> data={data} columns={columns} />
}

export default Table
