import React from 'react'
data=['5+year exp','TrINED ','EXPERIENCED ','ENJOY ']
const  Box = () => {
  return (
  <div className="text-center p-4 m-4 
  bg-transparent 
  backdrop-blur-lg 
  border border-white/30
  rounded-2xl 
  font-semibold text-[26px] 
">
  [{data.join(', ')}]
</div>
  )
}

export default Box;