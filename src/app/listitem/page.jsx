import React from 'react'

export default function page() {
  return (
    <div className='mx-4 mt-4'>
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
  <table className="w-full min-w-[500px] text-left text-sm">
    
    {/* <!-- Table Header --> */}
    <thead className="border-b border-gray-200 bg-gray-50">
      <tr>
        <th className="px-6 py-4 font-semibold text-gray-700">
          Product Name
        </th>

        <th className="px-6 py-4 font-semibold text-gray-700">
          Price
        </th>

        <th className="px-6 py-4 font-semibold text-gray-700">
          In Stock
        </th>
      </tr>
    </thead>

    {/* <!-- Table Body --> */}
    <tbody className="divide-y divide-gray-100">
      
      <tr className="transition hover:bg-gray-50">
        <td className="px-6 py-4 font-medium text-gray-900">
          classNameic Watch
        </td>

        <td className="px-6 py-4 text-gray-600">
          ₹2,499
        </td>

        <td className="px-6 py-4">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            In Stock
          </span>
        </td>
      </tr>

      <tr className="transition hover:bg-gray-50">
        <td className="px-6 py-4 font-medium text-gray-900">
          Smart Watch Pro
        </td>

        <td className="px-6 py-4 text-gray-600">
          ₹4,999
        </td>

        <td className="px-6 py-4">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            In Stock
          </span>
        </td>
      </tr>

      <tr className="transition hover:bg-gray-50">
        <td className="px-6 py-4 font-medium text-gray-900">
          Leather Wall Clock
        </td>

        <td className="px-6 py-4 text-gray-600">
          ₹1,899
        </td>

        <td className="px-6 py-4">
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            Out of Stock
          </span>
        </td>
      </tr>

    </tbody>
  </table>
</div>
    </div>
  )
}
