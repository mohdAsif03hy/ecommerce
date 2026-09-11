import React from 'react'

const Badge = ({ status }) => {

    const statusStyles = {
        pending: 'bg-yellow-100 text-yellow-700',
        processing: 'bg-blue-100 text-blue-700',
        shipped: 'bg-indigo-100 text-indigo-700',
        delivered: 'bg-green-100 text-green-700',
        completed: 'bg-green-100 text-green-700',
        cancelled: 'bg-red-100 text-red-700',
        failed: 'bg-red-100 text-red-700',
        paid: 'bg-emerald-100 text-emerald-700',
        unpaid: 'bg-orange-100 text-orange-700',
        refunded: 'bg-purple-100 text-purple-700',
        returned: 'bg-purple-100 text-purple-700',
        confirmed: 'bg-cyan-100 text-cyan-700',
        packed: 'bg-violet-100 text-violet-700',
        out_for_delivery: 'bg-teal-100 text-teal-700',
    }
    const badgeStyle =
        statusStyles[status?.toLowerCase()] ||
        'bg-gray-100 text-gray-600'

    return (
        <span
            className={`
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-full
                px-3
                py-1.5
                text-[12px]
                font-semibold
                capitalize
                ${badgeStyle}
            `}
        >
            {status?.replaceAll('_', ' ')}
        </span>
    )
}

export default Badge