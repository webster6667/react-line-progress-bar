let durationTypes: 'ltr' | 'rtl'


export type ProgressBarComponent = (props:{
    progress?: number,
    duration?: typeof durationTypes,
    className?: string,
    lineContent?: any,
    parallelLineContent?: any,
    progressLineWrapperContent?: any,
    id?: any
}) => any
