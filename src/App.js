
// import { useGetNasaQuery, useLazyGetNasaRandomQuery } from './redux';

// function App() {
//   const { data, isLoading, isError } = useGetNasaQuery();
//   console.log({ data })
//   const [fetchNasa, { isLoading: isNasaLoading, data: nasa }] = useLazyGetNasaRandomQuery();
//   console.log({ nasa })


//   const randomDate = async (start, end, dateFormat) => {

//     const myDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//     dateFormat = myDate.toLocaleDateString('en-ca');
//     fetchNasa(dateFormat)
//     console.log(dateFormat)
//   }
//   { isError && <p>Something went wrong...</p> }
//   if (isLoading) return <h1 className='p-5 text-4xl'>Loading...</h1>
//   if (isNasaLoading) return <h3 className='p-5 text-4xl'>Loading...</h3>

//   return (
//     <div className="bg-slate-200 h-ful">
//       <div className='container mx-auto p-5'>
//         <h1 className='text-center text-5xl font-bold text-gray-700 pb-10'>{nasa ? nasa.title : data.title}</h1>
//         <div className='flex flex-wrap justify-between items-center gap-5 lg:flex-nowrap'>
//           <img className='md:w-2/4 object-cover mx-auto rounded-md' src={nasa ? nasa.hdurl : data.hdurl} alt='img' />
//           <div className='text-lg leading-8'>{nasa ? nasa.explanation : data.explanation}</div>
//         </div>

//         <div className='text-center text-3xl font-bold text-gray-700 p-10'>{nasa ? nasa.date : data.date}</div>
//         <div className='flex justify-center items-center pb-5'>
//           <button className='border-2 border-grey-900 rounded-md pt-2 pb-2 pl-8 pr-8 text-2xl text-white bg-slate-500 hover:bg-blue-400 ' onClick={() => randomDate(new Date(2000, 0, 1), new Date())}>Get Date</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import { useGetNasaQuery, useLazyGetNasaRandomQuery } from './redux';

function App() {
  const { data, isLoading, isError } = useGetNasaQuery();

  const [fetchNasa, { isLoading: isNasaLoading, data: nasa }] =
    useLazyGetNasaRandomQuery();

  const [selectedDate, setSelectedDate] = useState('');

  const handleFetch = () => {
    if (!selectedDate) return;
    fetchNasa(selectedDate);
  };

  if (isLoading) return <h1 className='p-5 text-4xl'>Loading...</h1>;
  if (isNasaLoading) return <h3 className='p-5 text-4xl'>Loading...</h3>;
  if (isError) return <p>Something went wrong...</p>;

  const currentData = nasa || data;

  return (
    <div className="bg-slate-200 h-full">
      <div className='container mx-auto p-5'>
        <h1 className='text-center text-5xl font-bold text-gray-700 pb-10'>
          {currentData.title}
        </h1>

        <div className='flex flex-wrap justify-between items-center gap-5 lg:flex-nowrap'>
          <img
            className='md:w-2/4 object-cover mx-auto rounded-md'
            src={currentData.hdurl}
            alt='img'
          />
          <div className='text-lg leading-8'>
            {currentData.explanation}
          </div>
        </div>

        <div className='text-center text-3xl font-bold text-gray-700 p-10'>
          {selectedDate || currentData.date}
        </div>

        <div className='flex flex-col items-center gap-4 pb-5'>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className='border-2 border-gray-400 rounded-md p-2 text-lg'
          />

          <button
            className='border-2 border-grey-900 rounded-md pt-2 pb-2 pl-8 pr-8 text-2xl text-white bg-slate-500 hover:bg-blue-400'
            onClick={handleFetch}
          >
            Get by Date
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;