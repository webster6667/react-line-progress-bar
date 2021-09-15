<p align="center" style="text-align:center">
    <img src="./illustration.svg" alt="illustration" width="100"/>
</p>

# react-line-progress-bar

> UI component react-line-progress-bar

[![npm version](https://badge.fury.io/js/react-line-progress-bar.svg)](https://www.npmjs.com/package/react-line-progress-bar)



### Install

```shell
npm i react-line-progress-bar
```

### Initialization

```typescript jsx
import React, {useState} from 'react'
import { ProgressBar } from 'react-line-progress-bar';


export default function Index() {
    const [progress, setProgress] = useState(10),
            mouseEnterHandler = () => setProgress(100),
            mouseLeaveHandler = () => setProgress(10),
            contentInsideVisibleLine = <div className={'outside'} >outside parallel line</div>,
            contentInsideProgressLine = <div className={'inside'} >inside progress line</div>,
            duration = 'ltr',
            styles = `
                .inside {text-align: right;}
                
                .progress-bar__parallel-visible-line {pointer-events: none;}
                
                .progress-bar__wrapper {text-align: center;}
                
                .progress-bar__line, .progress-bar__parallel-visible-line {transition: transform 0.5s 0s ease;}
                
                .progress-bar_full-filled {color: green;}
            `
    
    
        return (<div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
            <style>{styles}</style>
            <ProgressBar progress={progress} parallelLineContent={contentInsideVisibleLine} lineContent={contentInsideProgressLine} duration={duration} progressLineWrapperContent={'hover-me'} />
        </div>)
}

```

## Author

webster6667
