import React from 'react'

type Props = {}

const Headline = (props: Props) => {
  return (
    <article className='w-full min-h-[40rem] rounded-lg bg-white relative after:top-0 after:right-0 after:absolute angled_shape after:shadow-md after:bg-brand after:rounded-bl-xl after:p-4 after:w-20 after:h-20'>
        <div className='p-10'></div>
        <img src="https://framerusercontent.com/images/zhcyPyDkiTo8t6odUKaIG9MAQo.jpg?scale-down-to=2048" alt="" className='object-cover p-4 transition md:p-8 w-full max-h-[40rem]' />
    </article>
  )
}

export default Headline