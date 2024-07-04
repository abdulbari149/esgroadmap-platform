'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const MembershipAccount = () => {
  const params = useSearchParams()

  const router = useRouter()

  return (
    <div className="w-[100vw] bg-white grid place-items-center">
      <div className="max-w-[600px] w-[100%] flex flex-col py-10 px-2">
        <section className="flex flex-col gap-5 mb-8">
          <div className="w-100 flex items-center gap-4">
            <h3 className="text-[25px] text-[#219e98] font-semibold">
              Membership Level
            </h3>
            <p
              onClick={() => {
                router.replace('/auth/membership-account/membership-levels')
              }}
              className="italic text-[12px] text-[#219e98] font-normal pt-2 cursor-pointer"
            >
              change
            </p>
          </div>
          <p className="text-[16px] text-black">
            You have selected the{' '}
            <strong>Comprehensive account Analysts&apos; club</strong>
            membership level.
          </p>
          <p className="text-[16px] text-black">
            Comprehensive account &ldquo;Analysts&apos; club&rdquo; PLAN
          </p>
          <p className="text-[16px] text-black">
            The price for membership is <strong>$0.00</strong> now and then{' '}
            <strong>$20.00 per Month.</strong> After your initial payment, your
            first payment is Free.
          </p>

          <p className="text-[12px] text-black font-normal">
            Do you have a discount code?{' '}
            <span className="underline cursor-pointer">
              Click here to enter your discount code
            </span>
          </p>
        </section>

        <div
          className="w-100 h-[2px] mb-8"
          style={{ backgroundColor: 'rgb(203, 213, 224)' }}
        />

        <section className="flex flex-col gap-5 mb-8">
          <div className="w-100 flex items-center gap-4">
            <h3 className="text-[25px] text-[#219e98] font-semibold">
              Account Information
            </h3>
            <p className="italic text-[12px] text-[#219e98] font-normal pt-2 cursor-pointer">
              Already have an account? Log in here
            </p>
          </div>

          <div className="w-100 space-y-2">
            <p className="font-semibold text-[16px] text-[#000000]">Username</p>
            <div className="w-100 flex items-center gap-1">
              <input
                type="text"
                className="w-[60%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
              />
              <p className="text-[18px] text-[#000000]">*</p>
            </div>
          </div>

          <div className="w-100 space-y-2">
            <p className="font-semibold text-[16px] text-[#000000]">Password</p>
            <div className="w-100 flex items-center gap-1">
              <input
                type="text"
                className="w-[80%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
              />
              <p className="text-[18px] text-[#000000]">*</p>
            </div>
          </div>

          <div className="w-100 space-y-2">
            <p className="font-semibold text-[16px] text-[#000000]">
              Confirm Password
            </p>
            <div className="w-100 flex items-center gap-1">
              <input
                type="text"
                className="w-[80%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
              />
              <p className="text-[18px] text-[#000000]">*</p>
            </div>
          </div>

          <div className="w-100 space-y-2">
            <p className="font-semibold text-[16px] text-[#000000]">
              Email Address
            </p>
            <div className="w-100 flex items-center gap-1">
              <input
                type="text"
                className="w-[80%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
              />
              <p className="text-[18px] text-[#000000]">*</p>
            </div>
          </div>

          <div className="w-100 space-y-2">
            <p className="font-semibold text-[16px] text-[#000000]">
              Confirm Email Address
            </p>
            <div className="w-100 flex items-center gap-1">
              <input
                type="text"
                className="w-[80%] border-[1px] border-stone-300 autofill:bg-[#e8f0fe] rounded-md px-2 py-2 outline-none"
              />
              <p className="text-[18px] text-[#000000]">*</p>
            </div>
          </div>
        </section>

        <div
          className="w-100 h-[2px] mb-8"
          style={{ backgroundColor: 'rgb(203, 213, 224)' }}
        />

        <section className="flex flex-col gap-4 mb-8">
          <div className="w-100 flex items-center gap-4">
            <h3 className="text-[25px] text-[#219e98] font-semibold">
              Join our mailing list.
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-[#000000] text-[16px] font-semibold">
              ESGRoadmap Members (All)
            </p>
          </div>
        </section>

        <div
          className="w-100 h-[2px] mb-3"
          style={{ backgroundColor: 'rgb(203, 213, 224)' }}
        />

        <button
          className="w-fit py-2 px-5 rounded-md text-[18px] text-white"
          style={{ background: 'rgb(25, 56, 57)' }}
        >
          Submit And Confirm
        </button>
      </div>
    </div>
  )
}

export default MembershipAccount
