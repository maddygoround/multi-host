import Image from 'next/image'
import React from 'react'
const Logo = () => {
  return (
    <div>
      <Image src="/im-logo.svg" width={160} height={60} />
    </div>
  );
}

export default Logo