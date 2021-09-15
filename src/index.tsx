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
          styles = `.${block('line')}, .${block('parallel-visible-line')} {transform: translateX(${progress}%)}`,
          fullFilled = progress === 100,
          blockClasses = blockClassesConcat(block(), {duration, fullFilled}, className)

    return (<div className={blockClasses} >
        <style>{styles}</style>

        <div className={block('wrapper')}>
            {progressLineWrapperContent}
            <div className={block('line')}  >
                {lineContent}
            </div>
        </div>

        {
            parallelLineContent
            ? <div className={block('parallel-visible-line')}>
                {parallelLineContent}
              </div>
            : null
        }




    </div>)
}