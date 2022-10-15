import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus tortor, interdum at auctor id, blandit et libero. Etiam ultrices orci laoreet ex malesuada, nec finibus nibh semper. Mauris in eros sodales, laoreet est in, auctor risus. Nulla imperdiet quam sed augue vulputate, ut interdum magna convallis. Duis bibendum magna ligula, et mattis lacus convallis in. Nam fermentum hendrerit ex ac convallis. Proin sodales pellentesque erat a gravida. In pellentesque eros vel vehicula imperdiet.
            </p>
            <br></br>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias architecto dolorum nulla repellat suscipit consequuntur reprehenderit mollitia nisi et ab ea sapiente earum provident, saepe aliquid, recusandae exercitationem doloremque quae corrupti modi. Dignissimos iure temporibus similique quis necessitatibus beatae quas maxime nisi voluptatibus quidem quo, neque voluptate, voluptatum totam magnam.
            </p>
        </div>
    </div>
  )
}

export default About