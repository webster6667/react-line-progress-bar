import React from 'react'
import {bemClassName, blockClassesConcat} from 'bem-components-connector'

import './style.scss'

import {ProgressBarComponent} from "./types"


export const ProgressBar:ProgressBarComponent = ({
                                                     className,
                                                     progress = 0,
                                                     duration = 'ltr',
                                                     lineContent = null,
                                                     parallelLineContent = null,
                                                     progressLineWrapperContent = null
}) => {

    const block = bemClassName('progress-bar'),
          style = {transform: `translateX(${progress}%)`, ['-ms-transform']: `translateX(${progress}%)`},
          fullFilled = progress === 100,
          blockClasses = blockClassesConcat(block(), {duration, fullFilled}, className)

    return (<div className={blockClasses} >

        <div className={block('wrapper')} >
            {progressLineWrapperContent}
            <div className={block('line')} style={style} >
                {lineContent}
            </div>
        </div>

        {
            parallelLineContent
            ? <div className={block('parallel-visible-line')} style={style} >
                {parallelLineContent}
              </div>
            : null
        }




    </div>)
}