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
                                                     progressLineWrapperContent = null,
                                                     maxProgress = 100
}) => {

    const block = bemClassName('progress-bar'),
          progressPercent = progress / maxProgress * 100,
          style = {transform: `translateX(${progressPercent}%)`, ['-ms-transform']: `translateX(${progressPercent}%)`},
          fullFilled = progress === maxProgress,
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