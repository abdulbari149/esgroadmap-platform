import Colors from '@/styles/colors'
import { Frown } from 'lucide-react'
import { ProgressSpinner } from 'primereact/progressspinner'
import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Content from './content'
import { TargetTables } from '@/functions/targets'

const Target: React.FC<{
  title: string
  tableName: TargetTables
}> = ({ title, tableName }) => {
  return (
    <div className="pt-[5vh] w-[100%] overflow-x-hidden">
      <h1 className="px-10 text-[32px] text-[#219E99] font-bold">{title}</h1>
      <ErrorBoundary
        fallback={
          <div className="w-[100%] min-h-[50vh] h-[100%] grid place-items-center">
            <div className="flex flex-col gap-5 items-center">
              <Frown size={100} />
              <div className="flex flex-col">
                <p className="text-[20px] text-black text-center">
                  Sorry! We couldn&apos;t load the {title} data
                </p>
                <p className="text-[14px] text-black text-center">
                  Please try again!
                </p>
              </div>
            </div>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="w-[100%] min-h-[50vh] h-[100%] grid place-items-center">
              <ProgressSpinner
                style={{ width: '120px', height: '120px' }}
                color={Colors.secondary}
              />
            </div>
          }
        >
          <Content tableName={tableName} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Target
