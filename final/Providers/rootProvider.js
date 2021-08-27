// 특별한 기능보다는 그냥 거쳐가는 아이

import React from 'react'

const RootProvider = ({children}) => {
    return(
        <>
            <ThemeLayout>
                {children}
            </ThemeLayout>

        </>
    )
}

export default RootProvider