'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  const { handleSubmit, register, reset } = useForm({
    mode: 'onChange',
  });

  const saveData = (input: any) => {
    setData((data) => {
      return [...data, input];
    });
  };

  return (
    <div className="bg-white h-screen px-8 ">
      <form
        onSubmit={handleSubmit(saveData)}
        className="pt-6 pb-8 mb-4 grid grid-cols-2 gap-5"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Activity Date
          </label>
          <input
            {...register('activityDate')}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            placeholder="Activity Date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Code Item
          </label>
          <select
            {...register('codeItem')}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled selected>
              Pilih Kode Item
            </option>
            <option value={'SBUM30'}>SBUM30</option>
            <option value={'YGYA40'}>YGYA40</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Activity Time
          </label>
          <div className="flex flex-row gap-2">
            <input
              {...register('activityTimeStart')}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="time"
              placeholder="Start Time"
            />
            <input
              {...register('activityTimeEnd')}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="time"
              placeholder="End Time"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Part Number
          </label>
          <select
            {...register('partNumber')}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled selected>
              Pilih Part Number
            </option>
            <option value={'RUR147'}>RUR147</option>
            <option value={'RUR148'}>RUR148</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Technician
          </label>
          <select
            {...register('technician')}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled selected>
              Pilih Teknisi
            </option>
            <option value={'Erik Ten Hag'}>Erik Ten Hag</option>
            <option value={'Pep Guardiola'}>Pep Guardiola</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Item Description
          </label>
          <select
            {...register('itemDescription')}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled selected>
              Pilih Item Description
            </option>
            <option value={'Engine Oil'}>Engine Oil</option>
            <option value={'Machine'}>Machine</option>
          </select>
        </div>
        <div className="mb-4">
          <div className="flex flex-row gap-2">
            <button
              className="bg-orange-500 w-32 p-2 rounded-lg hover:bg-orange-500"
              onClick={() =>
                reset({
                  activityDate: null,
                  codeItem: null,
                  activityTimeStart: null,
                  activityTimeEnd: null,
                  partNumber: null,
                  technician: null,
                  itemDescription: null,
                })
              }
              type="button"
            >
              Reset
            </button>
            <button
              className="bg-blue-700  w-32  p-2 rounded-lg  hover:bg-blue-600"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Activity Date
              </th>
              <th scope="col" className="px-6 py-3">
                Activity Time
              </th>
              <th scope="col" className="px-6 py-3">
                Technician
              </th>
              <th scope="col" className="px-6 py-3">
                Code Item
              </th>
              <th scope="col" className="px-6 py-3">
                Item Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="bg-white border-b" key={index}>
                <td className="px-6 py-4">{item?.activityDate}</td>
                <td className="px-6 py-4">
                  {item?.activityTimeStart} - {item?.activityTimeEnd}
                </td>
                <td className="px-6 py-4">{item?.technician}</td>
                <td className="px-6 py-4">{item?.codeItem}</td>
                <td className="px-6 py-4">{item?.itemDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
